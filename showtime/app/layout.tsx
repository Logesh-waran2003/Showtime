import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'SHOWTIME Private Theatre | Pondicherry',
    template: '%s | SHOWTIME Private Theatre',
  },
  description:
    'Book your private cinema experience in Pondicherry. Perfect for birthdays, anniversaries, surprise parties, and couple dates. Affordable luxury for 6–14 guests from ₹1,999.',
  keywords: [
    'private theatre Pondicherry',
    'private cinema Pondicherry',
    'surprise party Pondicherry',
    'birthday celebration theatre',
    'Showtime private theatre',
    'private screening room',
  ],
  openGraph: {
    title: 'SHOWTIME Private Theatre | Pondicherry',
    description:
      'Your own private cinema experience in Pondicherry. Celebrations, screenings, and surprises made magical.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0d0d0d', color: '#ffffff', margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
