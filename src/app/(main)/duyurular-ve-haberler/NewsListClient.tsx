'use client';
import { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import NewsCard from "@/components/NewsCard";
import { NewsItem } from "@/lib/news";
import LoadingSpinner from "@/components/LoadingSpinner"; // Import the LoadingSpinner component

export default function NewsListClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 9;

  const isFetching = useRef(false);
  const initialRender = useRef(true);

  useEffect(() => {
    const pageParam = searchParams.get("page");
    const pageNumber = pageParam ? Math.max(1, parseInt(pageParam)) : 1;
    setCurrentPage(pageNumber);
  }, [searchParams]);

  const fetchNews = useCallback(
    async (page: number) => {
      if (isFetching.current) return;
      isFetching.current = true;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `/api/news/paginated?page=${page}&limit=${limit}`
        );
        if (!response.ok) {
          throw new Error("Haberler getirilirken hata oluştu.");
        }
        const data = await response.json();
        setNewsList(data.news);
        setTotalPages(data.totalPages);
      } catch (err: any) {
        console.error("Haber listesi çekilirken hata:", err);
        setError(err.message || "Haberler yüklenirken bir sorun oluştu.");
        toast.error(err.message || "Haberler yüklenirken bir sorun oluştu.");
      } finally {
        setLoading(false);
        isFetching.current = false;
      }
    },
    [limit]
  );

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      fetchNews(currentPage);
      return;
    }
    fetchNews(currentPage);
    const currentPageParam = searchParams.get("page");
    const currentPageNumber = currentPageParam ? parseInt(currentPageParam) : 1;
    if (currentPageNumber !== currentPage) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", currentPage.toString());
      router.replace(`?${params.toString()}`, { scroll: false });
    }
  }, [currentPage, fetchNews, router, searchParams]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Mobil için görünecek sayfa numaralarını hesapla
  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 3; // Mobilde maksimum görünecek sayfa sayısı

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    // Başlangıç sayfaları
    if (currentPage <= 2) {
      pages.push(1, 2, 3);
      if (totalPages > 3) pages.push('...');
      return pages;
    }

    // Son sayfalar
    if (currentPage >= totalPages - 1) {
      pages.push('...');
      pages.push(totalPages - 2, totalPages - 1, totalPages);
      return pages;
    }

    // Orta kısım
    pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...');
    return pages;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner /> {/* Use the LoadingSpinner component */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-base sm:text-lg text-red-600">Hata: {error}</p>
      </div>
    );
  }

  if (newsList.length === 0 && !loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-base sm:text-lg text-gray-700">Henüz haber bulunmamaktadır.</p>
      </div>
    );
  }

  const visiblePages = getVisiblePages();

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 text-center">
          Duyurular ve Haberler
        </h1>

        {/* Grid sisteminde mobil uyumluluk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {newsList.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Sayfa bilgisi - Mobilde üstte */}
            <div className="text-sm text-gray-700 sm:hidden">
              Sayfa {currentPage} / {totalPages}
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2 w-full sm:w-auto">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[80px] sm:min-w-auto"
              >
                Önceki
              </button>

              <div className="flex flex-1 sm:flex-none justify-center overflow-x-auto">
                <div className="flex space-x-1 sm:space-x-2">
                  {visiblePages.map((page, index) => (
                    typeof page === 'number' ? (
                      <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`min-w-[36px] sm:min-w-[40px] px-2 sm:px-3 py-2 text-sm font-medium rounded-md ${
                          currentPage === page
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
                        } transition-colors`}
                      >
                        {page}
                      </button>
                    ) : (
                      <span
                        key={`ellipsis-${index}`}
                        className="px-2 sm:px-3 py-2 text-gray-500"
                      >
                        {page}
                      </span>
                    )
                  ))}
                </div>
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[80px] sm:min-w-auto"
              >
                Sonraki
              </button>
            </div>

            {/* Sayfa bilgisi - Desktop'ta sağda */}
            <div className="hidden sm:block text-sm text-gray-700">
              Sayfa {currentPage} / {totalPages}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}