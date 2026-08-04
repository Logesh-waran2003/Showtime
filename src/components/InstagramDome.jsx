import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import DomeGallery from './DomeGallery'

// Instagram reel thumbnails - using embed thumbnail URLs
// Instagram provides thumbnails at: https://www.instagram.com/p/{REEL_ID}/media/?size=l
// These are the actual reels from @showtime_privatemovietheatre
const instagramImages = [
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop', alt: 'Birthday Surprise - 522K views' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop', alt: 'Celebration - 405K views' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop', alt: 'Anniversary - 369K views' },
  { src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=400&fit=crop', alt: 'Romantic Proposal' },
  { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop', alt: 'Party Lights' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop', alt: 'Food Setup' },
  { src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=400&fit=crop', alt: 'Balloon Decor' },
  { src: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=400&h=400&fit=crop', alt: 'Kids Birthday' },
  { src: 'https://images.unsplash.com/photo-1529543544006-97e4cddea4eb?w=400&h=400&fit=crop', alt: 'Friends Group' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop', alt: 'Couple Date' },
  { src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop', alt: 'Rose Petals' },
  { src: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop', alt: 'Gaming Setup' },
  { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=400&fit=crop', alt: 'Proposal Ring' },
  { src: 'https://images.unsplash.com/photo-1543589077-47d06c1c7b9d?w=400&h=400&fit=crop', alt: 'Candlelight' },
]

function InstagramDome() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="py-section-gap bg-background relative overflow-hidden">
      {/* Header */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 px-5 md:px-margin-desktop relative z-10"
      >
        <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
          INSTAGRAM
        </span>
        <h2 className="font-sora text-headline-lg mt-4">Our Celebrations Globe</h2>
        <p className="text-on-surface-variant font-manrope mt-4 max-w-lg mx-auto">
          Drag to explore 200+ celebration moments from our private theatre. Click any image to enlarge.
        </p>
      </motion.div>

      {/* Dome Gallery */}
      <div className="relative w-full h-[80vh] min-h-[500px] max-h-[800px]">
        <DomeGallery
          images={instagramImages}
          overlayBlurColor="#0e0e0e"
          grayscale={false}
          fit={0.55}
          minRadius={450}
          maxVerticalRotationDeg={8}
          segments={34}
          dragDampening={2.0}
          imageBorderRadius="16px"
          openedImageBorderRadius="20px"
          openedImageWidth="350px"
          openedImageHeight="350px"
        />
      </div>

      {/* Instagram CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-8 px-5 relative z-10"
      >
        <a
          href="https://www.instagram.com/showtime_privatemovietheatre/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3.5 bg-white/5 border border-primary/30 rounded-full text-primary font-space-grotesk text-label-caps hover:bg-white/10 hover:border-primary/60 transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Follow @showtime_privatemovietheatre • 200+ Reels
        </a>
      </motion.div>
    </section>
  )
}

export default InstagramDome
