import { motion } from 'framer-motion'
import { useState } from 'react'

function Navbar() {
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
        <div className="font-sora text-headline-md font-bold tracking-tighter text-primary uppercase">
          PVR CINEMAS
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Experience', 'Cinemas', 'Membership', 'Locations', 'About'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-space-grotesk text-label-caps uppercase transition-colors ${
                i === 0
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 gap-2">
            <span className="material-symbols-outlined text-outline text-sm">search</span>
            <input
              className="bg-transparent border-none focus:outline-none text-body-md w-32 placeholder:text-outline-variant text-on-surface"
              placeholder="Search movies..."
              type="text"
            />
          </div>

          {/* Book Now Button */}
          <motion.button
            className="bg-primary-container text-on-primary font-space-grotesk text-label-caps px-8 py-2.5 rounded-full font-bold uppercase electric-glow"
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
          {['Experience', 'Cinemas', 'Membership', 'Locations', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 font-space-grotesk text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
