import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'See what our guests say about Showtime Private Theatre in Pondicherry. Real reviews from real celebrations.',
};

const reviews = [
  {
    name: 'Priya S',
    occasion: 'Birthday Celebration',
    quote: 'The decoration was stunning! Staff coordinated everything perfectly. Totally worth it for a special occasion.',
  },
  {
    name: 'Ramesh K',
    occasion: 'Anniversary',
    quote: 'Booked for our 5th anniversary. Private screen, great sound system, very affordable. Highly recommended!',
  },
  {
    name: 'Anitha M',
    occasion: 'Surprise Party',
    quote: 'Surprised my best friend here. The team set up everything without a hitch. She was in tears of joy!',
  },
  {
    name: 'Karthik V',
    occasion: 'Couple Date',
    quote: 'Cozy, private, and romantic. Perfect for a date night. The ambience is top-notch for the price.',
  },
  {
    name: 'Deepa R',
    occasion: 'Family Gathering',
    quote: 'Brought the whole family for a movie night. Comfortable seating, clear picture, amazing experience.',
  },
  {
    name: 'Suresh N',
    occasion: 'Corporate Event',
    quote: 'Used Showtime for a small team celebration. The setup was professional and the staff was very helpful.',
  },
];

export default function ReviewsPage() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      <section
        style={{
          background: 'linear-gradient(135deg, #0d0d0d 0%, #0d1a2e 60%, #0d0d0d 100%)',
          padding: '64px 24px',
          borderBottom: '1px solid #2a2a2a',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, margin: '0 0 16px' }}>
            What Our Guests Say
          </h1>
          <p style={{ color: '#aaaaaa', fontSize: '17px', margin: '0 0 24px 0' }}>
            500+ happy guests and counting — here are a few of their stories
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span style={{ color: '#f5c518', fontSize: '20px' }}>★★★★★</span>
            <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: 800 }}>4.9</span>
            <span style={{ color: '#aaaaaa', fontSize: '15px' }}>overall rating</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 24px' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {reviews.map((review) => (
            <div key={review.name} style={{
              background: '#1a1a1a',
              borderLeft: '4px solid #3a8dde',
              borderRadius: '8px',
              padding: '24px',
            }}>
              <div style={{ color: '#f5c518', fontSize: '14px', marginBottom: '12px' }}>★★★★★</div>
              <p style={{ fontSize: '15px', color: '#cccccc', lineHeight: 1.6, fontStyle: 'italic', margin: '0 0 16px 0' }}>
                &ldquo;{review.quote}&rdquo;
              </p>
              <div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>{review.name}</span>
                <span style={{ fontSize: '13px', color: '#aaaaaa', marginLeft: '8px' }}>— {review.occasion}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
