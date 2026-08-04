import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SERVICES } from '../data/showtimeData'

function ServiceCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`${item.colSpan} ${item.height} relative rounded-3xl overflow-hidden group cursor-pointer`}
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:via-black/50 transition-all duration-500" />

      {/* Colored accent on hover */}
      <div className="absolute inset-0 bg-primary-container/0 group-hover:bg-primary-container/10 transition-colors duration-500" />

      {/* Border */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-primary/40 transition-colors duration-500" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-7 sm:p-8">
        {/* Top - Icon badge */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:border-primary/50 group-hover:bg-primary-container/20 transition-all duration-300"
        >
          <span className="material-symbols-outlined text-2xl text-primary">
            {item.icon}
          </span>
        </motion.div>

        {/* Bottom - Text */}
        <div>
          <h3 className="font-sora text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-lg">
            {item.title}
          </h3>
          <p className="text-white/70 font-manrope text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300 max-w-md">
            {item.description}
          </p>

          {/* CTA hint on hover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-xs font-space-grotesk uppercase tracking-wider text-primary font-bold">
              Book Now
            </span>
            <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
          </motion.div>
        </div>
      </div>

      {/* Glow effect on bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-container/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}

function ExperienceGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-section-gap px-5 md:px-margin-desktop bg-surface-container-lowest relative overflow-hidden">
      {/* Section background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 blur-[200px] rounded-full pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
          WHAT WE OFFER
        </span>
        <h2 className="font-sora text-headline-lg mt-4">Private Theatre for Every Occasion</h2>
        <p className="text-on-surface-variant font-manrope mt-4 max-w-2xl mx-auto">
          Whether it's a birthday bash, romantic date, or a gaming night with friends — we create the perfect setup for your moment.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 relative z-10">
        {SERVICES.map((item, i) => (
          <ServiceCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceGrid
