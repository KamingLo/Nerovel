import { NextRequest } from 'next/server';
import ytdl from '@distube/ytdl-core';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  const type = searchParams.get('type') || 'audio'; // 'audio' | 'video'

  if (!url || !ytdl.validateURL(url)) {
    return new Response(JSON.stringify({ error: 'Invalid or missing URL' }), { status: 400 });
  }

  const info = await ytdl.getInfo(url);
  const title = info.videoDetails.title.replace(/[^a-zA-Z0-9 ]/g, '');

  const stream = ytdl(url, {
    quality: type === 'video' ? 'highestvideo' : 'highestaudio',
    filter: type === 'video' ? 'videoandaudio' : 'audioonly',
  });

  // Bungkus Node stream ke Web Streams API
  const readable = new ReadableStream({
    start(controller) {
      stream.on('data', (chunk) => controller.enqueue(chunk));
      stream.on('end', () => controller.close());
      stream.on('error', (err) => controller.error(err));
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Disposition': `attachment; filename="${title}.mp3`,
      'Content-Type': 'audio/mpeg',
    },
  });
}
