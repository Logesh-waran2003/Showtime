'use client';

import { useState, useEffect } from 'react';
import { reviews, type Review } from '@/lib/reviewsData';

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: '2px' }} role="img" aria-label="5 star rating">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#ffc107" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    // [PLACEHOLDER] review card
    <div style={{
      backgroundColor: '#1a1a1a',
      borderRadius: '12px',
      padding: '28px',
      border: '1px solid #2a2a2a',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '48px', height: '48px',
          borderRadius: '50%',
          backgroundColor: '#3a8dde',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 700,
          flexShrink: 0,
        }}>
          {review.initials}
        </div>
        <div>
          <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '15px' }}>{review.name}</div>
          <div style={{ color: '#3a8dde', fontSize: '12px', fontWeight: 500 }}>{review.occasion}</div>
          <div style={{ color: '#555555', fontSize: '11px', marginTop: '2px' }}>{review.timeAgo}</div>
        </div>
      </div>
      <StarRating />
      <p style={{ color: '#aaaaaa', fontSize: '14px', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>
        &ldquo;{review.quote}&rdquo;
      </p>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const maxIndex = reviews.length - visibleCount;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const prev = () => setCurrent((p) => (p <= 0 ? maxIndex : p - 1));
  const next = () => setCurrent((p) => (p >= maxIndex ? 0 : p + 1));

  return (
    <section style={{ backgroundColor: '#0d0d0d', padding: '80px 24px' }}>
      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              TESTIMONIALS
            </span>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
          </div>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, margin: 0 }}>
            What Our Guests Say
          </h2>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative' }}>
        <div
            className="testimonials-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              overflow: 'hidden',
            }}
          >
            {reviews.slice(current, current + visibleCount).map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px' }}>
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              style={{
                width: '44px', height: '44px',
                borderRadius: '50%',
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background-color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget).style.backgroundColor = '#3a8dde';
                (e.currentTarget).style.borderColor = '#3a8dde';
              }}
              onMouseLeave={e => {
                (e.currentTarget).style.backgroundColor = '#1a1a1a';
                (e.currentTarget).style.borderColor = '#2a2a2a';
              }}
            >
              ←
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: i === current ? '#3a8dde' : '#333333',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'width 0.3s ease, background-color 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonials"
              style={{
                width: '44px', height: '44px',
                borderRadius: '50%',
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background-color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget).style.backgroundColor = '#3a8dde';
                (e.currentTarget).style.borderColor = '#3a8dde';
              }}
              onMouseLeave={e => {
                (e.currentTarget).style.backgroundColor = '#1a1a1a';
                (e.currentTarget).style.borderColor = '#2a2a2a';
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
