'use client';
import { useState } from 'react';
import { useTheme } from '@/app/context/themeContext';

const editors = [
  {
    name: "Dr. Recep Demirsöz",
    email: "recepdemirsoz@karabuk.edu.tr",
    institution: "Karabük Üniversitesi, Demir Çelik Enstitüsü, TR.",
  },
  {
    name: "Dr. Safa Polat",
    email: "ccccccccccccccccc",
    institution: "ccccccccccccccccccc",
  },
  {
    name: "Dr. Erhan Kayabaşı",
    email: "aaaaaaaa",
    institution: "aaaaaaaaa",
  },
];

export default function Accordion() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      className="max-w-md mx-auto mt-10 rounded overflow-hidden shadow"
      style={{ fontFamily: theme.fontFamily }}
    >
      {/* Başlık */}
      <div 
        className="text-white font-bold p-4"
        style={{ backgroundColor: theme.primaryColor }}
      >
        Baş Editörler
      </div>

      {/* Liste */}
      {editors.map((editor, index) => {
        const isOpen = openIndex === index;
        const hasContent = editor.email || editor.institution;

        return (
          <div key={index} className="border-t">
            <button
              onClick={() => toggle(index)}
              className={`w-full flex justify-between items-center p-4 font-semibold text-left hover:bg-gray-100 ${
                !hasContent ? 'cursor-default' : 'cursor-pointer'
              }`}
              style={{ color: theme.textColor }}
            >
              <span>{editor.name}</span>
              <span>
                {hasContent ? (isOpen ? "➖" : "➕") : "➕"}
              </span>
            </button>

            {isOpen && hasContent && (
              <div 
                className="px-4 pb-4 text-sm"
                style={{ 
                  color: theme.textColor,
                  backgroundColor: theme.backgroundColor 
                }}
              >
                {editor.email && <div>{editor.email}</div>}
                {editor.institution && <div>{editor.institution}</div>}
                {!editor.email && !editor.institution && (
                  <div className="opacity-70">Bilgi bulunmamaktadır</div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}