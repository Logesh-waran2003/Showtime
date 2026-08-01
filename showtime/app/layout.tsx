import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Showtime Private Theatre | Pondicherry',
    template: '%s | Showtime Private Theatre',
  },
  description:
    'Book your private cinema experience in Pondicherry. Perfect for birthdays, anniversaries, surprise parties, and couple dates. Affordable luxury for 6–14 guests.',
  keywords: [
    'private theatre Pondicherry',
    'private cinema Pondicherry',
    'surprise party Pondicherry',
    'birthday celebration theatre',
    'Showtime private theatre',
  ],
  openGraph: {
    title: 'Showtime Private Theatre | Pondicherry',
    description:
      'Your own private cinema experience in Pondicherry. Celebrations, screenings, and surprises made magical.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ backgroundColor: '#0d0d0d', color: '#ffffff', margin: 0, padding: 0 }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
