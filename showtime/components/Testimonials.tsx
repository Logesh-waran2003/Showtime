'use client';

import { useState } from 'react';

const testimonials = [
  {
    quote: 'Surprised my best friend here for her birthday. The team set up everything — fog, LEDs, her favourite song playing when she walked in. She was in tears. Absolutely worth every rupee.',
    name: 'Anitha M',
    occasion: 'Surprise Birthday',
  },
  {
    quote: 'Booked for our 5th anniversary. The private setup, the cake, and the movie — everything was perfect. My wife couldn\'t stop smiling. Will definitely come back.',
    name: 'Karthik R',
    occasion: 'Anniversary',
  },
  {
    quote: 'Used Showtime for a proposal. They helped with the ring reveal timing, the music, the fog — she said yes before the movie even started! 10/10.',
    name: 'Vishal S',
    occasion: 'Proposal',
  },
];

// ponytail: exported for /reviews page reuse
export function ReviewCard({ review }: { review: { initials: string; name: string; occasion: string; timeAgo: string; quote: string } }) {
  return (
    <div style={{
      backgroundColor: '#0c1220',
      borderRadius: '12px',
      padding: '28px',
      border: '1px solid rgba(58, 141, 222, 0.08)',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '14px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '44px', height: '44px',
          borderRadius: '50%',
          backgroundColor: '#3a8dde',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 700,
          flexShrink: 0,
        }}>
          {review.initials}
        </div>
        <div>
          <div style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '15px' }}>{review.name}</div>
          <div style={{ color: '#3a8dde', fontSize: '12px', fontWeight: 500 }}>{review.occasion}</div>
        </div>
      </div>
      <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>
        &ldquo;{review.quote}&rdquo;
      </p>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section style={{
      padding: '100px 24px',
      backgroundColor: '#0c1220',
    }}>
      <div style={{ maxWidth: '750px', margin: '0 auto' }}>
        <div style={{
          borderLeft: '3px solid #3a8dde',
          paddingLeft: '32px',
        }}>
          <p style={{
            color: '#e2e8f0',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontStyle: 'italic',
            lineHeight: 1.7,
            fontWeight: 400,
            minHeight: '120px',
          }}>
            &ldquo;{t.quote}&rdquo;
          </p>
          <p style={{
            color: '#64748b',
            fontSize: '15px',
            marginTop: '24px',
          }}>
            — {t.name}, <span style={{ color: '#3a8dde' }}>{t.occasion}</span>
          </p>
        </div>

        {/* Dots */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: '40px',
          paddingLeft: '32px',
        }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              style={{
                width: i === active ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: i === active ? '#3a8dde' : '#334155',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
