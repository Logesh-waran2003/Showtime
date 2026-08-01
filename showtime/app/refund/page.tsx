import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    'Showtime Private Theatre refund and cancellation policy. 50% advance, cancellation terms, and rescheduling rules.',
};

export default function RefundPage() {
  const sectionStyle: React.CSSProperties = { marginBottom: '36px' };
  const h2Style: React.CSSProperties = {
    color: '#ffffff', fontSize: '20px', fontWeight: 700,
    marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid #2a2a2a',
  };
  const pStyle: React.CSSProperties = { color: '#aaaaaa', fontSize: '15px', lineHeight: '1.8', marginBottom: '12px' };
  const liStyle: React.CSSProperties = { color: '#aaaaaa', fontSize: '15px', lineHeight: '1.8', marginBottom: '8px', paddingLeft: '8px' };

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
            Refund Policy
          </h1>
          <p style={{ color: '#aaaaaa', fontSize: '15px', margin: 0 }}>
            Last updated: January 2025 &nbsp;·&nbsp; Please review before completing your booking.
          </p>
        </div>
      </section>

      {/* Policy summary cards */}
      <section style={{ padding: '48px 24px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {[
            { icon: '⚡', label: '50% Advance', desc: 'Required to confirm your booking', color: '#3a8dde' },
            { icon: '❌', label: 'No Refund on Advance', desc: 'Advance payment is non-refundable', color: '#ff6b6b' },
            { icon: '🔄', label: 'Free Reschedule', desc: 'Once, up to 48 hrs before the event', color: '#ffc107' },
            { icon: '✅', label: 'Balance on Arrival', desc: 'Remaining 50% paid on the day', color: '#25d366' },
          ].map((card) => (
            <div key={card.label} style={{
              backgroundColor: '#1a1a1a', borderRadius: '12px',
              padding: '24px', border: '1px solid #2a2a2a',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{card.icon}</div>
              <div style={{ color: card.color, fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{card.label}</div>
              <div style={{ color: '#aaaaaa', fontSize: '13px' }}>{card.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Full policy */}
      <section style={{ padding: '48px 24px 60px' }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          backgroundColor: '#1a1a1a', borderRadius: '16px',
          padding: '48px', border: '1px solid #2a2a2a',
        }}>

          <div style={sectionStyle}>
            <h2 style={h2Style}>1. Advance Payment</h2>
            <p style={pStyle}>
              All bookings at Showtime Private Theatre require a 50% advance payment at the time of booking. This payment secures your chosen date and time slot. The remaining 50% balance is payable in full upon arrival at the venue, before the session begins.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. Non-Refundable Advance</h2>
            <p style={pStyle}>
              The 50% advance payment is strictly non-refundable under all circumstances, including:
            </p>
            <ul style={{ paddingLeft: '20px', margin: '0 0 12px' }}>
              <li style={liStyle}>Guest-initiated cancellation at any time after booking confirmation.</li>
              <li style={liStyle}>No-show on the day of the event.</li>
              <li style={liStyle}>Partial use of the booked session.</li>
              <li style={liStyle}>Dissatisfaction with the content screened (as content is selected by the guest).</li>
            </ul>
            <p style={pStyle}>
              We encourage guests to be certain of their plans before making a booking.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. Rescheduling Policy</h2>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              <li style={liStyle}>You may reschedule your booking <strong style={{ color: '#ffffff' }}>once</strong>, free of charge, provided you notify us at least <strong style={{ color: '#ffffff' }}>48 hours</strong> before your original booking time.</li>
              <li style={liStyle}>Reschedule requests made within 48 hours of the event are subject to a rescheduling fee of ₹300.</li>
              <li style={liStyle}>Rescheduling is subject to availability. Showtime cannot guarantee your preferred alternative slot.</li>
              <li style={liStyle}>A second reschedule will be treated as a new booking and requires a fresh advance payment.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. Cancellation by Showtime</h2>
            <p style={pStyle}>
              In the rare event that Showtime must cancel your booking due to circumstances beyond our control (power outage, equipment failure, force majeure), we will:
            </p>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              <li style={liStyle}>Notify you as soon as possible via the contact number provided at booking.</li>
              <li style={liStyle}>Offer a full refund of the advance payment, <strong style={{ color: '#ffffff' }}>or</strong></li>
              <li style={liStyle}>Offer a complimentary reschedule at your convenience, subject to availability.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. Add-On Services</h2>
            <p style={pStyle}>
              Payments for add-on services such as cakes, floral arrangements, decoration packages, and surprise gifts are non-refundable once the items have been ordered or prepared, which typically occurs 24 hours prior to the event.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. Refund Processing</h2>
            <p style={pStyle}>
              Where a refund is approved (solely in cases of cancellation by Showtime), it will be processed within 5–7 business days to the original payment method. We are not responsible for delays caused by your bank or payment provider.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. Disputes</h2>
            <p style={pStyle}>
              For any billing or refund queries, please contact us at{' '}
              <a href="mailto:hello@showtimepvt.in" style={{ color: '#3a8dde', textDecoration: 'none' }}>
                hello@showtimepvt.in
              </a>{' '}
              or{' '}
              <a href="tel:+919363799250" style={{ color: '#3a8dde', textDecoration: 'none' }}>
                +91 9363799250
              </a>{' '}
              within 48 hours of your booking. We aim to resolve all disputes amicably.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
