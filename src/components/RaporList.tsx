'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from '@/app/context/themeContext';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
  

// RaporList props tipi
interface RaporListProps {
  items: { slug: string; title: string }[];
  basePath?: string;
}

export default function RaporList({ items, basePath = '' }: RaporListProps) {
  const { theme } = useTheme();
  const pathname = usePathname();

  const {
    fontFamily = 'sans-serif',
    fontSizeBase = '16px',
    primaryColor = '#1e3a8a',
    secondaryColor = '#f97316',
    textColor = '#ffffff',
    underlineColor = '#eee'
  } = theme || {};

  return (
    <div
      className="w-full max-w-[280px] bg-white shadow-lg rounded-xl p-4 sticky top-20 max-h-[80vh] overflow-y-auto"
      style={{ fontFamily, fontSize: fontSizeBase }}
    >
      <Link href={`/${basePath}/${items[0]?.slug}`} className="block mb-4 cursor-pointer">
        <h2 className="text-xl font-bold text-right transition-colors duration-300" style={{ color: primaryColor }}>
          Raporlamalar
        </h2>
      </Link>

      <div className="divide-y" style={{ borderColor: underlineColor }}>
        {items.map((item) => (
          <MenuItem
            key={item.slug}
            title={item.title}
            href={`/${basePath}/${item.slug}`}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
            underlineColor={underlineColor}
            active={pathname === `/${basePath}/${item.slug}`}
          />
        ))}
      </div>
      <div className="mt-6 space-y-3 border-t pt-4 text-sm" style={{ borderColor: underlineColor }}>
                <h3 className="text-md font-semibold leading-snug" style={{ color: primaryColor }}>
                  KARABÜK ÜNİVERSİTESİ <br />
                  DEMİR ÇELİK ENSTİTÜSÜ <br />
                  MALZEME ARAŞTIRMA ve GELİŞTİRME MERKEZİ (MARGEM) LABORATUVARLARI
                </h3>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-lg" style={{ color: secondaryColor }} />
              <div>
                <p className="text-base font-semibold" style={{ color: primaryColor }}>Adres</p>
                <p className="text-gray-600 text-sm">Demir Çelik Kampüsü, KARABÜK</p>
              </div>
            </div>
      
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-lg" style={{ color: secondaryColor }} />
              <div>
                <p className="text-base font-semibold" style={{ color: primaryColor }}>E-Posta</p>
                <p className="text-gray-600 text-sm">dce@karabuk.edu.tr</p>
              </div>
            </div>
      
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-lg" style={{ color: secondaryColor }} />
              <div>
                <p className="text-base font-semibold" style={{ color: primaryColor }}>Telefon</p>
                <p className="text-gray-600 text-sm">(0 370) 418 77 20</p>
              </div>
            </div>
      
            <a
              href="https://maps.google.com/?q=Karabük+Üniversitesi+Demir+Çelik+Enstitüsü"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 text-sm hover:underline"
            >
              <FaMapMarkerAlt className="text-red-600" />
              <span className="font-semibold" style={{ color: secondaryColor }}>
                Konum Bilgisi
              </span>
            </a>
          </div>

    </div>
  );
}

// MenuItem props tipi
interface MenuItemProps {
  title: string;
  href: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  underlineColor: string;
  active: boolean;
}

function MenuItem({
  title,
  href,
  primaryColor,
  secondaryColor,
  textColor,
  underlineColor,
  active
}: MenuItemProps) {
  const [hovered, setHovered] = useState(false);
  const bgColor = active || hovered ? secondaryColor : primaryColor;

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block transition-all duration-300"
    >
      <div
        className="flex justify-between items-center px-4 py-3 text-right"
        style={{
          backgroundColor: bgColor,
          borderBottom: `1px solid ${underlineColor}`,
          borderRadius: active ? '0 10px 0 0' : undefined
        }}
      >
        <span className="truncate font-medium" style={{ color: textColor }}>
          {title}
        </span>
        <span className="text-xl ml-2 transition-colors duration-300" style={{ color: textColor }}>
          ➜
        </span>
      </div>
    </Link>
  );
}
