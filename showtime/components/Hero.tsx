'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: '#0d0d0d',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background cinematic gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #0d0d0d 0%, #0d1a2e 40%, #0d0d0d 100%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      {/* Decorative orb */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(58,141,222,0.12) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left content */}
        <div>
          {/* Overline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              WHO WE ARE
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '20px',
              letterSpacing: '-0.5px',
            }}
          >
            Your Own Private Cinema{' '}
            <span style={{ color: '#3a8dde' }}>in the Heart of Pondicherry</span>
          </h1>

          {/* Tagline */}
          <p
            style={{
              color: '#aaaaaa',
              fontSize: '18px',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '480px',
            }}
          >
            Affordable luxury for private movie screenings, surprise celebrations, and unforgettable events.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <Link
              href="/booking"
              style={{
                backgroundColor: '#3a8dde',
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 600,
                transition: 'background-color 0.2s, transform 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#61b6ff';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3a8dde';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 600,
                border: '2px solid #3a8dde',
                transition: 'background-color 0.2s, transform 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(58,141,222,0.1)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '0',
              flexWrap: 'wrap',
              borderTop: '1px solid #2a2a2a',
              paddingTop: '28px',
            }}
          >
            {[
              { value: '500+', label: 'Happy Customers' },
              { value: '4.9★', label: 'Rating' },
              { value: '6–14', label: 'Guests per Booking' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  flex: '1 1 120px',
                  padding: '0 20px',
                  borderLeft: i > 0 ? '1px solid #2a2a2a' : 'none',
                  paddingLeft: i > 0 ? '20px' : '0',
                }}
              >
                <div style={{ color: '#3a8dde', fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px' }}>
                  {stat.value}
                </div>
                <div style={{ color: '#aaaaaa', fontSize: '13px', marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Cinematic visual placeholder */}
        <div
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: '4/3',
            background: 'linear-gradient(145deg, #0d1a2e 0%, #1a2a4a 40%, #0d1520 100%)',
            border: '1px solid #2a2a2a',
            boxShadow: '0 24px 80px rgba(58,141,222,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          role="img"
          aria-label="Private cinema theatre ambience"
        >
          {/* Film strip decorations */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '10px 0', opacity: 0.3 }} aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} style={{ height: '20px', backgroundColor: '#3a8dde', margin: '0 6px', borderRadius: '2px' }} />
            ))}
          </div>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '10px 0', opacity: 0.3 }} aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} style={{ height: '20px', backgroundColor: '#3a8dde', margin: '0 6px', borderRadius: '2px' }} />
            ))}
          </div>
          {/* Center screen icon */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '120px', height: '80px',
              border: '3px solid rgba(58,141,222,0.5)',
              borderRadius: '8px',
              margin: '0 auto 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(58,141,222,0.05)',
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(58,141,222,0.6)" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p style={{ color: 'rgba(97,182,255,0.7)', fontSize: '14px', fontWeight: 500 }}>Private Cinema Experience</p>
            <p style={{ color: 'rgba(170,170,170,0.5)', fontSize: '12px', marginTop: '4px' }}>Pondicherry</p>
          </div>
          {/* Glow overlay */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '60%',
            background: 'linear-gradient(to top, rgba(58,141,222,0.08), transparent)',
          }} aria-hidden="true" />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
