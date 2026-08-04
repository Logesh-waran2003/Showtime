import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const reviews = [
  { name: 'Priya', rating: 5, event: 'Birthday Surprise', message: 'Best birthday surprise ever! The fog entry was magical. Decorations were so beautiful and the LED name board made it extra special. Highly recommend!' },
  { name: 'Rahul', rating: 5, event: 'Proposal', message: 'Perfect proposal setup with rose petals and candles. She said YES! The team helped me plan everything secretly. Will never forget this moment.' },
  { name: 'Deepa & Vijay', rating: 5, event: 'Anniversary', message: 'Our 10th anniversary was celebrated so beautifully here. The memory video on big screen made us both emotional. Best anniversary gift ever!' },
  { name: 'Karthik', rating: 5, event: 'PS5 Gaming', message: 'PS5 on the cinema big screen was absolutely EPIC! Played FIFA tournament with friends for 3 hours. Best gaming party experience in Pondicherry!' },
  { name: 'Meena', rating: 5, event: 'Kids Birthday', message: 'My son\'s 5th birthday party was amazing! Kids loved the balloon arch, cartoon on big screen, and the cake cutting setup. So well organized!' },
  { name: 'Vijay & Sindhu', rating: 5, event: 'Date Night', message: 'Most romantic date night ever! Candles, roses, dim lights, and our favourite movie on the big screen. The couple package is totally worth it.' },
  { name: 'Sneha', rating: 5, event: 'Birthday', message: 'Gave this as a gift to my best friend. The decor was 10/10, team was super helpful and friendly. Everything was ready perfectly on time!' },
  { name: 'Anitha', rating: 5, event: 'Bride-to-be', message: 'Best bride-to-be party with my girl gang! Private theatre, music, dance, food - everything was perfect. Thank you Showtime team!' },
  { name: 'Sivabalan', rating: 5, event: 'Birthday', message: 'Surprised my wife here for her birthday. She was completely shocked! The confetti burst and fog entry made it so cinematic. Worth every rupee!' },
  { name: 'Roshinie', rating: 5, event: 'Family Celebration', message: 'Threw a surprise party for my dad. He was so emotional seeing the family video on big screen. The private theatre concept is brilliant!' },
  { name: 'Pondy Couple', rating: 5, event: 'Romantic Date', message: 'The romantic setup with candles and roses was dreamy. Perfect private date spot in Pondicherry. We keep coming back every month!' },
  { name: 'Critixa', rating: 5, event: 'Birthday', message: 'Thanks for perfectly executing this surprise! The LED board, the music, the confetti — everything was on point. My friend cried happy tears!' },
]

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>

      {/* Message */}
      <p className="text-gray-800 font-manrope text-sm leading-relaxed mb-4">
        "{review.message}"
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <div>
          <p className="font-sora text-sm font-bold text-gray-900">{review.name}</p>
          <p className="text-xs text-teal-600 font-space-grotesk uppercase tracking-wider">{review.event}</p>
        </div>
        <div className="flex items-center gap-1 text-green-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-[10px] font-bold">Verified</span>
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

      {/* Auto-scrolling reviews */}
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
            <ReviewCard review={review} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
