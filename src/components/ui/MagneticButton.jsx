import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function MagneticButton({ children, className = '', onClick, href, target }) {
  const elRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const el = elRef.current
    const wrap = wrapRef.current
    if (!el || !wrap) return

    const handleMouseMove = (e) => {
      const rect = wrap.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const maxDist = 80

      if (dist < maxDist) {
        const strength = (maxDist - dist) / maxDist
        gsap.to(el, {
          x: dx * strength * 0.4,
          y: dy * strength * 0.4,
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)'
      })
    }

    wrap.addEventListener('mousemove', handleMouseMove)
    wrap.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      wrap.removeEventListener('mousemove', handleMouseMove)
      wrap.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const Tag = href ? 'a' : 'button'
  const props = href ? { href, target, rel: target === '_blank' ? 'noopener noreferrer' : undefined } : { onClick }

  return (
    <div ref={wrapRef} style={{ display: 'inline-block', padding: '20px' }}>
      <Tag
        ref={elRef}
        className={className}
        {...props}
        data-cursor="interactive"
        style={{ display: 'block' }}
      >
        {children}
      </Tag>
    </div>
  )
}
