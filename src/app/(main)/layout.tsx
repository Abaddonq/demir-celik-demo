// app/layout.tsx
import '@/app/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/app/context/themeContext';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import { getInitialTheme } from '@/lib/theme'; 
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Demir Celik',
  description: 'Enstitu',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const initialTheme = await getInitialTheme();

  return (
    <html lang="tr">
      <body>
        <ThemeProvider initialTheme={initialTheme}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
