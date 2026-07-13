import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { locales } from '@/i18n';

export const alt = 'StellaDev';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const FRAME_POLYGONS = [
  '70.09,20.28 79.72,20.28 79.72,60.47 83.92,56.27 83.92,16.08 65.89,16.08',
  '79.72,70.09 79.72,79.72 39.53,79.72 43.73,83.92 83.92,83.92 83.92,65.89',
  '29.91,79.72 20.28,79.72 20.28,39.53 16.08,43.73 16.08,83.92 34.11,83.92',
  '20.28,29.91 20.28,20.28 60.47,20.28 56.27,16.08 16.08,16.08 16.08,34.11',
];

const PRISM_POLYGONS = [
  '85.22,43.19 92.03,50.00 63.61,78.42 69.55,78.42 97.97,50.00 85.22,37.25',
  '56.81,85.22 50.00,92.03 21.58,63.61 21.58,69.55 50.00,97.97 62.75,85.22',
  '14.78,56.81 7.97,50.00 36.39,21.58 30.45,21.58 2.03,50.00 14.78,62.75',
  '43.19,14.78 50.00,7.97 78.42,36.39 78.42,30.45 50.00,2.03 37.25,14.78',
];

// 워드마크·태그라인은 영문 고정 — 여기서 싣는 Sora 에는 한글 글리프가 없다.
export default async function Image() {
  const fontsDir = join(process.cwd(), 'src/app/fonts');
  const [sora400, sora700] = await Promise.all([
    readFile(join(fontsDir, 'Sora-Regular.ttf')),
    readFile(join(fontsDir, 'Sora-Bold.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #14161B 0%, #1D2030 55%, #2A2F55 100%)',
          fontFamily: 'Sora',
        }}
      >
        <svg width="200" height="200" viewBox="0 0 100 100">
          {FRAME_POLYGONS.map((points) => (
            <polygon key={points} points={points} fill="#F4F4F2" />
          ))}
          {PRISM_POLYGONS.map((points) => (
            <polygon key={points} points={points} fill="#7B87FF" />
          ))}
        </svg>
        <div style={{ display: 'flex', marginTop: 48, fontSize: 92, letterSpacing: -3 }}>
          <span style={{ color: '#F4F4F2', fontWeight: 400 }}>Stella</span>
          <span style={{ color: '#F4F4F2', fontWeight: 700 }}>Dev</span>
        </div>
        <div style={{ marginTop: 20, fontSize: 34, color: '#7B87FF' }}>
          Think · Build · Innovate
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Sora', data: sora400, weight: 400, style: 'normal' },
        { name: 'Sora', data: sora700, weight: 700, style: 'normal' },
      ],
    }
  );
}
