// 'use client';
// import React, { useState, useRef } from 'react';
// import Link from 'next/link';
// import {
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaClock,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
// } from 'react-icons/fa';
// import { useTheme } from '@/app/context/themeContext'; 

// const navItems = [
//   {
//     title: 'Anasayfa',href:'http://localhost:3000',
//     subItems: [
//       { title: 'Genel Bakış', href: '/' },
//       { title: 'Duyurular', href: '/duyurular' },
//       { title: 'İletişim', href: '/iletisim', subItems: [] },

//     ],
//   },
//   {
//     title: 'Kurumsal',
//     subItems: [
//       { title: 'Hakkımızda', href: '/kurumsal/hakkimizda' },
//       { title: 'Misyon-Vizyon', href: '/kurumsal/misyon-vizyon' },
//       { title: 'Personel', href: '/kurumsal/personel/teknik' },

//     ],
//   },
//   {
//     title: 'Hizmetler',
//     subItems: [
//       { title: 'Laboratuvarlar', href: '/hizmetler/laboratuvarlar' },
//       { title: 'Raporlamalar', href: '/hizmetler/raporlamalar' },
//     ],
//   },
//   {
//     title: 'Duyurular&Haberler',
//     subItems: [
//       { title: 'Etkinlikler', href: '/haberler/etkinlikler' },
//       { title: 'Basında Biz', href: '/haberler/basinda-biz' },
//     ],
//   },
//   {
//     title: 'Akademik',
//     subItems: [
//       { title: 'Yayınlar', href: '/akademik/yayinlar' },
//       { title: 'Projeler', href: '/akademik/projeler' },
//     ],
//   },
//   {
//     title: 'Hızlı Erişim',
//     subItems: [
//       { title: 'Hızlı Erişim ', href: '/hizli-erisim' },
//       { title: 'Fiyat Listesi', href: '/hizli-erisim/fiyat-listesi' },
//       { title: 'Hizmet İşleyiş Süreci', href: '/hizli-erisim/hizmet-isleyis-sureci' },
//       { title: 'İç Kontrol', href: '/hizli-erisim/ic-kontrol' },
//       { title: 'Kalite Belgeleri', href: '/hizli-erisim/kalite-belgeleri' },
//       { title: 'Numune Kabul Kriterleri', href: '/hizli-erisim/numune-kabul-kriterleri' },
//       { title: 'Sem-Randevu', href: '/hizli-erisim/sem-randevu' },
//     ],
//   },
//   {
//     title: 'Araştırma Merkezleri',
//     subItems: [
//       { title: 'Merkez 1', href: '/arastirma-merkezleri/merkez-1' },
//       { title: 'Merkez 2', href: '/arastirma-merkezleri/merkez-2' },
//     ],
//   },
//   {
//   title: 'İletişim',
//   href: '/iletisim',  // 👈 this is the important part
//   subItems: [],
// },
// ];

// const Header = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const { theme } = useTheme(); // 🎯 Tema verisini al

//   const handleMouseEnter = (index: number) => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setOpenIndex(index);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setOpenIndex(null);
//     }, 150);
//   };

//   return (
//     <header>
//       {/* Üst Bar */}
//       <div
//         className="text-white text-sm flex justify-between px-4 py-2 items-center"
//         style={{ backgroundColor: theme.primaryColor }} // 🎯 Tema rengi
//       >
//         <div className="flex items-center space-x-4">
//           <span className="flex items-center gap-1">
//             <FaPhoneAlt className="text-red-500" /> Destek: +90 370 418 6001
//           </span>
//           <span className="flex items-center gap-1">
//             <FaMapMarkerAlt className="text-red-500" /> Karabük Üniversitesi Demir Çelik Enstitüsü
//           </span>
//           <span className="flex items-center gap-1">
//             <FaClock className="text-red-500" /> Pazartesi - Cuma 08:30 - 17:30
//           </span>
//         </div>
//         <div className="flex items-center space-x-3">
//           {/* <a
//     href="https://www.facebook.com/kbudemircelikenstitusu"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-10 h-10 rounded-full bg-white-600 hover:bg-orange-500 text-white flex items-center justify-center transition"
//   >
//     <FaFacebookF />
//   </a>
//   <a
//     href="https://www.instagram.com/demircelikenstitusukbu/#"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-10 h-10 rounded-full bg-white-600 hover:bg-orange-500 text-white flex items-center justify-center transition"
//   >
//     <FaInstagram />
//   </a>
//   <a
//     href="https://www.linkedin.com/company/demir-%C3%A7elik-enstit%C3%BCs%C3%BC/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-10 h-10 rounded-full bg-white-600 hover:bg-orange-500 text-white flex items-center justify-center transition"
//   >
//     <FaLinkedinIn />
//   </a> */}
//   <div className="flex items-center space-x-3">
//           {[{
//             href: 'https://www.facebook.com/kbudemircelikenstitusu',
//             icon: <FaFacebookF />,
//           }, {
//             href: 'https://www.instagram.com/demircelikenstitusukbu/#',
//             icon: <FaInstagram />,
//           }, {
//             href: 'https://www.linkedin.com/company/demir-%C3%A7elik-enstit%C3%BCs%C3%BC/',
//             icon: <FaLinkedinIn />,
//           }].map(({ href, icon }, i) => (
//             <a
//               key={i}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full flex items-center justify-center transition"
//               style={{
//                 backgroundColor: theme.backgroundColor || '#fff',
//                 color: theme.primaryColor,
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.secondaryColor}
//               onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.backgroundColor || '#fff'}
//             >
//               {icon}
//             </a>
//           ))}
//         </div>
//       <input
//           type="text"
//          placeholder="Arama..."
//          className="bg-white text-black px-2 py-1 rounded"
//           />
//           </div>

