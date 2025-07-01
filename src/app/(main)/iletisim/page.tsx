// src/app/iletisim/page.tsx
import React from 'react';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'İletişim – Demir Çelik Enstitüsü',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center bg-gray-100 pt-6 pb-16">
      {/* خريطة Google */}
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.934048190462!2d32.62784811562766!3d41.2009238792735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408436f540acd903%3A0xd65bcf8dc23fc975!2sKarab%C3%BCk%20%C3%9Cniversitesi%20Demir%20%C3%87elik%20Enstit%C3%BCs%C3%BC!5e0!3m2!1sen!2str!4v1624987654321!5m2!1sen!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* بطاقة المعلومات */}
      <div className="bg-white shadow-lg rounded-xl p-6 -mt-12 w-11/12 md:w-2/3 lg:w-1/2 z-10">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Demir Çelik Enstitüsü</h1>

        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Adres:</strong><br />
            Karabük Üniversitesi Demir Çelik Enstitüsü, <br />
            Kılavuzlar Mh., 78100 Karabük, Türkiye
          </li>
          <li>
            <strong>Telefon:</strong>{' '}
            <a href="tel:+903704186001" className="text-blue-600 hover:underline">
              +90 370 418 6001
            </a>
          </li>
          <li>
            <strong>Çalışma Saatleri:</strong> Pazartesi – Cuma, 08:30 – 17:30
          </li>
          <li>
            <strong>E-posta:</strong>{' '}
            <a href="mailto:info@karabuk.edu.tr" className="text-blue-600 hover:underline">
              info@karabuk.edu.tr
            </a>
          </li>
        </ul>

        {/* أيقونات التواصل (اختياري) */}
        <div className="flex space-x-4 mt-6">
          <a href="#" className="text-gray-500 hover:text-blue-600">
            {/* فيسبوك */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              {/* ...path */}
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600">
            {/* تويتر */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              {/* ...path */}
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600">
            {/* إنستاجرام */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              {/* ...path */}
            </svg>
          </a>
        </div>
      </div>

      {/* قسم الأسئلة الشائعة */}
      <div className="w-full mt-16 px-4">
        <FAQ />
      </div>
    </div>
  );
}
