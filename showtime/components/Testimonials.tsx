'use client';

const reviews = [
  {
    quote: 'The decoration was stunning and the staff coordinated everything perfectly. Best birthday surprise ever!',
    name: 'Priya S',
    occasion: 'Birthday',
  },
  {
    quote: 'Booked for our 5th anniversary. Private screen, great sound, very romantic setup. Highly recommended!',
    name: 'Ramesh K',
    occasion: 'Anniversary',
  },
  {
    quote: 'Surprised my best friend here. The fog entry was amazing! She was in tears of joy.',
    name: 'Anitha M',
    occasion: 'Surprise Party',
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: '80px 5%', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700, margin: '0 0 48px 0' }}>
        What Our Guests Say
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }}>
        {reviews.map((review) => (
          <div key={review.name} style={{
            background: '#1a1a1a',
            borderLeft: '4px solid #3a8dde',
            borderRadius: '8px',
            padding: '28px 24px',
          }}>
            <div style={{ color: '#f5c518', fontSize: '16px', marginBottom: '12px' }}>
              ★★★★★
            </div>
            <p style={{
              fontSize: '15px',
              color: '#cccccc',
              lineHeight: 1.6,
              fontStyle: 'italic',
              margin: '0 0 20px 0',
            }}>
              &ldquo;{review.quote}&rdquo;
            </p>
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                {review.name}
              </span>
              <span style={{ fontSize: '13px', color: '#aaaaaa', marginLeft: '8px' }}>
                — {review.occasion}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
