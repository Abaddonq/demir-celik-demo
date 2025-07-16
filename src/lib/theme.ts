import { db } from '../db';
import { theme } from '../db/schema';
import { eq } from 'drizzle-orm';
import type { Theme } from '@/app/context/themeContext';

export async function getInitialTheme(): Promise<Theme> {
  const result = await db
    .select()
    .from(theme)
    .where(eq(theme.id, 'default'))
    .limit(1);

  const row = result[0];

  return row ?? {
    id: 'default',
    mode: false,
    primaryColor: '#3b82f6',
    secondaryColor: '#fbbf24',
    fontFamily: 'Inter, sans-serif',
    fontSizeBase: '16px',
  };
}

export { theme };
