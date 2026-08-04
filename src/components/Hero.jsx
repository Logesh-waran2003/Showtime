import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Hero background images that cycle
const heroImages = [
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80&fit=crop',
  'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1600&q=80&fit=crop',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80&fit=crop',
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80&fit=crop',
]

function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  // Auto cycle background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      {heroImages.map((img, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === currentImage ? 1 : 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </motion.div>
      ))}

      {/* Dark overlays for readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* Animated accent glows */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary-container/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-[#ff4081]/10 rounded-full blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-primary-container rounded-full hidden md:block"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 left-32 w-1.5 h-1.5 bg-primary rounded-full hidden md:block"
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-3 h-3 bg-primary-container/50 rounded-full hidden md:block"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl px-5">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <span className="material-symbols-outlined text-primary text-sm">location_on</span>
          <span className="text-xs font-space-grotesk text-white/90 uppercase tracking-wider">
            Pondicherry's #1 Private Theatre
          </span>
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="font-sora text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold leading-[1.1] mb-6"
        >
          <span className="text-white">Make Every Moment</span>
          <br />
          <span className="relative inline-block">
            <span className="text-primary-container">Unforgettable</span>
            {/* Underline accent */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-container via-primary to-transparent rounded-full"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="font-manrope text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Birthday surprises • Anniversary celebrations • Proposals • Gaming parties
          <br className="hidden sm:block" />
          <span className="text-primary font-semibold">All in your own private cinema.</span>
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-6 sm:gap-10 mb-10"
        >
          <div className="text-center">
            <span className="font-sora text-2xl sm:text-3xl font-bold text-primary-container">200+</span>
            <p className="text-white/50 text-[10px] sm:text-xs font-space-grotesk uppercase mt-1">Events Done</p>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-center">
            <span className="font-sora text-2xl sm:text-3xl font-bold text-primary-container">4.9★</span>
            <p className="text-white/50 text-[10px] sm:text-xs font-space-grotesk uppercase mt-1">Rating</p>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-center">
            <span className="font-sora text-2xl sm:text-3xl font-bold text-primary-container">₹1499</span>
            <p className="text-white/50 text-[10px] sm:text-xs font-space-grotesk uppercase mt-1">Starting at</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://wa.me/919360600000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-primary-container text-on-primary font-space-grotesk text-label-caps rounded-full font-bold electric-glow inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(0, 229, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            BOOK ON WHATSAPP
          </motion.a>
          <motion.a
            href="#packages"
            className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-space-grotesk text-label-caps rounded-full font-bold inline-flex items-center justify-center gap-2 hover:bg-white/20 hover:border-primary/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined text-lg">local_offer</span>
            VIEW PACKAGES
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-container-lowest to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] text-white/40 font-space-grotesk uppercase tracking-widest">Scroll</span>
        <span className="material-symbols-outlined text-primary text-2xl">keyboard_arrow_down</span>
      </motion.div>

      {/* Image indicator dots */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-10 hidden md:flex">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentImage ? 'bg-primary-container w-6' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
