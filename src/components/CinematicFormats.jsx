import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { PACKAGES, SHOWTIME_INFO } from '../data/showtimeData'

const iconMap = {
  film: 'movie',
  cake: 'cake',
  heart: 'favorite',
  'gamepad-2': 'sports_esports',
  crown: 'workspace_premium',
}

const accentColors = ['#00e5ff', '#ff6b35', '#ff4081', '#69f0ae', '#ffd740']

function PackageCard({ pkg, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [isHovered, setIsHovered] = useState(false)
  const accent = accentColors[index % accentColors.length]

  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to book the "${pkg.title}" package (₹${pkg.price}) at Showtime.`
  )
  const whatsappLink = `${SHOWTIME_INFO.whatsapp}?text=${whatsappMessage}`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={isHovered ? { y: -8, scale: 1.02 } : { y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={`relative rounded-3xl overflow-hidden h-full flex flex-col ${
          pkg.popular ? 'border-2' : 'border border-white/10'
        }`}
        style={{
          borderColor: pkg.popular ? accent : undefined,
          boxShadow: isHovered
            ? `0 25px 60px rgba(0,0,0,0.4), 0 0 30px ${accent}15`
            : '0 8px 30px rgba(0,0,0,0.2)',
        }}
      >
        {/* Card background */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-high via-surface-container to-surface-container-lowest" />

        {/* Top accent glow */}
        <div
          className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: accent }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 blur-[40px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ backgroundColor: accent }}
        />

        {/* Popular badge */}
        {pkg.popular && (
          <div
            className="absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-b-xl font-space-grotesk text-[10px] font-bold uppercase tracking-wider z-10 text-black"
            style={{ backgroundColor: accent }}
          >
            ⭐ MOST POPULAR
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 p-6 pt-8 flex flex-col h-full">
          {/* Icon + Title */}
          <div className="flex items-start gap-4 mb-5">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${accent}20`, border: `1px solid ${accent}40` }}
            >
              <span className="material-symbols-outlined text-2xl" style={{ color: accent }}>
                {iconMap[pkg.icon] || 'star'}
              </span>
            </div>
            <div>
              <h3 className="font-sora text-lg font-bold text-white">{pkg.title}</h3>
              <p className="text-on-surface-variant text-xs font-manrope mt-0.5">{pkg.subtitle}</p>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-sora text-4xl font-bold" style={{ color: accent }}>
              ₹{pkg.price.toLocaleString()}
            </span>
          </div>
          <p className="text-on-surface-variant text-xs font-manrope mb-6 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm" style={{ color: accent }}>schedule</span>
            {pkg.duration} • Up to 14 guests
          </p>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-5" />

          {/* Features */}
          <ul className="flex-1 space-y-2.5 mb-6">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm font-manrope text-white/80">
                <span className="material-symbols-outlined text-sm mt-0.5" style={{ color: accent }}>
                  check_circle
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Book button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-space-grotesk text-sm font-bold uppercase tracking-wider transition-all duration-300 group-hover:shadow-lg"
            style={{
              backgroundColor: pkg.popular ? accent : 'transparent',
              color: pkg.popular ? '#000' : accent,
              border: pkg.popular ? 'none' : `1.5px solid ${accent}60`,
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            Book on WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CinematicFormats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="packages" className="py-section-gap px-5 md:px-margin-desktop bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/3 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff4081]/3 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
          PACKAGES
        </span>
        <h2 className="font-sora text-headline-lg mt-4">Pick Your Perfect Package</h2>
        <p className="text-on-surface-variant font-manrope mt-4 max-w-xl mx-auto">
          Starting from just ₹1,499. No hidden charges. Decorations, setup & cleanup — everything included.
        </p>
      </motion.div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {PACKAGES.map((pkg, i) => (
          <PackageCard key={pkg.id} pkg={pkg} index={i} />
        ))}
      </div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="text-center text-on-surface-variant text-sm font-manrope mt-10 relative z-10"
      >
        💡 Custom packages available too! DM us for a tailored experience.
      </motion.p>
    </section>
  )
}

export default CinematicFormats
