import '../globals.css';
import { ThemeProvider } from '../context/themeContext';
import type { Theme } from '../context/themeContext';

async function getInitialTheme(): Promise<Theme> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/theme?mode=false`, { cache: 'no-store' });
  if (!res.ok) {
    // fallback theme
    return {
      id: 'default',
      mode: false,
      primaryColor: '#3b82f6',
      secondaryColor: '#fbbf24',
      fontFamily: 'Inter, sans-serif',
      fontSizeBase: '16px',
    };
  }
  const data = await res.json();
  return {
    ...data,
    mode: Boolean(data.mode),
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const initialTheme = await getInitialTheme();

  return (
    <html lang="tr">
      <body>
        <ThemeProvider initialTheme={initialTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
