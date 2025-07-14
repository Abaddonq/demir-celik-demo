import '@/app/globals.css';
import type { Metadata, Viewport } from 'next'; // Viewport tipini ekledik
import { ThemeProvider } from '@/app/context/themeContext';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import { getInitialTheme } from '@/lib/theme'; 
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Demir Celik',
  description: 'Enstitu',
};

// Viewport ayarlarını ekledik (Mobil uyumluluk için kritik)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const initialTheme = await getInitialTheme();

  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <ThemeProvider initialTheme={initialTheme}>
          <Header />
          <main className="flex-grow px-4 md:px-8 lg:px-16 py-6 w-full max-w-7xl mx-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}