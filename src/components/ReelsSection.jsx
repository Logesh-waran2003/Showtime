import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { REELS_DATA } from '../data/showtimeData'

// Fullscreen Reel Viewer - plays reel INSIDE our website (no redirect)
function ReelViewer({ reel, reels, onClose, onNavigate }) {
  const currentIndex = reels.findIndex((r) => r.id === reel.id)

  const goNext = () => onNavigate(reels[(currentIndex + 1) % reels.length])
  const goPrev = () => onNavigate(reels[(currentIndex - 1 + reels.length) % reels.length])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [currentIndex])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />

      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.7, opacity: 0, y: 50 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative z-10 w-[400px] max-w-[92vw] h-[700px] max-h-[88vh] rounded-3xl overflow-hidden border border-primary/30 shadow-[0_0_80px_rgba(0,229,255,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Embed reel with captivate=true to auto-play and hide IG UI */}
        <iframe
          src={`${reel.instagramUrl}embed/?cr=1&v=14&wp=400&rd=https%3A%2F%2Fshowtimesurpriseplanners.in`}
          className="w-full h-full border-0"
          allowFullScreen
          allow="autoplay; encrypted-media"
          title={reel.title}
        />
      </motion.div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <span className="material-symbols-outlined text-2xl">close</span>
      </button>

      {/* Nav */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev() }}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary-container/30 hover:border-primary/50 transition-all"
      >
        <span className="material-symbols-outlined text-3xl">chevron_left</span>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); goNext() }}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary-container/30 hover:border-primary/50 transition-all"
      >
        <span className="material-symbols-outlined text-3xl">chevron_right</span>
      </button>

      {/* Bottom bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-black/70 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10">
        <span className="text-white font-sora text-sm font-semibold">{reel.title}</span>
        {reel.views && (
          <span className="text-primary text-xs font-bold">{reel.views} views</span>
        )}
        <span className="text-on-surface-variant text-xs">{currentIndex + 1}/{reels.length}</span>
      </div>
    </motion.div>
  )
}

function ReelsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [selectedReel, setSelectedReel] = useState(null)
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-scroll carousel
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let scrollAmount = 0
    const speed = 0.5 // px per frame

    const animate = () => {
      if (!isPaused && container) {
        scrollAmount += speed
        // Reset scroll when it reaches the end
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0
        }
        container.scrollLeft = scrollAmount
      }
      requestAnimationFrame(animate)
    }

    const animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [isPaused])

  // Handle card click - open in OUR viewer, NOT Instagram
  const handleReelClick = (e, reel) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedReel(reel)
  }

  return (
    <>
      <section id="gallery" className="py-section-gap bg-surface-container-lowest relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary-container/5 blur-[150px] rounded-full pointer-events-none" />

        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-5 md:px-margin-desktop relative z-10"
        >
          <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
            Our Moments
          </span>
          <h2 className="font-sora text-headline-lg mt-4">Celebrations Captured</h2>
          <p className="text-on-surface-variant font-manrope mt-4 max-w-lg mx-auto">
            Real moments from our private theatre. Tap any to watch it right here.
          </p>
        </motion.div>

        {/* Auto-scrolling Reels Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-5 md:px-margin-desktop pb-4 scrollbar-hide relative z-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Duplicate reels for seamless loop feel */}
          {[...REELS_DATA, ...REELS_DATA].map((reel, i) => (
            <motion.div
              key={`${reel.id}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (i % REELS_DATA.length) * 0.1 }}
              className="flex-shrink-0 w-[220px] sm:w-[250px] md:w-[280px] group cursor-pointer"
              onClick={(e) => handleReelClick(e, reel)}
              onMouseEnter={() => setIsPaused(true)}
            >
              {/* Card with visible Instagram embed */}
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-[0_20px_50px_rgba(0,229,255,0.15)]">
                {/* Live Instagram embed visible in card */}
                <iframe
                  src={`${reel.instagramUrl}embed/`}
                  className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                  loading="lazy"
                  title={reel.title}
                  tabIndex="-1"
                />

                {/* Clickable overlay - prevents iframe from capturing clicks */}
                <div className="absolute inset-0 z-10 bg-transparent group-hover:bg-black/10 transition-colors duration-300" />

                {/* Hover play indicator */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-primary/50 electric-glow">
                    <span className="material-symbols-outlined text-primary text-3xl">fullscreen</span>
                  </div>
                </div>

                {/* Views badge */}
                {reel.views && (
                  <div className="absolute bottom-3 left-3 z-20 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-xs">visibility</span>
                    <span className="text-[11px] text-white font-bold">{reel.views}</span>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute top-3 left-3 z-20 bg-primary-container text-on-primary text-[10px] font-bold px-2.5 py-1 rounded-full font-space-grotesk uppercase">
                  {reel.category}
                </div>
              </div>

              {/* Title below card */}
              <p className="mt-3 text-on-surface font-sora text-xs sm:text-sm font-semibold text-center group-hover:text-primary transition-colors duration-300 line-clamp-1">
                {reel.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint indicator */}
        <div className="flex justify-center gap-1.5 mt-6 relative z-10">
          {REELS_DATA.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white/20" />
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10 px-5 relative z-10"
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
            Follow @showtime_privatemovietheatre
          </a>
        </motion.div>
      </section>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {selectedReel && (
          <ReelViewer
            reel={selectedReel}
            reels={REELS_DATA}
            onClose={() => setSelectedReel(null)}
            onNavigate={setSelectedReel}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default ReelsSection
