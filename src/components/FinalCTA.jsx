import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-section-gap flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHjJOChL20QyQ3oW-gyy-h-pRCbCnIask2Ezqs7Y9YsRu2IwICcpfgo98b6nfzqkabV0suU2xkXduhALUibD6FSyyWnEAXthpR12ueGaPBThPbhWQ2xojghWglM8iosgNjozr8aSk1qNw92E11p_-V7qhvkf20caYkXPHtb0T9yBSppi_tBgWGGW8RDaNt56fxBHC5E7oQeMKzJNP9TQXRFxDAGRrYnuqTVTLgMy6K09k480fVdS-NtA"
          alt="Cinema backdrop"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 text-center px-5">
        {/* Play button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center mx-auto mb-12 border border-primary/40 animate-pulse-glow"
        >
          <span
            className="material-symbols-outlined text-primary text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            play_arrow
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sora text-headline-lg-mobile md:text-display-xl mb-8"
        >
          Your Next Great Story Starts Here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-manrope text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto"
        >
          Ready for a movie experience that stays with you forever? Find a PVR cinema near you and book your journey today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <motion.button
            className="px-16 py-5 bg-primary-container text-on-primary font-space-grotesk text-label-caps rounded-full font-bold text-lg electric-glow"
            whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(0, 229, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK NOW
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA
