'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#050507',
      borderTop: '1px solid #0c1220',
      padding: '48px 24px 32px',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        marginBottom: '40px',
      }}>
        {/* Brand + contact */}
        <div>
          <p style={{ color: '#e2e8f0', fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px' }}>
            SHOW<span style={{ color: '#3a8dde' }}>TIME</span>
          </p>
          <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.7 }}>
            Private theatre experiences.<br />
            Pondicherry &amp; Chennai.
          </p>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <a href="tel:+919363799250" style={{ color: '#64748b', fontSize: '14px' }}>+91 9363 799 250</a>
            <a href="mailto:hello@showtimepvt.in" style={{ color: '#64748b', fontSize: '14px' }}>hello@showtimepvt.in</a>
          </div>
        </div>

        {/* Links */}
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { label: 'About', href: '/about' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'Reviews', href: '/reviews' },
              { label: 'Book Now', href: '/booking' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <li key={link.href} style={{ marginBottom: '10px' }}>
                <Link
                  href={link.href}
                  style={{ color: '#64748b', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              style={{ color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://wa.me/919363799250" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              style={{ color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#25d366')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.738 5.474 2.027 7.78L0 32l8.44-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.22 19.403c-.396-.198-2.342-1.156-2.705-1.288-.362-.132-.625-.198-.888.198-.263.396-1.02 1.288-1.25 1.553-.23.263-.461.296-.857.099-.396-.198-1.672-.616-3.185-1.965-1.176-1.05-1.97-2.346-2.202-2.742-.23-.396-.024-.61.173-.808.178-.178.396-.461.594-.692.198-.23.263-.396.396-.66.132-.263.066-.494-.033-.692-.1-.198-.888-2.142-1.217-2.932-.32-.77-.646-.665-.888-.677l-.758-.013c-.263 0-.692.099-1.054.494-.363.396-1.383 1.352-1.383 3.295 0 1.942 1.416 3.818 1.614 4.083.198.263 2.786 4.254 6.75 5.963.944.408 1.681.65 2.256.832.948.3 1.812.258 2.493.157.761-.114 2.342-.957 2.672-1.882.329-.924.329-1.716.23-1.882-.099-.165-.362-.263-.758-.461z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              style={{ color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { label: 'Terms', href: '/terms' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Refund', href: '/refund' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: '#64748b', fontSize: '13px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: '1px solid #0c1220', paddingTop: '20px', textAlign: 'center' }}>
        <p style={{ color: '#64748b', fontSize: '12px' }}>
          © {new Date().getFullYear()} Showtime Private Theatre
        </p>
      </div>
    </footer>
  );
}
