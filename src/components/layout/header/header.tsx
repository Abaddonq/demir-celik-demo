'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { useTheme } from '@/app/context/themeContext';

const navItems = [
  {
    title: 'Anasayfa',
    href: '/',
    subItems: [],
  },
  {
    title: 'Kurumsal',
    subItems: [
      { title: 'Hakkımızda', href: '/kurumsal/hakkimizda' },
      { title: 'Yönetim Kadromuz', href: '/kurumsal/yonetim-kadromuz' },
      { title: 'Akademik Personel', href: '/kurumsal/personel/akademik' },
      { title: 'Teknik Personel', href: '/kurumsal/personel/teknik' },
      { title: 'İdari Personel', href: '/kurumsal/personel/idari' },
      { title: 'Enstitü Yönetim Kurulu', href: '/kurumsal/enstitu-yonetim-kurulu' },
      { title: 'Kalite Komisyonu', href: '/kurumsal/kalite-komisyonu' },
    ],
  },
  {
    title: 'Hizmetler',
    subItems: [
      { title: 'Laboratuvarlar', href: '/hizmetler/laboratuvarlar' },
      { title: 'Raporlamalar', href: '/hizmetler/raporlamalar' },
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
      { title: 'Dergi-NSJ ISI', href: '/nsji' },
      { title: 'Sempozyum-UDCS', href: '/udcs' },
    ],
  },
  {
    title: 'Hızlı Erişim',
    href: '/hizli-erisim',
    subItems: [
      { title: 'Fiyat Listesi', href: '/hizli-erisim/fiyat-listesi' },
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
      { title: 'Yemmer', href: 'https://yemmer.karabuk.edu.tr/index.aspx' },
      { title: 'Margem', href: 'https://margem.karabuk.edu.tr/index.aspx' },
    ],
  },
  {
  title: 'İletişim',
  href: '/iletisim',
  subItems: [],
},
];

const Header = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { theme } = useTheme();

  const {
    fontFamily = 'sans-serif',
    fontSizeBase = '16px',
    primaryColor = '#1e3a8a',
    secondaryColor = '#f97316',
    backgroundColor = '#ffffff'
  } = theme || {};

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
    }, 150);
  };

  return (
    <header style={{ fontFamily, fontSize: fontSizeBase }}>
      <div
        className="text-white text-sm flex justify-between px-4 py-2 items-center"
        style={{ backgroundColor: primaryColor }}
      >
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
          {[{
            href: 'https://www.facebook.com/kbudemircelikenstitusu',
            icon: <FaFacebookF />,
          }, {
            href: 'https://www.instagram.com/demircelikenstitusukbu/#',
            icon: <FaInstagram />,
          }, {
            href: 'https://www.linkedin.com/company/demir-%C3%A7elik-enstit%C3%BCs%C3%BC/',
            icon: <FaLinkedinIn />,
          }].map(({ href, icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition"
              style={{
                backgroundColor: backgroundColor,
                color: primaryColor,
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = secondaryColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = backgroundColor}
            >
              {icon}
            </a>
          ))}
          <input
            type="text"
            placeholder="Arama..."
            className="bg-white text-black px-2 py-1 rounded"
          />
        </div>
      </div>

      <div className="flex items-center justify-between py-4 px-6 shadow-md relative z-50" style={{ backgroundColor }}>
        <div className="flex items-center gap-4">
          <img
            src="/images/enstitulogo.png"
            alt="Demir Çelik Enstitüsü"
            className="h-16 object-contain"
          />
          <div className="text-xl font-bold" style={{ color: primaryColor }}>
            Demir Çelik Enstitüsü
          </div>
        </div>

        <nav className="flex gap-6 font-semibold relative z-50">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="cursor-pointer block py-2"
                  style={{ color: primaryColor }}
                  onMouseEnter={(e) => e.currentTarget.style.color = secondaryColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = primaryColor}
                >
                  {item.title}
                </Link>
              ) : (
                <span
                  className="cursor-pointer block py-2"
                  style={{ color: primaryColor }}
                  onMouseEnter={(e) => e.currentTarget.style.color = secondaryColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = primaryColor}
                >
                  {item.title}
                </span>
              )}
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

        <button
          className="text-white px-4 py-2 rounded-tr-xl font-bold"
          style={{ backgroundColor: secondaryColor }}
        >
          Fiyat Al
        </button>
      </div>
    </header>
  );
};

export default Header;
