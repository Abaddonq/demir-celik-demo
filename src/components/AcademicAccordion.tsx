'use client';
import { useState, ReactNode } from 'react';
import { useTheme } from '@/app/context/themeContext';

// TypeScript: Editor tipini tanımla
export interface Editor {
  name: string;
  email?: string;
  institution?: string | ReactNode;
}

interface AccordionProps {
  title: string; // Başlık zorunlu hale getirildi
  items: Editor[]; // items zorunlu hale getirildi
}

export default function AcademicAccordion({ title, items }: AccordionProps) {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // Tek bir akordiyonun açık/kapalı durumu

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Sadece ilk item'ın içeriğini göstereceğiz (personel bilgileri için)
  const firstItem = items[0];
  const hasContent = firstItem && (firstItem.email || firstItem.institution);

  return (
    <div
      className="w-full mx-auto rounded-lg overflow-hidden shadow-md" // Yuvarlak köşeler ve gölge
      style={{ fontFamily: theme.fontFamily }}
    >
      {/* Başlık ve Artı/Eksi Butonu */}
      <button
        onClick={toggleOpen}
        className={`w-full flex justify-between items-center p-4 font-semibold text-left transition-colors duration-300 ${
          isOpen ? 'bg-gray-100' : 'hover:bg-gray-50' // Açıkken veya mouse üzerindeyken renk değişimi
        }`}
        style={{
          backgroundColor: theme.secondaryColor, // Başlık arka plan rengi temadan alınır
          color: 'white', // Başlık metin rengi beyaz
          cursor: hasContent ? 'pointer' : 'default', // İçerik yoksa tıklanabilir olmasın
        }}
        disabled={!hasContent} // İçerik yoksa butonu devre dışı bırak
      >
        <span>{title}</span>
        <span className="text-xl font-bold select-none">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* İçerik Alanı */}
      {isOpen && hasContent && firstItem && ( // Açık ve içerik varsa göster
        <div
          className="px-4 pb-4 pt-2 text-sm" // İçerik boşlukları
          style={{
            color: theme.textColor,
            backgroundColor: theme.backgroundColor,
          }}
        >
          {firstItem.email && <div>{firstItem.email}</div>}
          {firstItem.institution && <div>{firstItem.institution}</div>}
          {!firstItem.email && !firstItem.institution && (
            <div className="opacity-70">Bilgi bulunmamaktadır</div>
          )}
        </div>
      )}
    </div>
  );
}