'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
  { src: '/images/birthday.jpg', label: 'Birthday Surprise', local: true },
  { src: '/images/anniversary.jpg', label: 'Anniversary', local: true },
  { src: '/images/theatre-1.png', label: 'Theatre Interior', local: true },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80', label: 'Party Balloons', local: false },
  { src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80', label: 'Celebration Lights', local: false },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', label: 'Party Confetti', local: false },
];

function GalleryCard({ image }: { image: typeof images[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: '4/3',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #2a2a2a',
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
        boxShadow: hovered ? '0 0 20px rgba(58,141,222,0.3)' : 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <Image
        src={image.src}
        alt={image.label}
        fill
        style={{ objectFit: 'cover' }}
        unoptimized={!image.local}
      />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
        padding: '24px 12px 10px',
      }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>
          {image.label}
        </span>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section style={{ padding: '80px 5%', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700, margin: '0 0 8px 0' }}>
        Our Celebrations
      </h2>
      <p style={{ textAlign: 'center', color: '#aaaaaa', margin: '0 0 48px 0', fontSize: '16px' }}>
        Real moments from real celebrations
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}>
        {images.map((image) => (
          <GalleryCard key={image.src} image={image} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <a
          href="https://instagram.com/showtime_privatemovietheatre"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#3a8dde',
            fontSize: '15px',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          See more on Instagram →
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div:first-of-type {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
