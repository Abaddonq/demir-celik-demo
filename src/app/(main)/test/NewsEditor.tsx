"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { upload } from "@vercel/blob/client";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import {CoverImageUploader} from "@/components/tiptap-ui/form/CoverImageUploader";
import {NewsInfoForm} from "@/components/tiptap-ui/form/NewsInfoForm";
import {EditorTips} from "@/components/tiptap-ui/form/EditorTips";

// TipTap editörünü dinamik olarak yükle
const SimpleEditor = dynamic(
  () => import("@/components/tiptap-templates/simple/simple-editor"),
  {
    ssr: false,
    loading: () => (
      <div className="text-center py-10">Editör yükleniyor...</div>
    ),
  }
);

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const router = useRouter();

  const [content, setContent] = useState<string>("");
  const editorRef = useRef<{ getContent: () => string }>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newsId, setNewsId] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  function extractImageUrlsFromHtml(htmlContent: string): string[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const imgElements = doc.querySelectorAll("img");
  const imageUrls: string[] = [];
  imgElements.forEach((img) => {
    if (img.src) {
      imageUrls.push(img.src);
    }
  });
  return imageUrls;
}

function compareImageUrls(oldUrls: string[], newUrls: string[]) {
  const added = newUrls.filter((url) => !oldUrls.includes(url));
  const removed = oldUrls.filter((url) => !newUrls.includes(url));
  return { added, removed };
}

  // Resim önizleme için bellek temizleme
  useEffect(() => {
    return () => {
      if (previewImage && previewImage.startsWith("blob:")) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  // Düzenleme modunda ise haber verilerini çek
  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      return;
    }

    const fetchNewsData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/news/slug/${slug}`);
        if (!response.ok) throw new Error("Haber getirilemedi");

        const newsData = await response.json();
        setTitle(newsData.title);
        setDescription(newsData.description || "");
        setContent(newsData.content);
        setPreviewImage(newsData.cover_image || null);
        setNewsId(newsData.id);
        setIsEditing(true);
      } catch (error) {
        console.error("Haber verisi çekilemedi:", error);
        toast.error("Haber verileri yüklenirken bir hata oluştu");
      } finally {
        setIsLoading(false);
      }
    };

    if (slug && !isEditing) {
      fetchNewsData();
    }
  }, [slug, isEditing]);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      // Önceki blob URL'yi temizle
      if (previewImage && previewImage.startsWith("blob:")) {
        URL.revokeObjectURL(previewImage);
      }

      setCoverImage(file);
      setPreviewImage(URL.createObjectURL(file));
    },
    [previewImage]
  );

  const handleUploadCoverImage = async () => {
    if (!coverImage) return null;

    try {
      const { url } = await upload(coverImage.name, coverImage, {
        access: "public",
        handleUploadUrl: "/api/upload/avatar",
      });

      return url;
    } catch (error) {
      console.error("Kapak fotoğrafı yüklenemedi:", error);
      toast.error("Kapak fotoğrafı yüklenirken hata oluştu");
      return null;
    }
  };

  const handleSave = async () => {
    const editorContent = editorRef.current?.getContent() || "";

    if (!title.trim() || !editorContent.trim()) {
      toast.error("Başlık ve içerik zorunlu alanlardır");
      return;
    }

    setIsLoading(true);

    try {
      let coverImageUrl = null;
      if (coverImage) {
        coverImageUrl = await handleUploadCoverImage();
        if (!coverImageUrl) {
          setIsLoading(false);
          return;
        }
      } else if (previewImage && !coverImage) {
        coverImageUrl = previewImage;
      }

      // Haber içeriğindeki görselleri HTML'den çek
      const contentImageUrls = extractImageUrlsFromHtml(editorContent);

      let oldImageUrls: string[] = [];
      if (isEditing && newsId) {
        const imagesResponse = await fetch(`/api/news/${newsId}/images`);
        if (imagesResponse.ok) {
          const imagesData = await imagesResponse.json();
          oldImageUrls = imagesData.map((img: any) => img.image_url);
        }
      }

      const newSlug = title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");

      if (isEditing && newsId) {
        // DÜZENLEME MODU: PUT isteği ile güncelle
        const response = await fetch(`/api/news/${newsId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description: description || editorContent.substring(0, 160),
            content: editorContent,
            cover_image: coverImageUrl,
            slug: newSlug,
            author_id: 1,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.details || errorData.error || "Haber güncellenemedi"
          );
        }

        // İçerik görsellerini güncelle
        if (oldImageUrls.length > 0 || contentImageUrls.length > 0) {
          const { added, removed } = compareImageUrls(
            oldImageUrls,
            contentImageUrls
          );

          if (added.length > 0 || removed.length > 0) {
            await fetch(`/api/news/${newsId}/images`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ images: contentImageUrls }),
            });
          }
        }

        toast.success("Haber başarıyla güncellendi!");
        router.push(`/duyurular-ve-haberler/${newSlug}`);
      } else {
        // YENİ HABER MODU: POST isteği ile oluştur
        const response = await fetch("/api/news", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description: description || editorContent.substring(0, 160),
            content: editorContent,
            cover_image: coverImageUrl,
            slug: newSlug,
            author_id: 1,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.details || errorData.error || "Haber kaydedilemedi"
          );
        }

        const newsData = await response.json();
        const newNewsId = newsData.id;

        // İçerik görsellerini kaydet
        if (contentImageUrls.length > 0) {
          await fetch(`/api/news/${newNewsId}/images`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ images: contentImageUrls }),
          });
        }

        toast.success("Haber başarıyla oluşturuldu!");
        router.push(`/duyurular-ve-haberler/${newSlug}`);
      }
    } catch (error: any) {
      console.error("İşlem hatası:", error);
      toast.error(error.message || "İşlem sırasında hata oluştu");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                {isEditing ? "Haberi Düzenle" : "Haber Oluştur"}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors duration-200"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {isEditing ? "Güncelleniyor..." : "Kaydediliyor..."}
                  </>
                ) : isEditing ? (
                  "Güncelle"
                ) : (
                  "Haberi Yayınla"
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isEditing && isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sol Sütun - Haber Bilgileri */}
            <div className="lg:col-span-1 space-y-6">
              <CoverImageUploader
                previewImage={previewImage}
                handleImageChange={handleImageChange}
                fileInputRef={fileInputRef}
                setCoverImage={setCoverImage}
                setPreviewImage={setPreviewImage}
              />

              <NewsInfoForm
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
              />
            </div>

            {/* Sağ Sütun - Editör */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border">
                {/* Editor Header */}
                <div className="border-b bg-gray-50 px-6 py-4 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      Haber İçeriği
                    </h2>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        Kaydediliyor
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editor Container */}
                <div className="p-6">
                  <SimpleEditor
                    key={newsId || "new-editor"}
                    onChange={setContent}
                    ref={editorRef}
                    initialContent={content}
                  />
                </div>
              </div>

              <EditorTips />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
