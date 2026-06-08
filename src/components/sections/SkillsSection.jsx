import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Code2, Monitor, Server, Brain, Workflow } from 'lucide-react'
import { skills } from '../../data/skills'
import GlowBadge from '../ui/GlowBadge'
import ScrollReveal from '../ui/ScrollReveal'

const iconMap = { Code2, Monitor, Server, Brain, Workflow }

function SkillCategory({ category, icon, items, categoryDelay }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const Icon = iconMap[icon] || Code2

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: categoryDelay, ease: 'easeOut' }}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        padding: '30px',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Category header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
        <Icon size={24} color="#FFFFFF" strokeWidth={1.5} />
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            color: '#FFFFFF',
          }}
        >
          {category}
        </span>
      </div>
      {/* White underline */}
      <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.3)', marginBottom: '20px' }} />
      {/* Skills */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map((skill, i) => (
          <GlowBadge key={skill} skill={skill} delay={categoryDelay + i * 0.05} />
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '100px 24px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <hr className="section-sep" style={{ marginBottom: '80px' }} />

      <ScrollReveal>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            style={{
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            color: '#FFFFFF',
            marginBottom: '20px',
          }}
        >
          What I Work With
        </h2>
        <p style={{ color: '#FFFFFF', fontSize: '1.5rem' }}>
            Tools and languages that power my builds
          </p>
        </div>
      </ScrollReveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
        }}
      >
        {skills.map((s, i) => (
          <SkillCategory
            key={s.category}
            {...s}
            categoryDelay={i * 0.1}
          />
        ))}
      </div>
    </section>
  )
}
