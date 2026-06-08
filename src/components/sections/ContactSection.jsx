import { motion } from 'framer-motion'
import { GitBranch, Link2, Mail } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import ScrollReveal from '../ui/ScrollReveal'

const socialLinks = [
  {
    label: 'GitHub',
    icon: GitBranch,
    url: 'https://github.com/Rithik-1010',
    handle: '@Rithik-1010',
    color: '#E8DCC8',
  },
  {
    label: 'LinkedIn',
    icon: Link2,
    url: 'https://linkedin.com/in/rithiks1100',
    handle: 'in/rithiks1100',
    color: '#60a5fa',
  },
  {
    label: 'Gmail',
    icon: Mail,
    url: 'mailto:rithik@gmail.com',
    handle: 'rithik@gmail.com',
    color: '#f87171',
  },
]

function GroundScene() {
  return (
    <motion.div
      className="ground-scene"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Paper poster 1 */}
      <div
        className="paper-poster"
        style={{ transform: 'rotate(-4deg)', left: '6%', bottom: '60px' }}
      >
        <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5rem', lineHeight: 1.4 }}>
          "Available for Internships & Projects"
        </p>
        <small style={{ display: 'block', marginTop: '4px', color: '#7A6050', fontSize: '1.2rem' }}>
          Coimbatore · Open to Remote
        </small>
      </div>

      {/* Paper poster 2 - code scrawl */}
      <div
        className="paper-poster"
        style={{ transform: 'rotate(3deg)', left: '33%', bottom: '50px', maxWidth: '160px' }}
      >
        <code style={{ fontSize: '1.2rem', color: '#5D4C3A', fontFamily: "'Space Mono', monospace", lineHeight: 1.6, display: 'block' }}>
          {`while alive:\n  build_stuff()`}
        </code>
      </div>

      {/* Paper poster 3 - torn note */}
      <div
        className="paper-poster torn"
        style={{ transform: 'rotate(1.5deg)', right: '12%', bottom: '65px' }}
      >
        <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.4rem' }}>
          Coimbatore → World 🌍
        </p>
      </div>

      {/* Paper poster 4 - coffee stain */}
      <div
        className="paper-poster"
        style={{ transform: 'rotate(-2deg)', right: '36%', bottom: '40px', paddingTop: '14px' }}
      >
        <div className="coffee-ring" />
        <p style={{ fontSize: '1.2rem', lineHeight: 1.5 }}>
          B.E. CSE · AI & ML<br />
          Batch 2029
        </p>
      </div>

      {/* Crumpled paper balls */}
      <div className="paper-ball" style={{ left: '22%', bottom: '35px' }} />
      <div className="paper-ball" style={{ right: '26%', bottom: '38px' }} />
      <div className="paper-ball" style={{ left: '56%', bottom: '32px' }} />

      {/* Ground floor */}
      <div className="ground-floor" />
    </motion.div>
  )
}

export default function ContactSection() {

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '60px 24px 0',
      }}
    >
      <hr className="section-sep" style={{ marginBottom: '80px' }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            Let's Connect
          </h2>
          <p
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: '#FFFFFF',
              fontSize: '1.5rem',
              maxWidth: '560px',
              margin: '0 auto 60px',
              lineHeight: 1.7,
            }}
          >
            I'm always open to cool projects, internship opportunities, or just a good conversation about AI and code.
          </p>
        </ScrollReveal>

        {/* Social links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '4px',
            marginBottom: '80px',
          }}
        >
          {socialLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <ScrollReveal key={link.label} delay={i * 0.12}>
                <MagneticButton
                  href={link.url}
                  target="_blank"
                >
                  <motion.div
                    whileHover={{
                      borderColor: 'rgba(255,213,128,0.45)',
                      background: 'rgba(255,213,128,0.04)',
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 24px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,213,128,0.18)',
                      background: 'rgba(255,255,255,0.02)',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <Icon
                      size={20}
                      color={link.color}
                      strokeWidth={1.5}
                    />
                    <div style={{ textAlign: 'left' }}>
                      <div
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '1.2rem',
                          color: '#FFFFFF',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {link.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Crimson Pro', serif",
                          fontSize: '1rem',
                          color: '#DDDDDD',
                          marginTop: '2px',
                        }}
                      >
                        {link.handle}
                      </div>
                    </div>
                  </motion.div>
                </MagneticButton>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Footer credit */}
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '1rem',
            color: '#FFFFFF',
            letterSpacing: '0.12em',
            marginBottom: '24px',
          }}
        >
          BUILT BY RITHIK S · KPRIET · 2025
        </p>
      </div>

      {/* Ground scene */}
      <GroundScene />
    </section>
  )
}
