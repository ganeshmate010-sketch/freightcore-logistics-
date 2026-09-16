# FreightCore Logistics 🌐🚛

> **Autonomous Multimodal Freight & Fleet Intelligence Platform**  
> *Hiring Take-Home Assignment for Full-Stack Developer Intern (Frontend-Heavy) at Truckinzy Infotech Pvt. Ltd.*

---

## ⚡ Overview

**FreightCore Logistics** is an enterprise-grade, scroll-driven hero experience designed for Fortune 500 supply chain dispatchers. Taking cues from Awwwards benchmarks (*United Carriers* and *Emons*), the site delivers sub-second telemetry feedback, a 60 FPS WebGL spatial globe, and a pinned multimodal scroll narrative.

### 🌟 Live Highlights
- **WebGL / Three.js 3D Mesh**: Interactive 3D logistics node globe with procedural particle landmass, glowing international hub markers, and dynamic cubic bezier shipping curves with animated cargo pulses.
- **GSAP ScrollTrigger**: Numerical rollup stat counters triggered on viewport entry, parallax product cards, and a pinned horizontal multimodal transit flow.
- **Micro-Interactions**:
  - HUD telemetry preloader screen with real-time percentage calibration.
  - Interactive "Track Consignment" modal (`FC-9021-TX`, `FC-7714-EU`, `FC-3392-AP`) displaying cryogenic temperature, GPS coordinates, and tamper seal integrity.
  - Live "Ping Telemetry Mesh" testing corridor latency in milliseconds.
  - Global dispatch hub time ticker across Rotterdam (CET), New York (EST), and Singapore (SGT).
  - Magnetic cursor follower with fine-pointer detection.
- **Smooth Inertial Scrolling**: Integrated `Lenis` smooth scroll synchronized directly with the GSAP ticker.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | React 18, Vite 6 |
| **Styling** | Tailwind CSS v4, Custom Fonts (`Plus Jakarta Sans`, `Space Grotesk`, `JetBrains Mono`) |
| **3D / WebGL** | Three.js (Procedural BufferGeometry, Additive Blending, High-DPI clamping) |
| **Animations** | GSAP 3 (ScrollTrigger, Flip, Ticker) |
| **Smooth Scroll**| Lenis by Darkroom Engineering |
| **Icons** | Lucide React |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+` or `v20+`
- npm `v9+` or `v10+`

### Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/freightcore-logistics.git
cd freightcore-logistics

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📂 Project Structure

```
freightcore-logistics/
├── public/
│   └── logo.svg                 # FreightCore enterprise geometric brand mark
├── src/
│   ├── components/
│   │   ├── Preloader.jsx        # Telemetry boot sequence & progress counter
│   │   ├── Navbar.jsx           # Glassmorphism header with live network pill
│   │   ├── ThreeCanvas.jsx      # Interactive 60fps WebGL Logistics Node Globe
│   │   ├── Hero.jsx             # Hero section with live search and telemetry cards
│   │   ├── StatsSection.jsx     # GSAP ScrollTrigger counters & parallax cards
│   │   ├── HorizontalScrollSection.jsx # Pinned horizontal multimodal journey
│   │   ├── NetworkTerminalSection.jsx  # Interactive corridor matrix & ping tester
│   │   ├── ConsignmentModal.jsx # Real-time IoT shipment diagnostics modal
│   │   ├── DemoModal.jsx        # Enterprise dispatch pilot scheduling modal
│   │   ├── CustomCursor.jsx     # Magnetic cursor follower (fine pointers)
│   │   └── Footer.jsx           # Enterprise footer & global time tickers
│   ├── App.jsx                  # Main application orchestrator & Lenis sync
│   ├── index.css                # Tailwind v4 import & custom styles
│   └── main.jsx                 # React root entry
├── vite.config.js               # Optimized chunk splitting (Three.js / GSAP)
├── WRITEUP.md                   # 300-500 word AI process & technical decision write-up
└── package.json
```

---

## 🚢 Deployment Guide

This project is zero-config ready for **Vercel** or **Netlify**:

### Deploy to Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repo.
3. Keep default settings (`Framework Preset: Vite`, `Build Command: npm run build`, `Output Directory: dist`).
4. Click **Deploy**.

---

## 📄 Submission Documentation
The official write-up covering AI prompting workflow, key technical decisions, and bug resolution is available in [`WRITEUP.md`](./WRITEUP.md).
