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

  const links = [
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: '#0d0d0d',
      borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
      padding: scrolled ? '12px 5%' : '18px 5%',
      transition: 'padding 0.3s ease, border-color 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <a href="/" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
        SHOWTIME
      </a>

      <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <div className="desktop-nav" style={{ display: 'flex', gap: '24px' }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{ fontSize: '14px', color: '#999', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/booking"
          style={{
            backgroundColor: '#3a8dde',
            color: '#fff',
            padding: '8px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 500,
            textDecoration: 'none',
          }}
          className="desktop-nav"
        >
          Book
        </a>
        <button
          className="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          <span style={{ width: '22px', height: '2px', backgroundColor: '#fff', display: 'block' }} />
          <span style={{ width: '22px', height: '2px', backgroundColor: '#fff', display: 'block' }} />
          <span style={{ width: '22px', height: '2px', backgroundColor: '#fff', display: 'block' }} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#0d0d0d',
          borderBottom: '1px solid #1a1a1a',
          padding: '20px 5%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{ fontSize: '15px', color: '#999', textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/booking"
            style={{
              backgroundColor: '#3a8dde',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
              textAlign: 'center',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Book
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
