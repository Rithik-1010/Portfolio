import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import SplitText from '../ui/SplitText'

function TypewriterText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000)
    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, 40)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <span>
      {displayed}
      {displayed.length < text.length && <span className="typewriter-cursor" />}
    </span>
  )
}

export default function HeroSection() {

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '180px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      {/* Lamp hint removed */}

      {/* Name */}
      <h1
        style={{
          fontSize: 'clamp(4rem, 10vw, 9rem)',
          color: '#FFFFFF',
          lineHeight: 1,
          marginBottom: '24px',
        }}
      >
        <SplitText text="RITHIK S" />
      </h1>

      {/* Amber underline SVG */}
      <motion.svg
        width="340"
        height="6"
        viewBox="0 0 340 6"
        style={{ marginBottom: '32px', maxWidth: '90vw' }}
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1="0"
          y1="3"
          x2="340"
          y2="3"
          stroke="#FFD580"
          strokeWidth="1.5"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 1, delay: 0.9, ease: 'easeOut' }
            }
          }}
        />
      </motion.svg>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
          color: '#FFFFFF',
          marginBottom: '30px',
          maxWidth: '800px',
        }}
      >
        Building intelligent things, one commit at a time.
      </motion.p>

      {/* Sub info typewriter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        style={{
          fontSize: '1.2rem',
          letterSpacing: '0.15em',
          color: '#EEEEEE',
          marginBottom: '60px',
        }}
      >
        <TypewriterText
          text="First-Year CSE (AI & ML) · KPRIET, Coimbatore · Batch 2025–2029"
          delay={1.4}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ fontSize: '1rem', color: '#DDDDDD', letterSpacing: '0.12em' }}>
          scroll
        </span>
        <div className="bounce-arrow" style={{ color: '#FFFFFF', fontSize: '1.6rem' }}>↓</div>
      </motion.div>
    </section>
  )
}
