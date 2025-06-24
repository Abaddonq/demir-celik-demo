import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db/index';
import { theme } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const modeParam = searchParams.get('mode') || 'light';

  // modeParam string => boolean dönüşümü
  const mode = modeParam === 'dark' ? true : false;

  const data = await db
    .select()
    .from(theme)
    .where(and(
      eq(theme.mode, mode),
      eq(theme.id, 'default')
    ));

  if (data.length === 0) {
    return NextResponse.json({ error: 'Theme not found' }, { status: 404 });
  }

  return NextResponse.json(data[0]);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { mode: modeParam, primaryColor, secondaryColor, fontFamily, fontSizeBase } = body;

  // POST ile gelen mode parametresi string olarak gelebilir, boolean yapalım:
  const mode = modeParam === true || modeParam === 'true' || modeParam === 1 || modeParam === '1';

  await db
    .insert(theme)
    .values({
      id: 'default',
      mode,
      primaryColor,
      secondaryColor,
      fontFamily,
      fontSizeBase
    })
    .onConflictDoUpdate({
      target: theme.id,
      set: {
        mode,
        primaryColor,
        secondaryColor,
        fontFamily,
        fontSizeBase
      }
    });

  return NextResponse.json({ success: true });
}
