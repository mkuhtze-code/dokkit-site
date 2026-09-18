import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/** Favicon: blue rounded mark with white dock shape (matches dokkit-mark). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1e6be6',
          borderRadius: 8,
        }}
      >
        <div
          style={{
            width: 18,
            height: 7,
            background: '#ffffff',
            borderRadius: 4,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
