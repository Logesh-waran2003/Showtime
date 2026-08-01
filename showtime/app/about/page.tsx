import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Showtime Private Theatre — Pondicherry's premier private cinema and surprise-planning service.",
};

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l6 2.66V11c0 3.86-2.62 7.47-6 8.93-3.38-1.46-6-5.07-6-8.93V7.66L12 5zm-1 5h2v2h-2zm0-4h2v3h-2z" />
      </svg>
    ),
    title: 'Privacy & Exclusivity',
    desc: 'Your celebration stays yours. Every booking gives you exclusive access to your own private screen — no shared audiences, no strangers.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
      </svg>
    ),
    title: 'Surprise Planning',
    desc: 'Leave the logistics to us. From secret setups to themed decorations, our team crafts the perfect surprise while you enjoy the moment.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
      </svg>
    ),
    title: 'Premium AV Technology',
    desc: 'Experience crystal-clear 4K projection and immersive Dolby-quality sound — the kind of cinematic quality you deserve for your special day.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
    title: 'Affordable Luxury',
    desc: "Premium experiences shouldn't cost a fortune. We've made private theatre accessible for everyone with packages starting at just ₹1,999.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      <style>{`
        .about-card-lift {
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .about-card-lift:hover {
          transform: translateY(-4px);
          border-color: #3a8dde !important;
        }
        .about-btn-primary {
          transition: background-color 0.2s;
        }
        .about-btn-primary:hover {
          background-color: #61b6ff !important;
        }
        .about-btn-outline {
          transition: background-color 0.2s;
        }
        .about-btn-outline:hover {
          background-color: rgba(58,141,222,0.1) !important;
        }
        @media (max-width: 768px) {
          .about-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Hero banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0d0d0d 0%, #0d1a2e 60%, #0d0d0d 100%)',
          padding: '80px 24px',
          borderBottom: '1px solid #2a2a2a',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: '50%', right: '5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(58,141,222,0.08) 0%, transparent 70%)',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }} aria-hidden="true" />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              OUR STORY
            </span>
          </div>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.15 }}>
            About <span style={{ color: '#3a8dde' }}>Showtime</span>
          </h1>
          <p style={{ color: '#aaaaaa', fontSize: '18px', maxWidth: '580px', lineHeight: 1.7, margin: 0 }}>
            Pondicherry&apos;s premier private theatre — where every visit becomes a story worth telling.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            className="about-two-col"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
                <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
                  WHO WE ARE
                </span>
              </div>
              <h2 style={{ color: '#ffffff', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>
                More Than Just a Cinema — A Complete Celebration Destination
              </h2>
              <p style={{ color: '#aaaaaa', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                Showtime was born from a simple belief: every special moment deserves an extraordinary backdrop. We combine the magic of private cinema with the artistry of surprise planning — creating a space where milestones become memories.
              </p>
              <p style={{ color: '#aaaaaa', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                Located in the heart of Pondicherry, our fully private theatres are equipped with cutting-edge 4K projection, immersive surround sound, and customizable décor — all at prices that make luxury accessible. Whether you&apos;re celebrating a birthday, popping the question, or simply treating your family to a movie night like no other, Showtime sets the stage.
              </p>
              <p style={{ color: '#aaaaaa', fontSize: '16px', lineHeight: 1.8 }}>
                With over 500 happy guests and a 4.9-star rating, we&apos;ve earned our reputation one celebration at a time. Our dedicated team handles every detail — from flower arrangements to surprise coordination — so you can be fully present in the moment.
              </p>
            </div>

            {/* Visual placeholder */}
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, #0d1a2e 0%, #1a2a4a 50%, #0d1a2e 100%)',
                border: '1px solid #2a2a2a',
                aspectRatio: '4/3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '16px',
                boxShadow: '0 20px 60px rgba(58,141,222,0.1)',
              }}
              role="img"
              aria-label="Showtime theatre interior"
            >
              <svg width="64" height="64" viewBox="0 0 24 24" fill="rgba(58,141,222,0.4)" aria-hidden="true">
                <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
              </svg>
              <span style={{ color: 'rgba(97,182,255,0.5)', fontSize: '14px' }}>Theatre Interior</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section style={{ backgroundColor: '#1a1a1a', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, margin: 0 }}>
              Why Choose Showtime?
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '16px', marginTop: '12px' }}>
              The pillars of our promise to you
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {features.map((f) => (
              <div
                key={f.title}
                className="about-card-lift"
                style={{
                  backgroundColor: '#262626',
                  borderRadius: '12px',
                  padding: '32px 24px',
                  border: '1px solid #2a2a2a',
                }}
              >
                <div style={{
                  width: '64px', height: '64px', borderRadius: '12px',
                  background: 'rgba(58,141,222,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  {f.icon}
                </div>
                <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>{f.title}</h3>
                <p style={{ color: '#aaaaaa', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, marginBottom: '16px' }}>
            Ready to Book Your Experience?
          </h2>
          <p style={{ color: '#aaaaaa', fontSize: '17px', lineHeight: 1.7, marginBottom: '36px' }}>
            Join 500+ happy guests who&apos;ve celebrated their most cherished moments at Showtime. Your perfect evening is just one click away.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/booking"
              className="about-btn-primary"
              style={{
                backgroundColor: '#3a8dde', color: '#ffffff',
                padding: '14px 36px', borderRadius: '8px',
                textDecoration: 'none', fontSize: '16px', fontWeight: 600,
              }}
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="about-btn-outline"
              style={{
                backgroundColor: 'transparent', color: '#ffffff',
                padding: '14px 36px', borderRadius: '8px',
                textDecoration: 'none', fontSize: '16px', fontWeight: 600,
                border: '2px solid #3a8dde',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
