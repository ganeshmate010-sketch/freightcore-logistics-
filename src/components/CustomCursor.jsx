import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for pointer devices with fine pointer (desktop mouse)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const clickable =
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest(".stat-card") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(!!clickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out hidden sm:block"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border transition-colors duration-200 ${
            isPointer ? "border-orange-400 bg-orange-500/10" : "border-cyan-400/40"
          }`}
        />
      </div>

      {/* Center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 hidden sm:block"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
        }}
      >
        <div className={`w-1 h-1 rounded-full ${isPointer ? "bg-orange-400" : "bg-cyan-300"}`} />
      </div>
    </>
  );
}
