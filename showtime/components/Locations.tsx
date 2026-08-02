import Image from 'next/image';
import Link from 'next/link';

export default function Locations() {
  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#050507',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          color: '#e2e8f0',
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '48px',
        }}>
          Our Locations
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Pondicherry */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(58, 141, 222, 0.15)',
            backgroundColor: '#0c1220',
            minHeight: '260px',
          }}>
            <div style={{ position: 'relative', minHeight: '260px' }}>
              <Image
                src="/images/theatre-1.png"
                alt="Showtime Private Theatre Pondicherry interior"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{
                display: 'inline-block',
                width: 'fit-content',
                backgroundColor: 'rgba(37, 211, 102, 0.1)',
                color: '#25d366',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                marginBottom: '16px',
              }}>
                NOW OPEN
              </span>
              <h3 style={{
                color: '#e2e8f0',
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '8px',
              }}>
                Pondicherry
              </h3>
              <p style={{ color: '#64748b', fontSize: '15px', marginBottom: '24px' }}>
                Bussy Street, White Town · Private screening for 6–14 guests
              </p>
              <Link
                href="/booking"
                style={{
                  backgroundColor: '#3a8dde',
                  color: '#ffffff',
                  padding: '12px 28px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: 600,
                  display: 'inline-block',
                  width: 'fit-content',
                  transition: 'background-color 0.2s',
                }}
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Chennai */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(100, 116, 139, 0.15)',
            backgroundColor: '#0c1220',
            minHeight: '260px',
          }}>
            <div style={{
              minHeight: '260px',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '48px', opacity: 0.4 }}>🎬</span>
            </div>
            <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{
                display: 'inline-block',
                width: 'fit-content',
                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                color: '#fbbf24',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                marginBottom: '16px',
              }}>
                OPENING SOON
              </span>
              <h3 style={{
                color: '#e2e8f0',
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '8px',
              }}>
                Chennai
              </h3>
              <p style={{ color: '#64748b', fontSize: '15px', marginBottom: '24px' }}>
                T. Nagar · Same premium experience, new city
              </p>
              <Link
                href="/contact"
                style={{
                  color: '#e2e8f0',
                  padding: '12px 28px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: 600,
                  border: '1px solid #64748b',
                  display: 'inline-block',
                  width: 'fit-content',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
