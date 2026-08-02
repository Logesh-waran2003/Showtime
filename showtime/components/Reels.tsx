import Image from 'next/image';

const reels = [
  { src: '/images/birthday.jpg', label: 'Birthday Surprise Reaction' },
  { src: '/images/anniversary.jpg', label: 'Anniversary Setup' },
  { src: '/images/theatre-1.png', label: 'Theatre Tour' },
];

export default function Reels() {
  return (
    <section style={{
      padding: '80px 5%',
      background: '#0a0a0a',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700, margin: '0 0 8px 0' }}>
          Watch Our Celebrations
        </h2>
        <p style={{ textAlign: 'center', color: '#aaaaaa', margin: '0 0 48px 0', fontSize: '16px' }}>
          Real reactions, real surprises
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          {reels.map((reel) => (
            <a
              key={reel.src}
              href="https://instagram.com/showtime_privatemovietheatre"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'relative',
                aspectRatio: '9/16',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #2a2a2a',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              <Image
                src={reel.src}
                alt={reel.label}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}>
                  ▶
                </div>
                <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 500 }}>
                  Watch on Instagram
                </span>
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '16px 10px 10px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
              }}>
                <span style={{ fontSize: '11px', color: '#cccccc' }}>{reel.label}</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a
            href="https://instagram.com/showtime_privatemovietheatre"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#aaaaaa',
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            🎬 Follow <span style={{ color: '#3a8dde', fontWeight: 600 }}>@showtime_privatemovietheatre</span> for daily celebration videos
          </a>
          <div style={{
            display: 'inline-block',
            marginLeft: '12px',
            background: 'rgba(58,141,222,0.15)',
            border: '1px solid rgba(58,141,222,0.3)',
            borderRadius: '12px',
            padding: '3px 10px',
            fontSize: '12px',
            color: '#61b6ff',
          }}>
            13K followers
          </div>
        </div>
      </div>
    </section>
  );
}
