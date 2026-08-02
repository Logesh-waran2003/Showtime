import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Showtime Private Theatre | Pondicherry & Chennai',
  description: 'Book your private cinema celebration in Pondicherry. Birthdays, anniversaries, proposals, date nights. 4K screen, Dolby sound, custom decorations. From ₹1,999.',
  keywords: ['private theatre Pondicherry', 'private cinema Pondicherry', 'birthday celebration Pondicherry', 'Showtime private theatre', 'surprise party Pondicherry', 'private theatre Chennai'],
  openGraph: {
    title: 'Showtime Private Theatre | Pondicherry & Chennai',
    description: 'Your celebration. Our cinema. Private theatre experiences for birthdays, anniversaries, proposals & surprises.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
