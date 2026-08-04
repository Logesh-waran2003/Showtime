import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useMemo } from 'react'
import CircularGallery from './CircularGallery'

// Reviews data
const reviewsData = [
  { name: 'Priya', event: 'Birthday Surprise', rating: 5, text: 'Best birthday surprise ever! The fog entry was magical. Decorations were so beautiful and the LED name board made it extra special. Highly recommend!' },
  { name: 'Rahul', event: 'Proposal', rating: 5, text: 'Perfect proposal setup with rose petals and candles. She said YES! The team helped me plan everything secretly. Will never forget this moment.' },
  { name: 'Deepa & Vijay', event: 'Anniversary', rating: 5, text: 'Our 10th anniversary was celebrated so beautifully here. The memory video on big screen made us both emotional. Best anniversary gift ever!' },
  { name: 'Karthik', event: 'PS5 Gaming', rating: 5, text: 'PS5 on the cinema big screen was absolutely EPIC! Played FIFA tournament with friends for 3 hours. Best gaming party experience in Pondicherry!' },
  { name: 'Meena', event: 'Kids Birthday', rating: 5, text: 'My son\'s 5th birthday party was amazing! Kids loved the balloon arch, cartoon on big screen, and the cake cutting setup. So well organized!' },
  { name: 'Vijay & Sindhu', event: 'Date Night', rating: 5, text: 'Most romantic date night ever! Candles, roses, dim lights, and our favourite movie on the big screen. The couple package is totally worth it.' },
  { name: 'Sneha', event: 'Birthday', rating: 5, text: 'Gave this as a gift to my best friend. The decor was 10/10, team was super helpful and friendly. Everything was ready perfectly on time!' },
  { name: 'Anitha', event: 'Bride-to-be', rating: 5, text: 'Best bride-to-be party with my girl gang! Private theatre, music, dance, food - everything was perfect. Thank you Showtime team!' },
  { name: 'Sivabalan', event: 'Birthday', rating: 5, text: 'Surprised my wife here for her birthday. She was completely shocked! The confetti burst and fog entry made it so cinematic. Worth every rupee!' },
  { name: 'Roshinie', event: 'Family Celebration', rating: 5, text: 'Threw a surprise party for my dad. He was so emotional seeing the family video on big screen. The private theatre concept is brilliant!' },
]

// Generate review card images using canvas
function generateReviewCardImage(review) {
  const canvas = document.createElement('canvas')
  canvas.width = 800
  canvas.height = 600
  const ctx = canvas.getContext('2d')

  // White background
  ctx.fillStyle = '#ffffff'
  ctx.beginPath()
  ctx.roundRect(0, 0, 800, 600, 24)
  ctx.fill()

  // Subtle shadow border
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.roundRect(0, 0, 800, 600, 24)
  ctx.stroke()

  // Stars - gold
  ctx.font = '40px Arial'
  ctx.fillStyle = '#f59e0b'
  const stars = '★'.repeat(review.rating)
  ctx.fillText(stars, 50, 80)

  // Review text - black, large, wrapped properly
  ctx.font = '32px Arial'
  ctx.fillStyle = '#1a1a1a'
  const words = review.text.split(' ')
  let line = ''
  let y = 160
  const lineHeight = 48
  const maxWidth = 680
  for (let word of words) {
    const testLine = line + word + ' '
    if (ctx.measureText(testLine).width > maxWidth) {
      ctx.fillText(line.trim(), 50, y)
      line = word + ' '
      y += lineHeight
    } else {
      line = testLine
    }
  }
  ctx.fillText(line.trim(), 50, y)

  // Divider line
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(50, 440)
  ctx.lineTo(750, 440)
  ctx.stroke()

  // Name - dark bold
  ctx.font = 'bold 30px Arial'
  ctx.fillStyle = '#111111'
  ctx.fillText(review.name, 50, 500)

  // Event type - gray
  ctx.font = '22px Arial'
  ctx.fillStyle = '#666666'
  ctx.fillText(review.event, 50, 545)

  // Verified badge - right side
  ctx.font = 'bold 20px Arial'
  ctx.fillStyle = '#0891b2'
  ctx.fillText('✓ Verified Review', 570, 545)

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
