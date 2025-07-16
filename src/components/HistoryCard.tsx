'use client'
import Link from 'next/link'
import { useTheme } from '@/app/context/themeContext'

export default function HistoryCard() {
  const { theme } = useTheme()

  return (
   
   <section className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-10">
    <div 
      className="rounded-2xl p-6 text-center max-w-sm shadow-md transition-all duration-300 hover:shadow-lg group"
      style={{ 
        backgroundColor: theme.cardBackground || '#eaf6fd',
        fontFamily: theme.fontFamily
      }}
    >
      <div className="flex justify-center mb-4">
        <div 
          className="p-4 rounded-[20%] inline-block transition-all duration-300 group-hover:scale-110"
          style={{ 
            backgroundColor: theme.primaryColor || '#202b85',
            color: theme.cardTextColor || '#ffffff'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 2a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h3V2H7Zm4 0v20h6a2 2 0 0 0 2-2V2h-8Z" />
          </svg>
        </div>
      </div>

      <h2 
        className="text-xl font-bold mb-2 transition-all duration-300 group-hover:scale-105"
        style={{ color: theme.primaryColor || '#202b85' }}
      >
        Tarihçe
      </h2>

      <p 
        className="text-sm mb-4 transition-all duration-300"
        style={{ color: theme.textColor || '#666666' }}
      >
        Karabük Üniversitesi Demir Çelik Enstitüsü Türkiye ve dünyada demir çelik üretimi, enerji,
        çevre ve inşaat alanlarında yeni teknolojilerin geliştirilmesine, ürün kalitesinin
        artırılmasına, yönelik araştırmalar için gerekli bilimsel ortamı sağlamaktadır.
      </p>

      <Link
        href="https://demircelik.karabuk.edu.tr/hakkimizda/"
        className="group flex items-center gap-2 font-bold justify-center transition-all duration-300"
        style={{ color: theme.primaryColor || '#202b85' }}
      >
        <span 
          className="w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300"
          style={{ 
            backgroundColor: theme.primaryColor || '#202b85',
            color: theme.cardTextColor || '#ffffff'
          }}
        >
          +
        </span>
        <span 
          className="transition-all duration-300 group-hover:text-orange-500"
          style={{ color: theme.primaryColor || '#202b85' }}
        >
          Daha Fazla Bilgi
        </span>
      </Link>

      <style jsx>{`
        .group:hover {
          background-color: ${theme.secondaryColor || '#ff7f50'} !important;
        }
      `}</style>
    </div>
    </section>
  )
}