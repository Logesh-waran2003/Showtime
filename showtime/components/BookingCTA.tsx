export default function BookingCTA() {
  return (
    <section style={{ backgroundColor: '#0d0d0d', borderTop: '1px solid #1a1a1a', padding: '60px 5%', textAlign: 'center' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 12px 0' }}>
        Book your celebration
      </h2>
      <p style={{ fontSize: '14px', color: '#888', margin: '0 0 24px 0' }}>
        WhatsApp is fastest. Or use the booking form.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <a
          href="https://wa.me/919363799250?text=Hi!%20I%27d%20like%20to%20book%20a%20celebration"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#25d366',
            color: '#fff',
            padding: '14px 24px',
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
          WhatsApp +91 9363 799 250
        </a>
        <a
          href="/booking"
          style={{
            backgroundColor: '#3a8dde',
            color: '#fff',
            padding: '14px 24px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Book online
        </a>
      </div>
      <p style={{ fontSize: '13px', color: '#666', marginTop: '16px' }}>
        ₹1,999 onwards · 50% deposit · Free cancellation
      </p>
    </section>
  );
}
