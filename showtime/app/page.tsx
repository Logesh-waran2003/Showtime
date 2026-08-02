import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import Locations from '@/components/Locations';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Social proof — one line, no section wrapper bloat */}
      <div style={{
        textAlign: 'center',
        padding: '32px 24px',
        color: '#64748b',
        fontSize: '15px',
        letterSpacing: '0.02em',
        borderBottom: '1px solid #0c1220',
      }}>
        500+ celebrations &nbsp;•&nbsp; 4.9★ Google &nbsp;•&nbsp; Pondicherry &amp; Chennai
      </div>

      <Gallery />

      {/* Mid-page CTA — after they've seen the proof */}
      <div style={{
        textAlign: 'center',
        padding: '64px 24px',
        backgroundColor: '#050507',
      }}>
        <p style={{ color: '#e2e8f0', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '24px' }}>
          Seen enough?
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/booking"
            className="btn-primary-hover"
            style={{
              backgroundColor: '#3a8dde',
              color: '#ffffff',
              padding: '14px 36px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              display: 'inline-block',
              transition: 'background-color 0.2s, transform 0.2s',
            }}
          >
            Book Now
          </Link>
          <a
            href="https://wa.me/919363799250"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#25d366',
              padding: '14px 36px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              border: '1px solid #25d366',
              display: 'inline-block',
              transition: 'background-color 0.2s',
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <Testimonials />
      <Services />
      <Locations />

      {/* Final CTA */}
      <section style={{
        padding: '100px 24px',
        textAlign: 'center',
        backgroundColor: '#0c1220',
        borderTop: '1px solid rgba(58, 141, 222, 0.1)',
      }}>
        <h2 style={{
          color: '#e2e8f0',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '16px',
        }}>
          Ready?
        </h2>
        <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '40px' }}>
          Pick a date, pick a package. We handle the rest.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/booking"
            style={{
              backgroundColor: '#3a8dde',
              color: '#ffffff',
              padding: '16px 44px',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 600,
              display: 'inline-block',
              transition: 'background-color 0.2s',
            }}
          >
            Book Now
          </Link>
          <a
            href="https://wa.me/919363799250"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#25d366',
              padding: '16px 44px',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 600,
              border: '1px solid #25d366',
              display: 'inline-block',
              transition: 'background-color 0.2s',
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
