'use client';
import { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import NewsCard from "@/components/NewsCard"; 
import { NewsItem } from "@/lib/news"; 

export default function NewsListClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-700">Haberler yükleniyor...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-red-600">Hata: {error}</p>
      </div>
    );
  }

  if (newsList.length === 0 && !loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-700">Henüz haber bulunmamaktadır.</p>
      </div>
    );
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Duyurular ve Haberler
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsList.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>
        {totalPages > 1 && (
          <nav
            className="flex justify-center items-center space-x-2"
            aria-label="Pagination"
          >
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Önceki
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handlePageClick(number)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  currentPage === number
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
                } transition-colors`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Sonraki
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}