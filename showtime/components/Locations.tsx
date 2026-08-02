export default function Locations() {
  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 5%', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ display: 'flex', gap: '48px', alignItems: 'start' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>Pondicherry</h3>
            <span style={{ fontSize: '13px', color: '#4ade80' }}>Open now</span>
          </div>
          <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>
            Mon–Sun, 9 am–11 pm · <a href="tel:+919363799250" style={{ color: '#888', textDecoration: 'none' }}>+91 9363 799 250</a>
          </p>
        </div>
        <div style={{ width: '1px', backgroundColor: '#1a1a1a', alignSelf: 'stretch' }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>Chennai</h3>
            <span style={{ fontSize: '13px', color: '#f59e0b' }}>Opening soon</span>
          </div>
          <a
            href="https://wa.me/919363799250?text=Hi!%20I%27d%20like%20to%20join%20the%20Chennai%20waitlist"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '14px', color: '#3a8dde', textDecoration: 'none' }}
          >
            Join the waitlist →
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          section > div { flex-direction: column !important; gap: 32px !important; }
          section > div > div:nth-child(2) { width: 100% !important; height: 1px !important; align-self: auto !important; }
        }
      `}</style>
    </section>
  );
}
