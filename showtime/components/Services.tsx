export default function Services() {
  const services = [
    { icon: '🎬', title: 'Private Screening', desc: '4K projector, 150" screen, Dolby sound system' },
    { icon: '🎈', title: 'Themed Decorations', desc: 'Balloons, LED lights, banners, custom themes' },
    { icon: '🎂', title: 'Custom Cakes', desc: 'Photo cakes, theme cakes from ₹499' },
    { icon: '🌫️', title: 'Fog Entry', desc: 'Dramatic entrance with smoke effects' },
    { icon: '💐', title: 'Fresh Bouquets', desc: 'Roses, mixed flowers from ₹399' },
    { icon: '📷', title: 'Photography', desc: 'Professional shots of your celebration' },
    { icon: '🍿', title: 'Food & Beverages', desc: 'Popcorn, drinks, snack platters' },
    { icon: '🎁', title: 'Surprise Gifts', desc: 'Wrapped premium surprise gifts' },
  ];

  return (
    <section style={{ padding: '80px 5%', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700, margin: '0 0 12px 0' }}>
        Everything You Need for a Perfect Celebration
      </h2>
      <p style={{ textAlign: 'center', color: '#aaaaaa', margin: '0 0 48px 0', fontSize: '16px' }}>
        Customize your experience with our add-on services
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '20px',
        marginBottom: '40px',
      }}>
        {services.map((service) => (
          <div key={service.title} style={{
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '12px',
            padding: '24px',
            transition: 'border-color 0.2s',
          }}>
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>{service.icon}</div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 8px 0', color: '#ffffff' }}>
              {service.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#aaaaaa', margin: 0, lineHeight: 1.5 }}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#aaaaaa', marginBottom: '12px', fontSize: '15px' }}>Not sure what to pick?</p>
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
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          📱 Chat with us on WhatsApp
        </a>
      </div>
    </section>
  );
}
