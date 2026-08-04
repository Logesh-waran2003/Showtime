import { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import { useGesture } from '@use-gesture/react'
import './DomeGallery.css'

/**
 * DomeGallery - A 3D CSS sphere gallery with drag interaction and image enlargement.
 * Converted from TypeScript to plain JSX.
 */

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

function mod(n, m) {
  return ((n % m) + m) % m
}

export default function DomeGallery({
  images = [],
  overlayBlurColor = '#120F17',
  grayscale = false,
  fit = 0.6,
  minRadius = 400,
  maxVerticalRotationDeg = 8,
  dragDampening = 2,
  imageBorderRadius = '12px',
  openedImageBorderRadius = '32px',
  openedImageWidth = '400px',
  openedImageHeight = '500px',
}) {
  const rootRef = useRef(null)
  const sphereRef = useRef(null)
  const frameRef = useRef(null)
  const enlargeRef = useRef(null)
  const scrimRef = useRef(null)
  const animFrameRef = useRef(null)

  const [isEnlarging, setIsEnlarging] = useState(false)
  const [enlargedSrc, setEnlargedSrc] = useState(null)

  // Rotation state refs (not state to avoid re-renders)
  const rotYRef = useRef(0)
  const rotXRef = useRef(0)
  const velocityYRef = useRef(0)
  const velocityXRef = useRef(0)
  const targetRotYRef = useRef(0)
  const targetRotXRef = useRef(0)
  const isDraggingRef = useRef(false)
  const autoRotateRef = useRef(true)
  const radiusRef = useRef(520)

  // Segments config based on image count
  const segmentsX = useMemo(() => {
    if (images.length <= 4) return 4
    if (images.length <= 8) return 6
    if (images.length <= 12) return 8
    return 10
  }, [images.length])

  const segmentsY = useMemo(() => {
    if (images.length <= 4) return 2
    if (images.length <= 8) return 3
    return 4
  }, [images.length])

  // Build items: distribute images around sphere
  const items = useMemo(() => {
    if (!images.length) return []
    const result = []
    let imgIdx = 0
    for (let y = 0; y < segmentsY; y++) {
      for (let x = 0; x < segmentsX; x++) {
        const img = images[imgIdx % images.length]
        result.push({
          key: `${x}-${y}`,
          offsetX: x * 2 - segmentsX + 1,
          offsetY: y * 2 - segmentsY + 1,
          sizeX: 1,
          sizeY: 1,
          src: img.src,
          alt: img.alt || '',
        })
        imgIdx++
      }
    }
    return result
  }, [images, segmentsX, segmentsY])

  // Resize observer to adjust radius
  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const updateRadius = () => {
      const rect = root.getBoundingClientRect()
      const minDim = Math.min(rect.width, rect.height)
      const computed = Math.max(minRadius, minDim * fit)
      radiusRef.current = computed
      root.style.setProperty('--radius', `${computed}px`)
      root.style.setProperty('--segments-x', String(segmentsX))
      root.style.setProperty('--segments-y', String(segmentsY))
    }

    updateRadius()
    const observer = new ResizeObserver(updateRadius)
    observer.observe(root)

    return () => observer.disconnect()
  }, [fit, minRadius, segmentsX, segmentsY])

  // Set CSS variables for styling
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    root.style.setProperty('--overlay-blur-color', overlayBlurColor)
    root.style.setProperty('--tile-radius', imageBorderRadius)
    root.style.setProperty('--enlarge-radius', openedImageBorderRadius)
    if (grayscale) {
      root.style.setProperty('--image-filter', 'grayscale(1)')
    } else {
      root.style.setProperty('--image-filter', 'none')
    }
  }, [overlayBlurColor, imageBorderRadius, openedImageBorderRadius, grayscale])

  // Animation loop
  useEffect(() => {
    let running = true

    const animate = () => {
      if (!running) return

      if (!isDraggingRef.current) {
        // Auto-rotate
        if (autoRotateRef.current) {
          targetRotYRef.current += 0.15
        }

        // Apply velocity (momentum after drag)
        targetRotYRef.current += velocityYRef.current
        targetRotXRef.current += velocityXRef.current

        // Dampen velocity
        velocityYRef.current *= 0.95
        velocityXRef.current *= 0.95

        if (Math.abs(velocityYRef.current) < 0.01) velocityYRef.current = 0
        if (Math.abs(velocityXRef.current) < 0.01) velocityXRef.current = 0
      }

      // Clamp vertical rotation
      targetRotXRef.current = clamp(
        targetRotXRef.current,
        -maxVerticalRotationDeg,
        maxVerticalRotationDeg
      )

      // Smooth interpolation
      rotYRef.current = lerp(rotYRef.current, targetRotYRef.current, 0.08)
      rotXRef.current = lerp(rotXRef.current, targetRotXRef.current, 0.08)

      // Apply transform
      if (sphereRef.current) {
        sphereRef.current.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${rotXRef.current}deg) rotateY(${rotYRef.current}deg)`
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      running = false
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [maxVerticalRotationDeg])

  // Gesture handling
  const bind = useGesture(
    {
      onDrag: ({ delta: [dx, dy], first, last, velocity: [vx, vy], direction: [dirX, dirY] }) => {
        if (first) {
          isDraggingRef.current = true
          autoRotateRef.current = false
        }

        targetRotYRef.current += dx / dragDampening
        targetRotXRef.current -= dy / dragDampening

        if (last) {
          isDraggingRef.current = false
          velocityYRef.current = vx * dirX * 2
          velocityXRef.current = -vy * dirY * 2

          // Resume auto-rotate after inactivity
          setTimeout(() => {
            if (!isDraggingRef.current) {
              autoRotateRef.current = true
            }
          }, 4000)
        }
      },
    },
    {
      drag: {
        filterTaps: true,
        pointer: { touch: true },
      },
    }
  )

  // Enlarge image on click
  const handleImageClick = useCallback((e, item) => {
    if (isEnlarging) return

    const imgEl = e.currentTarget
    const rect = imgEl.getBoundingClientRect()
    const root = rootRef.current
    if (!root) return

    const rootRect = root.getBoundingClientRect()

    setEnlargedSrc(item.src)
    setIsEnlarging(true)

    // Position the enlarged image at the clicked tile's position first
    const enlarge = enlargeRef.current
    if (enlarge) {
      enlarge.style.transition = 'none'
      enlarge.style.width = `${rect.width}px`
      enlarge.style.height = `${rect.height}px`
      enlarge.style.left = `${rect.left - rootRect.left}px`
      enlarge.style.top = `${rect.top - rootRect.top}px`
      enlarge.style.transform = 'scale(1)'
      enlarge.style.opacity = '1'

      // Force reflow
      enlarge.offsetHeight

      // Animate to center
      requestAnimationFrame(() => {
        enlarge.style.transition = 'all 500ms ease'

        const targetW = parseInt(openedImageWidth, 10)
        const targetH = parseInt(openedImageHeight, 10)
        const centerX = (rootRect.width - targetW) / 2
        const centerY = (rootRect.height - targetH) / 2

        enlarge.style.width = `${targetW}px`
        enlarge.style.height = `${targetH}px`
        enlarge.style.left = `${centerX}px`
        enlarge.style.top = `${centerY}px`
      })
    }
  }, [isEnlarging, openedImageWidth, openedImageHeight])

  // Close enlarged image
  const handleClose = useCallback(() => {
    const enlarge = enlargeRef.current
    if (enlarge) {
      enlarge.classList.add('enlarge-closing')
      enlarge.style.transition = 'all 400ms ease'
      enlarge.style.opacity = '0'
      enlarge.style.transform = 'scale(0.8)'

      setTimeout(() => {
        setIsEnlarging(false)
        setEnlargedSrc(null)
        if (enlarge) {
          enlarge.classList.remove('enlarge-closing')
          enlarge.style.transition = ''
          enlarge.style.opacity = ''
          enlarge.style.transform = ''
        }
      }, 400)
    } else {
      setIsEnlarging(false)
      setEnlargedSrc(null)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="sphere-root"
      data-enlarging={isEnlarging ? 'true' : 'false'}
    >
      <main className="sphere-main" {...bind()}>
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map((item) => (
              <div
                key={item.key}
                className="item"
                style={{
                  '--offset-x': item.offsetX,
                  '--offset-y': item.offsetY,
                  '--item-size-x': item.sizeX,
                  '--item-size-y': item.sizeY,
                }}
              >
                <button
                  className="item__image"
                  onClick={(e) => handleImageClick(e, item)}
                  aria-label={`View ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    draggable={false}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Overlays */}
        <div className="overlay" />
        <div className="overlay--blur" />

        {/* Edge fades */}
        <div className="edge-fade edge-fade--top" />
        <div className="edge-fade edge-fade--bottom" />
      </main>

      {/* Viewer / Enlarged Image */}
      <div className="viewer">
        <div ref={frameRef} className="frame" />
        <div
          ref={scrimRef}
          className="scrim"
          onClick={handleClose}
        />
        {enlargedSrc && (
          <div ref={enlargeRef} className="enlarge" onClick={handleClose}>
            <img src={enlargedSrc} alt="Enlarged view" draggable={false} />
          </div>
        )}
      </div>
    </div>
  )
}
