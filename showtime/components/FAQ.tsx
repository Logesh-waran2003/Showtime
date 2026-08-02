'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How many people can come?',
    a: "6 to 14 guests. The space is intimate by design — big enough for a party, small enough that everyone's in the moment.",
  },
  {
    q: "What's included in the base price?",
    a: '2–3 hours of private theatre time with 4K projection, Dolby sound, and comfortable seating. Decorations, cake, and add-ons are separate.',
  },
  {
    q: 'Can I bring outside food?',
    a: "Yes. Bring whatever you want. We also offer popcorn, snack platters, and beverages if you'd prefer not to carry anything.",
  },
  {
    q: 'Which OTT platforms work?',
    a: 'Netflix, Prime Video, Disney+ Hotstar, YouTube. Or bring your own content on a pen drive.',
  },
  {
    q: 'How do I book?',
    a: 'The fastest way: WhatsApp us at +91 9363 799 250 with your date and occasion. Or use the Book Now button. We confirm within 30 minutes.',
  },
  {
    q: 'What if I need to cancel?',
    a: 'Free cancellation up to 48 hours before your slot. The 50% deposit is fully refundable in that case.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ maxWidth: '700px', margin: '0 auto', padding: '60px 5%' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '32px' }}>
        Common questions
      </h2>
      {faqs.map((item, i) => (
        <div key={i} style={{ borderBottom: '1px solid #1a1a1a', padding: '20px 0' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 500,
              cursor: 'pointer',
              padding: 0,
              textAlign: 'left',
            }}
          >
            {item.q}
            <span style={{ fontSize: '20px', color: '#666', marginLeft: '16px', flexShrink: 0 }}>
              {open === i ? '–' : '+'}
            </span>
          </button>
          {open === i && (
            <p style={{ fontSize: '14px', color: '#999', lineHeight: 1.7, marginTop: '12px', marginBottom: 0 }}>
              {item.a}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
