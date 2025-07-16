'use client';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

interface Props {
  primary: string;
  secondary: string;
  bg: string;
}

export default function TopBar({ primary, secondary, bg }: Props) {
  return (
    <div style={{ backgroundColor: primary }} className="hidden lg:flex text-white text-sm justify-between px-4 py-2 items-center">
      <div className="flex items-center space-x-4">
        <span className="flex items-center gap-1"><FaPhoneAlt className="text-red-500" /> Destek: +90 370 418 6001</span>
        <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-red-500" /> Karabük Üniversitesi Demir Çelik Enstitüsü</span>
        <span className="flex items-center gap-1"><FaClock className="text-red-500" /> Pazartesi - Cuma 08:30 - 17:30</span>
      </div>

      <div className="flex items-center space-x-3">
        {[
          { href: 'https://www.facebook.com/kbudemircelikenstitusu', icon: <FaFacebookF /> },
          { href: 'https://www.instagram.com/demircelikenstitusukbu/#', icon: <FaInstagram /> },
          { href: 'https://www.linkedin.com/company/demir-%C3%A7elik-enstit%C3%BCs%C3%BC/', icon: <FaLinkedinIn /> },
        ].map(({ href, icon }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center transition"
            style={{ backgroundColor: bg, color: primary }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = secondary)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bg)}
          >
            {icon}
          </a>
        ))}
        <input type="text" placeholder="Arama..." className="bg-white text-black px-2 py-1 rounded" />
      </div>
    </div>
  );
}