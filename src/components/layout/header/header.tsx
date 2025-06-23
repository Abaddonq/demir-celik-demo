// src/components/layout/header/header.tsx
'use client'
import React from 'react'
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      {/* Üst Bar */}
      <div className="bg-[#1a237e] text-white text-sm flex justify-between px-4 py-2 items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1"><FaPhoneAlt className="text-red-500" /> Destek: +90 370 418 6001</span>
          <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-red-500" /> Adres: Karabük Üniversitesi Demir Çelik Enstitüsü</span>
          <span className="flex items-center gap-1"><FaClock className="text-red-500" /> Pazartesi - Cuma 08:30 - 17:30</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <input type="text" placeholder="Arama..." className="bg-white text-black px-2 py-1 rounded" />
        </div>  {/* SEARCH BARI AYIR DİNAMİK YAP!!!!! */}
      </div>

      {/* Ana Menü */}
      <div className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-20" />
          <div className="text-xl font-bold text-[#1a237e]">Demir Çelik Enstitüsü</div>
        </div>

        <nav className="flex gap-6 text-[#1a237e] font-semibold">
          <a href="#">Anasayfa</a>
          <a href="#">Kurumsal</a>
          <a href="#">Hizmetler</a>
          <a href="#">Duyurular&Haberler</a>
          <a href="#">Akademik</a>
          <a href="#">Hızlı Erişim</a>
          <a href="#">Araştırma Merkezleri</a>
          <a href="#">İletişim</a>
        </nav>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-tr-xl font-bold">Fiyat Al</button>
      </div>
    </header>
  )
}

export default Header

