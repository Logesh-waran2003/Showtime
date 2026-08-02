// ponytail: ReviewCard exported for /reviews page reuse
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
  return (
    <section style={{
      padding: '100px 24px',
      backgroundColor: '#0c1220',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <p style={{
          color: '#e2e8f0',
          fontSize: 'clamp(1.3rem, 3vw, 2rem)',
          fontStyle: 'italic',
          lineHeight: 1.6,
          fontWeight: 400,
        }}>
          &ldquo;Surprised my best friend here for her birthday. The team set up everything — fog, LEDs, her favourite song playing when she walked in. She was in tears. Absolutely worth every rupee.&rdquo;
        </p>
        <p style={{
          color: '#64748b',
          fontSize: '15px',
          marginTop: '32px',
        }}>
          — Anitha M, <span style={{ color: '#f472b6' }}>surprise birthday</span>
        </p>
      </div>
    </section>
  );
}
