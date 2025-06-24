'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

// Menü verisi
const navItems = [
  {
    title: 'Anasayfa',
    subItems: [
      { title: 'Genel Bakış', href: '/' },
      { title: 'Duyurular', href: '/duyurular' },
    ],
  },
  {
    title: 'Kurumsal',
    subItems: [
      { title: 'Hakkımızda', href: '/kurumsal/hakkimizda' },
      { title: 'Misyon-Vizyon', href: '/kurumsal/misyon-vizyon' },
    ],
  },
  {
    title: 'Hizmetler',
    subItems: [
      { title: 'Laboratuvarlar', href: '/hizmetler/laboratuvarlar' },
      { title: 'Testler', href: '/hizmetler/testler' },
    ],
  },
  {
    title: 'Duyurular&Haberler',
    subItems: [
      { title: 'Etkinlikler', href: '/haberler/etkinlikler' },
      { title: 'Basında Biz', href: '/haberler/basinda-biz' },
    ],
  },
  {
    title: 'Akademik',
    subItems: [
      { title: 'Yayınlar', href: '/akademik/yayinlar' },
      { title: 'Projeler', href: '/akademik/projeler' },
    ],
  },
  {
     title: 'Hızlı Erişim',
    subItems: [
      { title: 'Hızlı Erişim ', href: '/hizli-erisim' }, // app/hizli-erisim/page.tsx
      { title: 'Fiyat Listesi', href: '/hizli-erisim/fiyat-listesi' }, // app/hizli-erisim/fiyat-listesi/page.tsx
      { title: 'Hizmet İşleyiş Süreci', href: '/hizli-erisim/hizmet-isleyis-sureci' },
      { title: 'İç Kontrol', href: '/hizli-erisim/ic-kontrol' },
      { title: 'Kalite Belgeleri', href: '/hizli-erisim/kalite-belgeleri' },
      { title: 'Numune Kabul Kriterleri', href: '/hizli-erisim/numune-kabul-kriterleri' },
      { title: 'Sem-Randevu', href: '/hizli-erisim/sem-randevu' },
    ],
  },
  {
    title: 'Araştırma Merkezleri',
    subItems: [
      { title: 'Merkez 1', href: '/arastirma-merkezleri/merkez-1' },
      { title: 'Merkez 2', href: '/arastirma-merkezleri/merkez-2' },
    ],
  },
  {
    title: 'İletişim',
    subItems: [
      { title: 'İletişim Bilgileri', href: '/iletisim' },
      { title: 'Ulaşım', href: '/iletisim/ulasim' },
    ],
  },
]


const Header = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenIndex(index)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenIndex(null)
    }, 150) // 150ms gecikme
  }

  return (
    <header>
      {/* Üst Bar */}
      <div className="bg-[#1a237e] text-white text-sm flex justify-between px-4 py-2 items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1">
            <FaPhoneAlt className="text-red-500" /> Destek: +90 370 418 6001
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-red-500" /> Karabük Üniversitesi Demir Çelik Enstitüsü
          </span>
          <span className="flex items-center gap-1">
            <FaClock className="text-red-500" /> Pazartesi - Cuma 08:30 - 17:30
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <input
            type="text"
            placeholder="Arama..."
            className="bg-white text-black px-2 py-1 rounded"
          />
        </div>
      </div>

      {/* Ana Menü */}
      <div className="flex items-center justify-between py-4 px-6 bg-white shadow-md relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-20" />
          <div className="text-xl font-bold text-[#1a237e]">Demir Çelik Enstitüsü</div>
        </div>

        {/* Menü */}
        <nav className="flex gap-6 text-[#1a237e] font-semibold relative z-50">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer hover:text-orange-600 block py-2">
                {item.title}
              </span>

              {openIndex === index && (
                <div className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md w-60 z-50">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Fiyat Al Butonu */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-tr-xl font-bold">
          Fiyat Al
        </button>
      </div>
    </header>
  )
}

export default Header
