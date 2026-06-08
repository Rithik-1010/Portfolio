import { motion } from 'framer-motion'

export default function GlowBadge({ skill, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{
        scale: 1.08,
        boxShadow: '0 0 14px rgba(255,255,255,0.6)',
        borderColor: 'rgba(255,255,255,0.8)',
        color: '#FFFFFF',
      }}
      style={{
        display: 'inline-block',
        padding: '8px 18px',
        marginRight: '12px',
        marginBottom: '12px',
        borderRadius: '999px',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(6px)',
        color: '#FFFFFF',
        fontSize: '1rem',
        fontFamily: "'Space Mono', monospace",
        letterSpacing: '0.04em',
        cursor: 'default',
        transition: 'color 0.2s ease',
      }}
    >
      {skill}
    </motion.span>
  )
}
