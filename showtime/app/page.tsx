'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Locations from '@/components/Locations';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-100px' },
};

export default function Home() {
  return (
    <>
      <motion.div {...reveal}>
        <Hero />
      </motion.div>
      <motion.div {...reveal}>
        <Locations />
      </motion.div>
      <motion.div {...reveal}>
        <Services />
      </motion.div>
      <motion.div {...reveal}>
        <Testimonials />
      </motion.div>
      <motion.div {...reveal}>
        <Process />
      </motion.div>
      <motion.div {...reveal}>
        <Gallery />
      </motion.div>
    </>
  );
}