//           </div>

//       {/* Ana Menü */}
//       <div className="flex items-center justify-between py-4 px-6 bg-white shadow-md relative z-50">
//         {/* Logo */}
//         <div className="flex items-center gap-4">
//           <img
//             src="/images/enstitulogo.png"
//             alt=" Demir Çelik Enstitüsüsü"
//             className="h-16 object-contain"
//           />
//           <div className="text-xl font-bold" style={{ color: theme.primaryColor }}>
//             Demir Çelik Enstitüsü
//           </div>
//         </div>

//         {/* Menü */}
//         <nav className="flex gap-6 font-semibold relative z-50" style={{ color: theme.primaryColor }}>
//           {navItems.map((item, index) => (
//             <div
//               key={index}
//               className="relative"
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//                             {item.href ? (
//                 <Link href={item.href} className="cursor-pointer hover:text-orange-600 block py-2">
//                   {item.title}
//                 </Link>
//               ) : (
//                 <span className="cursor-pointer hover:text-orange-600 block py-2">
//                   {item.title}
//                 </span>
//               )}
//               {openIndex === index && (
//                 <div className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md w-60 z-50">
//                   {item.subItems.map((subItem, subIndex) => (
//                     <Link
//                       key={subIndex}
//                       href={subItem.href}
//                       className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
//                     >
//                       {subItem.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* Fiyat Al Butonu */}
//         <button
//           className="text-white px-4 py-2 rounded-tr-xl font-bold"
//           style={{ backgroundColor: theme.secondaryColor }}
//         >
//           Fiyat Al
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;



// _______________________________________________________________________
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
  { title: 'Anasayfa', href: 'http://localhost:3000', subItems: [
    { title: 'Genel Bakış', href: '/' },
    { title: 'Duyurular', href: '/duyurular' },
    { title: 'İletişim', href: '/iletisim', subItems: [] },
  ]},
  { title: 'Kurumsal', subItems: [
    { title: 'Hakkımızda', href: '/kurumsal/hakkimizda' },
    { title: 'Misyon-Vizyon', href: '/kurumsal/misyon-vizyon' },
    { title: 'Personel', href: '/kurumsal/personel/teknik' },
  ]},
  { title: 'Hizmetler', subItems: [
    { title: 'Laboratuvarlar', href: '/hizmetler/laboratuvarlar' },
    { title: 'Raporlamalar', href: '/hizmetler/raporlamalar' },
  ]},
  { title: 'Duyurular&Haberler', subItems: [
    { title: 'Etkinlikler', href: '/haberler/etkinlikler' },
    { title: 'Basında Biz', href: '/haberler/basinda-biz' },
  ]},
  { title: 'Akademik', subItems: [
    { title: 'Yayınlar', href: '/akademik/yayinlar' },
    { title: 'Projeler', href: '/akademik/projeler' },
  ]},
  { title: 'Hızlı Erişim', subItems: [
    { title: 'Hızlı Erişim ', href: '/hizli-erisim' },
    { title: 'Fiyat Listesi', href: '/hizli-erisim/fiyat-listesi' },
    { title: 'Hizmet İşleyiş Süreci', href: '/hizli-erisim/hizmet-isleyis-sureci' },
    { title: 'İç Kontrol', href: '/hizli-erisim/ic-kontrol' },
    { title: 'Kalite Belgeleri', href: '/hizli-erisim/kalite-belgeleri' },
    { title: 'Numune Kabul Kriterleri', href: '/hizli-erisim/numune-kabul-kriterleri' },
    { title: 'Sem-Randevu', href: '/hizli-erisim/sem-randevu' },
  ]},
  { title: 'Araştırma Merkezleri', subItems: [
    { title: 'Merkez 1', href: '/arastirma-merkezleri/merkez-1' },
    { title: 'Merkez 2', href: '/arastirma-merkezleri/merkez-2' },
  ]},
  { title: 'İletişim', href: '/iletisim', subItems: [] },
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
