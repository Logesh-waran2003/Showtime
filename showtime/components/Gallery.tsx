'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryItems as defaultItems, type GalleryItem } from '@/lib/galleryData';

interface GalleryGridProps {
  items: GalleryItem[];
  onOpen: (item: GalleryItem) => void;
}

function GalleryGrid({ items, onOpen }: GalleryGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '16px',
    }}>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onOpen(item)}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          style={{
            aspectRatio: item.aspectRatio,
            borderRadius: '12px',
            border: hoveredId === item.id ? '1px solid #3a8dde' : '1px solid #2a2a2a',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            transform: hoveredId === item.id ? 'scale(1.02)' : 'scale(1)',
            boxShadow: hoveredId === item.id ? '0 12px 40px rgba(58,141,222,0.2)' : 'none',
          }}
          role="button"
          aria-label={`Open ${item.label}`}
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && onOpen(item)}
        >
          <Image
            src={item.image}
            alt={item.label}
            fill
            unoptimized
            style={{ objectFit: 'cover' }}
          />
          {/* Dark overlay with label on hover */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: hoveredId === item.id ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease',
          }}>
            <span style={{
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
              padding: '0 12px',
              opacity: hoveredId === item.id ? 1 : 0,
              transition: 'opacity 0.3s ease',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}>
              {item.label}
            </span>
          </div>
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
              borderRadius: '16px',
              width: 'min(600px, 90vw)',
              aspectRatio: lightboxItem.aspectRatio,
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid #3a8dde',
              boxShadow: '0 24px 80px rgba(58,141,222,0.3)',
            }}
          >
            <Image
              src={lightboxItem.image}
              alt={lightboxItem.label}
              fill
              unoptimized
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
