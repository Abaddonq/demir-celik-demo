'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from '@/app/context/themeContext';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

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
      className="w-full md:w-[280px] bg-white shadow-lg rounded-xl p-4 sticky-on-desktop md:sticky md:top-20 max-h-[80vh] overflow-y-auto"
      style={{ fontFamily, fontSize: fontSizeBase }}
    >
      <Link href={`/${basePath}/${items[0]?.slug}`} className="block mb-3 md:mb-4 cursor-pointer">
        <h2 className="text-lg md:text-xl font-bold text-right transition-colors duration-300" style={{ color: primaryColor }}>
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

      <div className="mt-4 md:mt-6 space-y-2 md:space-y-3 border-t pt-3 md:pt-4 text-xs md:text-sm" style={{ borderColor: underlineColor }}>
        <h3 className="text-sm md:text-md font-semibold leading-snug" style={{ color: primaryColor }}>
          KARABÜK ÜNİVERSİTESİ <br />
          DEMİR ÇELİK ENSTİTÜSÜ <br />
          MALZEME ARAŞTIRMA ve GELİŞTİRME MERKEZİ (MARGEM) LABORATUVARLARI
        </h3>

        <div className="flex items-start gap-2 md:gap-3">
          <FaMapMarkerAlt className="mt-0.5 md:mt-1 text-sm md:text-lg" style={{ color: secondaryColor }} />
          <div>
            <p className="text-xs md:text-sm font-semibold" style={{ color: primaryColor }}>Adres</p>
            <p className="text-gray-600 text-xs">Demir Çelik Kampüsü, KARABÜK</p>
          </div>
        </div>

        <div className="flex items-start gap-2 md:gap-3">
          <FaEnvelope className="mt-0.5 md:mt-1 text-sm md:text-lg" style={{ color: secondaryColor }} />
          <div>
            <p className="text-xs md:text-sm font-semibold" style={{ color: primaryColor }}>E-Posta</p>
            <p className="text-gray-600 text-xs">dce@karabuk.edu.tr</p>
          </div>
        </div>

        <div className="flex items-start gap-2 md:gap-3">
          <FaPhoneAlt className="mt-0.5 md:mt-1 text-sm md:text-lg" style={{ color: secondaryColor }} />
          <div>
            <p className="text-xs md:text-sm font-semibold" style={{ color: primaryColor }}>Telefon</p>
            <p className="text-gray-600 text-xs">(0 370) 418 77 20</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  title,
  href,
  primaryColor,
  secondaryColor,
  textColor,
  underlineColor,
  active
}: {
  title: string;
  href: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  underlineColor: string;
  active: boolean;
}) {
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
        className="flex justify-between items-center px-3 py-2 md:px-4 md:py-3 text-right"
        style={{
          backgroundColor: bgColor,
          borderBottom: `1px solid ${underlineColor}`,
          borderRadius: active ? '0 10px 0 0' : undefined
        }}
      >
        <span className="truncate text-sm md:text-base font-medium" style={{ color: textColor }}>
          {title}
        </span>
        <span className="text-lg md:text-xl ml-2 transition-colors duration-300" style={{ color: textColor }}>
          ➜
        </span>
      </div>
    </Link>
  );
}