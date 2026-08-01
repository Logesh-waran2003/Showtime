import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Showtime Private Theatre',
  description: 'Privacy policy for Showtime Private Theatre — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      {/* Hero banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0d0d0d 0%, #0d1a2e 60%, #0d0d0d 100%)',
        padding: '56px 24px',
        borderBottom: '1px solid #2a2a2a',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              LEGAL
            </span>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
          </div>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, margin: '0 0 12px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#aaaaaa', fontSize: '16px', margin: 0 }}>
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 24px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ color: '#aaaaaa', fontSize: '15px', lineHeight: '1.9' }}>

            <h2 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '12px', marginTop: '40px' }}>
              1. Information We Collect
            </h2>
            <p>
              When you use Showtime Private Theatre&apos;s booking services, we may collect personal information including your name, phone number, email address, and payment details necessary to process your reservation.
            </p>
            <p style={{ marginTop: '12px' }}>
              We also collect basic usage data such as pages visited and device information to improve the experience of our website.
            </p>

            <h2 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '12px', marginTop: '40px' }}>
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul style={{ paddingLeft: '24px', marginTop: '12px' }}>
              <li style={{ marginBottom: '8px' }}>Process and confirm your booking</li>
              <li style={{ marginBottom: '8px' }}>Contact you regarding your reservation details and payment</li>
              <li style={{ marginBottom: '8px' }}>Send important service updates or changes to your booking</li>
              <li style={{ marginBottom: '8px' }}>Improve our website and customer experience</li>
              <li style={{ marginBottom: '8px' }}>Respond to your inquiries and support requests</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              We do not sell, rent, or trade your personal information to any third party for marketing purposes.
            </p>

            <h2 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '12px', marginTop: '40px' }}>
              3. Data Security
            </h2>
            <p>
              We take reasonable steps to protect your personal information from unauthorized access, misuse, or disclosure. Payment transactions are processed securely and we do not store full card details on our servers.
            </p>

            <h2 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '12px', marginTop: '40px' }}>
              4. Cookies
            </h2>
            <p>
              Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site. You can disable cookies in your browser settings, though some features of the site may not function as intended.
            </p>

            <h2 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '12px', marginTop: '40px' }}>
              5. Third-Party Services
            </h2>
            <p>
              We may use trusted third-party services for payment processing, analytics, and communication (e.g., WhatsApp, email providers). These services have their own privacy policies and we encourage you to review them. We share only the minimum information necessary to fulfil your booking.
            </p>

            <h2 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '12px', marginTop: '40px' }}>
              6. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul style={{ paddingLeft: '24px', marginTop: '12px' }}>
              <li style={{ marginBottom: '8px' }}>Request access to the personal data we hold about you</li>
              <li style={{ marginBottom: '8px' }}>Request correction of inaccurate information</li>
              <li style={{ marginBottom: '8px' }}>Request deletion of your data, subject to legal obligations</li>
              <li style={{ marginBottom: '8px' }}>Withdraw consent for marketing communications at any time</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:hello@showtimepvt.in" style={{ color: '#3a8dde', textDecoration: 'none' }}>
                hello@showtimepvt.in
              </a>.
            </p>

            <h2 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '12px', marginTop: '40px' }}>
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of our services after changes are posted constitutes your acceptance of the revised policy.
            </p>

            <h2 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '12px', marginTop: '40px' }}>
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please reach out:
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '12px' }}>
              <li style={{ marginBottom: '8px' }}>
                Email:{' '}
                <a href="mailto:hello@showtimepvt.in" style={{ color: '#3a8dde', textDecoration: 'none' }}>
                  hello@showtimepvt.in
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                Phone:{' '}
                <a href="tel:+919363799250" style={{ color: '#3a8dde', textDecoration: 'none' }}>
                  +91 9363799250
                </a>
              </li>
              <li>Address: Pondicherry, Tamil Nadu, India — 605001</li>
            </ul>

          </div>
        </div>
      </section>
    </div>
  );
}
