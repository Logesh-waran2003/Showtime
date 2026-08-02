const testimonials = [
  {
    quote: 'We walked in and my wife started crying. The balloons, the screen playing our photos, the cake — everything was perfect. Thank you, Showtime.',
    name: 'Ramesh K',
    occasion: 'Anniversary',
  },
  {
    quote: 'Booked at 11 PM for the next morning. They still pulled it off beautifully. The fog entry alone was worth it.',
    name: 'Anitha M',
    occasion: 'Birthday surprise',
  },
  {
    quote: "I've done 4 celebrations here now. Every time the team remembers what I liked last time. That's rare.",
    name: 'Priya S',
    occasion: 'Repeat customer',
  },
];

export default function Testimonials() {
  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 5%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
        {testimonials.map((t) => (
          <div key={t.name} style={{ borderLeft: '3px solid #3a8dde', paddingLeft: '20px' }}>
            <p style={{ fontSize: '15px', fontStyle: 'italic', color: '#ccc', lineHeight: 1.7, margin: '0 0 12px 0' }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#fff', margin: '0 0 4px 0' }}>{t.name}</p>
            <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>{t.occasion}</p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          section > div { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
