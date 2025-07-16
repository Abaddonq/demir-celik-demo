'use client';
import NavItem from './NavItem';
import Link from 'next/link';
import { navItems } from './navData';

interface Props {
  primary: string;
  secondary: string;
}

export default function DesktopNav({ primary, secondary }: Props) {
  return (
    <nav className="hidden lg:flex gap-1 items-center">
      {navItems.map((item, i) => (
        <NavItem key={i} item={item} primaryColor={primary} secondaryColor={secondary} />
      ))}
      <Link
        href="/hizli-erisim/fiyat-listesi"
        className="ml-4 text-white px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity"
        style={{ backgroundColor: secondary }}
      >
        Fiyat Al
      </Link>
    </nav>
  );
}