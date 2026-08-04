import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background volumetric glow */}
      <div className="absolute inset-0 volumetric-glow opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[200px]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-5">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="font-sora text-headline-lg-mobile md:text-display-xl mb-6 leading-tight"
        >
          Experience Cinema{' '}
          <span className="text-primary-container">Beyond the Screen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-manrope text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto opacity-90"
        >
          Immersive sound, breathtaking visuals and unforgettable moments—designed for people who love cinema.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <motion.button
            className="w-full md:w-auto px-12 py-4 bg-primary-container text-on-primary font-space-grotesk text-label-caps rounded-full font-bold electric-glow"
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 229, 255, 0.7)' }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE
          </motion.button>
          <motion.button
            className="w-full md:w-auto px-12 py-4 bg-white/5 backdrop-blur-md border border-primary/40 text-primary font-space-grotesk text-label-caps rounded-full font-bold"
            whileHover={{ scale: 1.05, borderColor: 'rgba(195, 245, 255, 0.8)', backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK YOUR SEAT
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="material-symbols-outlined text-primary text-3xl">expand_more</span>
      </motion.div>
    </section>
  )
}

export default Hero
