// 'use client';
// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { useTheme } from '@/app/context/themeContext';
// import { FaArrowUp } from 'react-icons/fa';


// const Footer = () => {
//   const { theme } = useTheme();

//   return (
//     <footer className="w-full text-gray-800" style={{ fontFamily: theme.fontFamily }}>
//       {/* Mavi arka plan: 4 sütun */}
//       <div className="py-8 px-4" style={{ backgroundColor: theme.primaryColor, color: "#fff" }}>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Kolon: Demir Çelik Enstitüsü */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Demir Çelik Enstitüsü</h3>
//             <p className="mb-2">Karabük Üniversitesi Demir Çelik Enstitüsü</p>
//             <p className="mb-2">Mükemmel Araştırma ve Geliştirme Merkezi</p>
//             <p className="mb-2">
//               <Link href="mailto:drc@karabuk.edu.tr" className="hover:underline">
//                 drc@karabuk.edu.tr
//               </Link>
//             </p>
//             <p>+90 370 416 6001</p>
//             <p className="mt-4">Demir Çelik Kampüsü 78050 Karabük</p>
//           </div>

//           {/* Kolon: Kurumsal */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">
//               <Link href="/kurumsal" className="hover:underline">Kurumsal</Link>
//             </h3>
//             <ul className="space-y-2">
//               <li><Link href="/kurumsal/hakkimizda" className="hover:underline">Hakkımızda</Link></li>
//               <li><Link href="/kurumsal/yonetim" className="hover:underline">Yönetim</Link></li>
//               <li><Link href="/kurumsal/iletisim" className="hover:underline">İletişim</Link></li>
//             </ul>
//           </div>

//           {/* Kolon: Laboratuvarlar */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">
//               <Link href="/laboratuvarlar" className="hover:underline">Laboratuvarlar</Link>
//             </h3>
//             <ul className="space-y-2">
//               {[
//                 "Dinamik Test Laboratuvarı", "Spektral Analiz Laboratuvarı", "SEM Laboratuvarı",
//                 "Statik Test Laboratuvarı", "XRD‑XRF Laboratuvarı", "Mikro Makro Sertlik Ölçüm Laboratuvarı",
//                 "Metalografi Laboratuvarı", "Talaş İmalat Atölyesi", "Termal Analiz Laboratuvarı",
//                 "Triboloji Laboratuvarı", "Isıl İşlem Laboratuvarı", "İnşaat Laboratuvarı",
//                 "Korozyon Laboratuvarı", "Kimyasal Analiz Laboratuvarı", "Metroloji Laboratuvarı",
//                 "Toz Metalurjisi Laboratuvarı"
//               ].map((lab) => (
//                 <li key={lab}>
//                   <Link
//                     href={`/laboratuvarlar/${encodeURI(lab.toLowerCase().replace(/\s+/g, "-"))}`}
//                     className="hover:underline"
//                   >
//                     {lab}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Kolon: Hizmet Raporlama */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">
//               <Link href="/hizmet-raporlama" className="hover:underline">Hizmet Raporlama</Link>
//             </h3>
//             <ul className="space-y-2">
//               {[
//                 "Kurumsal Karbon Ayak İzi Raporlama Laboratuvarı", "SKDM Raporlama", "Sürdürülebilirlik Raporlaması",
//                 "Bina Enerji Performansının Belirlenmesi", "Bina Enerji İyileştirme Projelerinin Oluşturulması",
//                 "İç Mekan Hava Kalitesinin Belirlenmesi", "Yapılarda Isıl Köprülerin Belirlenmesi",
//                 "ISO 50001 Enerji Yönetim Sistemi", "Riskli Yapı Tespiti"
//               ].map((item) => (
//                 <li key={item}>
//                   <Link
//                     href={`/hizmet-raporlama/${encodeURI(item.toLowerCase().replace(/\s+/g, "-"))}`}
//                     className="hover:underline"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Beyaz alt kısım */}
//       <div className="py-4 px-4 border-t border-gray-200">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//           {/* Sosyal Medya */}
//             {/* <div className="flex items-center gap-4">
//     <a
//       href="https://www.facebook.com/kbudemircelikenstitusu"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-10 h-10 rounded-full bg-blue-600 hover:bg-orange-500 text-white flex items-center justify-center transition"
//     >
//       <FaFacebookF />
//     </a>
//     <a
//       href="https://www.instagram.com/demircelikenstitusukbu/#"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-10 h-10 rounded-full bg-blue-600 hover:bg-orange-500 text-white flex items-center justify-center transition"
//     >
//       <FaInstagram />
//     </a>
//     <a
//       href="https://www.linkedin.com/company/demir-%C3%A7elik-enstit%C3%BCs%C3%BC/"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-10 h-10 rounded-full bg-blue-600 hover:bg-orange-500 text-white flex items-center justify-center transition"
//     >
//       <FaLinkedinIn />
//     </a>
//   </div> */}

