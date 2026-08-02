export default function BookingCTA() {
  return (
    <section style={{
      padding: '80px 5%',
      background: 'linear-gradient(180deg, #0d1a2e 0%, #0d0d0d 100%)',
      textAlign: 'center',
    }}>
      <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 12px 0' }}>
        Ready to Celebrate?
      </h2>
      <p style={{ color: '#aaaaaa', fontSize: '16px', margin: '0 0 36px 0' }}>
        Book your private theatre in under 2 minutes
      </p>

      <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
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
          }}
        >
          🎬 Book Now
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
          }}
        >
          📱 WhatsApp
        </a>
        <a
          href="tel:+919363799250"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'transparent',
            color: '#ffffff',
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            textDecoration: 'none',
            border: '1px solid #2a2a2a',
          }}
        >
          📞 Call Now
        </a>
      </div>

      <p style={{ color: '#777777', fontSize: '14px', margin: 0 }}>
        ₹1,999 onwards · 50% deposit · Free cancellation 48hrs before
      </p>
    </section>
  );
}
