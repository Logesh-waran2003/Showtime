import { motion } from 'framer-motion'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ onBookNow }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 w-full z-50 nav-glass shadow-2xl"
    >
      <div className="flex justify-between items-center px-5 md:px-margin-desktop py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.png" alt="Showtime" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-sora text-headline-md font-bold tracking-tighter text-primary uppercase">
            SHOWTIME
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={`font-space-grotesk text-label-caps uppercase transition-colors ${
                i === 0
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Book Now Button */}
          <motion.button
            onClick={onBookNow}
            className="bg-primary-container text-on-primary font-space-grotesk text-label-caps px-8 py-2.5 rounded-full font-bold uppercase electric-glow inline-block"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 229, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-on-surface"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden px-5 pb-6 border-t border-white/5"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 font-space-grotesk text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => { setIsOpen(false); onBookNow(); }}
            className="block py-3 font-space-grotesk text-label-caps uppercase text-primary font-bold"
          >
            Book Now
          </button>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
