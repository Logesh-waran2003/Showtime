import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse photos from Showtime Private Theatre — birthdays, anniversaries, surprise parties, and more in Pondicherry.',
};

export default function GalleryPage() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      <section
        style={{
          background: 'linear-gradient(135deg, #0d0d0d 0%, #0d1a2e 60%, #0d0d0d 100%)',
          padding: '64px 24px',
          borderBottom: '1px solid #2a2a2a',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, margin: '0 0 16px' }}>
            Our Gallery
          </h1>
          <p style={{ color: '#aaaaaa', fontSize: '17px', margin: 0 }}>
            A glimpse into the celebrations, smiles, and stories we&apos;ve been part of
          </p>
        </div>
      </section>

      <Gallery />
    </div>
  );
}
