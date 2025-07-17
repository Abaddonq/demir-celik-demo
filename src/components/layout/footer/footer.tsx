'use client';
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowUp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from '@/app/context/themeContext';

const Footer = () => {
  const { theme } = useTheme();
  const [isLabsOpen, setIsLabsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const {
    fontFamily = 'sans-serif',
    fontSizeBase = '16px',
    primaryColor = '#1e3a8a',
    secondaryColor = '#f97316',
    textColor = '#ffffff',
    backgroundColor = '#ffffff'
  } = theme || {};

  const linkTextColor = primaryColor === '#ffffff' || backgroundColor === '#ffffff' ? '#000000' : textColor;

  const laboratories = [
    "Dinamik Test Laboratuvarı", "Spektral Analiz Laboratuvarı", "SEM Laboratuvarı",
    "Statik Test Laboratuvarı", "XRD‑XRF Laboratuvarı", "Mikro Makro Sertlik Ölçüm Laboratuvarı",
    "Metalografi Laboratuvarı", "Talaş İmalat Atölyesi", "Termal Analiz Laboratuvarı",
    "Triboloji Laboratuvarı", "Isıl İşlem Laboratuvarı", "İnşaat Laboratuvarı",
    "Korozyon Laboratuvarı", "Kimyasal Analiz Laboratuvarı", "Metroloji Laboratuvarı",
    "Toz Metalurjisi Laboratuvarı"
  ];

  const services = [
    "Kurumsal Karbon Ayak İzi Raporlama Laboratuvarı", "SKDM Raporlama", "Sürdürülebilirlik Raporlaması",
    "Bina Enerji Performansının Belirlenmesi", "Bina Enerji İyileştirme Projelerinin Oluşturulması",
    "İç Mekan Hava Kalitesinin Belirlenmesi", "Yapılarda Isıl Köprülerin Belirlenmesi",
    "ISO 50001 Enerji Yönetim Sistemi", "Riskli Yapı Tespiti"
  ];

  const socialLinks = [
    {
      href: 'https://www.facebook.com/kbudemircelikenstitusu',
      icon: <FaFacebookF />,
      label: 'Facebook'
    },
    {
      href: 'https://www.instagram.com/demircelikenstitusukbu/#',
      icon: <FaInstagram />,
      label: 'Instagram'
    },
    {
      href: 'https://www.linkedin.com/company/demir-%C3%A7elik-enstit%C3%BCs%C3%BC/',
      icon: <FaLinkedinIn />,
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="w-full" style={{ fontFamily, fontSize: fontSizeBase }}>
      {/* Ana İçerik Bölümü */}
      <div className="py-6 lg:py-8 px-4" style={{ backgroundColor: primaryColor, color: textColor }}>
        <div className="max-w-6xl mx-auto">
          {/* Desktop: 4 sütun, Tablet: 2 sütun, Mobile: 1 sütun */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Kurum Bilgileri */}
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-lg lg:text-xl font-bold mb-4">Demir Çelik Enstitüsü</h3>
              <div className="space-y-3">
                <p className="text-sm lg:text-base">Karabük Üniversitesi Demir Çelik Enstitüsü</p>
                <p className="text-sm lg:text-base">Mükemmel Araştırma ve Geliştirme Merkezi</p>
                
                {/* İletişim Bilgileri */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-red-400 text-sm" />
                    <Link href="mailto:drc@karabuk.edu.tr" className="hover:underline text-sm lg:text-base">
                      drc@karabuk.edu.tr
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-red-400 text-sm" />
                    <span className="text-sm lg:text-base">+90 370 416 6001</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaMapMarkerAlt className="text-red-400 text-sm mt-1" />
                    <span className="text-sm lg:text-base">Demir Çelik Kampüsü 78050 Karabük</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kurumsal */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-4">
                <Link href="/kurumsal" className="hover:underline">Kurumsal</Link>
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/kurumsal/hakkimizda" className="hover:underline text-sm lg:text-base transition-colors">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/kurumsal/yonetim-kadromuz" className="hover:underline text-sm lg:text-base transition-colors">
                    Yönetim
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="hover:underline text-sm lg:text-base transition-colors">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            {/* Laboratuvarlar - Mobilde dropdown */}
            <div className="md:hidden">
              <button 
                className="flex items-center justify-between w-full text-lg lg:text-xl font-bold mb-4"
                onClick={() => setIsLabsOpen(!isLabsOpen)}
              >
                <span>Laboratuvarlar</span>
                {isLabsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {isLabsOpen && (
                <ul className="space-y-2 max-h-60 overflow-y-auto">
                  {laboratories.map((lab) => (
                    <li key={lab}>
                      <Link
                        href={`/laboratuvarlar/${encodeURI(lab.toLowerCase().replace(/\s+/g, "-"))}`}
                        className="hover:underline text-sm lg:text-base transition-colors block"
                      >
                        {lab}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Laboratuvarlar - Masaüstü */}
            <div className="hidden md:block">
              <h3 className="text-lg lg:text-xl font-bold mb-4">
                <Link href="/laboratuvarlar" className="hover:underline">Laboratuvarlar</Link>
              </h3>
              <ul className="space-y-2 max-h-60 lg:max-h-none overflow-y-auto lg:overflow-visible">
                {laboratories.map((lab) => (
                  <li key={lab}>
                    <Link
                      href={`/laboratuvarlar/${encodeURI(lab.toLowerCase().replace(/\s+/g, "-"))}`}
                      className="hover:underline text-sm lg:text-base transition-colors block"
                    >
                      {lab}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hizmet Raporlama - Mobilde dropdown */}
            <div className="md:hidden">
              <button 
                className="flex items-center justify-between w-full text-lg lg:text-xl font-bold mb-4"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Hizmet Raporlama</span>
                {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {isServicesOpen && (
                <ul className="space-y-2 max-h-60 overflow-y-auto">
                  {services.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/hizmet-raporlama/${encodeURI(item.toLowerCase().replace(/\s+/g, "-"))}`}
                        className="hover:underline text-sm lg:text-base transition-colors block"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Hizmet Raporlama - Masaüstü */}
            <div className="hidden md:block">
              <h3 className="text-lg lg:text-xl font-bold mb-4">
                <Link href="/hizmet-raporlama" className="hover:underline">Hizmet Raporlama</Link>
              </h3>
              <ul className="space-y-2 max-h-60 lg:max-h-none overflow-y-auto lg:overflow-visible">
                {services.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/hizmet-raporlama/${encodeURI(item.toLowerCase().replace(/\s+/g, "-"))}`}
                      className="hover:underline text-sm lg:text-base transition-colors block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="py-4 px-4 border-t border-gray-200" style={{ backgroundColor }}>
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Dikey stack, Desktop: Yatay */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Sosyal Medya */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center space-x-3">
                {socialLinks.map(({ href, icon, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors border-2"
                    style={{
                      backgroundColor: backgroundColor,
                      color: primaryColor,
                      borderColor: primaryColor,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = secondaryColor;
                      e.currentTarget.style.borderColor = secondaryColor;
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = backgroundColor;
                      e.currentTarget.style.borderColor = primaryColor;
                      e.currentTarget.style.color = primaryColor;
                    }}
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Telif Hakkı */}
            <div className="order-1 lg:order-2 text-center">
              <p className="text-xs lg:text-sm" style={{ color: linkTextColor }}>
                © {new Date().getFullYear()} Karabük Üniversitesi Demir Çelik Enstitüsü. Tüm hakları saklıdır.
              </p>
            </div>

            {/* Başa Dön Butonu */}
            <div className="order-3">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 flex items-center justify-center transition-colors"
                style={{ 
                  backgroundColor: primaryColor, 
                  color: textColor,
                  borderColor: primaryColor
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = secondaryColor;
                  e.currentTarget.style.borderColor = secondaryColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = primaryColor;
                  e.currentTarget.style.borderColor = primaryColor;
                }}
                aria-label="Başa dön"
              >
                <FaArrowUp className="text-sm lg:text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;