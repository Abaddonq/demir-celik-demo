'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaSearch, FaTimesCircle } from 'react-icons/fa';
import { navItems } from './navData';
import MobileNavItem from './MobileNavItem';

interface Props {
  primary: string;
  secondary: string;
  bg: string;
}

export default function MobileNav({ primary, secondary, bg }: Props) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outsideClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', outsideClick);
    return () => document.removeEventListener('mousedown', outsideClick);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [open]);

  return (
    <>
      <div className="lg:hidden flex items-center gap-4">
        <button 
          onClick={() => setSearchOpen(!searchOpen)} 
          aria-label="Arama"
          className="p-2 rounded-full hover:bg-opacity-10 transition-all"
          style={{ backgroundColor: open ? 'transparent' : `${primary}20` }}
        >
          <FaSearch style={{ color: primary }} />
        </button>
        
        <button 
          onClick={() => setOpen(!open)} 
          aria-label="Menü"
          className="p-2 rounded-full hover:bg-opacity-10 transition-all"
          style={{ backgroundColor: `${primary}20` }}
        >
          {open ? (
            <FaTimes size={20} style={{ color: primary }} />
          ) : (
            <FaBars size={20} style={{ color: primary }} />
          )}
        </button>
      </div>

      {searchOpen && (
        <div className="lg:hidden px-4 py-3 border-t relative" style={{ borderColor: primary }}>
          <input
            type="text"
            placeholder="Site içi arama..."
            className="w-full px-4 py-3 border rounded-xl focus:outline-none"
            style={{ borderColor: primary }}
            autoFocus
          />
          <button 
            onClick={() => setSearchOpen(false)}
            className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            <FaTimesCircle />
          </button>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-40">
          {/* Overlay */}
          <div 
            className="absolute inset-0 backdrop-blur-md bg-opacity-50"
            onClick={() => setOpen(false)}
          />
          
          {/* Drawer */}
          <div
            ref={drawerRef}
            className="absolute top-0 right-0 h-full w-4/5 max-w-md bg-white shadow-lg overflow-y-auto flex flex-col"
            style={{ backgroundColor: bg }}
          >
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Menüyü kapat"
              >
                <FaTimes size={24} style={{ color: primary }} />
              </button>
            </div>

            <nav className="flex-1 px-6 py-4">
              {navItems.map((item, i) => (
                <MobileNavItem key={i} item={item} close={() => setOpen(false)} />
              ))}
            </nav>

            <div className="p-6 border-t">
              <Link
                href="/hizli-erisim/fiyat-listesi"
                className="block w-full text-white py-4 rounded-xl font-bold text-center transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: secondary }}
                onClick={() => setOpen(false)}
              >
                Fiyat Al
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}