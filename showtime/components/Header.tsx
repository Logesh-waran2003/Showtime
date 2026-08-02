'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(13,13,13,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
      transition: 'background 0.3s, backdrop-filter 0.3s, border-bottom 0.3s',
      padding: '0 5%',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none', fontSize: '22px', fontWeight: 800, color: '#ffffff' }}>
          SHOW<span style={{ color: '#3a8dde' }}>TIME</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: '#cccccc',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              className="nav-link-desktop"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="tel:+919363799250"
            style={{
              color: '#aaaaaa',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
            }}
            className="phone-desktop"
          >
            📞 +91 93637 99250
          </a>
          <a
            href="/booking"
            style={{
              background: '#3a8dde',
              color: '#ffffff',
              padding: '8px 18px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
            className="book-btn-desktop"
          >
            Book Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px',
            }}
            className="hamburger-btn"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          padding: '16px 0',
          borderTop: '1px solid #1a1a1a',
          background: 'rgba(13,13,13,0.98)',
        }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                display: 'block',
                padding: '12px 0',
                color: '#cccccc',
                textDecoration: 'none',
                fontSize: '16px',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: '12px', display: 'flex', gap: '10px' }}>
            <a
              href="/booking"
              style={{
                background: '#3a8dde',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Book Now
            </a>
            <a
              href="https://wa.me/919363799250?text=Hi!%20I%20want%20to%20book%20a%20celebration"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25d366',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-link-desktop:hover { color: #ffffff !important; }
        @media (max-width: 768px) {
          .nav-link-desktop { display: none !important; }
          .phone-desktop { display: none !important; }
          .book-btn-desktop { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
