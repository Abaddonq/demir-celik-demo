// src/app/iletisim/page.tsx
import React from 'react';
import FAQ from '@/components/FAQ';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export const metadata = {
  title: 'İletişim – Demir Çelik Enstitüsü',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center bg-gray-100 pt-0 pb-10 sm:pt-6 sm:pb-16">
      {/* Google Harita */}
      <div className="w-full h-[300px] sm:h-[400px]">
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

      {/* Bilgi Kartı */}
      <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 -mt-8 sm:-mt-12 w-[calc(100%-2rem)] sm:w-11/12 md:w-2/3 lg:w-1/2 z-10">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Demir Çelik Enstitüsü</h1>

        <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
          <li className="flex items-start">
            <FaMapMarkerAlt className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
            <div>
              <strong>Adres:</strong><br />
              Karabük Üniversitesi Demir Çelik Enstitüsü, <br />
              Kılavuzlar Mh., 78100 Karabük, Türkiye
            </div>
          </li>
          
          <li className="flex items-center">
            <FaPhoneAlt className="text-blue-600 mr-2 flex-shrink-0" />
            <div>
              <strong>Telefon:</strong>{' '}
              <a href="tel:+903704186001" className="text-blue-600 hover:underline">
                +90 370 418 6001
              </a>
            </div>
          </li>
          
          <li className="flex items-center">
            <FaClock className="text-blue-600 mr-2 flex-shrink-0" />
            <div>
              <strong>Çalışma Saatleri:</strong> Pazartesi – Cuma, 08:30 – 17:30
            </div>
          </li>
          
          <li className="flex items-center">
            <FaEnvelope className="text-blue-600 mr-2 flex-shrink-0" />
            <div>
              <strong>E-posta:</strong>{' '}
              <a href="mailto:info@karabuk.edu.tr" className="text-blue-600 hover:underline">
                info@karabuk.edu.tr
              </a>
            </div>
          </li>
        </ul>

        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center space-x-4 mt-5 sm:mt-6">
          <a 
            href="https://www.facebook.com/kbudemircelikenstitusu" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.instagram.com/demircelikenstitusukbu/#" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* SSS Bölümü */}
      <div className="w-full mt-10 sm:mt-16 px-2 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 sm:mb-8 text-blue-900">
            Sıkça Sorulan Sorular
          </h2>
          <FAQ />
        </div>
      </div>
    </div>
  );
}