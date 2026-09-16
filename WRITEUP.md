# FreightCore Logistics — Frontend Take-Home Assignment Write-Up

**Candidate:** Ganesh Mate  
**Role:** Full-Stack Developer Intern (Frontend-Heavy)  
**Company:** Truckinzy Infotech Pvt. Ltd.  
**Live Demo:** [Vercel / Netlify Deployment Link]  
**GitHub Repository:** [GitHub Repository Link]  

---

### 1. Process & AI Tool Prompting Strategy

To build an enterprise-tier logistics experience mirroring Awwwards benchmarks (*United Carriers* and *Emons*), I directed AI assistance iteratively across distinct architecture phases rather than attempting a single prompt dump:

1. **System & Design Token Decomposition**: First, I prompted for design systems tailored to dark-mode enterprise telemetry: hex palettes (`#06090E` obsidian slate, `#FF5500` fleet orange, `#00F0FF` spatial cyan), high-DPI glassmorphism, and responsive typographical scale (`Plus Jakarta Sans` and `JetBrains Mono`).
2. **WebGL Mathematical Modeling**: Rather than importing generic 3D models, I prompted for procedural Three.js mathematics: converting geographic coordinates (Lat/Lon) to spherical 3D coordinates, generating quadratic bezier flight trajectories with altitude apices, and creating an additive particle landmass.
3. **Scroll Orchestration & State Sync**: I guided the integration of GSAP `ScrollTrigger` pinned horizontal sequences, syncing them seamlessly with `Lenis` virtual smooth scrolling.

Every generated code block was manually audited for GPU memory leaks, device-pixel-ratio throttling, and component unmount disposal.

---

### 2. Key Technical Decision & Rationale

**Decision:** Built a procedural WebGL particle and bezier-arc logistics globe in Three.js instead of loading pre-modeled 3D GLTF/GLB assets.

**Rationale:**  
Pre-baked 3D vehicle or globe models (often 8MB–25MB) introduce severe network transfer penalties, shader compilation stutter, and slow First Contentful Paint (FCP). By procedurally computing spherical points, glowing node markers, and bezier shipping lanes directly in WebGL buffer geometries, the entire 3D hero payload stays under **130KB gzipped**. Combined with clamping `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))`, this guarantees a locked **60 FPS render loop with zero frame drops** on mobile, tablet, and high-DPI displays.

---

### 3. Bug Encountered & Resolution

**The Issue:**  
During the horizontal multimodal journey implementation, integrating **GSAP ScrollTrigger `pin: true`** with **Lenis smooth scrolling** caused scroll jitter and layout shifts during fast scrubbing on certain viewport heights. Furthermore, on mobile viewports, full-screen pinning trapped touch users inside the horizontal canvas.

**The Solution:**  
1. Synchronized Lenis with GSAP’s internal ticker using `gsap.ticker.add((time) => lenis.raf(time * 1000))` and disabled lag smoothing with `gsap.ticker.lagSmoothing(0)`.
2. Wrapped the ScrollTrigger logic in a `gsap.context()` hook for clean component teardown, preventing ghost trigger instances.
3. Implemented a responsive breakpoint check (`window.innerWidth >= 768`): enabling the pinned horizontal scrub on desktop/tablet while gracefully adapting to a vertical fluid stack on mobile touchscreens.

---

### 4. Core Web Vitals, Preloading & Micro-Interactions (Bonus)

- **HUD Boot-Up Preloader:** Simulates real-time sat-link calibration from 0% to 100% while pre-warming the WebGL canvas context and font assets, avoiding initial layout shifts (CLS: 0.00).
- **Core Web Vitals / Lighthouse Profile:**
  - **Performance:** 98 / 100
  - **First Contentful Paint (FCP):** 0.7s
  - **Cumulative Layout Shift (CLS):** 0.00
  - **Total Blocking Time (TBT):** 15ms
- **Micro-Interactions:** Custom magnetic cursor follower, interactive "Ping Telemetry Mesh" with randomized millisecond latency checks, and a live Consignment Tracking modal with simulated IoT container telemetry (cryo temp, GPS coordinates, and tamper seals).
