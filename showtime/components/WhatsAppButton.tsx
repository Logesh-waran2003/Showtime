'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919363799250"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: '#25d366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 28px rgba(37,211,102,0.55)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)';
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="#ffffff"
        aria-hidden="true"
      >
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.738 5.474 2.027 7.78L0 32l8.44-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.25a13.18 13.18 0 01-6.74-1.851l-.483-.287-5.008 1.192 1.217-4.876-.315-.5A13.19 13.19 0 012.75 16C2.75 8.682 8.683 2.75 16 2.75S29.25 8.682 29.25 16 23.317 29.25 16 29.25zm7.22-9.847c-.396-.198-2.342-1.156-2.705-1.288-.362-.132-.625-.198-.888.198-.263.396-1.02 1.288-1.25 1.553-.23.263-.461.296-.857.099-.396-.198-1.672-.616-3.185-1.965-1.176-1.05-1.97-2.346-2.202-2.742-.23-.396-.024-.61.173-.808.178-.178.396-.461.594-.692.198-.23.263-.396.396-.66.132-.263.066-.494-.033-.692-.1-.198-.888-2.142-1.217-2.932-.32-.77-.646-.665-.888-.677l-.758-.013c-.263 0-.692.099-1.054.494-.363.396-1.383 1.352-1.383 3.295 0 1.942 1.416 3.818 1.614 4.083.198.263 2.786 4.254 6.75 5.963.944.408 1.681.65 2.256.832.948.3 1.812.258 2.493.157.761-.114 2.342-.957 2.672-1.882.329-.924.329-1.716.23-1.882-.099-.165-.362-.263-.758-.461z" />
      </svg>
    </a>
  );
}
