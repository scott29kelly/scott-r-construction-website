import { ImageResponse } from 'next/og';
import { PROJECT_CASE_STUDIES } from '@/content';

export const alt = 'Project — Scott Romanoski Construction';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateImageMetadata() {
  return [{ id: 'og', size, contentType, alt }];
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECT_CASE_STUDIES.find((p) => p.id === slug);
  const title = project?.title ?? 'Project';
  const location = project?.location ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#242424',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              maxWidth: '1000px',
            }}
          >
            {title}
          </div>
          {location && (
            <div
              style={{
                fontSize: 26,
                color: 'rgba(255,255,255,0.7)',
                marginTop: 20,
              }}
            >
              {location}
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
