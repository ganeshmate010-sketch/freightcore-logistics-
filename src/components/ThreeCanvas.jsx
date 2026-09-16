import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas({ scrollProgress = 0 }) {
  const mountRef = useRef(null);
  const globeGroupRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.8;
    camera.position.y = 0.4;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all rotating elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // 1. Inner Core Sphere (Subtle dark glass reflection)
    const coreGeo = new THREE.SphereGeometry(1.6, 48, 48);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x050811,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // 2. Wireframe / Latitude-Longitude Grid
    const wireGeo = new THREE.SphereGeometry(1.62, 24, 24);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x1e293b,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    globeGroup.add(wireMesh);

    // 3. Procedural Particle Landmass & Logistics Cloud
    const particleCount = 1800;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00f0ff); // Cyan
    const color2 = new THREE.Color(0xff5500); // Fleet Orange
    const colorDim = new THREE.Color(0x334155); // Slate dim

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 1.63 + (Math.random() * 0.04 - 0.02);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      // Color assignment based on latitude / clustering
      const rand = Math.random();
      let c = colorDim;
      if (rand > 0.88) {
        c = color2;
      } else if (rand > 0.65) {
        c = color1;
      }
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    globeGroup.add(particles);

    // 4. Key Global Freight Hub Nodes (Lat, Lon)
    const hubs = [
      { name: "New York (JFK)", lat: 40.71, lon: -74.0 },
      { name: "Rotterdam Port", lat: 51.92, lon: 4.47 },
      { name: "Singapore Hub", lat: 1.35, lon: 103.81 },
      { name: "Shanghai Port", lat: 31.23, lon: 121.47 },
      { name: "Dubai Logistics City", lat: 25.2, lon: 55.27 },
      { name: "Los Angeles Long Beach", lat: 33.74, lon: -118.26 },
      { name: "Frankfurt CargoCity", lat: 50.11, lon: 8.68 },
      { name: "Tokyo Haneda", lat: 35.67, lon: 139.65 },
      { name: "Mumbai JNPT", lat: 18.94, lon: 72.94 },
    ];

    function latLonToVector3(lat, lon, radius = 1.64) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    const hubPositions = hubs.map((h) => ({
      ...h,
      pos: latLonToVector3(h.lat, h.lon),
    }));

    // Draw Hub Markers (Glowing Rings & Dots)
    const hubSphereGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const hubMat = new THREE.MeshBasicMaterial({ color: 0xff5500 });
    const ringGeo = new THREE.RingGeometry(0.06, 0.08, 18);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });

    hubPositions.forEach((h) => {
      const hubMesh = new THREE.Mesh(hubSphereGeo, hubMat);
      hubMesh.position.copy(h.pos);
      globeGroup.add(hubMesh);

      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(h.pos.clone().multiplyScalar(1.002));
      ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(ringMesh);
    });

    // 5. Connect Hubs with Spline Arcs & Animated Pulses
    const routes = [
      [0, 1], // NY to Rotterdam
      [1, 4], // Rotterdam to Dubai
      [4, 8], // Dubai to Mumbai
      [8, 2], // Mumbai to Singapore
      [2, 3], // Singapore to Shanghai
      [3, 7], // Shanghai to Tokyo
      [7, 5], // Tokyo to LA
      [5, 0], // LA to NY
      [1, 6], // Rotterdam to Frankfurt
      [6, 4], // Frankfurt to Dubai
    ];

    const splineCurves = [];
    const pulseObjects = [];

    routes.forEach(([i, j]) => {
      const p1 = hubPositions[i].pos;
      const p2 = hubPositions[j].pos;

      // Arc apex calculation
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const distance = p1.distanceTo(p2);
      const altitude = 1.64 + Math.min(distance * 0.45, 0.65);
      mid.normalize().multiplyScalar(altitude);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      splineCurves.push(curve);

      // Arc Geometry Line
      const points = curve.getPoints(45);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      });
      const line = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(line);

      // Pulse traveling on the route
      const pulseGeo = new THREE.SphereGeometry(0.035, 8, 8);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: 0xffaa00,
        blending: THREE.AdditiveBlending,
      });
      const pulse = new THREE.Mesh(pulseGeo, pulseMat);
      globeGroup.add(pulse);

      pulseObjects.push({
        mesh: pulse,
        curve: curve,
        speed: 0.003 + Math.random() * 0.004,
        progress: Math.random(),
      });
    });

    // 6. Orbital Satellite Ring
    const orbitRadius = 2.3;
    const orbitPoints = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      orbitPoints.push(
        new THREE.Vector3(
          Math.cos(angle) * orbitRadius,
          Math.sin(angle) * 0.3,
          Math.sin(angle) * orbitRadius
        )
      );
    }
    const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const orbitMat = new THREE.LineDashedMaterial({
      color: 0xff5500,
      dashSize: 0.15,
      gapSize: 0.1,
      transparent: true,
      opacity: 0.4,
    });
    const orbitLine = new THREE.Line(orbitGeo, orbitMat);
    orbitLine.computeLineDistances();
    globeGroup.add(orbitLine);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.8;
      targetRotationX = y * 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Base globe auto-rotation
      globeGroup.rotation.y += 0.0025;

      // Smooth mouse tilt damping
      globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.02;
      globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.02;

      // Update route pulses
      pulseObjects.forEach((p) => {
        p.progress = (p.progress + p.speed) % 1.0;
        const point = p.curve.getPointAt(p.progress);
        p.mesh.position.copy(point);
      });

      // Orbit subtle wobble
      orbitLine.rotation.y -= 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      // Clean up geometries and materials
      [
        coreGeo,
        wireGeo,
        particleGeometry,
        hubSphereGeo,
        ringGeo,
        orbitGeo,
      ].forEach((g) => g.dispose());
      [
        coreMat,
        wireMat,
        particleMaterial,
        hubMat,
        ringMat,
        orbitMat,
      ].forEach((m) => m.dispose());

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[480px] flex items-center justify-center pointer-events-auto">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      {/* Telemetry coordinate overlays */}
      <div className="absolute top-4 right-4 pointer-events-none text-right hidden sm:block">
        <div className="text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase">
          SAT-LINK // 14.82°N 101.44°E
        </div>
        <div className="text-[10px] font-mono text-slate-500">
          WEBGL TELEMETRY MATRIX ACTIVE
        </div>
      </div>
      <div className="absolute bottom-4 left-4 pointer-events-none hidden sm:block">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-mono text-slate-400">
            60 FPS STREAM // ZERO-LATENCY MESH
          </span>
        </div>
      </div>
    </div>
  );
}
