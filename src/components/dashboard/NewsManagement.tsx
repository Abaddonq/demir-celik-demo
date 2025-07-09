// components/NewsManagementPanel.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useTheme } from '@/app/context/themeContext'; // Tema hook'unuzun yolu
import { NewsItem } from '@/lib/news'; // Haber öğesi tipi


interface NewsManagementPanelProps {
  initialNewsList: NewsItem[]; // Başlangıçta gelen haber listesi (opsiyonel, client-side fetch de yapılabilir)
  initialTotalCount: number;
  limit: number; // Sayfa başına gösterilecek haber sayısı
}

export default function NewsManagementPanel({
  initialNewsList,
  initialTotalCount,
  limit,
}: NewsManagementPanelProps) {
  const { theme } = useTheme(); // theme objesi Theme arayüzüne göre tip alacak
  const router = useRouter(); // router zaten kullanılıyor (router.push)

  const [newsList, setNewsList] = useState<NewsItem[]>(initialNewsList);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(initialTotalCount / limit));
  const [totalItems, setTotalItems] = useState(initialTotalCount); // totalItems JSX içinde kullanılıyor

  // Haberleri çekme fonksiyonu (arama terimi ve sayfalama ile)
  const fetchNews = useCallback(async (page: number, term: string) => {
    setLoading(true);
    setError(null);
    try {
      const query = new URLSearchParams();
      query.set('page', page.toString());
      query.set('limit', limit.toString());
      if (term) {
        query.set('search', term); // Arama terimini ekle
      }

      const response = await fetch(`/api/news/paginated?${query.toString()}`);
      
      if (!response.ok) {
        throw new Error('Haberler getirilirken hata oluştu.');
      }
      const data = await response.json();
      setNewsList(data.news);
      setTotalPages(data.totalPages);
      setTotalItems(data.totalCount);
      setCurrentPage(data.currentPage);
    } catch (err: unknown) {
      let errorMessage = 'Haberler yüklenirken bir sorun oluştu.';
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      }
      console.error('Haber listesi çekilirken hata:', err);
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  // Arama terimi veya sayfa değiştiğinde haberleri yeniden çek
  useEffect(() => {
    fetchNews(currentPage, searchTerm);
  }, [currentPage, searchTerm, fetchNews]);

  // Sayfalama kontrolleri
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Arama çubuğunda değişiklik olduğunda
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Arama yapıldığında her zaman ilk sayfaya dön
  };

  // Haber silme işlemi
  const handleDeleteNews = async (id: number) => {
    const isConfirmed = window.confirm('Bu haberi silmek istediğinizden emin misiniz?');
    if (!isConfirmed) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/news/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Haber silinirken hata oluştu.');
      }
      toast.success('Haber başarıyla silindi.');
      // Silme sonrası listeyi yeniden çek
      fetchNews(currentPage, searchTerm);
    } catch (err: unknown) {
      let errorMessage = 'Haber silinirken bir sorun oluştu.';
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      }
      console.error('Haber silinirken hata:', err);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Sayfa numaralarını oluştur
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6" style={{ fontFamily: theme.fontFamily }}>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900" style={{ color: theme.primaryColor }}>
          Haber Yönetimi
        </h2>
        <Link href="/test" passHref> {/* Haber ekleme sayfanızın yolu */}
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white transition-colors duration-200
            bg-blue-600 hover:bg-blue-700"
            style={{
              backgroundColor: theme.primaryColor, // primaryColor kullanıldı
            }}
          >
            <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Haber Ekle
          </button>
        </Link>
      </div>

      {/* Arama Çubuğu */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Haber ara..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          style={{ borderColor: theme.primaryColor + '33' }} // primaryColor'ın daha açık tonu kullanıldı
        />
      </div>

      {/* Haber Listesi */}
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2" style={{ borderColor: theme.primaryColor }}></div>
        </div>
      ) : error ? (
        <div className="text-center py-8 text-red-600">Hata: {error}</div>
      ) : newsList.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center" style={{ backgroundColor: theme.mode ? '#333333' : '#f9fafb' }}> {/* Mode'a göre default renk */}
          <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2zM9 10V4m0 0a2 2 0 110 4m0-4a2 2 0 100 4m7 6H9m4 0h-4" />
          </svg>
          <p className="mt-4 text-gray-500">Henüz haber bulunmamaktadır.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200" style={{ borderColor: theme.primaryColor + '33' }}>
            <thead style={{ backgroundColor: theme.primaryColor + '10' }}>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ color: theme.primaryColor }}>Başlık</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ color: theme.primaryColor }}>Açıklama</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ color: theme.primaryColor }}>Yayın Tarihi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ color: theme.primaryColor }}>İşlemler</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200" style={{ backgroundColor: theme.mode ? '#ffffff' : '#ffffff', borderColor: theme.primaryColor + '33' }}>
              {newsList.map((newsItem) => (
                <tr key={newsItem.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900" style={{ color: theme.mode ? '#e0e0e0' : '#1f2937' }}>{newsItem.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ color: theme.mode ? '#bdbdbd' : '#6b7280' }}>
                    {truncateDescription(newsItem.description || newsItem.content, 100)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ color: theme.mode ? '#bdbdbd' : '#6b7280' }}>
                    {new Date(newsItem.created_at).toLocaleDateString("tr-TR")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <Link href={`/duyurular-ve-haberler/${newsItem.slug}/edit`} passHref>
                        <button className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors">
                          Düzenle
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeleteNews(newsItem.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Sayfalama Kontrolleri */}
      {totalPages > 1 && (
        <nav className="flex justify-center items-center space-x-2 mt-6" aria-label="Pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1 || loading}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            style={{
              backgroundColor: theme.mode ? '#424242' : '#ffffff', // Mode'a göre default renk
              color: theme.mode ? '#e0e0e0' : theme.primaryColor, // Mode'a göre default renk veya primaryColor
              borderColor: theme.primaryColor + '33',
            }}
          >
            Önceki
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageClick(number)}
              disabled={loading}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                currentPage === number
                  ? 'text-white'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-100'
              } transition-colors`}
              style={{
                backgroundColor: currentPage === number ? (theme.primaryColor) : (theme.mode ? '#424242' : '#ffffff'), // Mode'a göre default renk veya primaryColor
                color: currentPage === number ? (theme.mode ? '#ffffff' : '#ffffff') : (theme.mode ? '#e0e0e0' : theme.primaryColor), // Mode'a göre default renk veya primaryColor
                borderColor: theme.primaryColor + '33',
              }}
            >
              {number}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages || loading}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            style={{
              backgroundColor: theme.mode ? '#424242' : '#ffffff', // Mode'a göre default renk
              color: theme.mode ? '#e0e0e0' : theme.primaryColor, // Mode'a göre default renk veya primaryColor
              borderColor: theme.primaryColor + '33',
            }}
          >
            Sonraki
          </button>
        </nav>
      )}
      {/* Display total items to resolve unused var warning */}
      <div className="text-center text-sm text-gray-500 mt-4" style={{ color: theme.mode ? '#bdbdbd' : '#6b7280' }}> {/* Mode'a göre default renk */}
        Toplam Haber: {totalItems}
      </div>
    </div>
  );
}

// Helper function for truncating description
const truncateDescription = (text: string | null, maxLength: number) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};