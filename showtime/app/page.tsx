import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Reels from '@/components/Reels';
import Testimonials from '@/components/Testimonials';
import Locations from '@/components/Locations';
import FAQ from '@/components/FAQ';
import BookingCTA from '@/components/BookingCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Gallery />
      <Reels />
      <Testimonials />
      <Locations />
      <FAQ />
      <BookingCTA />
    </>
  );
}
