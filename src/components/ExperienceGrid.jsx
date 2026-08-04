import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    icon: 'airline_seat_recline_extra',
    title: 'Premium Seating',
    description: 'Handcrafted ergonomic recliners with zero-gravity positioning for maximum comfort.',
    colSpan: 'md:col-span-2 lg:col-span-3',
    height: 'h-[400px]',
  },
  {
    icon: 'surround_sound',
    title: 'Immersive Sound',
    description: 'Multi-dimensional audio that flows around you with breathtaking realism.',
    colSpan: 'md:col-span-1 lg:col-span-3',
    height: 'h-[400px]',
  },
  {
    icon: 'settings_input_hdmi',
    title: 'Laser Projection',
    description: 'Ultra-bright, high-contrast visuals with 4K clarity.',
    colSpan: 'md:col-span-1 lg:col-span-2',
    height: 'h-[350px]',
  },
  {
    icon: 'architecture',
    title: 'Luxury Interiors',
    description: 'Award-winning architectural design that sets the mood.',
    colSpan: 'md:col-span-1 lg:col-span-2',
    height: 'h-[350px]',
  },
  {
    icon: 'restaurant',
    title: 'Food & Beverages',
    description: 'Gourmet menus curated by world-class chefs.',
    colSpan: 'md:col-span-1 lg:col-span-2',
    height: 'h-[350px]',
  },
]

function ExperienceCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`${item.colSpan} ${item.height} glass-surface rounded-2xl p-8 relative flex flex-col justify-end overflow-hidden group cursor-pointer`}
    >
      {/* Icon */}
      <div className="absolute top-8 right-8 text-primary/30 group-hover:text-primary transition-colors duration-500">
        <span className="material-symbols-outlined text-5xl">{item.icon}</span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-sora text-headline-md mb-2">{item.title}</h3>
        <p className="text-on-surface-variant font-manrope">{item.description}</p>
      </div>

      {/* Reflection overlay */}
      <div className="reflection-overlay absolute inset-0 rounded-2xl" />
    </motion.div>
  )
}

function ExperienceGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-section-gap px-5 md:px-margin-desktop bg-surface-container-lowest">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
          The PVR Standard
        </span>
        <h2 className="font-sora text-headline-lg mt-4">Redefining the Cinematic Journey</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {experiences.map((item, i) => (
          <ExperienceCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceGrid
