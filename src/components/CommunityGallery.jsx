import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { COMMUNITY_GALLERY, GALLERY_CATEGORIES } from '../data/showtimeData'

// In-site Viewer
function GalleryViewer({ item, items, onClose, onNavigate }) {
  const currentIndex = items.findIndex((i) => i.id === item.id)
  const goNext = () => onNavigate(items[(currentIndex + 1) % items.length])
  const goPrev = () => onNavigate(items[(currentIndex - 1 + items.length) % items.length])

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
          src={`${item.instagramUrl}embed/?cr=1&v=14&wp=400`}
          className="w-full h-full border-0"
          allowFullScreen
          allow="autoplay; encrypted-media"
          title={item.title}
        />
      </motion.div>

      {/* Close */}
      <button onClick={onClose} className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
        <span className="material-symbols-outlined text-2xl">close</span>
      </button>

      {/* Nav */}
      <button onClick={(e) => { e.stopPropagation(); goPrev() }} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary-container/30 transition-all">
        <span className="material-symbols-outlined text-3xl">chevron_left</span>
      </button>
      <button onClick={(e) => { e.stopPropagation(); goNext() }} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary-container/30 transition-all">
        <span className="material-symbols-outlined text-3xl">chevron_right</span>
      </button>

      {/* Info */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-black/70 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10">
        <span className="text-white font-sora text-sm font-semibold">{item.title}</span>
        <span className="text-primary-container text-[10px] font-space-grotesk uppercase bg-primary/10 px-2 py-0.5 rounded-full">{item.category}</span>
        {item.views && <span className="text-on-surface-variant text-xs">{item.views} views</span>}
        <span className="text-on-surface-variant text-xs">{currentIndex + 1}/{items.length}</span>
      </div>
    </motion.div>
  )
}

function CommunityGallery() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems =
    activeFilter === 'All'
      ? COMMUNITY_GALLERY
      : COMMUNITY_GALLERY.filter((item) => item.category === activeFilter)

  const handleCardClick = (e, item) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedItem(item)
  }

  return (
    <>
      <section className="py-section-gap px-5 md:px-margin-desktop bg-background relative overflow-hidden">
        {/* Background */}
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
            Community
          </span>
          <h2 className="font-sora text-headline-lg mt-4">Our Celebrations Wall</h2>
          <p className="text-on-surface-variant font-manrope mt-4 max-w-lg mx-auto">
            Real celebrations from our guests. Tap any to watch the full video.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12 relative z-10"
        >
          {GALLERY_CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
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

        {/* Gallery Grid - visible Instagram embeds in each card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 relative z-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer"
                onClick={(e) => handleCardClick(e, item)}
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-[0_15px_40px_rgba(0,229,255,0.12)] group-hover:-translate-y-1">
                  {/* Live Instagram embed - VISIBLE in card */}
                  <iframe
                    src={`${item.instagramUrl}embed/`}
                    className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                    loading="lazy"
                    title={item.title}
                    tabIndex="-1"
                  />

                  {/* Transparent click overlay (blocks iframe interaction, opens our viewer) */}
                  <div className="absolute inset-0 z-10" />

                  {/* Hover expand icon */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-primary/50">
                      <span className="material-symbols-outlined text-primary text-2xl">open_in_full</span>
                    </div>
                  </div>

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 z-20 bg-primary-container text-on-primary text-[9px] font-bold px-2 py-0.5 rounded-full font-space-grotesk uppercase">
                    {item.category}
                  </div>
                  {item.views && (
                    <div className="absolute top-3 right-3 z-20 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-white text-[10px]">visibility</span>
                      <span className="text-[10px] text-white font-bold">{item.views}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <p className="mt-2.5 text-on-surface font-sora text-xs font-semibold text-center group-hover:text-primary transition-colors line-clamp-1">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
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
        {selectedItem && (
          <GalleryViewer
            item={selectedItem}
            items={filteredItems}
            onClose={() => setSelectedItem(null)}
            onNavigate={setSelectedItem}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default CommunityGallery
