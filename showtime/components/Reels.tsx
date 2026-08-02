import Image from 'next/image';

const reelImages = [
  '/images/birthday.jpg',
  '/images/anniversary.jpg',
  '/images/theatre-1.png',
];

export default function Reels() {
  return (
    <section style={{ backgroundColor: '#111111', padding: '80px 5%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '32px' }}>
          See it happen
        </h2>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {reelImages.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/showtime_privatemovietheatre"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'relative',
                aspectRatio: '9/16',
                maxHeight: '400px',
                width: '225px',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'block',
              }}
            >
              <Image
                src={src}
                alt="Showtime celebration reel"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)" />
                  <polygon points="20,16 34,24 20,32" fill="white" />
                </svg>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <p style={{ fontSize: '14px', color: '#888', margin: '0 0 8px 0' }}>
            @showtime_privatemovietheatre · 13K followers · 234 posts
          </p>
          <a
            href="https://instagram.com/showtime_privatemovietheatre"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '14px', color: '#3a8dde', textDecoration: 'none' }}
          >
            Watch celebration videos →
          </a>
        </div>
      </div>
    </section>
  );
}
