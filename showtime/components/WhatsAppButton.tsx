'use client';

export default function WhatsAppButton() {
  return (
    <>
      <a
        href="https://wa.me/919363799250?text=Hi!%20I%20want%20to%20book%20a%20celebration"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25d366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
          textDecoration: 'none',
          fontSize: '28px',
          animation: 'pulse-wa 2s infinite',
        }}
      >
        💬
      </a>
      <style>{`
        @keyframes pulse-wa {
          0% { box-shadow: 0 4px 16px rgba(37,211,102,0.4); }
          50% { box-shadow: 0 4px 24px rgba(37,211,102,0.6); }
          100% { box-shadow: 0 4px 16px rgba(37,211,102,0.4); }
        }
      `}</style>
    </>
  );
}
