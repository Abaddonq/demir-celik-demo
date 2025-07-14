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
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
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
    href: '/duyurular-ve-haberler',
    subItems: [
      { title: 'Etkinlikler', href: '/haberler/etkinlikler' },
      { title: 'Basında Biz', href: '/haberler/basinda-biz' },
    ],
  },
  {
    title: 'Akademik',
    subItems: [
      { title: 'Dergi-NSJ ISI', href: '/akademik/nsji' },
      { title: 'Sempozyum-UDCS', href: '/akademik/udcs' },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubMenuOpen(null);
  };

  const toggleMobileSubMenu = (index: number) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
  };

  return (
    <header style={{ fontFamily, fontSize: fontSizeBase }}>
      {/* Top Bar - Desktop only */}
      <div
        className="hidden lg:flex text-white text-sm justify-between px-4 py-2 items-center"
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

      {/* Main Header */}
      <div className="flex items-center justify-between py-2 lg:py-4 px-4 lg:px-6 shadow-md relative z-50" style={{ backgroundColor }}>
        {/* Logo and Title */}
        <div className="flex items-center gap-2 lg:gap-4">
          <img
            src="/images/enstitulogo.png"
            alt="Demir Çelik Enstitüsü"
            className="h-12 lg:h-16 object-contain"
          />
          <div className="text-sm lg:text-xl font-bold" style={{ color: primaryColor }}>
            <span className="hidden sm:inline">Demir Çelik Enstitüsü</span>
            <span className="sm:hidden">DCE</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 font-semibold relative z-50">
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
                  className="cursor-pointer block py-2 hover:transition-colors"
                  style={{ color: primaryColor }}
                  onMouseEnter={(e) => e.currentTarget.style.color = secondaryColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = primaryColor}
                >
                  {item.title}
                </Link>
              ) : (
                <span
                  className="cursor-pointer block py-2 hover:transition-colors"
                  style={{ color: primaryColor }}
                  onMouseEnter={(e) => e.currentTarget.style.color = secondaryColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = primaryColor}
                >
                  {item.title}
                </span>
              )}
              {openIndex === index && item.subItems.length > 0 && (
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

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-lg"
            style={{ color: primaryColor }}
          >
            <FaSearch />
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg"
            style={{ color: primaryColor }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop CTA Button */}
        <button
          className="hidden lg:block text-white px-4 py-2 rounded-tr-xl font-bold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: secondaryColor }}
        >
          Fiyat Al
        </button>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="lg:hidden px-4 py-2" style={{ backgroundColor }}>
          <input
            type="text"
            placeholder="Arama..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{ borderColor: primaryColor}}
            autoFocus
          />
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(100vh-100vh+theme(spacing.20))] z-40 bg-white shadow-lg">
          <div className="max-h-screen overflow-y-auto">
            <nav className="px-4 py-2">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex-1 py-4 font-medium"
                        style={{ color: primaryColor }}
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span
                        className="flex-1 py-4 font-medium"
                        style={{ color: primaryColor }}
                      >
                        {item.title}
                      </span>
                    )}
                    {item.subItems.length > 0 && (
                      <button
                        onClick={() => toggleMobileSubMenu(index)}
                        className="p-2 ml-2"
                        style={{ color: primaryColor }}
                      >
                        {mobileSubMenuOpen === index ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    )}
                  </div>
                  {mobileSubMenuOpen === index && item.subItems.length > 0 && (
                    <div className="pb-2 pl-4 border-t border-gray-100">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block py-3 text-sm text-gray-600 hover:text-gray-900"
                          onClick={closeMobileMenu}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Mobile CTA Button */}
            <div className="p-4 border-t border-gray-200">
              <button
                className="w-full text-white py-3 rounded-lg font-bold"
                style={{ backgroundColor: secondaryColor }}
                onClick={closeMobileMenu}
              >
                Fiyat Al
              </button>
            </div>

            {/* Mobile Social Links */}
            <div className="p-4 border-t border-gray-200">
              <div className="text-sm font-medium mb-3" style={{ color: primaryColor }}>
                Bizi Takip Edin
              </div>
              <div className="flex gap-3">
                {[{
                  href: 'https://www.facebook.com/kbudemircelikenstitusu',
                  icon: <FaFacebookF />,
                  label: 'Facebook'
                }, {
                  href: 'https://www.instagram.com/demircelikenstitusukbu/#',
                  icon: <FaInstagram />,
                  label: 'Instagram'
                }, {
                  href: 'https://www.linkedin.com/company/demir-%C3%A7elik-enstit%C3%BCs%C3%BC/',
                  icon: <FaLinkedinIn />,
                  label: 'LinkedIn'
                }].map(({ href, icon, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition"
                    style={{
                      backgroundColor: primaryColor,
                      color: backgroundColor,
                    }}
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="p-4 border-t border-gray-200 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-red-500" />
                  <span>Destek: +90 370 418 6001</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-red-500" />
                  <span>Pazartesi - Cuma 08:30 - 17:30</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-red-500 mt-1" />
                  <span>Karabük Üniversitesi Demir Çelik Enstitüsü</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;