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
  title?: string;
  items?: Editor[];
}

// Default editors for backward compatibility
const defaultEditors: Editor[] = [
  
];


export default function Accordion({ title = "Baş Editörler", items }: AccordionProps) {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const editors = items || defaultEditors;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full max-w-lg mx-auto rounded overflow-hidden shadow"
      style={{ fontFamily: theme.fontFamily }}
    >
      {/* Başlık */}
      <div
        className="text-white font-bold p-4"
        style={{ backgroundColor: theme.secondaryColor }}
      >
        {title}
      </div>

      {/* Liste */}
      {editors.map((editor, index) => {
        const isOpen = openIndex === index;
        const hasContent = editor.email || editor.institution;

        return (
          <div
            key={index}
            className="border-t bg-white transition-all duration-300"
            style={{ position: 'relative' }}
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full flex justify-between items-center p-3 font-semibold text-left hover:bg-gray-100 ${
                !hasContent ? 'cursor-default' : 'cursor-pointer'
              }`}
              style={{ color: theme.textColor }}
            >
              <span>{editor.name}</span>
              <span className="text-xl font-bold select-none" style={{ color: theme.primaryColor }}>
                {hasContent ? (isOpen ? "−" : "+") : "+"}
              </span>
            </button>

            {isOpen && hasContent && (
              <div
                className="px-4 pb-4 text-sm"
                style={{
                  color: theme.textColor,
                  backgroundColor: theme.backgroundColor,
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