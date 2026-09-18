import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** Apple touch icon — paper background + Dokkit mark. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f1efe6',
        }}
      >
        <div
          style={{
            width: 128,
            height: 128,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1e6be6',
            borderRadius: 32,
          }}
        >
          <div
            style={{
              width: 72,
              height: 28,
              background: '#ffffff',
              borderRadius: 14,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
