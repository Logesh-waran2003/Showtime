'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '600px', overflow: 'hidden' }}>
      <Image
        src="/images/birthday.jpg"
        alt="Private theatre celebration with decorations and lights"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)',
      }} />
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 8%',
        maxWidth: '700px',
      }}>
        <p style={{ fontSize: '14px', color: '#b0b0b0', marginBottom: '16px', letterSpacing: '0.02em' }}>
          Private theatre celebrations in Pondicherry
        </p>
        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          margin: '0 0 24px 0',
        }}>
          Walk in with a plan.<br />
          Walk out with a memory.
        </h1>
        <p style={{ fontSize: '17px', color: '#b0b0b0', lineHeight: 1.6, maxWidth: '500px', margin: '0 0 32px 0' }}>
          Birthdays. Anniversaries. Proposals. Date nights. Surprises that make people cry happy tears. 6–14 guests, 2–3 hours, starting ₹1,999.
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href="/booking"
            style={{
              backgroundColor: '#3a8dde',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Book a celebration
          </a>
          <a
            href="https://wa.me/919363799250?text=Hi!%20I%27d%20like%20to%20book%20a%20celebration"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#25d366',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0C7.16 0 0 7.16 0 16c0 2.82.74 5.47 2.03 7.78L0 32l8.44-2.01A15.93 15.93 0 0016 32c8.84 0 16-7.16 16-16S24.84 0 16 0zm7.22 19.4c-.4-.2-2.34-1.16-2.7-1.29-.36-.13-.63-.2-.89.2s-1.02 1.29-1.25 1.55c-.23.26-.46.3-.86.1-.4-.2-1.67-.62-3.18-1.97-1.18-1.05-1.97-2.35-2.2-2.74-.23-.4-.02-.61.17-.81.18-.18.4-.46.6-.69.2-.23.26-.4.4-.66.13-.26.07-.49-.03-.69-.1-.2-.89-2.14-1.22-2.93-.32-.77-.65-.67-.89-.68l-.76-.01c-.26 0-.69.1-1.05.49-.36.4-1.38 1.35-1.38 3.3 0 1.94 1.42 3.82 1.61 4.08.2.26 2.79 4.25 6.75 5.96.94.41 1.68.65 2.26.83.95.3 1.81.26 2.49.16.76-.11 2.34-.96 2.67-1.88.33-.92.33-1.72.23-1.88-.1-.17-.36-.26-.76-.46z"/>
            </svg>
            WhatsApp us
          </a>
        </div>
        <p style={{ fontSize: '13px', color: '#666', marginTop: '16px' }}>
          Free cancellation 48 hrs before · 50% deposit only
        </p>
        <a href="tel:+919363799250" style={{ fontSize: '13px', color: '#3a8dde', textDecoration: 'none', marginTop: '8px' }}>
          or call +91 9363 799 250
        </a>
      </div>
    </section>
  );
}
