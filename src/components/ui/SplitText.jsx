import { motion } from 'framer-motion'

export default function SplitText({ text, className = '', delay = 0, stagger = 0.06 }) {
  const chars = text.split('')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      }
    }
  }

  const charVariants = {
    hidden: { y: 80, opacity: 0, rotateX: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 200,
      }
    }
  }

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: 'inline-block', perspective: '800px' }}
      aria-label={text}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          style={{
            display: 'inline-block',
            transformOrigin: '50% 50%',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
