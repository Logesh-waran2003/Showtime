import Image from 'next/image';

export default function Locations() {
  return (
    <section style={{ padding: '80px 5%', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700, margin: '0 0 48px 0' }}>
        Our Locations
      </h2>

      <div style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {/* Pondicherry */}
        <div style={{
          flex: '1 1 400px',
          maxWidth: '500px',
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
            <Image
              src="/images/theatre-1.png"
              alt="Showtime Private Theatre Pondicherry"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>PONDICHERRY</h3>
              <span style={{
                background: 'rgba(34,197,94,0.15)',
                color: '#22c55e',
                fontSize: '11px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '12px',
                textTransform: 'uppercase',
              }}>
                Now Open
              </span>
            </div>
            <p style={{ color: '#aaaaaa', fontSize: '14px', margin: '0 0 4px 0' }}>
              📍 Pondicherry, Tamil Nadu
            </p>
            <p style={{ color: '#aaaaaa', fontSize: '14px', margin: '0 0 20px 0' }}>
              🕘 Mon–Sun 9am–11pm
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="/booking"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#3a8dde',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Book Now
              </a>
              <a
                href="tel:+919363799250"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'transparent',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid #2a2a2a',
                }}
              >
                📞 Call
              </a>
            </div>
          </div>
        </div>

        {/* Chennai */}
        <div style={{
          flex: '1 1 400px',
          maxWidth: '500px',
          background: 'linear-gradient(135deg, #0d1a2e 0%, #0d0d0d 100%)',
          border: '1px solid #2a2a2a',
          borderRadius: '16px',
          padding: '48px 32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '300px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>CHENNAI</h3>
            <span style={{
              background: 'rgba(234,179,8,0.15)',
              color: '#eab308',
              fontSize: '11px',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '12px',
              textTransform: 'uppercase',
            }}>
              Opening Soon
            </span>
          </div>
          <p style={{ color: '#aaaaaa', fontSize: '15px', margin: '0 0 24px 0', maxWidth: '300px' }}>
            Join the waitlist for exclusive early-bird pricing
          </p>
          <a
            href="https://wa.me/919363799250?text=Hi!%20I%20want%20to%20join%20the%20Chennai%20waitlist"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#25d366',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            📱 Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
