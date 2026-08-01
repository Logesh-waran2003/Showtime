'use client';

import { useState } from 'react';

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#333333',
  border: '1px solid #2a2a2a',
  borderRadius: '8px',
  color: '#ffffff',
  padding: '12px 16px',
  fontSize: '15px',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};

interface FormData {
  name: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `📩 *New Contact Message — Showtime Private Theatre*`,
      ``,
      `👤 Name: ${formData.name}`,
      `📞 Phone: ${formData.phone}`,
      ``,
      `💬 Message:`,
      formData.message,
    ].join('\n');
    const waUrl = `https://wa.me/919363799250?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        backgroundColor: 'rgba(58,141,222,0.1)',
        border: '1px solid #3a8dde',
        borderRadius: '12px',
        padding: '40px',
        textAlign: 'center',
      }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#3a8dde" style={{ marginBottom: '16px' }} aria-hidden="true">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
        </svg>
        <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Message Sent!</h3>
        <p style={{ color: '#aaaaaa', fontSize: '15px' }}>Your message has been forwarded via WhatsApp. We&apos;ll get back to you within a few hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#1a1a1a',
        borderRadius: '16px',
        padding: '32px',
        border: '1px solid #2a2a2a',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <div>
        <label htmlFor="contact-name" style={{ display: 'block', color: '#aaaaaa', fontSize: '13px', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.5px' }}>
          Your Name *
        </label>
        <input
          id="contact-name"
          type="text"
          required
          placeholder="e.g. Priya Shankar"
          value={formData.name}
          onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = '#3a8dde')}
          onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
        />
      </div>

      <div>
        <label htmlFor="contact-phone" style={{ display: 'block', color: '#aaaaaa', fontSize: '13px', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.5px' }}>
          Phone Number *
        </label>
        <input
          id="contact-phone"
          type="tel"
          required
          placeholder="+91 9XXXXXXXXX"
          value={formData.phone}
          onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = '#3a8dde')}
          onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
        />
      </div>

      <div>
        <label htmlFor="contact-message" style={{ display: 'block', color: '#aaaaaa', fontSize: '13px', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.5px' }}>
          Message *
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder="Tell us about your event — date, occasion, number of guests..."
          value={formData.message}
          onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
          onFocus={e => (e.target.style.borderColor = '#3a8dde')}
          onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
        />
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#25d366',
          color: '#ffffff',
          padding: '14px 32px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background-color 0.2s, transform 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#1da851';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#25d366';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.738 5.474 2.027 7.78L0 32l8.44-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.22 19.403c-.396-.198-2.342-1.156-2.705-1.288-.362-.132-.625-.198-.888.198-.263.396-1.02 1.288-1.25 1.553-.23.263-.461.296-.857.099-.396-.198-1.672-.616-3.185-1.965-1.176-1.05-1.97-2.346-2.202-2.742-.23-.396-.024-.61.173-.808.178-.178.396-.461.594-.692.198-.23.263-.396.396-.66.132-.263.066-.494-.033-.692-.1-.198-.888-2.142-1.217-2.932-.32-.77-.646-.665-.888-.677l-.758-.013c-.263 0-.692.099-1.054.494-.363.396-1.383 1.352-1.383 3.295 0 1.942 1.416 3.818 1.614 4.083.198.263 2.786 4.254 6.75 5.963.944.408 1.681.65 2.256.832.948.3 1.812.258 2.493.157.761-.114 2.342-.957 2.672-1.882.329-.924.329-1.716.23-1.882-.099-.165-.362-.263-.758-.461z" />
        </svg>
        Send via WhatsApp
      </button>
    </form>
  );
}
