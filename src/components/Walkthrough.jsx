import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const walkthrough = [
  {
    step: '01',
    label: 'THE ENTRANCE',
    title: 'Grand Lobby',
    description: 'A futuristic space designed to transition you from the world outside into the cinematic realm.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoYbfOmZ7nnEr5CnPeMNCd445JBVWgnUIDJp5JGbq3ELrf0veXwTdmxYLWaoJ1ImmRA7Dc22pFZw46T30Z2gtAvoTHlSFlkUcbig3gycu6SRv9ixqJLuj0oXF0l72hhonnMvZJip_q5XcnGM3vtwOpSEro1BmUJMFgXmcRiqqQDBYEY_787JYQtNFzOM07i743JtXtFeODwkeGpON3jF9G0ABxy4WJEAnOpxy6ZIJY9PUrDsK_4C-8XA',
  },
  {
    step: '02',
    label: 'THE SANCTUARY',
    title: 'Premium Auditorium',
    description: 'Where the magic happens. Perfectly tuned acoustics meet peak visual performance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHjJOChL20QyQ3oW-gyy-h-pRCbCnIask2Ezqs7Y9YsRu2IwICcpfgo98b6nfzqkabV0suU2xkXduhALUibD6FSyyWnEAXthpR12ueGaPBThPbhWQ2xojghWglM8iosgNjozr8aSk1qNw92E11p_-V7qhvkf20caYkXPHtb0T9yBSppi_tBgWGGW8RDaNt56fxBHC5E7oQeMKzJNP9TQXRFxDAGRrYnuqTVTLgMy6K09k480fVdS-NtA',
  },
  {
    step: '03',
    label: 'THE LOUNGE',
    title: 'VIP Experience',
    description: 'Exclusive private lounges with curated beverages and gourmet dining before your screening.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8Nl2dvDh_foiFm_uajXS-7ZlT2ZK1Dzn8IJrs0sgUmRB_fXJn-urvXWJfvwAVogAYei-tbAMY7D9gHU9XrFYBq6xOA7bC9u5BU4uz133JxJxq56ZGC9im2Urg6Eqd6mHksdBZDts_fNPBkaSDm9fpGKLHLSUXTX3lY5U9Hl3EN4FT9ccwMf6xap7qFI8aPGhC6odZWTJfNVbtfasbdsKVdL0naJf6OblQaEwMbOsF2VecIo1bqXrWLQ',
  },
]

function Walkthrough() {
  const scrollRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = window.innerWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === 'next' ? amount : -amount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-section-gap overflow-hidden bg-surface-container-lowest">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="px-5 md:px-margin-desktop mb-12 flex justify-between items-center"
      >
        <h2 className="font-sora text-headline-lg">Lobby To Lounge</h2>
        <div className="flex gap-4">
          <motion.button
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('prev')}
            aria-label="Previous"
          >
            <span className="material-symbols-outlined">west</span>
          </motion.button>
          <motion.button
            className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('next')}
            aria-label="Next"
          >
            <span className="material-symbols-outlined text-primary">east</span>
          </motion.button>
        </div>
      </motion.div>

      <div
        ref={scrollRef}
        className="horizontal-scroll-container px-5 md:px-margin-desktop gap-8"
      >
        {walkthrough.map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="scroll-item group"
          >
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-surface">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
              <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                <span className="font-space-grotesk text-label-caps text-primary">
                  {item.step} // {item.label}
                </span>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-start">
              <div>
                <h4 className="font-sora text-headline-md">{item.title}</h4>
                <p className="text-on-surface-variant mt-2 font-manrope">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Walkthrough
