import { ImageResponse } from 'next/og';
import { BLOG_POSTS } from '@/content';

export const alt = 'Blog post — Scott Romanoski Construction';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateImageMetadata() {
  return [{ id: 'og', size, contentType, alt }];
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.id === slug);
  const title = post?.title ?? 'Blog';
  const category = post?.category ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#1B2A4A',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              maxWidth: '1000px',
            }}
          >
            {title}
          </div>
          {category && (
            <div
              style={{
                fontSize: 24,
                color: 'rgba(255,255,255,0.7)',
                marginTop: 20,
              }}
            >
              {category}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              width: '100%',
              height: 4,
              backgroundColor: '#B08D57',
              marginBottom: 20,
            }}
          />
          <div style={{ fontSize: 20, color: '#B08D57', fontWeight: 600 }}>
            Scott Romanoski Construction · Langhorne, PA
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
