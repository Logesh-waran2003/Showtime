import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Real Instagram reels from @showtime_privatemovietheatre - with actual CDN thumbnails
// Ordered to show variety first (mixed categories)
const ALL_REELS = [
  // Mix of top performers from each category first
  { id: 'r1', category: 'Birthday', title: 'Tag & Share 🩵 522K', url: 'https://www.instagram.com/reel/DB5fkuyhBA4/', thumb: '' },
  { id: 'r11', category: 'Romantic', title: 'Romantic Date 😍 43K', url: 'https://www.instagram.com/reel/DA5WWozsiu3/', thumb: '' },
  { id: 'r28', category: 'Movie Night', title: 'PS5 setup 🎮 336K', url: 'https://www.instagram.com/reel/DWlznnPE-Gy/', thumb: '' },
  { id: 'r18', category: 'Anniversary', title: 'Anniversary 🌟💃', url: 'https://www.instagram.com/reel/DY84AERS52e/', thumb: '' },
  { id: 'r24', category: 'Friends', title: 'IPL Watch Party 🏏 76K', url: 'https://www.instagram.com/reel/C4n9q9NhmM0/', thumb: '' },
  { id: 'r33', category: 'Family', title: 'They deserve a moment ❤️', url: 'https://www.instagram.com/reel/DbC1oJ3jaKV/', thumb: '' },
  { id: 'r2', category: 'Birthday', title: 'Brother surprise 💜 405K', url: 'https://www.instagram.com/reel/DAdZlTJyecP/', thumb: '' },
  { id: 'r15', category: 'Romantic', title: 'Perfect Gift 🎁 211K', url: 'https://www.instagram.com/reel/DDOwKivOzUt/', thumb: '' },
  { id: 'r23', category: 'Friends', title: 'Bride mode ON 💍', url: 'https://www.instagram.com/reel/DaS5WpXDHvv/', thumb: '' },
  { id: 'r29', category: 'Movie Night', title: 'Private theatre 🎬 184K', url: 'https://www.instagram.com/reel/DPWOgdZExoV/', thumb: '' },
  { id: 'r19', category: 'Anniversary', title: 'Men deserve surprises ❤️', url: 'https://www.instagram.com/reel/DVJDzG3D-U0/', thumb: '' },
  { id: 'r34', category: 'Family', title: 'Marthandam theatre 62K', url: 'https://www.instagram.com/reel/DRjaW4Hkkoj/', thumb: '' },
  // More Birthday
  { id: 'r3', category: 'Birthday', title: 'Birthday surprise 🎂 270K', url: 'https://www.instagram.com/reel/DPdqk03CJ1n/', thumb: '' },
  { id: 'r4', category: 'Birthday', title: 'Watch till End 😂 154K', url: 'https://www.instagram.com/reel/DPgNGTLEfSj/', thumb: '' },
  { id: 'r5', category: 'Birthday', title: 'Best Surprise ❤️ 71K', url: 'https://www.instagram.com/reel/C94eGfihjGT/', thumb: '' },
  { id: 'r6', category: 'Birthday', title: 'Daddy surprise 🎉 67K', url: 'https://www.instagram.com/reel/C-kqaIHBh_v/', thumb: '' },
  { id: 'r7', category: 'Birthday', title: '2AM therapist 💕 66K', url: 'https://www.instagram.com/reel/DJESQDRONMl/', thumb: '' },
  { id: 'r8', category: 'Birthday', title: 'Year One wrap 🎂 51K', url: 'https://www.instagram.com/reel/DJa0T1AsrBY/', thumb: '' },
  { id: 'r9', category: 'Birthday', title: 'Happy 27 🥳❤️', url: 'https://www.instagram.com/reel/DZehSQwhmha/', thumb: '' },
  { id: 'r10', category: 'Birthday', title: 'Birthday special 💕', url: 'https://www.instagram.com/reel/DW1LvHQAYt_/', thumb: '' },
  // More Romantic
  { id: 'r12', category: 'Romantic', title: 'That Smile ❤️ 41K', url: 'https://www.instagram.com/reel/C-LOt0Phzp1/', thumb: '' },
  { id: 'r13', category: 'Romantic', title: 'Lights Camera 📸 75K', url: 'https://www.instagram.com/reel/DE4nR78MPjo/', thumb: '' },
  { id: 'r14', category: 'Romantic', title: 'Perfect Gift 🎁 58K', url: 'https://www.instagram.com/reel/DGbLRhHvnUw/', thumb: '' },
  { id: 'r16', category: 'Romantic', title: 'Boyfriend standard 🥹', url: 'https://www.instagram.com/reel/DaXx9zWjPeb/', thumb: '' },
  { id: 'r17', category: 'Romantic', title: 'Valentine Offer 💖', url: 'https://www.instagram.com/reel/DUZyNbPE9kp/', thumb: '' },
  // More Anniversary
  { id: 'r20', category: 'Anniversary', title: '25th Anniversary 🎉', url: 'https://www.instagram.com/reel/DR-NCyLEhfd/', thumb: '' },
  { id: 'r21', category: 'Anniversary', title: 'Same love new memories', url: 'https://www.instagram.com/reel/DUlGz0tEzJU/', thumb: '' },
  { id: 'r22', category: 'Anniversary', title: 'Anniversary celebration', url: 'https://www.instagram.com/reel/DDmK3z3PLr4/', thumb: '' },
  // More Friends
  { id: 'r25', category: 'Friends', title: 'Bride-to-be planning 👰', url: 'https://www.instagram.com/reel/DSxGFGoEwJQ/', thumb: '' },
  { id: 'r26', category: 'Friends', title: 'Girl gang life!', url: 'https://www.instagram.com/reel/DRroekriMf6/', thumb: '' },
  { id: 'r27', category: 'Friends', title: 'New bride in town ✨', url: 'https://www.instagram.com/reel/DXgkMMRjUOK/', thumb: '' },
  // More Movie Night
  { id: 'r30', category: 'Movie Night', title: 'Marthandam theatre 77K', url: 'https://www.instagram.com/reel/DP3-pCTieNJ/', thumb: '' },
  { id: 'r31', category: 'Movie Night', title: 'Wait for end ❤️ 61K', url: 'https://www.instagram.com/reel/DSe86sbimsm/', thumb: '' },
  { id: 'r32', category: 'Movie Night', title: 'Smoke Entry 🔥', url: 'https://www.instagram.com/reel/DMp76ZjzAUe/', thumb: '' },
  // More Family
  { id: 'r35', category: 'Family', title: 'Family celebration 🎉', url: 'https://www.instagram.com/reel/DGsuXxfBw6Y/', thumb: '' },
  { id: 'r36', category: 'Family', title: 'Naming ceremony ❤️', url: 'https://www.instagram.com/reel/DGau-rFhRI4/', thumb: '' },
]

