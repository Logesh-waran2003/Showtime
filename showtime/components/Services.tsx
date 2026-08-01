'use client';

export default function Services() {
  const services = [
    {
      num: '01',
      label: 'Private Screening',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
          <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
        </svg>
      ),
    },
    {
      num: '02',
      label: 'Food & Beverages',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
          <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
        </svg>
      ),
    },
    {
      num: '03',
      label: 'Bouquet / Flowers',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
          <path d="M12 22a10 10 0 100-20 10 10 0 000 20zm0-2a8 8 0 110-16 8 8 0 010 16zm1-11V7h-2v2H9a2 2 0 000 4h1v3h2v-3h1a2 2 0 000-4h-1z" />
        </svg>
      ),
    },
    {
      num: '04',
      label: 'Decorations',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
        </svg>
      ),
    },
    {
      num: '05',
      label: 'Surprise Gifts',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
          <path d="M20 6h-2.18c.07-.24.18-.46.18-.72a2.78 2.78 0 00-5.6 0c0 .26.11.48.18.72H10a2 2 0 00-2 2v2a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2zm-4.72-1.44a.78.78 0 111.56 0c0 .44-.35.72-.78.72s-.78-.28-.78-.72zM4 16V8H2v14a2 2 0 002 2h14v-2H4V16zm8 4H8v-8h4v8zm6 0h-4v-8h4v8z" />
        </svg>
      ),
    },
  ];

  return (
    <section style={{ backgroundColor: '#1a1a1a', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              WHAT WE OFFER
            </span>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
          </div>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, margin: 0 }}>
            Our Services
          </h2>
          <p style={{ color: '#aaaaaa', fontSize: '16px', marginTop: '12px' }}>
            Everything you need for a perfect private experience
          </p>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((service) => (
            <div
              key={service.num}
              style={{
                backgroundColor: '#262626',
                borderRadius: '12px',
                padding: '32px 20px',
                textAlign: 'center',
                border: '1px solid #2a2a2a',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(58,141,222,0.15)';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#3a8dde';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a2a';
              }}
            >
              {/* Icon */}
              <div style={{
                width: '72px', height: '72px',
                borderRadius: '50%',
                background: 'rgba(58,141,222,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
              }}>
                {service.icon}
              </div>
              {/* Number */}
              <div style={{ color: '#3a8dde', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', marginBottom: '8px' }}>
                {service.num}
              </div>
              {/* Label */}
              <h3 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600, margin: 0, lineHeight: '1.4' }}>
                {service.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
