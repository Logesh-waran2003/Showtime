import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { COMMUNITY_GALLERY, GALLERY_CATEGORIES } from '../data/showtimeData'
import VideoLightbox from './VideoLightbox'

function GalleryCard({ item, index, onClick }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  const sizeClasses = {
    tall: 'row-span-2',
    wide: 'col-span-2',
    square: '',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className={`${sizeClasses[item.size]} group relative cursor-pointer rounded-2xl overflow-hidden min-h-[200px]`}
      onClick={() => onClick(item)}
    >
      {/* Image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Default overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300" />

      {/* Hover content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="glass-surface !bg-black/60 !backdrop-blur-xl rounded-xl p-4 !border-primary/20 !transform-none !shadow-none">
          <h4 className="font-sora text-sm font-bold text-white mb-1">{item.title}</h4>
          <div className="flex items-center gap-2">
            <span className="text-[10px] bg-primary-container/80 text-on-primary px-2 py-0.5 rounded-full font-space-grotesk uppercase font-bold">
              {item.category}
            </span>
            {item.type === 'video' && (
              <span className="text-[10px] text-white/70 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Video
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Video indicator */}
      {item.type === 'video' && (
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}

      {/* Electric border on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-container/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
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

  return (
    <>
      <section className="py-section-gap px-5 md:px-margin-desktop bg-background">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
            Community
          </span>
          <h2 className="font-sora text-headline-lg mt-4">Our Celebrations Wall</h2>
          <p className="text-on-surface-variant font-manrope mt-4 max-w-lg mx-auto">
            Browse through memories from our guests — every celebration, every surprise, every joy captured in one place.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full font-space-grotesk text-label-caps text-xs transition-all ${
                activeFilter === cat
                  ? 'bg-primary-container text-on-primary electric-glow'
                  : 'bg-white/5 border border-white/10 text-on-surface-variant hover:bg-white/10 hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {filteredItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} onClick={setSelectedItem} />
          ))}
        </div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.facebook.com/profile.php?id=61566438809712"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-primary/30 rounded-full text-primary font-space-grotesk text-label-caps hover:bg-white/10 hover:border-primary/60 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            View More on Facebook
          </a>
        </motion.div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <VideoLightbox
          item={selectedItem}
          items={filteredItems}
          onClose={() => setSelectedItem(null)}
          onNavigate={setSelectedItem}
        />
      )}
    </>
  )
}

export default CommunityGallery