const CATEGORIES = ['All', 'Birthday', 'Romantic', 'Anniversary', 'Friends', 'Movie Night', 'Family']

// In-site viewer
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
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative z-10 w-[400px] max-w-[92vw] h-[700px] max-h-[88vh] rounded-3xl overflow-hidden border border-primary/30 shadow-[0_0_80px_rgba(0,229,255,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`${reel.url}embed/?cr=1&v=14&wp=400`}
          className="w-full h-full border-0"
          allowFullScreen
          allow="autoplay; encrypted-media"
          title={reel.title}
        />
      </motion.div>
      <button onClick={onClose} className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
        <span className="material-symbols-outlined text-2xl">close</span>
      </button>
      <button onClick={(e) => { e.stopPropagation(); goPrev() }} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary-container/30 transition-all">
        <span className="material-symbols-outlined text-3xl">chevron_left</span>
      </button>
      <button onClick={(e) => { e.stopPropagation(); goNext() }} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary-container/30 transition-all">
        <span className="material-symbols-outlined text-3xl">chevron_right</span>
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-black/70 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10">
        <span className="text-white font-sora text-sm font-semibold">{reel.title}</span>
        <span className="text-primary text-xs font-bold">{reel.views}</span>
        <span className="text-on-surface-variant text-xs">{currentIndex + 1}/{reels.length}</span>
      </div>
    </motion.div>
  )
}

