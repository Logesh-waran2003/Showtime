'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919363799250?text=Hi!%20I%27d%20like%20to%20book%20a%20celebration"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        backgroundColor: '#25d366',
        boxShadow: '0 4px 12px rgba(37,211,102,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <svg width="24" height="24" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.16 0 0 7.16 0 16c0 2.82.74 5.47 2.03 7.78L0 32l8.44-2.01A15.93 15.93 0 0016 32c8.84 0 16-7.16 16-16S24.84 0 16 0zm7.22 19.4c-.4-.2-2.34-1.16-2.7-1.29-.36-.13-.63-.2-.89.2s-1.02 1.29-1.25 1.55c-.23.26-.46.3-.86.1-.4-.2-1.67-.62-3.18-1.97-1.18-1.05-1.97-2.35-2.2-2.74-.23-.4-.02-.61.17-.81.18-.18.4-.46.6-.69.2-.23.26-.4.4-.66.13-.26.07-.49-.03-.69-.1-.2-.89-2.14-1.22-2.93-.32-.77-.65-.67-.89-.68l-.76-.01c-.26 0-.69.1-1.05.49-.36.4-1.38 1.35-1.38 3.3 0 1.94 1.42 3.82 1.61 4.08.2.26 2.79 4.25 6.75 5.96.94.41 1.68.65 2.26.83.95.3 1.81.26 2.49.16.76-.11 2.34-.96 2.67-1.88.33-.92.33-1.72.23-1.88-.1-.17-.36-.26-.76-.46z"/>
      </svg>
    </a>
  );
}
