import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-section-gap flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-surface-container-lowest to-black" />

      {/* Content */}
      <div ref={ref} className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-sora text-headline-lg-mobile md:text-display-xl mb-8"
        >
          Ready to Create Your Perfect Moment?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-manrope text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto"
        >
          Book your private theatre experience today. We'll handle the rest — decorations, setup, and surprises included.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/919360600000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary-container text-on-primary font-space-grotesk text-label-caps rounded-full font-bold electric-glow"
            whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(0, 229, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            BOOK ON WHATSAPP
          </motion.a>

          {/* Call Button */}
          <motion.a
            href="tel:+919360600000"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 border border-white/20 text-on-surface-variant font-space-grotesk text-label-caps rounded-full font-bold glass-surface"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined text-xl">call</span>
            CALL US
          </motion.a>
        </motion.div>

        {/* Instagram text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 font-manrope text-body-lg text-on-surface-variant opacity-70"
        >
          Or DM us on Instagram{' '}
          <a
            href="https://www.instagram.com/showtime_privatemovietheatre/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            @showtime_privatemovietheatre
          </a>
        </motion.p>
      </div>
    </section>
  )
}

export default FinalCTA
