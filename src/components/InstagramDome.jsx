import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import DomeGallery from './DomeGallery'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&fit=crop', alt: 'Birthday celebration' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&fit=crop', alt: 'Party lights' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&fit=crop', alt: 'Couple moment' },
  { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&fit=crop', alt: 'Neon celebration' },
  { src: 'https://images.unsplash.com/photo-1529543544006-97e4cddea4eb?w=600&fit=crop', alt: 'Friends party' },
  { src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&fit=crop', alt: 'Balloons decor' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&fit=crop', alt: 'Food setup' },
]

export default function InstagramDome() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4"
        >
          INSTAGRAM
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Our Celebrations Globe
        </motion.h2>
      </div>

      {/* Dome Gallery */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full"
        style={{ height: '80vh' }}
      >
        <DomeGallery
          images={galleryImages}
          overlayBlurColor="#0e0e0e"
          grayscale={false}
          fit={0.55}
          minRadius={450}
          maxVerticalRotationDeg={6}
          dragDampening={2.4}
          imageBorderRadius="16px"
          openedImageBorderRadius="20px"
          openedImageWidth="350px"
          openedImageHeight="450px"
        />
      </motion.div>

      {/* Instagram CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-10"
      >
        <a
          href="https://www.instagram.com/showtime_privatemovietheatre/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-white/80 hover:text-primary transition-colors duration-300 group"
        >
          {/* Instagram Icon */}
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span className="text-lg font-medium">
            Follow @showtime_privatemovietheatre
          </span>
        </a>
      </motion.div>
    </section>
  )
}
