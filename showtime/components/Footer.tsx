export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid #1a1a1a',
      padding: '60px 5% 24px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '40px',
        marginBottom: '40px',
      }}>
        {/* Column 1: Logo + Description */}
        <div>
          <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>
            SHOW<span style={{ color: '#3a8dde' }}>TIME</span>
          </div>
          <p style={{ color: '#aaaaaa', fontSize: '14px', lineHeight: 1.7, margin: '0 0 20px 0' }}>
            Pondicherry&apos;s favourite private theatre for birthdays, anniversaries, proposals &amp; surprise celebrations.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href="https://instagram.com/showtime_privatemovietheatre"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#1a1a1a',
                border: '1px solid #2a2a2a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '16px',
              }}
              aria-label="Instagram"
            >
              📸
            </a>
            <a
              href="https://wa.me/919363799250?text=Hi!%20I%20want%20to%20book%20a%20celebration"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#1a1a1a',
                border: '1px solid #2a2a2a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '16px',
              }}
              aria-label="WhatsApp"
            >
              💬
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 16px 0', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Quick Links
          </h4>
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Booking', href: '/booking' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Contact', href: '/contact' },
            { label: 'Reviews', href: '/reviews' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                display: 'block',
                color: '#aaaaaa',
                textDecoration: 'none',
                fontSize: '14px',
                padding: '4px 0',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 16px 0', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Contact Us
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="tel:+919363799250" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: '14px' }}>
              📞 +91 93637 99250
            </a>
            <a
              href="https://wa.me/919363799250?text=Hi!%20I%20want%20to%20book%20a%20celebration"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: '14px' }}
            >
              💬 WhatsApp Us
            </a>
            <span style={{ color: '#aaaaaa', fontSize: '14px' }}>
              📍 Pondicherry, Tamil Nadu
            </span>
            <span style={{ color: '#aaaaaa', fontSize: '14px' }}>
              🕘 Mon–Sun 9am–11pm
            </span>
          </div>

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
              padding: '10px 18px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              marginTop: '16px',
            }}
          >
            📱 Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid #1a1a1a',
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <span style={{ color: '#666666', fontSize: '13px' }}>
          © 2024 SHOWTIME Private Theatre. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="/terms" style={{ color: '#666666', textDecoration: 'none', fontSize: '13px' }}>Terms</a>
          <a href="/privacy" style={{ color: '#666666', textDecoration: 'none', fontSize: '13px' }}>Privacy</a>
          <a href="/refund" style={{ color: '#666666', textDecoration: 'none', fontSize: '13px' }}>Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}
