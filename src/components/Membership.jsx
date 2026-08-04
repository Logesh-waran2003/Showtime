import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WHY_CHOOSE_US = [
  {
    icon: 'lock',
    title: 'Private & Exclusive',
    description: 'Entire theatre just for you. Up to 14 guests in complete privacy.',
  },
  {
    icon: 'settings_suggest',
    title: 'State-of-the-Art Setup',
    description: 'HD projector, surround sound system, premium recliner seating.',
  },
  {
    icon: 'support_agent',
    title: 'Dedicated Event Team',
    description: 'Personal coordinator to handle everything from setup to cleanup.',
  },
  {
    icon: 'palette',
    title: 'Customizable Themes',
    description: 'Any decoration theme you imagine — we bring it to life.',
  },
  {
    icon: 'savings',
    title: 'Affordable Luxury',
    description: 'Premium experience starting at just ₹1,499. No hidden charges.',
  },
  {
    icon: 'location_on',
    title: 'Located in Pondicherry',
    description: 'Conveniently located with easy access and ample parking.',
  },
]

function Membership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-section-gap px-5 md:px-margin-desktop bg-surface-container-low overflow-hidden">
      <div ref={ref} className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
            WHY SHOWTIME
          </span>
          <h2 className="font-sora text-headline-lg mt-4">
            What Makes Us Special
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="glass-surface rounded-2xl p-8"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
                {feature.icon}
              </span>
              <h3 className="font-sora text-headline-md mb-2">{feature.title}</h3>
              <p className="text-on-surface-variant font-manrope">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Membership
