import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Read the Terms & Conditions for Showtime Private Theatre, Pondicherry.',
};

export default function TermsPage() {
  const sectionStyle: React.CSSProperties = {
    marginBottom: '36px',
  };
  const h2Style: React.CSSProperties = {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '12px',
    paddingBottom: '8px',
    borderBottom: '1px solid #2a2a2a',
  };
  const pStyle: React.CSSProperties = {
    color: '#aaaaaa',
    fontSize: '15px',
    lineHeight: '1.8',
    marginBottom: '12px',
  };
  const liStyle: React.CSSProperties = {
    color: '#aaaaaa',
    fontSize: '15px',
    lineHeight: '1.8',
    marginBottom: '8px',
    paddingLeft: '8px',
  };

  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      {/* Hero banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0d0d0d 0%, #0d1a2e 60%, #0d0d0d 100%)',
        padding: '64px 24px',
        borderBottom: '1px solid #2a2a2a',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              LEGAL
            </span>
          </div>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, margin: '0 0 12px' }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ color: '#aaaaaa', fontSize: '15px', margin: 0 }}>
            Last updated: January 2025 &nbsp;·&nbsp; Please read carefully before booking.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          backgroundColor: '#1a1a1a',
          borderRadius: '16px',
          padding: '48px',
          border: '1px solid #2a2a2a',
        }}>

          <div style={sectionStyle}>
            <h2 style={h2Style}>1. Acceptance of Terms</h2>
            <p style={pStyle}>
              By accessing the Showtime Private Theatre website or making a booking, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not proceed with a booking.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. Booking & Reservations</h2>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              <li style={liStyle}>All bookings must be made via our website, phone, or WhatsApp.</li>
              <li style={liStyle}>A 50% advance payment is required to confirm your reservation. The remaining balance is due on the day of your event.</li>
              <li style={liStyle}>Bookings are confirmed only after receipt of the advance payment and a confirmation message from our team.</li>
              <li style={liStyle}>Time slots are allocated on a first-come, first-served basis.</li>
              <li style={liStyle}>Each booking grants exclusive use of the theatre for the reserved duration — no other guests will be admitted.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. Guest Capacity</h2>
            <p style={pStyle}>
              Our theatres accommodate between 6 and 14 guests per booking. The maximum capacity must not be exceeded under any circumstances, for safety and comfort reasons. Please inform us of your exact guest count at the time of booking.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. Permitted Use</h2>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              <li style={liStyle}>The theatre is available for private movie screenings, birthday parties, anniversary celebrations, surprise parties, couple dates, and corporate team events.</li>
              <li style={liStyle}>Guests must treat the equipment and premises with care. Any damage caused will be charged to the booking party.</li>
              <li style={liStyle}>Smoking, illegal substances, and outside alcohol are strictly prohibited.</li>
              <li style={liStyle}>Guests are responsible for the conduct of all members of their group.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. Food & Beverages</h2>
            <p style={pStyle}>
              Outside food and beverages may be permitted at management&apos;s discretion. We offer a curated menu of snacks and beverages that can be pre-ordered with your booking. Please contact us for the current menu and pricing.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. Content Policy</h2>
            <p style={pStyle}>
              Showtime does not endorse, verify, or take responsibility for the content screened by guests. You must ensure all content you bring is legally obtained and appropriately licensed for private screening. We reserve the right to refuse screening of any content we deem inappropriate or illegal.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. Liability</h2>
            <p style={pStyle}>
              Showtime Private Theatre is not liable for any loss, damage, or injury occurring on the premises except where directly caused by our negligence. We recommend guests secure their personal belongings at all times.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>8. Photography & Social Media</h2>
            <p style={pStyle}>
              Guests are welcome to photograph and film within the theatre for personal use. By sharing content tagged to our venue, you grant us the right to repost or use such content for promotional purposes, with credit where possible.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>9. Modifications to Terms</h2>
            <p style={pStyle}>
              We reserve the right to update these Terms & Conditions at any time. Continued use of our services following any changes constitutes your acceptance of the new terms.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>10. Contact</h2>
            <p style={pStyle}>
              For questions about these Terms, contact us at{' '}
              <a href="mailto:hello@showtimepvt.in" style={{ color: '#3a8dde', textDecoration: 'none' }}>
                hello@showtimepvt.in
              </a>{' '}
              or call{' '}
              <a href="tel:+919363799250" style={{ color: '#3a8dde', textDecoration: 'none' }}>
                +91 9363799250
              </a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
