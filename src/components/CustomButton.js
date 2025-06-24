'use client';

import React from 'react';

export default function CustomButton({ label = "Daha Fazla Bilgi Alın", url = "#" }) {
  return (
    <a
      href={url}
      className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
    >
      {label}
    </a>
  );
}
