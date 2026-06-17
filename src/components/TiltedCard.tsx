'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
}

export default function TiltedCard({
  children,
  className,
  title,
  imageSrc,
  altText = 'Tilted card image',

  containerHeight = 'auto',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = false,
  overlayContent = null as React.ReactNode,
  displayOverlayContent = false,
}: {
  children?: React.ReactNode
  className?: string
  title?: string
  glowColor?: string
  imageSrc?: string
  altText?: string

  containerHeight?: string
  containerWidth?: string
  imageHeight?: string
  imageWidth?: string
  scaleOnHover?: number
  rotateAmplitude?: number
  showMobileWarning?: boolean
  overlayContent?: React.ReactNode
  displayOverlayContent?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude

    rotateX.set(rotationX)
    rotateY.set(rotationY)
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover)
  }

  function handleMouseLeave() {
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={cn('relative', className)}
      style={{
        perspective: 800,
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm hidden max-sm:block">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      {/* Card container */}
      <motion.div
        className="relative bg-black/5 rounded-[15px] px-[15px] py-[10px] w-full h-full shadow-[var(--glow)]"
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
          scale,
          ...(imageSrc ? { width: imageWidth, height: imageHeight } : {}),
        }}
      >
        {/* Title label */}
        {title && (
          <div className="flex justify-start mb-2">
            <span className="bg-gray-500/20 text-foreground text-[11px] font-medium px-3 py-0.5 rounded-full flex items-center">
              {title}
            </span>
          </div>
        )}

        {imageSrc ? (
          <motion.img
            src={imageSrc}
            alt={altText}
            className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform"
            style={{
              transform: 'translateZ(0)',
              width: imageWidth,
              height: imageHeight,
            }}
          />
        ) : (
          children
        )}

        {displayOverlayContent && overlayContent && (
          <motion.div
            className="absolute top-0 left-0 z-[2] will-change-transform"
            style={{ transform: 'translateZ(30px)' }}
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
