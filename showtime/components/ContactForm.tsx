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
    // Placeholder: would send to API
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
        <p style={{ color: '#aaaaaa', fontSize: '15px' }}>We&apos;ll get back to you within a few hours.</p>
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
          backgroundColor: '#3a8dde',
          color: '#ffffff',
          padding: '14px 32px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background-color 0.2s, transform 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#61b6ff';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#3a8dde';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Send Message
      </button>
    </form>
  );
}
