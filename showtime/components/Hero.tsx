'use client';

import Link from 'next/link';
import Image from 'next/image';

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
            Your Celebration.{' '}
            <span style={{ color: '#3a8dde' }}>Our Cinema.</span>
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
            Private theatre experiences for birthdays, anniversaries, proposals &amp; date nights in Pondicherry &amp; Chennai
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
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

          {/* Starting price */}
          <p style={{ color: '#61b6ff', fontSize: '15px', fontWeight: 600, marginBottom: '48px' }}>
            Starting from ₹999
          </p>

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

        {/* Right: Real cinema image */}
        <div
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: '4/3',
            boxShadow: '0 24px 80px rgba(58,141,222,0.25), 0 0 60px rgba(58,141,222,0.1)',
          }}
          role="img"
          aria-label="Private cinema theatre with colorful LED lights"
        >
          <Image
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80"
            alt="Private cinema theatre with rows of seats and colorful ambient lighting"
            fill
            unoptimized
            style={{
              objectFit: 'cover',
              borderRadius: '16px',
            }}
          />
          {/* Glow overlay */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(13,13,13,0.6), transparent)',
            borderRadius: '0 0 16px 16px',
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
