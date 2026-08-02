const services = [
  { title: 'Private screening', desc: '4K projector, 150" screen, Dolby sound' },
  { title: 'Decorations', desc: 'Balloons, LED strips, banners, themed setups' },
  { title: 'Cake & food', desc: 'Custom cakes from ₹499, popcorn, platters' },
  { title: 'Fog entry', desc: 'Smoke machine entrance for the surprise reveal' },
  { title: 'Flowers & gifts', desc: 'Fresh bouquets, wrapped surprise gifts' },
  { title: 'Photography', desc: 'Professional photos of the celebration' },
];

export default function Services() {
  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 5%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '60px', alignItems: 'start' }}>
        <div>
          <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 20px 0' }}>
            We handle everything.
          </h2>
          <p style={{ fontSize: '15px', color: '#999', lineHeight: 1.7, margin: '0 0 24px 0' }}>
            You show up. We set up the screen, decorations, cake, fog, flowers — whatever makes them gasp when they walk in. Just tell us the occasion and the budget.
          </p>
          <a
            href="https://wa.me/919363799250?text=Hi!%20I%20need%20help%20planning%20a%20celebration"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '15px', color: '#3a8dde', textDecoration: 'none' }}
          >
            Tell us what you need →
          </a>
        </div>
        <div>
          {services.map((item) => (
            <div key={item.title} style={{ borderLeft: '4px solid #3a8dde', paddingLeft: '16px', marginBottom: '16px' }}>
              <p style={{ fontSize: '15px', fontWeight: 600, color: '#fff', margin: '0 0 4px 0' }}>{item.title}</p>
              <p style={{ fontSize: '13px', color: '#888', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          section > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