function InstagramDome() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedReel, setSelectedReel] = useState(null)
  const [showCount, setShowCount] = useState(12)

  const filteredReels = activeFilter === 'All'
    ? ALL_REELS
    : ALL_REELS.filter((r) => r.category === activeFilter)

  const visibleReels = filteredReels.slice(0, showCount)

  const handleCardClick = (e, reel) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedReel(reel)
  }

  return (
    <>
      <section className="py-section-gap px-5 md:px-margin-desktop bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary-container/5 blur-[130px] rounded-full pointer-events-none" />

        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative z-10"
        >
          <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
            INSTAGRAM
          </span>
          <h2 className="font-sora text-headline-lg mt-4">Our Celebrations</h2>
          <p className="text-on-surface-variant font-manrope mt-4 max-w-lg mx-auto">
            Real celebrations from our guests. Tap any to watch the full video on our site.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10 relative z-10"
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => { setActiveFilter(cat); setShowCount(8); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full font-space-grotesk text-label-caps text-xs transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-primary-container text-on-primary electric-glow'
                  : 'bg-white/5 border border-white/10 text-on-surface-variant hover:bg-white/10 hover:border-primary/30'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Reels Grid - Instagram embeds visible in cards */}
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <AnimatePresence mode="popLayout">
            {visibleReels.map((reel, i) => (
              <motion.div
                key={reel.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group cursor-pointer w-[160px] sm:w-[200px] md:w-[220px]"
                onClick={(e) => handleCardClick(e, reel)}
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-[0_15px_40px_rgba(0,229,255,0.12)] group-hover:-translate-y-1">
                  {/* Skeleton loading */}
                  <div className="absolute inset-0 bg-surface-container-high animate-pulse">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                    </div>
                  </div>
                  {/* Instagram embed */}
                  <iframe
                    src={`${reel.url}embed/`}
                    className="absolute inset-0 w-full h-full border-0 pointer-events-none z-[1]"
                    loading="lazy"
                    title={reel.title}
                    tabIndex="-1"
                    scrolling="no"
                  />
                  {/* Dark gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                  {/* Hover play icon */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-primary/50">
                      <span className="material-symbols-outlined text-primary text-2xl">play_arrow</span>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 z-20 bg-primary-container text-on-primary text-[9px] font-bold px-2 py-0.5 rounded-full font-space-grotesk uppercase">
                    {reel.category}
                  </div>
                  {/* Title at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 z-20">
                    <p className="text-white text-[11px] font-sora font-semibold line-clamp-2 drop-shadow-lg">
                      {reel.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More button */}
        {showCount < filteredReels.length && (
          <div className="text-center mt-8 relative z-10">
            <button
              onClick={() => setShowCount(prev => prev + 8)}
              className="px-8 py-3 bg-white/5 border border-primary/30 rounded-full text-primary font-space-grotesk text-label-caps hover:bg-white/10 hover:border-primary/60 transition-all"
            >
              Load More ({filteredReels.length - showCount} remaining)
            </button>
          </div>
        )}

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-14 relative z-10"
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
            See All 200+ Reels on Instagram
          </a>
        </motion.div>
      </section>

      {/* In-site Viewer */}
      <AnimatePresence>
        {selectedReel && (
          <ReelViewer
            reel={selectedReel}
            reels={filteredReels}
            onClose={() => setSelectedReel(null)}
            onNavigate={setSelectedReel}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default InstagramDome
