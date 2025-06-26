'use client'; // Bu çok önemli! useState kullandığımız için gerekli

import React from 'react';
import Accordion from '@/components/Accordion';
import HistoryCard from '@/components/HistoryCard'

const HizliErisimPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Hızlı Erişim</h1>
      <Accordion />
      <HistoryCard/>
      
      
    </div>
  );
};

export default HizliErisimPage;
