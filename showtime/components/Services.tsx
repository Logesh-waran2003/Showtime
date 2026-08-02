const services = [
  'Private Screening',
  'Decorations',
  'Cake & F&B',
  'Bouquet',
  'Surprise Gifts',
  'Photography',
];

export default function Services() {
  return (
    <section style={{
      padding: '64px 24px',
      backgroundColor: '#050507',
      textAlign: 'center',
    }}>
      <p style={{
        color: '#64748b',
        fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
        lineHeight: 2.2,
        maxWidth: '700px',
        margin: '0 auto',
      }}>
        {services.map((s, i) => (
          <span key={s}>
            <span className="service-link" style={{ color: '#e2e8f0', cursor: 'default' }}>{s}</span>
            {i < services.length - 1 && <span style={{ color: '#64748b' }}> &nbsp;·&nbsp; </span>}
          </span>
        ))}
      </p>
    </section>
  );
}
