import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const HOW_IT_WORKS = [
  {
    step: '01',
    icon: 'touch_app',
    title: 'Choose & Book',
    description: 'Pick your event type — birthday, anniversary, date night, gaming, or bride-to-be. Book via WhatsApp in minutes.',
  },
  {
    step: '02',
    icon: 'design_services',
    title: 'We Setup Everything',
    description: 'Our team handles decorations, LED board, fog machine, music, cake table, and any custom theme you want.',
  },
  {
    step: '03',
    icon: 'celebration',
    title: 'Walk In & Celebrate',
    description: 'Just arrive with your loved ones. Everything is ready — lights, camera, surprises. Enjoy your private moment!',
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
        className="text-center mb-14"
      >
        <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
          HOW IT WORKS
        </span>
        <h2 className="font-sora text-headline-lg mt-4">Book in 3 Simple Steps</h2>
        <p className="text-on-surface-variant font-manrope mt-4 max-w-lg mx-auto">
          From booking to celebration — we make it effortless for you.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {HOW_IT_WORKS.map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="glass-surface rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Background step number */}
            <span className="absolute top-4 right-4 font-sora text-7xl font-bold text-white/5">
              {item.step}
            </span>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-primary-container/15 border border-primary/30 flex items-center justify-center mb-5">
              <span className="material-symbols-outlined text-primary text-3xl">
                {item.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-sora text-headline-md mb-3 text-on-surface">{item.title}</h3>

            {/* Description */}
            <p className="text-on-surface-variant font-manrope text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Connector line (except last) */}
            {i < 2 && (
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-px bg-primary/30 z-10" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Walkthrough
