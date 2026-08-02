'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What is a private theatre experience?',
    a: 'A private theatre is your own exclusive screening room where you and your guests enjoy a movie, celebration, or event in complete privacy. It includes a 4K projector, 150" screen, Dolby sound system, comfortable seating, and optional decorations — all just for your group.',
  },
  {
    q: 'How many guests can attend?',
    a: '6 to 14 guests can attend per session. This makes it perfect for intimate celebrations like birthdays, anniversaries, proposals, and friend get-togethers.',
  },
  {
    q: "What's included in the base price?",
    a: 'The base price of ₹1,999 includes the theatre for 2-3 hours, 4K screen with Dolby sound, basic seating setup, and access to OTT platforms. Decorations, cakes, and other add-ons are available at additional cost.',
  },
  {
    q: 'Can I bring my own food?',
    a: 'Yes! You can bring outside food and beverages. We also offer snack platters, popcorn, and drinks that you can pre-order when booking.',
  },
  {
    q: 'What OTT platforms are available?',
    a: 'Netflix, Prime Video, Disney+ Hotstar, YouTube, and more. You can also connect your own device via HDMI or cast wirelessly.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Free cancellation up to 48 hours before your booking. The 50% advance deposit is fully refundable within this window. Cancellations within 48 hours may forfeit the deposit.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ padding: '80px 5%', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700, margin: '0 0 48px 0' }}>
        Frequently Asked Questions
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              background: '#1a1a1a',
              border: openIndex === i ? '1px solid #3a8dde' : '1px solid #2a2a2a',
              borderRadius: '10px',
              overflow: 'hidden',
              transition: 'border-color 0.2s',
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                width: '100%',
                padding: '18px 20px',
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {faq.q}
              <span style={{
                transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s',
                fontSize: '12px',
                color: '#aaaaaa',
              }}>
                ▼
              </span>
            </button>
            <div style={{
              maxHeight: openIndex === i ? '300px' : '0px',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
            }}>
              <p style={{
                padding: '0 20px 18px',
                margin: 0,
                color: '#aaaaaa',
                fontSize: '14px',
                lineHeight: 1.7,
              }}>
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
