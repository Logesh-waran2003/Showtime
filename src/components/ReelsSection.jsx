import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { REELS_DATA } from '../data/showtimeData'
import VideoLightbox from './VideoLightbox'

function ReelCard({ reel, index, onPlay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="group relative cursor-pointer"
      onClick={() => onPlay(reel)}
    >
      {/* 9:16 Aspect ratio card */}
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden glass-surface">
        {/* Thumbnail */}
        <img
          src={reel.thumbnail}
          alt={reel.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {/* Play button center */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-16 h-16 rounded-full bg-primary-container/80 backdrop-blur-md flex items-center justify-center border border-primary/40 electric-glow">
            <svg className="w-7 h-7 text-on-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </motion.div>

        {/* Reel indicator top-right */}
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z" />
          </svg>
          <span className="text-[10px] text-white font-bold">REEL</span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white font-sora text-sm font-semibold mb-2 line-clamp-2">
            {reel.title}
          </p>
          <div className="flex items-center gap-4 text-xs text-white/80">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              {reel.views}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {reel.likes}
            </span>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-primary-container/90 text-on-primary text-[10px] font-bold px-2 py-0.5 rounded-full font-space-grotesk uppercase">
          {reel.category}
        </div>
      </div>
    </motion.div>
  )
}

function ReelsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [selectedReel, setSelectedReel] = useState(null)

  return (
    <>
      <section className="py-section-gap px-5 md:px-margin-desktop bg-surface-container-lowest">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
            Moments
          </span>
          <h2 className="font-sora text-headline-lg mt-4">Celebrations Captured</h2>
          <p className="text-on-surface-variant font-manrope mt-4 max-w-lg mx-auto">
            Real moments from our private theatre — birthdays, surprises, and celebrations that made memories last forever.
          </p>
        </motion.div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {REELS_DATA.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i} onPlay={setSelectedReel} />
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/showtime_privatemovietheatre/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-primary/30 rounded-full text-primary font-space-grotesk text-label-caps hover:bg-white/10 hover:border-primary/60 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow Us on Instagram
          </a>
        </motion.div>
      </section>

      {/* Lightbox */}
      {selectedReel && (
        <VideoLightbox
          item={selectedReel}
          items={REELS_DATA}
          onClose={() => setSelectedReel(null)}
          onNavigate={setSelectedReel}
        />
      )}
    </>
  )
}

export default ReelsSection
