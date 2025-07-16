'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import type { NavItem as TNavItem } from './header.types';

interface Props {
  item: TNavItem;
  primaryColor: string;
  secondaryColor: string;
}

export default function NavItem({ item, primaryColor, secondaryColor }: Props) {
  const [open, setOpen] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const close = () => timer.current && clearTimeout(timer.current);

  return (
    <div
      onMouseEnter={() => {
        close();
        setOpen(true);
      }}
      onMouseLeave={() => timer.current = setTimeout(() => setOpen(false), 150)}
      className="relative"
    >
      {item.href ? (
        <Link
          href={item.href}
          style={{ color: primaryColor }}
          className="px-3 py-2 rounded-md text-sm font-medium hover:text-orange-500 transition-colors"
        >
          {item.title}
        </Link>
      ) : (
        <button
          type="button"
          style={{ color: primaryColor }}
          className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium hover:text-orange-500 transition-colors"
        >
          {item.title} <FaChevronDown className="text-xs" />
        </button>
      )}

      {open && item.subItems && (
        <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-30 ring-1 ring-black ring-opacity-5">
          {item.subItems.map((sub) => (
            <Link
              key={sub.title}
              href={sub.href!}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {sub.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}