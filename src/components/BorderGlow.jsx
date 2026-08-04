import { useRef, useCallback } from 'react'
import './BorderGlow.css'

function BorderGlow({ children, className = '', style = {}, fillOpacity = 0.5 }) {
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const w = rect.width
    const h = rect.height

    // Calculate angle from center to cursor
    const centerX = w / 2
    const centerY = h / 2
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90

    // Calculate edge proximity (0 = center, 100 = edge)
    const distX = Math.abs(x - centerX) / centerX
    const distY = Math.abs(y - centerY) / centerY
    const edgeProximity = Math.min(Math.max(distX, distY) * 100, 100)

    card.style.setProperty('--cursor-angle', `${angle}deg`)
    card.style.setProperty('--edge-proximity', edgeProximity)
    card.style.setProperty('--fill-opacity', fillOpacity)
  }, [fillOpacity])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--edge-proximity', 0)
  }, [])

  return (
    <div
      ref={cardRef}
      className={`border-glow-card ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="edge-light" />
      <div className="border-glow-inner">
        {children}
      </div>
    </div>
  )
}

export default BorderGlow
