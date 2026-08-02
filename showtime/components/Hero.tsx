'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '600px', overflow: 'hidden' }}>
      <Image
        src="/images/birthday.jpg"
        alt="Birthday celebration at Showtime Private Theatre"
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
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 8%',
        maxWidth: '800px',
      }}>
        <span style={{
          display: 'inline-block',
          background: 'rgba(58,141,222,0.15)',
          border: '1px solid rgba(58,141,222,0.4)',
          borderRadius: '20px',
          padding: '6px 16px',
          fontSize: '14px',
          color: '#61b6ff',
          marginBottom: '20px',
          width: 'fit-content',
        }}>
          🌟 Pondicherry&apos;s #1 Private Theatre
        </span>

        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 800,
          lineHeight: 1.1,
          margin: '0 0 16px 0',
          color: '#ffffff',
        }}>
          Your Celebration.<br />Our Cinema.
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#cccccc',
          lineHeight: 1.6,
          margin: '0 0 12px 0',
          maxWidth: '560px',
        }}>
          Private movie theatre for birthdays, anniversaries, proposals, date nights &amp; surprise parties. 6-14 guests.
        </p>

        <p style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#3a8dde',
          margin: '0 0 28px 0',
        }}>
          Starting from ₹1,999 for 2 hours
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <a
            href="/booking"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#3a8dde',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
          >
            Book Now →
          </a>
          <a
            href="https://wa.me/919363799250?text=Hi!%20I%20want%20to%20book%20a%20celebration"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#25d366',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
          >
            📱 WhatsApp Us
          </a>
        </div>

        <p style={{ fontSize: '14px', color: '#999999', margin: 0 }}>
          ✅ Free cancellation 48hrs before · 50% deposit only
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div:last-of-type {
            align-items: center;
            text-align: center;
            padding: 0 5% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
