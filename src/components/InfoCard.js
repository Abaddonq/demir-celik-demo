'use client';
import Link from 'next/link';
import { FaFileAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function InfoCard({ title, hasLink = true, href = '#', theme }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-[300px] h-[250px] border border-gray-300 rounded-2xl shadow-md 
        hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 
        flex flex-col justify-between items-center p-6 text-center group"
      style={{
        backgroundColor: theme?.backgroundColor || '#ffffff',
        fontFamily: theme?.fontFamily || 'sans-serif',
        fontSize: theme?.fontSizeBase || '16px',
      }}
    >
      {/* الأيقونة */}
      <div className="flex justify-center items-center w-16 h-16 rounded-full border border-gray-400 mb-2 transition-colors duration-300">
        <FaFileAlt
          className="text-2xl transition-colors duration-300"
          style={{
            color: hovered
              ? theme?.secondaryColor || '#F97316' // برتقالي عند التحويم
              : theme?.primaryColor || '#1E3A8A',   // أزرق قبل التحويم
          }}
        />
      </div>

      {/* العنوان */}
      <h3
        className="text-xl font-semibold mt-6 mb-2 transition-colors duration-300"
        style={{ color: theme?.primaryColor || '#1E3A8A' }}
      >
        {title}
      </h3>

      {/* زر الرابط */}
      {hasLink ? (
        <Link href={href} className="mt-auto">
          <div className="flex items-center cursor-pointer transition-colors duration-300">
            <span
              className="mr-2 text-sm font-medium transition-colors duration-300"
              style={{
                color: hovered
                  ? theme?.secondaryColor || '#F97316' // برتقالي عند التحويم
                  : theme?.primaryColor || '#1E3A8A',   // أزرق قبل التحويم
              }}
            >
              İnceleyin
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 stroke-current transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{
                color: hovered
                  ? theme?.secondaryColor || '#F97316'
                  : theme?.primaryColor || '#1E3A8A',
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </Link>
      ) : (
        <div className="h-[24px] mt-auto"></div>
      )}
    </div>
  );
}

