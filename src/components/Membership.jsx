import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const benefits = [
  {
    icon: 'diamond',
    title: 'VIP Lounge Access',
    description: 'Complimentary access to our private lounges globally.',
  },
  {
    icon: 'star',
    title: 'Priority Booking',
    description: 'Get early access to global premieres and limited screenings.',
  },
  {
    icon: 'loyalty',
    title: 'Elite Rewards',
    description: 'Earn 3x points on every booking and beverage purchase.',
  },
]

function Membership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 })

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setCardRotate({
      x: (y - 0.5) * -15,
      y: (x - 0.5) * 15,
    })
  }

  const handleCardMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 })
  }

  return (
    <section id="membership" className="py-section-gap px-5 md:px-margin-desktop bg-surface-container-low overflow-hidden">
      <div ref={ref} className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <span className="font-space-grotesk text-label-caps text-primary tracking-[0.3em] uppercase">
            PVR ELITE
          </span>
          <h2 className="font-sora text-headline-lg mt-4 mb-8">
            Elevate Your Membership to a New Dimension
          </h2>
          <ul className="space-y-6">
            {benefits.map((benefit, i) => (
              <motion.li
                key={benefit.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="flex items-start gap-4"
              >
                <span className="material-symbols-outlined text-primary mt-1">{benefit.icon}</span>
                <div>
                  <span className="font-sora text-headline-md block">{benefit.title}</span>
                  <p className="text-on-surface-variant font-manrope">{benefit.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 px-12 py-4 bg-primary-container text-on-primary font-space-grotesk text-label-caps rounded-full font-bold electric-glow"
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 229, 255, 0.7)' }}
            whileTap={{ scale: 0.95 }}
          >
            JOIN THE ELITE
          </motion.button>
        </motion.div>

        {/* Right - 3D Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:w-1/2 relative"
        >
          <div
            className="relative z-10 perspective-1000"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <motion.img
              className="w-full max-w-[450px] mx-auto rounded-2xl border border-primary/20 cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATkuu8QmoHJP2qGRlmY3xaIKBOYvYzty2CMWjCowWeGBEQevMU6UFtlNTzm5SCJUPDNR-xhApOkqWSGhAfovqmUbuRQjN3wHZ-cGX85HjX3Fn-W2BtX1RB5w7Ut73Jwp4Wx-5AIDhudcac_JCItyHOjnVWCRdwNZ18oW9Qq44OLxQDTIDqBOBR9ulNx1GbL7npIlKKjU5DK29BD91diKTS1-4sNqhDZmc6NV8f7ZZrk5sm7z9oaiHt0g"
              alt="PVR Elite Membership Card"
              style={{
                transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
                transition: 'transform 0.3s ease',
                boxShadow: '0 50px 100px -20px rgba(0, 229, 255, 0.3)',
              }}
            />
          </div>
          {/* Atmospheric glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-container/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-container/10 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default Membership
