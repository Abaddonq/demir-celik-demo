'use client'; // Bu çok önemli! useState kullandığımız için gerekli

import React from 'react';
import EditorAccordion from '@/components/Accordion'; // componenti import ettik
import Accordion from '@/components/Accordion';

const HizliErisimPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Hızlı Erişim</h1>
      <Accordion />
    </div>
  );
};

export default HizliErisimPage;
