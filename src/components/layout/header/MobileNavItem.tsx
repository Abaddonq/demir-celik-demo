'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import type { NavItem } from './header.types';

interface Props {
  item: NavItem;
  close: () => void;
}

export default function MobileNavItem({ item, close }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <div className="flex items-center justify-between py-4">
        {item.href ? (
          <Link 
            href={item.href} 
            onClick={close} 
            className="flex-1 py-2 font-semibold text-gray-800 hover:text-blue-600 transition-colors text-lg"
          >
            {item.title}
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex-1 text-left py-2 font-semibold text-gray-800 flex items-center justify-between w-full"
          >
            <span>{item.title}</span>
            {item.subItems && (
              <span className="ml-2">
                {open ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
              </span>
            )}
          </button>
        )}
      </div>

      {open && item.subItems && (
        <div className="pb-3 pl-4 space-y-2">
          {item.subItems.map((sub) => (
            <Link 
              key={sub.title} 
              href={sub.href!} 
              onClick={close} 
              className="block py-2.5 text-gray-600 hover:text-blue-500 transition-colors"
            >
              {sub.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}