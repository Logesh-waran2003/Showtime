'use client';

import { useState } from 'react';
import { galleryItems as defaultItems, type GalleryItem } from '@/lib/galleryData';

const gradients = [
  'linear-gradient(145deg, #0d1a2e 0%, #1a2a4a 100%)',
  'linear-gradient(145deg, #1a0d2e 0%, #2a1a4a 100%)',
  'linear-gradient(145deg, #0d2e1a 0%, #1a4a2a 100%)',
  'linear-gradient(145deg, #2e1a0d 0%, #4a2a1a 100%)',
  'linear-gradient(145deg, #0d1a2e 0%, #2a3a5a 100%)',
  'linear-gradient(145deg, #1a2e0d 0%, #2a4a1a 100%)',
  'linear-gradient(145deg, #0d2a2e 0%, #1a4a4a 100%)',
  'linear-gradient(145deg, #2e0d1a 0%, #4a1a2a 100%)',
  'linear-gradient(145deg, #0d1a2e 0%, #1a2a4a 100%)',
  'linear-gradient(145deg, #1a0d2e 0%, #2a1a4a 100%)',
  'linear-gradient(145deg, #0d2e1a 0%, #1a4a2a 100%)',
  'linear-gradient(145deg, #2e1a0d 0%, #4a2a1a 100%)',
];

function CameraIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(97,182,255,0.4)" aria-hidden="true">
      <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z" />
    </svg>
  );
}

interface GalleryGridProps {
  items: GalleryItem[];
  onOpen: (item: GalleryItem) => void;
}

function GalleryGrid({ items, onOpen }: GalleryGridProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '16px',
    }}>
      {items.map((item, i) => (
        <div
          key={item.id}
          onClick={() => onOpen(item)}
          style={{
            aspectRatio: item.aspectRatio,
            background: gradients[i % gradients.length],
            borderRadius: '12px',
            border: '1px solid #2a2a2a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '10px',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
          role="button"
          aria-label={`Open ${item.label}`}
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && onOpen(item)}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(58,141,222,0.2)';
            (e.currentTarget as HTMLDivElement).style.borderColor = '#3a8dde';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
            (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a2a';
          }}
        >
          <CameraIcon />
          <span style={{ color: 'rgba(170,170,170,0.6)', fontSize: '12px', fontWeight: 500, textAlign: 'center', padding: '0 12px' }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Gallery({ items = defaultItems }: { items?: GalleryItem[] }) {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);

  return (
    <section style={{ backgroundColor: '#0d0d0d', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              GALLERY
            </span>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
          </div>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, margin: 0 }}>
            Happy Faces
          </h2>
          <p style={{ color: '#aaaaaa', fontSize: '16px', marginTop: '12px' }}>
            Moments we&apos;ve helped create — click any image to enlarge
          </p>
        </div>

        <GalleryGrid items={items} onOpen={openLightbox} />
      </div>

      {/* Lightbox modal */}
      {lightboxItem && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.label}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            style={{
              position: 'absolute', top: '20px', right: '20px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none', color: '#ffffff',
              width: '44px', height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: gradients[(lightboxItem.id - 1) % gradients.length],
              borderRadius: '16px',
              width: 'min(600px, 90vw)',
              aspectRatio: lightboxItem.aspectRatio,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '16px',
              border: '1px solid #3a8dde',
              boxShadow: '0 24px 80px rgba(58,141,222,0.3)',
            }}
          >
            <CameraIcon />
            <span style={{ color: 'rgba(170,170,170,0.8)', fontSize: '14px', fontWeight: 500 }}>
              {lightboxItem.label}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
