import '../globals.css';
import { ThemeProvider } from '../context/themeContext';
import type { Theme } from '../context/themeContext';

async function getInitialTheme() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/theme?mode=false`, { cache: 'no-store' }); 
  // burada 'false' = light mod için

  if (!res.ok) {
    return {
      id: 'default',
      mode: false, // light = false
      primaryColor: '#3b82f6',
      secondaryColor: '#fbbf24',
      fontFamily: 'Inter, sans-serif',
      fontSizeBase: '16px',
    } as Theme;
  }

  const fetchedTheme = await res.json();

  const safeTheme: Theme = {
    ...fetchedTheme,
    mode: fetchedTheme.mode === true || fetchedTheme.mode === 'true' ? true : false
    // hem boolean hem string olursa ikisini de kapsar
  };

  return safeTheme;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = await getInitialTheme();

  return (
    <html lang="tr">
      <body>
        <ThemeProvider initialTheme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
