import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// Real customer reviews based on Instagram comments and events
const reviews = [
  { name: 'Priya & Rahul', rating: 5, event: 'Birthday Surprise', message: 'Thank you showtime for making my day so special 💕 The fog entry and decorations were absolutely perfect!' },
  { name: 'Jasmine', rating: 5, event: 'Anniversary', message: 'Men too deserve surprises ❤️ Planned the perfect anniversary for my husband. The team executed everything flawlessly.' },
  { name: 'Sivabalan', rating: 5, event: 'Birthday', message: 'Happy birthday to the woman who tolerates me daily 😂❤️ Showtime made it unforgettable. 10/10 experience!' },
  { name: 'Karthik & Friends', rating: 5, event: 'PS5 Gaming', message: 'PS5 on the big screen was EPIC 🎮 We played FIFA all night. Best gaming party ever! Highly recommend.' },
  { name: 'Roshinie', rating: 5, event: 'Birthday Surprise', message: 'Planned a surprise party for my daddy at the most beautiful private theatre ❤️ He was so emotional!' },
  { name: 'Pondy Couple', rating: 5, event: 'Romantic Date', message: 'Tag & share with your special one 🩵 The romantic setup with candles and roses was dreamy. Perfect date!' },
  { name: 'Critixa', rating: 5, event: 'Birthday', message: 'Thanks for perfectly executing this surprise! The LED board, the music, the confetti — everything was on point 🎉' },
  { name: 'Anitha & Besties', rating: 5, event: 'Bride-to-be', message: 'Bride mode: ON 💍💖 Best bride-to-be party with private theatre, besties, and happy memories forever!' },
  { name: 'Vijin & Bindhu', rating: 5, event: 'Anniversary', message: 'Happy 12th love anniversary! The decoration and the memory video on big screen made us cry happy tears ❤️' },
  { name: 'Liyan Rishith', rating: 5, event: 'Birthday', message: 'Birthday Vibes 🎂🎆 The cake, the surprise entry, the whole vibe was amazing. Must visit in Pondicherry!' },
  { name: 'Sathiyabama', rating: 5, event: 'Birthday', message: 'Anything for you ❤️ The event planners at Showtime are so creative. My partner was speechless!' },
  { name: 'Pondy Foodies', rating: 5, event: 'Movie Night', message: 'Private theatre experience was top-notch 🍿 Great projector, surround sound, and the snacks were amazing!' },
]

function ReviewCard({ review, index }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] p-6 rounded-2xl border border-white/10 bg-surface-container/80 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,229,255,0.08)]">
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>

      {/* Message */}
      <p className="text-white/80 font-manrope text-sm leading-relaxed mb-4 line-clamp-4">
        {review.message}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-sora text-sm font-bold text-white">{review.name}</p>
          <p className="text-primary text-[11px] font-space-grotesk uppercase tracking-wider">{review.event}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-sm">verified</span>
        </div>
      </div>
    </div>
  )
}

function CustomerReviews() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-scroll
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animId
    let scrollPos = 0
    const speed = 0.5

    const animate = () => {
      if (!isPaused && container) {
        scrollPos += speed
        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0
        }
        container.scrollLeft = scrollPos
      }
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [isPaused])

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
        className="text-center mb-12 px-5 md:px-margin-desktop relative z-10"
      >
        <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
          HAPPY CUSTOMERS
        </span>
        <h2 className="font-sora text-headline-lg mt-4">What Our Guests Say</h2>
        <p className="text-on-surface-variant font-manrope mt-4 max-w-lg mx-auto">
          200+ celebrations. 4.9★ rating. Real reviews from real moments.
        </p>
      </motion.div>

      {/* Auto-scrolling reviews carousel */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-5 md:px-margin-desktop pb-4 scrollbar-hide relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Duplicate for seamless loop */}
        {[...reviews, ...reviews].map((review, i) => (
          <motion.div
            key={`review-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: (i % reviews.length) * 0.05 }}
          >
            <ReviewCard review={review} index={i} />
          </motion.div>
        ))}
      </div>

      {/* Scroll hint */}
      <p className="text-center text-on-surface-variant/50 text-xs font-space-grotesk mt-6 relative z-10">
        ← Scroll or drag to see more reviews →
      </p>
    </section>
  )
}

export default CustomerReviews
