import { ImageResponse } from 'next/og';

export const alt = 'Scott Romanoski Construction — Langhorne, PA';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
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
              fontSize: 56,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              maxWidth: '900px',
            }}
          >
            Scott Romanoski Construction
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.7)',
              marginTop: 20,
            }}
          >
            Licensed Residential Contractor — Bucks County & South Jersey
          </div>
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
