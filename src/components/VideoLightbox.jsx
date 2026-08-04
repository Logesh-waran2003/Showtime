import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

function VideoLightbox({ item, items, onClose, onNavigate }) {
  const currentIndex = items.findIndex((i) => i.id === item.id)

  const goNext = () => {
    const next = items[(currentIndex + 1) % items.length]
    onNavigate(next)
  }

  const goPrev = () => {
    const prev = items[(currentIndex - 1 + items.length) % items.length]
    onNavigate(prev)
  }

  // Keyboard navigation
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

        {/* Content container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative z-10 max-w-lg w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image/Video display */}
          <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-primary/20 shadow-[0_0_60px_rgba(0,229,255,0.2)]">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* Play overlay for videos */}
            {item.type === 'video' || item.videoUrl ? (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-20 h-20 rounded-full bg-primary-container/80 backdrop-blur-md flex items-center justify-center border border-primary/40 electric-glow animate-pulse-glow">
                  <svg className="w-9 h-9 text-on-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ) : null}

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="font-sora text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-white/70 text-sm font-manrope">
                {item.category} • {item.views || ''} {item.likes ? `• ${item.likes} likes` : ''}
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors hidden md:flex"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors hidden md:flex"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <p className="text-center mt-4 text-white/50 text-sm font-space-grotesk">
            {currentIndex + 1} / {items.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default VideoLightbox