//   <div className="flex items-center space-x-3">
//                         {[{
//                           href: 'https://www.facebook.com/kbudemircelikenstitusu',
//                           icon: <FaFacebookF />,
//                         }, {
//                           href: 'https://www.instagram.com/demircelikenstitusukbu/#',
//                           icon: <FaInstagram />,
//                         }, {
//                           href: 'https://www.linkedin.com/company/demir-%C3%A7elik-enstit%C3%BCs%C3%BC/',
//                           icon: <FaLinkedinIn />,
//                         }].map(({ href, icon }, i) => (
//                           <a
//                             key={i}
//                             href={href}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-10 h-10 rounded-full flex items-center justify-center transition"
//                             style={{
//                               backgroundColor: theme.backgroundColor || '#fff',
//                               color: theme.primaryColor,
//                             }}
//                             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.secondaryColor}
//                             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.backgroundColor || '#fff'}
//                           >
//                             {icon}
//                           </a>
//                         ))}
//                       </div>            


//           <p className="text-sm text-gray-600 text-center">
//             © {new Date().getFullYear()} Karabük Üniversitesi Demir Çelik Enstitüsü. Tüm hakları saklıdır.
//           </p>

//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="w-10 h-10 rounded-full border border-gray-300 bg-blue-500 hover:bg-orange-600 text-white flex items-center justify-center transition"
//             aria-label="Başa dön"
//               >
//            <FaArrowUp />
//              </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// ______________________________________________________________________'use client';

'use client';
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useTheme } from '@/app/context/themeContext';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useTheme();

  const {
    fontFamily = 'sans-serif',
    fontSizeBase = '16px',
    primaryColor = '#1e3a8a',
    secondaryColor = '#f97316',
    textColor = '#ffffff',
    backgroundColor = '#ffffff'
  } = theme || {};

  const linkTextColor = primaryColor === '#ffffff' || backgroundColor === '#ffffff' ? '#000000' : textColor;

  return (
    <footer className="w-full" style={{ fontFamily, fontSize: fontSizeBase }}>
      {/* Mavi arka plan: 4 sütun */}
      <div className="py-8 px-4" style={{ backgroundColor: primaryColor, color: textColor }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Demir Çelik Enstitüsü</h3>
            <p className="mb-2">Karabük Üniversitesi Demir Çelik Enstitüsü</p>
            <p className="mb-2">Mükemmel Araştırma ve Geliştirme Merkezi</p>
            <p className="mb-2">
              <Link href="mailto:drc@karabuk.edu.tr" className="hover:underline">
                drc@karabuk.edu.tr
              </Link>
            </p>
            <p>+90 370 416 6001</p>
            <p className="mt-4">Demir Çelik Kampüsü 78050 Karabük</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              <Link href="/kurumsal" className="hover:underline">Kurumsal</Link>
            </h3>
            <ul className="space-y-2">
              <li><Link href="/kurumsal/hakkimizda" className="hover:underline">Hakkımızda</Link></li>
              <li><Link href="/kurumsal/yonetim" className="hover:underline">Yönetim</Link></li>
              <li><Link href="/kurumsal/iletisim" className="hover:underline">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              <Link href="/laboratuvarlar" className="hover:underline">Laboratuvarlar</Link>
            </h3>
            <ul className="space-y-2">
              {["Dinamik Test Laboratuvarı", "Spektral Analiz Laboratuvarı", "SEM Laboratuvarı",
                "Statik Test Laboratuvarı", "XRD‑XRF Laboratuvarı", "Mikro Makro Sertlik Ölçüm Laboratuvarı",
                "Metalografi Laboratuvarı", "Talaş İmalat Atölyesi", "Termal Analiz Laboratuvarı",
                "Triboloji Laboratuvarı", "Isıl İşlem Laboratuvarı", "İnşaat Laboratuvarı",
                "Korozyon Laboratuvarı", "Kimyasal Analiz Laboratuvarı", "Metroloji Laboratuvarı",
                "Toz Metalurjisi Laboratuvarı"].map((lab) => (
                <li key={lab}>
                  <Link
                    href={`/laboratuvarlar/${encodeURI(lab.toLowerCase().replace(/\s+/g, "-"))}`}
                    className="hover:underline"
                  >
                    {lab}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              <Link href="/hizmet-raporlama" className="hover:underline">Hizmet Raporlama</Link>
            </h3>
            <ul className="space-y-2">
              {["Kurumsal Karbon Ayak İzi Raporlama Laboratuvarı", "SKDM Raporlama", "Sürdürülebilirlik Raporlaması",
                "Bina Enerji Performansının Belirlenmesi", "Bina Enerji İyileştirme Projelerinin Oluşturulması",
                "İç Mekan Hava Kalitesinin Belirlenmesi", "Yapılarda Isıl Köprülerin Belirlenmesi",
                "ISO 50001 Enerji Yönetim Sistemi", "Riskli Yapı Tespiti"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/hizmet-raporlama/${encodeURI(item.toLowerCase().replace(/\s+/g, "-"))}`}
                    className="hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Beyaz alt kısım */}
      <div className="py-4 px-4 border-t border-gray-200" style={{ backgroundColor }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Sosyal Medya */}
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
          </div>

          <p className="text-sm" style={{ color: linkTextColor }}>
            © {new Date().getFullYear()} Karabük Üniversitesi Demir Çelik Enstitüsü. Tüm hakları saklıdır.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition"
            style={{ backgroundColor: primaryColor, color: textColor }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = secondaryColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryColor}
            aria-label="Başa dön"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
