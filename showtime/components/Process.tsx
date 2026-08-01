'use client';

import Link from 'next/link';

const steps = [
  {
    num: '01',
    tag: 'LOCATION / THEATRE',
    title: 'Choose Your Venue',
    desc: 'Select your preferred location and theatre type from our available options in Pondicherry.',
  },
  {
    num: '02',
    tag: 'TIME SLOT',
    title: 'Pick Your Slot',
    desc: 'Book your preferred time slot and choose from our decoration packages to set the mood.',
  },
  {
    num: '03',
    tag: '50% PAYMENT',
    title: 'Confirm Booking',
    desc: 'Make a 50% advance payment to confirm your booking. The balance is paid on arrival.',
  },
  {
    num: '04',
    tag: 'ENJOY',
    title: 'Celebrate!',
    desc: 'Arrive and celebrate with your loved ones in your own private cinematic paradise.',
  },
];

export default function Process() {
  return (
    <section style={{ backgroundColor: '#0d0d0d', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              PROCESS
            </span>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
          </div>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, margin: 0 }}>
            How It Works
          </h2>
          <p style={{ color: '#aaaaaa', fontSize: '16px', marginTop: '12px' }}>
            Your perfect celebration in 4 simple steps
          </p>
        </div>

        {/* Steps timeline */}
        <div style={{ position: 'relative' }}>
          {/* Connector line (desktop) */}
          <div
            style={{
              position: 'absolute',
              top: '32px',
              left: 'calc(12.5% + 20px)',
              right: 'calc(12.5% + 20px)',
              height: '2px',
              background: 'linear-gradient(to right, #3a8dde, #61b6ff)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            position: 'relative',
            zIndex: 1,
          }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  padding: '28px 20px',
                  border: '1px solid #2a2a2a',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#3a8dde';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a2a';
                }}
              >
                {/* Number badge */}
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#3a8dde',
                  color: '#ffffff',
                  fontSize: '20px',
                  fontWeight: 800,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: '0 4px 20px rgba(58,141,222,0.4)',
                }}>
                  {i + 1}
                </div>

                {/* Tag */}
                <div style={{ color: '#3a8dde', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', marginBottom: '10px', textTransform: 'uppercase' }}>
                  {step.tag}
                </div>

                {/* Title */}
                <h3 style={{ color: '#ffffff', fontSize: '17px', fontWeight: 700, marginBottom: '10px' }}>
                  {step.title}
                </h3>

                {/* Desc */}
                <p style={{ color: '#aaaaaa', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
                  {step.desc}
                </p>

                <Link
                  href="/booking"
                  style={{
                    color: '#3a8dde',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#61b6ff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#3a8dde')}
                >
                  Book Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .connector-line { display: none; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
