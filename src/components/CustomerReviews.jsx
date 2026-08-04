import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useMemo } from 'react'
import CircularGallery from './CircularGallery'

// Reviews data
const reviewsData = [
  { name: 'Priya', event: 'Birthday Surprise', rating: 5, text: 'Best birthday surprise ever! The fog entry was magical ✨' },
  { name: 'Rahul', event: 'Proposal', rating: 5, text: 'Perfect proposal setup. She said YES! 💍' },
  { name: 'Deepa & Vijay', event: 'Anniversary', rating: 5, text: 'Amazing 10th anniversary celebration! So romantic ❤️' },
  { name: 'Karthik', event: 'PS5 Gaming', rating: 5, text: 'PS5 on big screen was EPIC! Best gaming party 🎮' },
  { name: 'Meena', event: 'Kids Birthday', rating: 5, text: 'Kids absolutely loved the balloon decor! 🎈' },
  { name: 'Vijay & Sindhu', event: 'Date Night', rating: 5, text: 'Unforgettable romantic date night. Candles + roses 🌹' },
  { name: 'Sneha', event: 'Birthday', rating: 5, text: '10/10 decor and vibes. Team was super helpful! 🎉' },
  { name: 'Anitha', event: 'Bride-to-be', rating: 5, text: 'Best bride-to-be party with my besties! 👰💖' },
  { name: 'Sivabalan', event: 'Birthday', rating: 5, text: 'Made my wife feel so special. Worth every rupee! 💕' },
  { name: 'Roshinie', event: 'Birthday', rating: 5, text: 'Surprised my dad - he was so emotional! Best day 🥹' },
]

// Generate review card images using canvas
function generateReviewCardImage(review) {
  const canvas = document.createElement('canvas')
  canvas.width = 800
  canvas.height = 600
  const ctx = canvas.getContext('2d')

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 800, 600)
  gradient.addColorStop(0, '#1a1a2e')
  gradient.addColorStop(1, '#0f0f1a')
  ctx.fillStyle = gradient
  ctx.roundRect(0, 0, 800, 600, 24)
  ctx.fill()

  // Border
  ctx.strokeStyle = 'rgba(0, 229, 255, 0.3)'
  ctx.lineWidth = 2
  ctx.roundRect(0, 0, 800, 600, 24)
  ctx.stroke()

  // Stars
  ctx.font = '36px Arial'
  ctx.fillStyle = '#fbbf24'
  const stars = '★'.repeat(review.rating)
  ctx.fillText(stars, 60, 80)

  // Quote mark
  ctx.font = 'bold 80px Georgia'
  ctx.fillStyle = 'rgba(0, 229, 255, 0.2)'
  ctx.fillText('"', 50, 170)

  // Review text
  ctx.font = '28px Arial'
  ctx.fillStyle = '#ffffff'
  const words = review.text.split(' ')
  let line = ''
  let y = 200
  for (let word of words) {
    const testLine = line + word + ' '
    if (ctx.measureText(testLine).width > 680) {
      ctx.fillText(line.trim(), 60, y)
      line = word + ' '
      y += 42
    } else {
      line = testLine
    }
  }
  ctx.fillText(line.trim(), 60, y)

  // Divider
  ctx.strokeStyle = 'rgba(0, 229, 255, 0.2)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(60, 420)
  ctx.lineTo(740, 420)
  ctx.stroke()

  // Name
  ctx.font = 'bold 26px Arial'
  ctx.fillStyle = '#c3f5ff'
  ctx.fillText(review.name, 60, 470)

  // Event type
  ctx.font = '20px Arial'
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
  ctx.fillText(review.event, 60, 510)

  // Verified badge
  ctx.font = '18px Arial'
  ctx.fillStyle = '#00e5ff'
  ctx.fillText('✓ Verified', 660, 510)

  return canvas.toDataURL('image/png')
}

function CustomerReviews() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [reviewImages, setReviewImages] = useState([])

  // Generate card images on mount
  useEffect(() => {
    const images = reviewsData.map(review => ({
      image: generateReviewCardImage(review),
      text: `${review.name} - ${review.event}`
    }))
    setReviewImages(images)
  }, [])

  if (reviewImages.length === 0) return null

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
          200+ celebrations. 4.9★ rating. Drag to browse reviews.
        </p>
      </motion.div>

      {/* CircularGallery with review card images */}
      <div className="relative h-[500px] sm:h-[600px] w-full">
        <CircularGallery
          items={reviewImages}
          bend={-3}
          textColor="#c3f5ff"
          borderRadius={0.06}
          font="bold 18px Sora"
          fontUrl="https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap"
          scrollSpeed={3}
          scrollEase={0.08}
        />
      </div>
    </section>
  )
}

export default CustomerReviews
