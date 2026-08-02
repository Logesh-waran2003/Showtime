import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '600px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Background image */}
      <Image
        src="/images/birthday.jpg"
        alt="Birthday celebration at Showtime Private Theatre"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Gradient overlay: solid black on left fading to transparent */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)',
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px',
        width: '100%',
      }}>
        <div style={{ maxWidth: '560px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
          }}>
            <span style={{ display: 'block', color: '#e2e8f0' }}>Your Celebration.</span>
            <span style={{ display: 'block', color: '#3a8dde' }}>Our Cinema.</span>
          </h1>

          <p style={{
            color: '#cbd5e1',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.6,
            marginBottom: '8px',
          }}>
            Private theatre for birthdays, anniversaries, proposals & date nights
          </p>

          <p style={{
            color: '#64748b',
            fontSize: '15px',
            marginBottom: '32px',
            fontWeight: 500,
          }}>
            📍 Pondicherry & Chennai
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
            <Link
              href="/booking"
              style={{
                backgroundColor: '#3a8dde',
                color: '#ffffff',
                padding: '14px 36px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                display: 'inline-block',
                transition: 'background-color 0.2s',
              }}
            >
              Book Now
            </Link>
            <a
              href="https://wa.me/919363799250"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#25d366',
                padding: '14px 36px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                border: '1px solid rgba(37, 211, 102, 0.5)',
                backgroundColor: 'rgba(37, 211, 102, 0.05)',
                display: 'inline-block',
                transition: 'background-color 0.2s',
              }}
            >
              WhatsApp Us
            </a>
          </div>

          {/* Trust line */}
          <p style={{
            color: '#94a3b8',
            fontSize: '14px',
            letterSpacing: '0.01em',
          }}>
            13K+ Instagram followers · 4.9★ · Starting from ₹999
          </p>
        </div>
      </div>
    </section>
  );
}
