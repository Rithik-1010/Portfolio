# Rithik S — Portfolio

A stunning, dark-aesthetic personal portfolio website for **Rithik S** — a first-year B.E. CSE (AI & ML) student and creative developer.

## ✨ Features

- 🔦 **Vintage Hanging Lamp** — the centerpiece interaction that controls the entire atmosphere
- ⚡ **Physics Pull String** — React Spring-powered string with realistic snap-back
- 🌟 **Fireflies** — GSAP MotionPath organic wandering fireflies, always present
- 💨 **Dust Particles** — floating particles in the lamp's light cone when lit
- 🪄 **Custom Cursor** — amber/green color-shifting cursor with lagging ring
- ✍️ **Letter-by-letter name reveal** — Framer Motion SplitText animation
- 🧲 **Magnetic Buttons** — GSAP cursor-attract effect on social links
- 📜 **Smooth Scrolling** — Lenis + GSAP ticker integration
- 🖼️ **Ground Scene** — paper posters and crumpled notes revealed only when lamp is ON

## 🛠️ Tech Stack

- Vite + React 18
- Tailwind CSS v4
- Framer Motion v11
- GSAP v3 + MotionPath
- React Spring (physics string)
- Lenis (smooth scroll)
- Lucide React (icons)

## 🚀 Setup

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build
npm run preview
```

## 🌐 Deployment

Configured for Vercel. Push to GitHub and connect repo on Vercel — it will auto-detect the `vercel.json` config.

## 📁 Project Structure

```
src/
├── components/
│   ├── lamp/          ← VintageLamp, PullString, LightCone, DustParticles, Fireflies
│   ├── sections/      ← Hero, Skills, Projects, Contact
│   ├── ui/            ← CustomCursor, SplitText, MagneticButton, ScrollReveal, GlowBadge
│   └── layout/        ← RootLayout (Lenis)
├── hooks/
│   ├── useLampState.js
│   └── useMousePosition.js
├── data/
│   ├── projects.js
│   └── skills.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🔗 Links

- GitHub: [Rithik-1010](https://github.com/Rithik-1010)
- LinkedIn: [rithiks1100](https://linkedin.com/in/rithiks1100)
- RIRO Project: [riro-bodywash.vercel.app](https://riro-bodywash.vercel.app/)
