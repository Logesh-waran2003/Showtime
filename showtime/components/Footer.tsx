export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #1a1a1a', padding: '40px 5%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontSize: '14px', color: '#999', margin: 0 }}>
            <span style={{ fontWeight: 700, color: '#fff' }}>SHOWTIME</span> · Private Theatre, Pondicherry
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a
              href="https://instagram.com/showtime_privatemovietheatre"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ fontSize: '13px', color: '#999', textDecoration: 'none' }}
            >
              Instagram
            </a>
            <a
              href="https://wa.me/919363799250"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ fontSize: '13px', color: '#999', textDecoration: 'none' }}
            >
              WhatsApp
            </a>
            <a
              href="https://facebook.com/showtimeprivatetheatre"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ fontSize: '13px', color: '#999', textDecoration: 'none' }}
            >
              Facebook
            </a>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #1a1a1a',
          paddingTop: '16px',
          marginTop: '16px',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
            © 2026 Showtime. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="/terms" style={{ fontSize: '12px', color: '#666', textDecoration: 'none' }}>Terms</a>
            <a href="/privacy" style={{ fontSize: '12px', color: '#666', textDecoration: 'none' }}>Privacy</a>
            <a href="/refund" style={{ fontSize: '12px', color: '#666', textDecoration: 'none' }}>Refund Policy</a>
          </div>
        </div>
      </div>
      <style>{`
        .footer-link:hover { text-decoration: underline !important; }
      `}</style>
    </footer>
  );
}
