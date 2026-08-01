import Hero from '@/components/Hero';
import Locations from '@/components/Locations';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <>
      <Hero />
      <Locations />
      <Services />
      <Testimonials />
      <Process />
      <Gallery />
    </>
  );
}
