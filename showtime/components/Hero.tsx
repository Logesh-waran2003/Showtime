import Link from 'next/link';

export default function Hero() {
  // Split headline into individual characters for the reveal animation
  const headline = 'Your celebration. Our cinema.';
  const chars = headline.split('').map((char, i) => (
    <span key={i} style={{ display: 'inline-block' }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '80px 24px 60px',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#050507',
    }}>
      {/* Subtle radial glow — the screen reflecting on theatre walls */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(58, 141, 222, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Headline with letter-by-letter reveal */}
      <h1
        className="hero-reveal"
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: '#e2e8f0',
          position: 'relative',
          zIndex: 1,
          maxWidth: '800px',
        }}
      >
        {chars}
      </h1>

      {/* Subline */}
      <p className="fade-in" style={{
        color: '#64748b',
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        marginTop: '24px',
        maxWidth: '560px',
        position: 'relative',
        zIndex: 1,
      }}>
        Private theatre for birthdays, anniversaries &amp; surprises • Pondicherry &amp; Chennai
      </p>

      {/* Buttons */}
      <div className="fade-in" style={{
        display: 'flex',
        gap: '16px',
        marginTop: '40px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <Link
          href="/booking"
          style={{
            backgroundColor: '#3a8dde',
            color: '#ffffff',
            padding: '16px 40px',
            borderRadius: '8px',
            fontSize: '17px',
            fontWeight: 600,
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
            padding: '16px 40px',
            borderRadius: '8px',
            fontSize: '17px',
            fontWeight: 600,
            border: '1px solid #25d366',
            transition: 'background-color 0.2s',
          }}
        >
          WhatsApp Us
        </a>
      </div>

      {/* Price anchor */}
      <p className="fade-in" style={{
        color: '#64748b',
        fontSize: '14px',
        marginTop: '28px',
        position: 'relative',
        zIndex: 1,
      }}>
        Starting from ₹999 · 2–3 hour sessions
      </p>
    </section>
  );
}
