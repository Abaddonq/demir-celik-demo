'use client'

import Link from 'next/link'

export default function HistoryCard() {
  return (
    <div className="bg-[#eaf6fd] rounded-2xl p-6 text-center max-w-sm shadow-md transition-all duration-300 hover:bg-[#d0e8f7] hover:shadow-lg">
      <div className="flex justify-center mb-4">
        <div className="bg-[#202b85] p-4 rounded-[20%] inline-block transition-all duration-300 group-hover:bg-[#3a4ac1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#fff"
            viewBox="0 0 24 24"
          >
            <path d="M7 2a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h3V2H7Zm4 0v20h6a2 2 0 0 0 2-2V2h-8Z" />
          </svg>
        </div>
      </div>

      <h2 className="text-xl font-bold text-[#202b85] mb-2 transition-all duration-300 group-hover:text-[#3a4ac1]">
        Tarihçe
      </h2>

      <p className="text-gray-600 text-sm mb-4">
        Karabük Üniversitesi Demir Çelik Enstitüsü Türkiye ve dünyada demir çelik üretimi, enerji,
        çevre ve inşaat alanlarında yeni teknolojilerin geliştirilmesine, ürün kalitesinin
        artırılmasına, yönelik araştırmalar için gerekli bilimsel ortamı sağlamaktadır.
      </p>

      <Link
        href="https://demircelik.karabuk.edu.tr/hakkimizda/"
        className="group flex items-center gap-2 font-bold justify-center transition-all duration-300 text-[#202b85]"
      >
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#202b85] text-white transition-all duration-300 group-hover:bg-orange-500">
          +
        </span>
        <span className="transition-all duration-300 group-hover:text-orange-500">
          Daha Fazla Bilgi
        </span>
      </Link>
    </div>
  )
}
