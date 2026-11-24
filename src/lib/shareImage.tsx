import fs from 'fs';
import path from 'path';
import { ImageResponse } from 'next/og';

export const shareImageSize = { width: 1200, height: 630 };

// Monaspace Xenon without its ligature tables, which the image renderer rejects.
function font(weight: 400 | 700) {
  return fs.readFileSync(
    path.join(process.cwd(), `src/app/fonts/share-image-${weight}.woff`),
  );
}

export function shareImage(title: string, footer: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#2d353b',
          color: '#d3c6aa',
          fontFamily: 'Xenon',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 60 ? 52 : 64,
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.03em',
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#a7c080' }}>{footer}</div>
      </div>
    ),
    {
      ...shareImageSize,
      fonts: [
        { name: 'Xenon', data: font(400), weight: 400 },
        { name: 'Xenon', data: font(700), weight: 700 },
      ],
    },
  );
}
