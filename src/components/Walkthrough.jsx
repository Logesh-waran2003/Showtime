import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const HOW_IT_WORKS = [
  {
    step: '01',
    icon: 'package_2',
    title: 'Choose Your Package',
    description: 'Browse our packages and pick what suits your celebration.',
  },
  {
    step: '02',
    icon: 'edit_note',
    title: 'Customize & Plan',
    description: 'Share your vision with us. We handle decorations, setup, and surprises.',
  },
  {
    step: '03',
    icon: 'celebration',
    title: 'Celebrate!',
    description: 'Walk in and enjoy. Everything is ready for your special moment.',
  },
]

function Walkthrough() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="py-section-gap px-5 md:px-margin-desktop bg-surface-container-lowest">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="font-sora text-headline-lg text-center">How It Works</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {HOW_IT_WORKS.map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="glass-surface rounded-2xl p-8 flex flex-col items-center text-center"
          >
            {/* Step number */}
            <span className="font-sora text-5xl font-bold text-primary/30 mb-4">
              {item.step}
            </span>

            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <span className="material-symbols-outlined text-primary text-3xl">
                {item.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-sora text-headline-md mb-3">{item.title}</h3>

            {/* Description */}
            <p className="text-on-surface-variant font-manrope text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Walkthrough
