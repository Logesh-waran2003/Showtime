'use client';

import Link from 'next/link';

export default function Locations() {
  return (
    <section style={{ backgroundColor: '#0d0d0d', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              OUR LOCATION
            </span>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
          </div>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, margin: 0 }}>
            We Are Right Here in Pondicherry
          </h2>
          <p style={{ color: '#aaaaaa', fontSize: '16px', marginTop: '12px' }}>
            Bringing private cinema magic to the City of Joy
          </p>
        </div>

        {/* Location cards */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
          {/* Pondicherry card */}
          <div
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '16px',
              overflow: 'hidden',
              width: '340px',
              border: '1px solid #2a2a2a',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(58,141,222,0.2)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
            }}
          >
            {/* Image placeholder */}
            <div
              style={{
                height: '220px',
                background: 'linear-gradient(145deg, #0d1a2e 0%, #1a2a4a 50%, #0d1520 100%)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              role="img"
              aria-label="Pondicherry theatre location"
            >
              <svg width="60" height="60" viewBox="0 0 24 24" fill="rgba(58,141,222,0.4)" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '12px 16px',
                background: 'linear-gradient(to top, rgba(13,13,13,0.9), transparent)',
              }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#3a8dde',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '20px',
                  letterSpacing: '1px',
                }}>
                  NOW OPEN
                </span>
              </div>
            </div>

            <div style={{ padding: '24px' }}>
              <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                Pondicherry
              </h3>
              <p style={{ color: '#aaaaaa', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
                Our flagship private theatre in the heart of Pondicherry. Perfect for celebrations, screenings, and surprises.
              </p>
              <Link
                href="/booking"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  backgroundColor: '#3a8dde',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#61b6ff')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3a8dde')}
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Coming soon card */}
          <div
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '16px',
              overflow: 'hidden',
              width: '340px',
              border: '1px dashed #2a2a2a',
              opacity: 0.6,
            }}
          >
            <div
              style={{
                height: '220px',
                background: 'linear-gradient(145deg, #111111 0%, #1a1a1a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '12px',
              }}
              role="img"
              aria-label="Coming soon location"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(170,170,170,0.3)" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
              </svg>
              <span style={{ color: 'rgba(170,170,170,0.4)', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
                Coming Soon
              </span>
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{ color: '#aaaaaa', fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                More Cities
              </h3>
              <p style={{ color: '#555555', fontSize: '14px', lineHeight: '1.6' }}>
                We&apos;re expanding! New locations coming soon. Stay tuned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
