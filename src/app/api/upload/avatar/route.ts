import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;
 
  try {
   const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // İsteğe bağlı: Dosya adını veya tipi kontrol edebilirsiniz
        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
          tokenPayload: JSON.stringify({ userId: 'some-user-id' }), // Opsiyonel token yükü
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Yükleme tamamlandığında veritabanına kaydedebilirsiniz.
        // Ancak TipTap görselleri için bunu page.tsx'ten sonra yapacağız.
        console.log('Blob upload completed', blob, tokenPayload);
      },
    });
 
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }, // The webhook will retry 5 times waiting for a 200
    );
  }
}