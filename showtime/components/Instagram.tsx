export default function Instagram() {
  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#0c1220',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{
          color: '#e2e8f0',
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '8px',
        }}>
          See Our Celebrations
        </h2>
        <p style={{
          color: '#64748b',
          fontSize: '15px',
          marginBottom: '32px',
        }}>
          Watch our celebrations on Instagram{' '}
          <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(58, 141, 222, 0.1)',
            color: '#3a8dde',
            padding: '2px 10px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: 600,
          }}>
            13K+ followers
          </span>
        </p>

        {/* Instagram embeds */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginBottom: '32px',
        }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#050507',
              border: '1px solid rgba(58, 141, 222, 0.08)',
            }}>
              <iframe
                src="https://www.instagram.com/showtime_privatemovietheatre/embed"
                width="100%"
                height="480"
                frameBorder={0}
                scrolling="no"
                allowTransparency={true}
                style={{ border: 'none', display: 'block' }}
                title={`Showtime Instagram feed ${i}`}
              />
            </div>
          ))}
        </div>

        {/* Follow link */}
        <a
          href="https://www.instagram.com/showtime_privatemovietheatre/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#3a8dde',
            fontSize: '16px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s',
          }}
        >
          Follow us @showtime_privatemovietheatre →
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
