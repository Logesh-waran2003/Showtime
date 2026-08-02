'use client';

import Image from 'next/image';

const galleryImages = [
  { src: '/images/anniversary.jpg', alt: 'Anniversary celebration at Showtime', colSpan: 2, rowSpan: 2, local: true },
  { src: '/images/theatre-1.png', alt: 'Showtime theatre interior', colSpan: 1, rowSpan: 1, local: true },
  { src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80', alt: 'Cinema auditorium', colSpan: 1, rowSpan: 1, local: false },
  { src: '/images/birthday.jpg', alt: 'Birthday celebration at Showtime', colSpan: 1, rowSpan: 2, local: true },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80', alt: 'Celebration decorations with lights', colSpan: 1, rowSpan: 1, local: false },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80', alt: 'Couple date night', colSpan: 1, rowSpan: 1, local: false },
  { src: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=800&q=80', alt: 'Premium theatre screen', colSpan: 2, rowSpan: 1, local: false },
];

interface GalleryProps {
  items?: { id: number; aspectRatio: string; label: string; image: string }[];
}

export default function Gallery({ items }: GalleryProps) {
  // If the /gallery page passes full items, render them in a uniform grid
  if (items) {
    return (
      <section style={{ padding: '64px 24px', backgroundColor: '#050507' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '8px',
          }}>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: item.aspectRatio,
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={undefined}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  unoptimized
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Homepage: asymmetric grid
  return (
    <section style={{ padding: '80px 24px', backgroundColor: '#050507' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '200px',
          gap: '6px',
        }}>
          {galleryImages.map((img, i) => (
            <div
              key={i}
              style={{
                gridColumn: `span ${img.colSpan}`,
                gridRow: `span ${img.rowSpan}`,
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)'; }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                unoptimized={!img.local}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 160px !important;
          }
        }
        @media (max-width: 480px) {
          section > div > div {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 200px !important;
          }
          section > div > div > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
