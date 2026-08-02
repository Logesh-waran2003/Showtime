'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 999,
      backgroundColor: '#050507',
      borderBottom: '1px solid #0c1220',
    }}>
      <nav style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            color: '#e2e8f0',
            fontSize: '20px',
            fontWeight: 800,
            letterSpacing: '-0.03em',
          }}>
            SHOW<span style={{ color: '#3a8dde' }}>TIME</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: '#64748b',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            style={{
              backgroundColor: '#3a8dde',
              color: '#ffffff',
              padding: '10px 22px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 600,
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#4da3f0')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3a8dde')}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
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
          <div style={{ width: '22px', height: '2px', backgroundColor: '#e2e8f0', marginBottom: '5px', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <div style={{ width: '22px', height: '2px', backgroundColor: '#e2e8f0', marginBottom: '5px', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <div style={{ width: '22px', height: '2px', backgroundColor: '#e2e8f0', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: '#0c1220',
          padding: '16px 24px 24px',
          borderBottom: '1px solid rgba(58,141,222,0.1)',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: '#e2e8f0',
                padding: '14px 0',
                fontSize: '15px',
                fontWeight: 500,
                borderBottom: '1px solid #0c1220',
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
              padding: '14px 20px',
              borderRadius: '6px',
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
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
