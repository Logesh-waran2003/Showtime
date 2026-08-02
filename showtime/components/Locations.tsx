'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Locations() {
  return (
    <section style={{ backgroundColor: '#0d0d0d', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              OUR LOCATIONS
            </span>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
          </div>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, margin: 0 }}>
            Private Cinemas in Pondicherry &amp; Chennai
          </h2>
          <p style={{ color: '#aaaaaa', fontSize: '16px', marginTop: '12px' }}>
            Bringing private cinema magic to South India
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
            {/* Pondicherry image */}
            <div
              style={{
                height: '220px',
                position: 'relative',
              }}
              role="img"
              aria-label="Pondicherry theatre location"
            >
              <Image
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80"
                alt="Movie theatre interior in Pondicherry"
                fill
                unoptimized
                style={{ objectFit: 'cover' }}
              />
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

          {/* Chennai card */}
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
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(222,141,58,0.2)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
            }}
          >
            {/* Chennai image */}
            <div
              style={{
                height: '220px',
                position: 'relative',
              }}
              role="img"
              aria-label="Chennai theatre location"
            >
              <Image
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80"
                alt="Cinema screen in Chennai location"
                fill
                unoptimized
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '12px 16px',
                background: 'linear-gradient(to top, rgba(13,13,13,0.9), transparent)',
              }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#de8d3a',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '20px',
                  letterSpacing: '1px',
                }}>
                  OPENING SOON
                </span>
              </div>
            </div>

            <div style={{ padding: '24px' }}>
              <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                Chennai
              </h3>
              <p style={{ color: '#aaaaaa', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
                Our newest location, opening soon in Chennai. Join the waitlist for exclusive early-bird pricing.
              </p>
              <Link
                href="/contact"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  backgroundColor: '#de8d3a',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e5a55c')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#de8d3a')}
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
