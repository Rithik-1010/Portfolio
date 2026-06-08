import { useMousePosition } from '../../hooks/useMousePosition'
import { motion } from 'framer-motion'

export default function FogLayer() {
  const { x, y } = useMousePosition()

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1, // Behind the content, above the background color
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* 
        The fog element itself. We use an SVG noise filter + opacity to create "fog".
        It's moving continuously.
      */}
      <div
        style={{
          position: 'absolute',
          inset: '-50%', // Make it larger so we can pan it around
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.015\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
          backgroundSize: '400px 400px',
          opacity: 0.6,
          // Mask out the fog around the cursor. 
          // If x/y is 0/0 (initial), default to center.
          WebkitMaskImage: `radial-gradient(circle 250px at ${x || window.innerWidth / 2}px ${y || window.innerHeight / 2}px, transparent 20%, black 100%)`,
          maskImage: `radial-gradient(circle 250px at ${x || window.innerWidth / 2}px ${y || window.innerHeight / 2}px, transparent 20%, black 100%)`,
          animation: 'fog-drift 60s linear infinite',
        }}
      />

      <style>{`
        @keyframes fog-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(10%, 10%); }
        }
      `}</style>
    </div>
  )
}
