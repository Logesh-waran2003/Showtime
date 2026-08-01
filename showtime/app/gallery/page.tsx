import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import { galleryItems } from '@/lib/galleryData';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse photos from Showtime Private Theatre — birthdays, anniversaries, surprise parties, and more in Pondicherry.',
};

// Extended gallery with 12 items for the full gallery page
const fullGalleryItems = [
  ...galleryItems,
  { id: 9, aspectRatio: '4/3' as const, label: 'Romantic Date Night' },
  { id: 10, aspectRatio: '3/4' as const, label: 'Kids Birthday Party' },
  { id: 11, aspectRatio: '1/1' as const, label: 'Floral Decoration Setup' },
  { id: 12, aspectRatio: '16/9' as const, label: 'Private Screening Hall' },
];

export default function GalleryPage() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      {/* Hero banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0d0d0d 0%, #0d1a2e 60%, #0d0d0d 100%)',
          padding: '64px 24px',
          borderBottom: '1px solid #2a2a2a',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              OUR GALLERY
            </span>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
          </div>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, margin: '0 0 16px' }}>
            Happy Faces
          </h1>
          <p style={{ color: '#aaaaaa', fontSize: '17px', margin: 0 }}>
            A glimpse into the celebrations, smiles, and stories we&apos;ve been part of
          </p>
        </div>
      </section>

      <Gallery items={fullGalleryItems} />
    </div>
  );
}
