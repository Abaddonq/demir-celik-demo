'use client';

import React from 'react';
import { useTheme } from '@/app/context/themeContext';

interface CustomButtonProps {
  label?: string;
  url?: string;
}

export default function CustomButton({ label = "Daha Fazla Bilgi Alın", url = "#" }: CustomButtonProps) {
  const { theme } = useTheme();

  return (
    <a
      href={url}
      className="px-4 py-2 rounded-full transition-colors"
      style={{
        backgroundColor: theme.primaryColor || '#202b85',
        color: theme.textColor || '#ffffff'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = theme.secondaryColor || '#ff7f50';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = theme.primaryColor || '#202b85';
      }}
    >
      {label}
    </a>
  );
}

