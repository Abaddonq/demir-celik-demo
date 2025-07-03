// components/PageHeader.tsx
import React from 'react';

type PageHeaderProps = {
  title: string;
  imageUrl: string;
};

export default function PageHeader({ title, imageUrl }: PageHeaderProps) {
  return (
    <div
      className="relative w-full h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // يجعل الصورة ثابتة عند التمرير  
      }}
    >
      <h1 className="text-6xl font-bold text-white  px-6 py-3 rounded-xl">
        {title}
      </h1>
    </div>
  );
}       

