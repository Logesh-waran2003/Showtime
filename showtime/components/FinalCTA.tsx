import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section style={{
      padding: '100px 24px',
      textAlign: 'center',
      background: 'linear-gradient(180deg, #0c1220 0%, #0a1628 50%, #0c1220 100%)',
      borderTop: '1px solid rgba(58, 141, 222, 0.08)',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{
          color: '#e2e8f0',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '12px',
        }}>
          Ready to celebrate?
        </h2>
        <p style={{
          color: '#64748b',
          fontSize: '18px',
          marginBottom: '40px',
        }}>
          Book your private theatre in 2 minutes
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
          <Link
            href="/booking"
            style={{
              backgroundColor: '#3a8dde',
              color: '#ffffff',
              padding: '16px 40px',
              borderRadius: '8px',
              fontSize: '17px',
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
              padding: '16px 40px',
              borderRadius: '8px',
              fontSize: '17px',
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

        <p style={{
          color: '#94a3b8',
          fontSize: '14px',
        }}>
          Free cancellation 48hrs before · ₹299 deposit only
        </p>
      </div>
    </section>
  );
}
