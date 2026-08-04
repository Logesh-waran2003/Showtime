import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import CircularGallery from './CircularGallery'

// Reviews data - shown as cards in the 3D circular gallery
const reviews = [
  { image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop', text: '"Best birthday surprise!" - Priya ⭐⭐⭐⭐⭐' },
  { image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', text: '"Perfect proposal setup" - Rahul ⭐⭐⭐⭐⭐' },
  { image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop', text: '"Amazing anniversary!" - Deepa ⭐⭐⭐⭐⭐' },
  { image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop', text: '"PS5 party was epic!" - Karthik ⭐⭐⭐⭐⭐' },
  { image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&h=600&fit=crop', text: '"Kids loved the setup" - Meena ⭐⭐⭐⭐⭐' },
  { image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop', text: '"Unforgettable date night" - Vijay ⭐⭐⭐⭐⭐' },
  { image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop', text: '"10/10 decor & vibes" - Sneha ⭐⭐⭐⭐⭐' },
  { image: 'https://images.unsplash.com/photo-1529543544006-97e4cddea4eb?w=800&h=600&fit=crop', text: '"Best bride-to-be party!" - Anitha ⭐⭐⭐⭐⭐' },
  { image: 'https://images.unsplash.com/photo-1543589077-47d06c1c7b9d?w=800&h=600&fit=crop', text: '"Romantic candle setup" - Sindhu ⭐⭐⭐⭐⭐' },
  { image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=600&fit=crop', text: '"She said YES!" - Arun ⭐⭐⭐⭐⭐' },
]

function CustomerReviews() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="reviews" className="py-section-gap bg-surface-container-lowest relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary-container/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-4 px-5 md:px-margin-desktop relative z-10"
      >
        <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
          HAPPY CUSTOMERS
        </span>
        <h2 className="font-sora text-headline-lg mt-4">What Our Guests Say</h2>
        <p className="text-on-surface-variant font-manrope mt-4 max-w-lg mx-auto">
          200+ celebrations. 4.9★ rating. Drag to explore real moments.
        </p>
      </motion.div>

      {/* CircularGallery - 3D curved scrollable carousel */}
      <div className="relative h-[500px] sm:h-[600px] w-full">
        <CircularGallery
          items={reviews}
          bend={-3}
          textColor="#c3f5ff"
          borderRadius={0.08}
          font="bold 16px Sora"
          fontUrl="https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap"
          scrollSpeed={3}
          scrollEase={0.08}
        />
      </div>
    </section>
  )
}

export default CustomerReviews
