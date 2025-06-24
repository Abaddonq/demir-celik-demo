'use client'; // useState, event vs. için gerekli (app router kullanıyorsan)

import React from 'react';
import RecentIssues from '@/components/RecentIssues'; // ← componenti ekledik
import CustomButton from '@/components/CustomButton';
const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RecentIssues />
      <CustomButton/>
    </div>
  );
};

export default page;
