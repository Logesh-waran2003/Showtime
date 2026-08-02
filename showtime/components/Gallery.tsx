'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
  { src: '/images/birthday.jpg', alt: 'Birthday celebration at Showtime' },
  { src: '/images/anniversary.jpg', alt: 'Anniversary surprise setup' },
  { src: '/images/theatre-1.png', alt: 'Theatre interior with LED lights' },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80', alt: 'Celebration balloons', external: true },
  { src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80', alt: 'Party decorations', external: true },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', alt: 'Celebration lights', external: true },
];

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 5%' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '32px' }}>
        From our last few weeks
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}>
        {images.map((img, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              aspectRatio: '4/3',
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              transform: hovered === i ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
              {...(img.external ? { unoptimized: true } : {})}
            />
          </div>
        ))}
      </div>
      <p style={{ fontSize: '13px', color: '#666', marginTop: '20px' }}>
        Real celebrations. Not stock photos.
      </p>
      <style>{`
        @media (max-width: 768px) {
          section > div { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
