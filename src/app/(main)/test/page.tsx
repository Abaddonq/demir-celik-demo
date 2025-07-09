"use client";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { upload } from "@vercel/blob/client";
import Image from "next/image";

export default function Page() {
  const [content, setContent] = useState<string>("");
  const editorRef = useRef<{ getContent: () => string }>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

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
      }

      // Haber içeriğindeki görselleri HTML'den çek
      const contentImageUrls = extractImageUrlsFromHtml(editorContent);
      console.log("Haber içeriğindeki görseller:", contentImageUrls);

      const slug = title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");

      // Önce haber ana bilgilerini kaydet
      const newsResponse = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description: description || editorContent.substring(0, 160),
          content: editorContent,
          cover_image: coverImageUrl,
          slug,
          author_id: 1, // Gerçek kullanıcı ID'si ile değiştir
          // Haber içeriğindeki görselleri burada göndermiyoruz, ayrı bir API çağrısı yapacağız
        }),
      });

      if (!newsResponse.ok) {
        const errorData = await newsResponse.json();
        throw new Error(
          errorData.details || errorData.error || "Haber kaydedilemedi"
        );
      }

      const newsData = await newsResponse.json();
      const newsId = newsData.id; // Kaydedilen haberin ID'sini al

      // İçerik görsellerini newsImages tablosuna kaydet
      if (contentImageUrls.length > 0) {
        // Bu kısım için yeni bir API rotası oluşturacağız: /api/news/[newsId]/images
        const imagesUploadResponse = await fetch(`/api/news/${newsId}/images`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ images: contentImageUrls }), // URL'leri gönder
        });

        if (!imagesUploadResponse.ok) {
          // Görsel kaydetme hatası olursa ne yapılacağını düşünün (örn: ana haberi silme, loglama)
          console.error(
            "Haber görselleri kaydedilirken hata oluştu:",
            await imagesUploadResponse.json()
          );
          toast.error("Haber görselleri kaydedilirken hata oluştu.");
          // Hata olsa bile ana haberin kaydedilmesini isteyebiliriz, bu karara bağlı
        }
      }

      toast.success("Haber başarıyla oluşturuldu!");
      router.push(`/duyurular-ve-haberler/${slug}`);
    } catch (error: any) {
      console.error("Haber oluşturma hatası:", error);
      toast.error(error.message || "Haber oluşturulurken hata oluştu");
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
                Haber Oluştur
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
                    Kaydediliyor...
                  </>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol Sütun - Haber Bilgileri */}
          <div className="lg:col-span-1 space-y-6">
            {/* Kapak Fotoğrafı */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Kapak Fotoğrafı
              </h2>

              <div className="flex flex-col items-center space-y-4">
                {previewImage ? (
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                    <Image
                      src={previewImage}
                      alt="Kapak önizleme"
                      layout="fill"
                      objectFit="cover"
                    />
                    <button
                      onClick={() => {
                        setCoverImage(null);
                        setPreviewImage(null);
                        if (fileInputRef.current)
                          fileInputRef.current.value = "";
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center w-full">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">
                      Kapak fotoğrafı ekleyin
                    </p>
                  </div>
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="cover-upload"
                />
                <label
                  htmlFor="cover-upload"
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {previewImage ? "Fotoğrafı Değiştir" : "Fotoğraf Yükle"}
                </label>
              </div>
            </div>

            {/* Haber Bilgileri */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Haber Bilgileri
              </h2>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Başlık*
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Haber başlığını girin"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Kısa Açıklama
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Haberin kısa açıklamasını girin (160 karakter)"
                    rows={3}
                    maxLength={160}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1 text-right">
                    {description.length}/160 karakter
                  </p>
                </div>
              </div>
            </div>
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
                    <span className="text-sm text-gray-600">Kaydediliyor</span>
                  </div>
                </div>
              </div>

              {/* Editor Container */}
              <div className="p-6">
                <SimpleEditor
                  onChange={setContent}
                  ref={editorRef} // Ref ekle
                />
              </div>
            </div>

            {/* İpucu Bölümü */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-400 mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="text-sm font-medium text-blue-800">
                    İpuçları
                  </h3>
                  <ul className="mt-2 text-sm text-blue-700 list-disc pl-5 space-y-1">
                    <li>Başlık ve içerik zorunlu alanlardır</li>
                    <li>Görselleri sürükleyip bırakarak ekleyebilirsiniz</li>
                    <li>Değişiklikler otomatik olarak kaydedilir</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
