'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 999 }}>
      {/* Top utility bar */}
      <div
        style={{
          backgroundColor: '#1a1a1a',
          borderBottom: '1px solid #2a2a2a',
          padding: '8px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a
            href="tel:+919363799250"
            style={{ color: '#aaaaaa', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            +91 9363799250
          </a>
          <span style={{ color: '#aaaaaa', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
            </svg>
            Mon–Sun: 9am – 11pm
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#aaaaaa', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#3a8dde')}
            onMouseLeave={e => (e.currentTarget.style.color = '#aaaaaa')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#aaaaaa', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#3a8dde')}
            onMouseLeave={e => (e.currentTarget.style.color = '#aaaaaa')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://wa.me/919363799250" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: '#aaaaaa', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#25d366')}
            onMouseLeave={e => (e.currentTarget.style.color = '#aaaaaa')}
          >
            <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.738 5.474 2.027 7.78L0 32l8.44-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.22 19.403c-.396-.198-2.342-1.156-2.705-1.288-.362-.132-.625-.198-.888.198-.263.396-1.02 1.288-1.25 1.553-.23.263-.461.296-.857.099-.396-.198-1.672-.616-3.185-1.965-1.176-1.05-1.97-2.346-2.202-2.742-.23-.396-.024-.61.173-.808.178-.178.396-.461.594-.692.198-.23.263-.396.396-.66.132-.263.066-.494-.033-.692-.1-.198-.888-2.142-1.217-2.932-.32-.77-.646-.665-.888-.677l-.758-.013c-.263 0-.692.099-1.054.494-.363.396-1.383 1.352-1.383 3.295 0 1.942 1.416 3.818 1.614 4.083.198.263 2.786 4.254 6.75 5.963.944.408 1.681.65 2.256.832.948.3 1.812.258 2.493.157.761-.114 2.342-.957 2.672-1.882.329-.924.329-1.716.23-1.882-.099-.165-.362-.263-.758-.461z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        style={{
          backgroundColor: '#0d0d0d',
          borderBottom: '1px solid #2a2a2a',
          padding: scrolled ? '10px 24px' : '16px 24px',
          transition: 'padding 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #3a8dde, #61b6ff)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
              </svg>
            </div>
            <span style={{
              color: '#ffffff',
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '1px',
            }}>
              SHOW<span style={{ color: '#3a8dde' }}>TIME</span>
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#3a8dde')}
              onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            style={{
              backgroundColor: '#3a8dde',
              color: '#ffffff',
              padding: '10px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              transition: 'background-color 0.2s, transform 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#61b6ff';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3a8dde';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
          }}
        >
          <div style={{ width: '24px', height: '2px', backgroundColor: '#ffffff', marginBottom: '5px', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <div style={{ width: '24px', height: '2px', backgroundColor: '#ffffff', marginBottom: '5px', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
          <div style={{ width: '24px', height: '2px', backgroundColor: '#ffffff', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: '#1a1a1a',
          borderBottom: '1px solid #2a2a2a',
          padding: '16px 24px',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid #2a2a2a',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              backgroundColor: '#3a8dde',
              color: '#ffffff',
              padding: '12px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 600,
              textAlign: 'center',
              marginTop: '16px',
            }}
          >
            Book Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
