'use client'; // useState, event vs. için gerekli (app router kullanıyorsan)

import React from 'react';
import RecentIssues from '@/components/RecentIssues'; // ← componenti ekledik
import CustomButton from '@/components/CustomButton';
import Person1 from '@/components/Person1';
import LaboratoryList from '@/components/LaboratoryList';
const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RecentIssues />
      <CustomButton />
      <Person1
        person={{
          name: "John",
          surname: "Doe",
          title: "Uzman Biyolog",
          phone: "+90 555 555 55 55",
          email: "john.doe@example.com",
          image_url: "/images/person1.png"
        }}
      />
      <LaboratoryList
        items={[
          { slug: "mikrobiyoloji", title: "Mikrobiyoloji Laboratuvarı" },
          { slug: "kimya", title: "Kimya Laboratuvarı" },
          { slug: "fizik", title: "Fizik Laboratuvarı" }
        ]}
      />
      
    </div>
  );
};

export default page;
