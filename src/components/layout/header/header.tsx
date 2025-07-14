"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
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
} from "react-icons/fa";
import { useTheme } from "@/app/context/themeContext";
import Image from "next/image";

const navItems = [
  {
    title: "Anasayfa",
    href: "/",
    subItems: [],
  },
  {
    title: "Kurumsal",
    subItems: [
      { title: "Hakkımızda", href: "/kurumsal/hakkimizda" },
      { title: "Yönetim Kadromuz", href: "/kurumsal/yonetim-kadromuz" },
      { title: "Akademik Personel", href: "/kurumsal/personel/akademik" },
      { title: "Teknik Personel", href: "/kurumsal/personel/teknik" },
      { title: "İdari Personel", href: "/kurumsal/personel/idari" },
      {
        title: "Enstitü Yönetim Kurulu",
        href: "/kurumsal/enstitu-yonetim-kurulu",
      },
      { title: "Kalite Komisyonu", href: "/kurumsal/kalite-komisyonu" },
    ],
  },
  {
    title: "Hizmetler",
    subItems: [
      { title: "Laboratuvarlar", href: "/hizmetler/laboratuvarlar" },
      { title: "Raporlamalar", href: "/hizmetler/raporlamalar" },
    ],
  },
  {
    title: "Duyurular&Haberler",
    href: "/duyurular-ve-haberler",
    subItems: [],
  },
  {
    title: "Akademik",
    subItems: [
      { title: "Dergi-NSJ ISI", href: "/akademik/nsji" },
      { title: "Sempozyum-UDCS", href: "/akademik/udcs" },
    ],
  },
  {
    title: "Hızlı Erişim",
    href: "/hizli-erisim",
    subItems: [
      { title: "Fiyat Listesi", href: "/hizli-erisim/fiyat-listesi" },
      {
        title: "Hizmet İşleyiş Süreci",
        href: "/hizli-erisim/hizmet-isleyis-sureci",
      },
      { title: "İç Kontrol", href: "/hizli-erisim/ic-kontrol" },
      { title: "Kalite Belgeleri", href: "/hizli-erisim/kalite-belgeleri" },
      {
        title: "Numune Kabul Kriterleri",
        href: "/hizli-erisim/numune-kabul-kriterleri",
      },
      { title: "Sem-Randevu", href: "/hizli-erisim/sem-randevu" },
    ],
  },
  {
    title: "Araştırma Merkezleri",
    subItems: [
      { title: "YEMMER", href: "https://yemmer.karabuk.edu.tr/index.aspx" },
      { title: "MARGEM", href: "https://margem.karabuk.edu.tr/index.aspx" },
    ],
  },
  {
    title: "İletişim",
    href: "/iletisim",
    subItems: [],
  },
];

