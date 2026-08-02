import Link from 'next/link';

export default function Locations() {
  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#050507',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '32px',
      }}>
        {/* Pondicherry */}
        <div style={{
          padding: '40px 32px',
          border: '1px solid rgba(58, 141, 222, 0.2)',
          borderRadius: '12px',
          backgroundColor: '#0c1220',
        }}>
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
            Open now · Bussy Street, White Town
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
              transition: 'background-color 0.2s',
            }}
          >
            Book
          </Link>
        </div>

        {/* Chennai */}
        <div style={{
          padding: '40px 32px',
          border: '1px solid rgba(100, 116, 139, 0.2)',
          borderRadius: '12px',
          backgroundColor: '#0c1220',
          opacity: 0.7,
        }}>
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
            Opening soon · T. Nagar
          </p>
          <Link
            href="/contact"
            style={{
              color: '#64748b',
              padding: '12px 28px',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: 600,
              border: '1px solid #64748b',
              display: 'inline-block',
              transition: 'color 0.2s',
            }}
          >
            Join waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
