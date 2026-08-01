import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Showtime Private Theatre in Pondicherry. Call +91 9363799250 or send us a message. Open Mon–Sun 9am–11pm.',
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      {/* Hero banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0d0d0d 0%, #0d1a2e 60%, #0d0d0d 100%)',
          padding: '64px 24px',
          borderBottom: '1px solid #2a2a2a',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              GET IN TOUCH
            </span>
          </div>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, margin: '0 0 16px' }}>
            Contact Us
          </h1>
          <p style={{ color: '#aaaaaa', fontSize: '17px', margin: 0, maxWidth: '500px' }}>
            Have a question or need help planning your celebration? We&apos;re here Mon–Sun, 9am to 11pm.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 24px' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start',
        }} className="contact-grid">
          <style>{`
            @media (max-width: 768px) {
              .contact-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
          {/* Contact info */}
          <div>
            <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: 700, marginBottom: '32px' }}>
              Reach Us Directly
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Address */}
              <div style={{
                backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '20px',
                border: '1px solid #2a2a2a', display: 'flex', gap: '16px', alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '10px',
                  background: 'rgba(58,141,222,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Address</div>
                  <span style={{ color: '#ffffff', fontSize: '15px' }}>Pondicherry, Tamil Nadu, India — 605001</span>
                </div>
              </div>

              {/* Phone */}
              <div style={{
                backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '20px',
                border: '1px solid #2a2a2a', display: 'flex', gap: '16px', alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '10px',
                  background: 'rgba(58,141,222,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Phone</div>
                  <a href="tel:+919363799250" style={{ color: '#ffffff', fontSize: '15px', textDecoration: 'none' }}>+91 9363799250</a>
                </div>
              </div>

              {/* Email */}
              <div style={{
                backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '20px',
                border: '1px solid #2a2a2a', display: 'flex', gap: '16px', alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '10px',
                  background: 'rgba(58,141,222,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Email</div>
                  <a href="mailto:hello@showtimepvt.in" style={{ color: '#ffffff', fontSize: '15px', textDecoration: 'none' }}>hello@showtimepvt.in</a>
                </div>
              </div>

              {/* Hours */}
              <div style={{
                backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '20px',
                border: '1px solid #2a2a2a', display: 'flex', gap: '16px', alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '10px',
                  background: 'rgba(58,141,222,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#3a8dde" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Hours</div>
                  <span style={{ color: '#ffffff', fontSize: '15px' }}>Monday – Sunday: 9:00 AM – 11:00 PM</span>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              style={{
                marginTop: '28px',
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, #0d1a2e 0%, #111827 100%)',
                border: '1px solid #2a2a2a',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '12px',
              }}
              role="img"
              aria-label="Map placeholder — Find us in Pondicherry"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(58,141,222,0.4)" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span style={{ color: 'rgba(170,170,170,0.6)', fontSize: '14px', fontWeight: 500 }}>
                Find Us in Pondicherry
              </span>
              <span style={{ color: 'rgba(170,170,170,0.4)', fontSize: '12px' }}>
                Map integration coming soon
              </span>
            </div>
          </div>

          {/* Contact form — client component */}
          <div>
            <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: 700, marginBottom: '32px' }}>
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
