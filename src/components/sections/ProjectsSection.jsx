import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Image } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const statusStyles = {
  live: {
    bg: 'rgba(34,197,94,0.1)',
    border: 'rgba(34,197,94,0.35)',
    color: '#86efac',
    emoji: '🟢',
  },
  wip: {
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.35)',
    color: '#93c5fd',
    emoji: '🔨',
  },
  freelance: {
    bg: 'rgba(168,85,247,0.1)',
    border: 'rgba(168,85,247,0.35)',
    color: '#d8b4fe',
    emoji: '📋',
  },
}

function TechPill({ tech, accentColor }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 10px',
        marginRight: '6px',
        marginBottom: '6px',
        borderRadius: '999px',
        border: `1px solid ${accentColor}40`,
        background: `${accentColor}10`,
        color: accentColor,
        fontSize: '0.68rem',
        fontFamily: "'Space Mono', monospace",
        letterSpacing: '0.03em',
      }}
    >
      {tech}
    </span>
  )
}

function ProjectCard({ project, delay }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const status = statusStyles[project.status]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ y: -8, boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,213,128,0.35)` }}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      {/* Shimmer for WIP */}
      {project.status === 'wip' && <div className="shimmer-bar" />}

      {/* Top row: status + techs */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        {/* Status badge */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '999px',
            background: status.bg,
            border: `1px solid ${status.border}`,
            color: status.color,
            fontSize: '0.72rem',
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {project.status === 'wip' && <span className="pulse-dot" />}
          {status.emoji} {project.statusLabel}
        </span>
      </div>

      {/* Tech pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {project.tech.map(t => (
          <TechPill key={t} tech={t} accentColor={project.accentColor} />
        ))}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2rem',
          color: '#FFFFFF',
          lineHeight: 1.2,
        }}
      >
        {project.title}
      </h3>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "'Crimson Pro', serif",
          color: '#FFFFFF',
          fontSize: '1.2rem',
          marginTop: '-8px',
        }}
      >
        {project.subtitle}
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Crimson Pro', serif",
          color: '#DDDDDD',
          fontSize: '1.2rem',
          lineHeight: 1.7,
          flexGrow: 1,
        }}
      >
        {project.description}
      </p>

      {/* Disclaimer */}
      {project.disclaimer && (
        <p style={{ fontSize: '1rem', color: '#CCCCCC', fontFamily: "'Crimson Pro', serif" }}>
          * {project.disclaimer}
        </p>
      )}

      {/* Bottom row: type + action button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4px' }}>
        <span
          style={{
            fontSize: '0.68rem',
            fontFamily: "'Space Mono', monospace",
            color: '#5A4A34',
            letterSpacing: '0.08em',
          }}
        >
          {project.type}
        </span>

        {project.link ? (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, color: '#FFD580' }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid rgba(255,213,128,0.2)',
              color: '#C9A060',
              fontSize: '0.78rem',
              fontFamily: "'Space Mono', monospace",
              textDecoration: 'none',
              transition: 'color 0.2s ease, border-color 0.2s ease',
            }}
          >
            View Project <ExternalLink size={12} />
          </motion.a>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            title="Client project — link may vary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid rgba(168,85,247,0.25)',
              color: '#a878ff',
              background: 'transparent',
              fontSize: '0.78rem',
              fontFamily: "'Space Mono', monospace",
              cursor: 'pointer',
            }}
          >
            <Image size={12} />
            Screenshots Available
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="projects"
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '60px 24px 100px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <hr className="section-sep" style={{ marginBottom: '80px' }} />

      <ScrollReveal>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              color: '#FFFFFF',
              marginBottom: '12px',
            }}
          >
            Things I've Built
          </h2>
          <p
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: '#FFFFFF',
              fontSize: '1.5rem',
            }}
          >
            Some are live. Some are coming. All are real.
          </p>
        </div>
      </ScrollReveal>

      {loading ? (
        <div style={{ textAlign: 'center', color: '#fff', fontSize: '1.2rem', fontFamily: "'Space Mono', monospace" }}>
          Loading projects...
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project._id || project.id} project={project} delay={i * 0.12} />
          ))}
        </div>
      )}
    </section>
  )
}