const Header = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<number | null>(
    null
  );
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { theme } = useTheme();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const {
    fontFamily = "sans-serif",
    fontSizeBase = "16px",
    primaryColor = "#1e3a8a",
    secondaryColor = "#f97316",
    backgroundColor = "#ffffff",
  } = theme || {};

  // Scroll durumunu izle
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dışarı tıklamada mobil menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    // Mobil menü açıldığında body scroll'unu engelle
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
  };

  const toggleMobileSubMenu = (index: number) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
    document.body.style.overflow = "auto";
  };

  return (
    <header
      style={{ fontFamily, fontSize: fontSizeBase }}
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
    >
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
            <FaMapMarkerAlt className="text-red-500" /> Karabük Üniversitesi
            Demir Çelik Enstitüsü
          </span>
          <span className="flex items-center gap-1">
            <FaClock className="text-red-500" /> Pazartesi - Cuma 08:30 - 17:30
          </span>
        </div>
        <div className="flex items-center space-x-3">
          {[
            {
              href: "https://www.facebook.com/kbudemircelikenstitusu",
              icon: <FaFacebookF />,
            },
            {
              href: "https://www.instagram.com/demircelikenstitusukbu/#",
              icon: <FaInstagram />,
            },
            {
              href: "https://www.linkedin.com/company/demir-%C3%A7elik-enstit%C3%BCs%C3%BC/",
              icon: <FaLinkedinIn />,
            },
          ].map(({ href, icon }, i) => (
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = secondaryColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = backgroundColor)
              }
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
      <div
        className={`flex items-center justify-between py-2 lg:py-3 px-4 transition-all duration-300 ${
          scrolled ? "py-1 shadow-sm" : ""
        }`}
        style={{ backgroundColor }}
      >
        {/* Logo and Title */}
        <div className="flex items-center gap-2 lg:gap-4">
          <Link href="/">
            <Image
              src="/images/enstitulogo.png"
              alt="Demir Çelik Enstitüsü"
              className="h-10 lg:h-14 object-contain"
              layout="intrinsic"
              width={200}
              height={50}
            />
          </Link>
          <div
            className="text-sm lg:text-lg font-bold"
            style={{ color: primaryColor }}
          >
            <span className="hidden sm:inline">Demir Çelik Enstitüsü</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4 font-medium relative z-50">
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
                  className="cursor-pointer block py-2 px-1 hover:transition-colors"
                  style={{ color: primaryColor }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = secondaryColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = primaryColor)
                  }
                >
                  {item.title}
                </Link>
              ) : (
                <span
                  className="cursor-pointer block py-2 px-1 hover:transition-colors flex items-center"
                  style={{ color: primaryColor }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = secondaryColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = primaryColor)
                  }
                >
                  {item.title}
                  <FaChevronDown className="ml-1 text-xs" />
                </span>
              )}
              {openIndex === index && item.subItems.length > 0 && (
                <div
                  className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md w-60 z-50 border border-gray-100"
                  style={{ minWidth: "200px" }}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-50 transition-colors"
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
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-lg"
            style={{ color: primaryColor }}
            aria-label="Arama"
          >
            <FaSearch />
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg"
            style={{ color: primaryColor }}
            aria-label="Menü"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Desktop CTA Button */}
        <Link
          href="/hizli-erisim/fiyat-listesi"
          className="hidden lg:block text-white px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: secondaryColor }}
        >
          Fiyat Al
        </Link>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div
          className="lg:hidden px-4 py-2 border-t"
          style={{ backgroundColor, borderColor: primaryColor }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Site içi arama..."
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none"
              style={{ borderColor: primaryColor }}
              autoFocus
            />
            <FaSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              style={{ color: primaryColor }}
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden fixed inset-0 top-16 z-40 bg-white shadow-lg overflow-y-auto"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <div className="max-h-screen overflow-y-auto">
            <nav className="px-4 py-2">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <div className="flex items-center justify-between py-3">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex-1 py-1 font-medium text-lg"
                        style={{ color: primaryColor }}
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <button
                        className="flex-1 text-left py-1 font-medium text-lg flex items-center justify-between w-full"
                        style={{ color: primaryColor }}
                        onClick={() => toggleMobileSubMenu(index)}
                      >
                        {item.title}
                        {item.subItems.length > 0 && (
                          <span className="ml-2">
                            {mobileSubMenuOpen === index ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                  {mobileSubMenuOpen === index && item.subItems.length > 0 && (
                    <div className="pb-2 pl-4">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block py-2.5 text-gray-700 hover:text-gray-900 transition-colors"
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
              <Link
                href="/hizli-erisim/fiyat-listesi"
                className="block w-full text-white py-3 rounded-lg font-bold text-center"
                style={{ backgroundColor: secondaryColor }}
                onClick={closeMobileMenu}
              >
                Fiyat Al
              </Link>
            </div>

            {/* Mobile Contact Info */}
            <div className="p-4 border-t border-gray-200 text-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-red-500 flex-shrink-0" />
                  <span>Destek: +90 370 418 6001</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-red-500 flex-shrink-0" />
                  <span>Pazartesi - Cuma 08:30 - 17:30</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-red-500 mt-1 flex-shrink-0" />
                  <span>Karabük Üniversitesi Demir Çelik Enstitüsü</span>
                </div>
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="p-4 border-t border-gray-200">
              <div
                className="text-base font-semibold mb-3"
                style={{ color: primaryColor }}
              >
                Bizi Takip Edin
              </div>
              <div className="flex gap-3 justify-center">
                {[
                  {
                    href: "https://www.facebook.com/kbudemircelikenstitusu",
                    icon: <FaFacebookF size={18} />,
                    label: "Facebook",
                  },
                  {
                    href: "https://www.instagram.com/demircelikenstitusukbu/#",
                    icon: <FaInstagram size={18} />,
                    label: "Instagram",
                  },
                  {
                    href: "https://www.linkedin.com/company/demir-%C3%A7elik-enstit%C3%BCs%C3%BC/",
                    icon: <FaLinkedinIn size={18} />,
                    label: "LinkedIn",
                  },
                ].map(({ href, icon, label }, i) => (
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
