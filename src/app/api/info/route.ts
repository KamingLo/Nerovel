import { NextRequest, NextResponse } from 'next/server';
import ytdl from '@distube/ytdl-core';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url || !ytdl.validateURL(url)) {
    return NextResponse.json({ error: 'Invalid or missing URL' }, { status: 400 });
  }

  try {
    const info = await ytdl.getInfo(url);
    const videoDetails = info.videoDetails;

    return NextResponse.json({
      title: videoDetails.title,
      thumbnail: videoDetails.thumbnails.at(-1)?.url,
      lengthSeconds: videoDetails.lengthSeconds,
      author: videoDetails.author.name,
      views: videoDetails.viewCount,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch video info' }, { status: 500 });
  }
}
