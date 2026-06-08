import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ScrollReveal({ children, delay = 0, className = '', threshold = 0.1, y = 40 }) {
  const [ref, inView] = useInView({ threshold, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ y, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y, opacity: 0 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
