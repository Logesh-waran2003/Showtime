'use client';

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const msg = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
        const text = encodeURIComponent(`Hi! I'm ${name}. ${msg}`);
        window.open(`https://wa.me/919363799250?text=${text}`, '_blank');
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <input
        name="name"
        placeholder="Your Name"
        required
        style={{
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '8px',
          padding: '14px 16px',
          color: '#ffffff',
          fontSize: '15px',
          outline: 'none',
        }}
      />
      <input
        name="phone"
        placeholder="Phone Number"
        type="tel"
        style={{
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '8px',
          padding: '14px 16px',
          color: '#ffffff',
          fontSize: '15px',
          outline: 'none',
        }}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        style={{
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '8px',
          padding: '14px 16px',
          color: '#ffffff',
          fontSize: '15px',
          outline: 'none',
          resize: 'vertical',
        }}
      />
      <button
        type="submit"
        style={{
          background: '#25d366',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          padding: '14px 24px',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        📱 Send via WhatsApp
      </button>
    </form>
  );
}
