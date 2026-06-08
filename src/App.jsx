import { motion } from 'framer-motion'
import RootLayout from './components/layout/RootLayout'
import HeroSection from './components/sections/HeroSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import LiquidChrome from './components/ui/LiquidChrome'

function AppInner() {
  return (
    <RootLayout>
      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <LiquidChrome
          baseColor={[0.02, 0.02, 0.02]}
          speed={1}
          amplitude={0.6}
          interactive={true}
        />
      </div>

      <main style={{ position: 'relative', zIndex: 10 }}>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </RootLayout>
  )
}

export default function App() {
  return (
    <AppInner />
  )
}
