const services = [
  { emoji: '🎬', name: 'Private Screening', desc: '4K projector, Dolby surround sound' },
  { emoji: '🎂', name: 'Custom Cakes', desc: 'Themed cakes from ₹499' },
  { emoji: '🎈', name: 'Themed Decorations', desc: 'Balloons, LEDs, banners — your pick' },
  { emoji: '💐', name: 'Fresh Bouquets', desc: 'Roses, lilies, or mixed arrangements' },
  { emoji: '🎁', name: 'Surprise Gifts', desc: 'Personalised gift boxes available' },
  { emoji: '📷', name: 'Photography', desc: 'Professional shoot (add-on)' },
  { emoji: '🍿', name: 'Food & Beverages', desc: 'Popcorn, snacks, cold drinks, combos' },
  { emoji: '🌫️', name: 'Fog Entry', desc: 'Dramatic fog machine welcome!' },
];

export default function Services() {
  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#050507',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{
          color: '#e2e8f0',
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '48px',
        }}>
          What&apos;s included
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '28px 40px',
        }}>
          {services.map((s) => (
            <div key={s.name} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '28px', lineHeight: 1, flexShrink: 0 }}>{s.emoji}</span>
              <div>
                <p style={{ color: '#e2e8f0', fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>
                  {s.name}
                </p>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.5 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
