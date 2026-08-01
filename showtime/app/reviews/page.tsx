import type { Metadata } from 'next';
import { ReviewCard } from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'See what our guests say about Showtime Private Theatre in Pondicherry. Real reviews from real celebrations.',
};

// [PLACEHOLDER] reviews
const reviews = [
  {
    initials: 'PS',
    name: 'Priya S',
    occasion: 'Birthday Celebration',
    timeAgo: '2 weeks ago',
    quote: 'The decoration was stunning! Staff coordinated everything perfectly. Totally worth it for a special occasion.',
  },
  {
    initials: 'RK',
    name: 'Ramesh K',
    occasion: 'Anniversary',
    timeAgo: '1 month ago',
    quote: 'Booked for our 5th anniversary. Private screen, great sound system, very affordable. Highly recommended!',
  },
  {
    initials: 'AM',
    name: 'Anitha M',
    occasion: 'Surprise Party',
    timeAgo: '3 weeks ago',
    quote: 'Surprised my best friend here. The team set up everything without a hitch. She was in tears of joy!',
  },
  {
    initials: 'KV',
    name: 'Karthik V',
    occasion: 'Couple Date',
    timeAgo: '5 days ago',
    quote: 'Cozy, private, and romantic. Perfect for a date night. The ambience is top-notch for the price.',
  },
  {
    initials: 'DR',
    name: 'Deepa R',
    occasion: 'Family Gathering',
    timeAgo: '2 months ago',
    quote: 'Brought the whole family for a movie night. Comfortable seating, clear picture, amazing experience.',
  },
  {
    initials: 'SN',
    name: 'Suresh N',
    occasion: 'Corporate Event',
    timeAgo: '1 week ago',
    quote: 'Used Showtime for a small team celebration. The setup was professional and the staff was very helpful.',
  },
];

export default function ReviewsPage() {
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
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              TESTIMONIALS
            </span>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
          </div>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, margin: '0 0 16px' }}>
            What Our Guests Say
          </h1>
          <p style={{ color: '#aaaaaa', fontSize: '17px', margin: 0 }}>
            500+ happy guests and counting — here are a few of their stories
          </p>
          {/* Rating summary */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="22" height="22" viewBox="0 0 24 24" fill="#ffc107" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800 }}>4.9</span>
            <span style={{ color: '#aaaaaa', fontSize: '15px' }}>overall rating</span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
