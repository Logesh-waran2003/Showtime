import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const formats = [
  {
    badge: 'IMAX',
    title: 'The Ultimate Screen',
    description: "Experience the world's most immersive cinema tech.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHjJOChL20QyQ3oW-gyy-h-pRCbCnIask2Ezqs7Y9YsRu2IwICcpfgo98b6nfzqkabV0suU2xkXduhALUibD6FSyyWnEAXthpR12ueGaPBThPbhWQ2xojghWglM8iosgNjozr8aSk1qNw92E11p_-V7qhvkf20caYkXPHtb0T9yBSppi_tBgWGGW8RDaNt56fxBHC5E7oQeMKzJNP9TQXRFxDAGRrYnuqTVTLgMy6K09k480fVdS-NtA',
  },
  {
    badge: 'GOLD CLASS',
    title: 'Luxury Recliner',
    description: 'Personalized butler service and king-size recliners.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8Nl2dvDh_foiFm_uajXS-7ZlT2ZK1Dzn8IJrs0sgUmRB_fXJn-urvXWJfvwAVogAYei-tbAMY7D9gHU9XrFYBq6xOA7bC9u5BU4uz133JxJxq56ZGC9im2Urg6Eqd6mHksdBZDts_fNPBkaSDm9fpGKLHLSUXTX3lY5U9Hl3EN4FT9ccwMf6xap7qFI8aPGhC6odZWTJfNVbtfasbdsKVdL0naJf6OblQaEwMbOsF2VecIo1bqXrWLQ',
  },
  {
    badge: 'DOLBY',
    title: 'Atmos Audio',
    description: 'Surround yourself with hyper-realistic soundscapes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoYbfOmZ7nnEr5CnPeMNCd445JBVWgnUIDJp5JGbq3ELrf0veXwTdmxYLWaoJ1ImmRA7Dc22pFZw46T30Z2gtAvoTHlSFlkUcbig3gycu6SRv9ixqJLuj0oXF0l72hhonnMvZJip_q5XcnGM3vtwOpSEro1BmUJMFgXmcRiqqQDBYEY_787JYQtNFzOM07i743JtXtFeODwkeGpON3jF9G0ABxy4WJEAnOpxy6ZIJY9PUrDsK_4C-8XA',
  },
]

function FormatCard({ format, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setRotate({
      x: (y - 0.5) * -10,
      y: (x - 0.5) * 10,
    })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      className="perspective-1000"
    >
      <motion.div
        className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer preserve-3d"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: 'transform 0.3s ease',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
      >
        {/* Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={format.image}
          alt={format.title}
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Electric Blue border on hover */}
        <div className="absolute inset-0 border-2 border-primary-container/0 group-hover:border-primary-container/50 transition-all duration-500 rounded-2xl pointer-events-none" />

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 40px rgba(0, 229, 255, 0.1)' }}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="bg-primary-container text-on-primary inline-block px-3 py-1 font-space-grotesk text-label-caps mb-4">
            {format.badge}
          </div>
          <h3 className="font-sora text-headline-md mb-2">{format.title}</h3>
          <p className="text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-manrope">
            {format.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CinematicFormats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cinemas" className="py-section-gap px-5 md:px-margin-desktop bg-background">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-end justify-between mb-12"
      >
        <div>
          <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
            The Formats
          </span>
          <h2 className="font-sora text-headline-lg mt-4">Unrivaled Immersion</h2>
        </div>
        <p className="text-on-surface-variant max-w-md md:text-right mt-4 md:mt-0 font-manrope">
          Choose from our selection of world-class theater formats, each optimized for specific storytelling needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {formats.map((format, i) => (
          <FormatCard key={format.badge} format={format} index={i} />
        ))}
      </div>
    </section>
  )
}

export default CinematicFormats
