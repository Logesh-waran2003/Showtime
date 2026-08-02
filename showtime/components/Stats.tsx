export default function Stats() {
  const stats = [
    { number: '500+', label: 'Happy Celebrations' },
    { number: '4.9★', label: 'Google Rating' },
    { number: '13K+', label: 'Instagram Followers' },
    { number: '6-14', label: 'Guests Per Booking' },
  ];

  return (
    <section style={{
      width: '100%',
      background: '#0d0d0d',
      borderTop: '1px solid #1a1a1a',
      borderBottom: '1px solid #1a1a1a',
      padding: '48px 5%',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '48px',
        flexWrap: 'wrap',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center', minWidth: '140px' }}>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#3a8dde', lineHeight: 1.2 }}>
              {stat.number}
            </div>
            <div style={{ fontSize: '14px', color: '#aaaaaa', marginTop: '4px' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
