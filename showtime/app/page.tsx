import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Instagram from '@/components/Instagram';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Locations from '@/components/Locations';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Instagram />
      <Services />
      <Testimonials />
      <Locations />
      <FinalCTA />
    </>
  );
}
