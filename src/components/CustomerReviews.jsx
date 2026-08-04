import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CircularGallery from './CircularGallery'

const reviews = [
  { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop', text: '"Best birthday surprise ever!" - Priya' },
  { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', text: '"Perfect proposal setup" - Rahul' },
  { image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop', text: '"Amazing anniversary!" - Deepa' },
  { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop', text: '"PS5 party was epic" - Karthik' },
  { image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop', text: '"Kids loved it!" - Meena' },
  { image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop', text: '"Unforgettable date night" - Vijay' },
  { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop', text: '"10/10 experience" - Sneha' },
  { image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', text: '"Bride-to-be party!" - Anitha' },
]

export default function CustomerReviews() {
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="reviews" className="py-section-gap px-5 md:px-margin-desktop bg-surface-container-lowest relative overflow-hidden">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
          HAPPY CUSTOMERS
        </span>
        <h2 className="font-sora text-headline-lg mt-4">What Our Guests Say</h2>
      </motion.div>

      {/* Circular Gallery */}
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          items={reviews}
          bend={-3}
          textColor="#c3f5ff"
          borderRadius={0.1}
          font="bold 20px Sora"
          fontUrl="https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap"
          scrollSpeed={3}
          scrollEase={0.08}
        />
      </div>
    </section>
  )
}
