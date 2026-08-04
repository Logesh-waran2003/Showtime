import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function BrandEmotional() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&fit=crop"
          alt="Celebration ambiance"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 text-center px-5"
      >
        <h2 className="font-sora text-headline-lg-mobile md:text-[64px] md:leading-[72px] mb-8 max-w-4xl leading-tight mx-auto">
          Every celebration deserves a{' '}
          <span className="text-primary italic">cinematic experience.</span>{' '}
          We make it happen.
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-primary-container mx-auto rounded-full electric-glow"
        />
      </motion.div>
    </section>
  )
}

export default BrandEmotional
