import Image from 'next/image';

const defaultImages = [
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80', alt: 'Birthday celebration with LED decorations', span: 'span 2' },
  { src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80', alt: 'Theatre interior with ambient lighting', span: 'span 1' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80', alt: 'Couple screening night', span: 'span 1' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', alt: 'Anniversary surprise setup', span: 'span 1' },
  { src: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=800&q=80', alt: 'Premium screen setup', span: 'span 2' },
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
                className="gallery-item"
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: item.aspectRatio,
                }}
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

  // Homepage: asymmetric layout
  return (
    <section style={{ padding: '80px 24px', backgroundColor: '#050507' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
        }}>
          {defaultImages.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                gridColumn: img.span,
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                aspectRatio: img.span === 'span 2' ? '2/1' : '1/1',
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                unoptimized
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .gallery-item {
            grid-column: span 1 !important;
            aspect-ratio: 1/1 !important;
          }
        }
      `}</style>
    </section>
  );
}
