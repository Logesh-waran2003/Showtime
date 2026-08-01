'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d0d0d', borderTop: '1px solid #2a2a2a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'linear-gradient(135deg, #3a8dde, #61b6ff)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
                </svg>
              </div>
              <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, letterSpacing: '1px' }}>
                SHOW<span style={{ color: '#3a8dde' }}>TIME</span>
              </span>
            </div>
            <p style={{ color: '#aaaaaa', fontSize: '14px', lineHeight: '1.7', maxWidth: '260px' }}>
              Pondicherry&apos;s premier private theatre experience — crafted for celebrations, surprises, and unforgettable moments.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'Book Now', href: '/booking' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: '10px' }}>
                  <Link
                    href={link.href}
                    style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#3a8dde')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#aaaaaa')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Legal links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Legal &amp; Social
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Refund Policy', href: '/refund' },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: '10px' }}>
                  <Link
                    href={link.href}
                    style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#3a8dde')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#aaaaaa')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '20px' }}>
              <p style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Follow Us</p>
              <div style={{ display: 'flex', gap: '14px' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  style={{ color: '#aaaaaa', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#3a8dde')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#aaaaaa')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  style={{ color: '#aaaaaa', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#3a8dde')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#aaaaaa')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://wa.me/919363799250" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                  style={{ color: '#aaaaaa', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#25d366')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#aaaaaa')}
                >
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                    <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.738 5.474 2.027 7.78L0 32l8.44-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.22 19.403c-.396-.198-2.342-1.156-2.705-1.288-.362-.132-.625-.198-.888.198-.263.396-1.02 1.288-1.25 1.553-.23.263-.461.296-.857.099-.396-.198-1.672-.616-3.185-1.965-1.176-1.05-1.97-2.346-2.202-2.742-.23-.396-.024-.61.173-.808.178-.178.396-.461.594-.692.198-.23.263-.396.396-.66.132-.263.066-.494-.033-.692-.1-.198-.888-2.142-1.217-2.932-.32-.77-.646-.665-.888-.677l-.758-.013c-.263 0-.692.099-1.054.494-.363.396-1.383 1.352-1.383 3.295 0 1.942 1.416 3.818 1.614 4.083.198.263 2.786 4.254 6.75 5.963.944.408 1.681.65 2.256.832.948.3 1.812.258 2.493.157.761-.114 2.342-.957 2.672-1.882.329-.924.329-1.716.23-1.882-.099-.165-.362-.263-.758-.461z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Reach Us */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Reach Us
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#3a8dde" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:+919363799250" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: '14px' }}>
                  +91 9363799250
                </a>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#3a8dde" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:hello@showtimepvt.in" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: '14px' }}>
                  hello@showtimepvt.in
                </a>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#3a8dde" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span style={{ color: '#aaaaaa', fontSize: '14px', lineHeight: '1.5' }}>
                  Pondicherry, Tamil Nadu,<br />India — 605001
                </span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#3a8dde" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
                </svg>
                <span style={{ color: '#aaaaaa', fontSize: '14px' }}>Mon–Sun: 9am – 11pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #2a2a2a',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: '#aaaaaa', fontSize: '13px' }}>
            © {new Date().getFullYear()} Showtime Private Theatre. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Refund', href: '/refund' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#3a8dde')}
                onMouseLeave={e => (e.currentTarget.style.color = '#aaaaaa')}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
