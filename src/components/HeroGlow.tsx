"use client";

import { useEffect, useRef } from "react";

export const HeroGlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Tech grid mask */}
      <div className="absolute inset-0 cyber-grid opacity-75"></div>

      {/* Dynamic glow tracking the mouse */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 opacity-80 pointer-events-none"
        style={{
          left: "var(--mouse-x)",
          top: "var(--mouse-y)",
          background: "radial-gradient(circle, rgba(0, 210, 211, 0.12) 0%, rgba(108, 92, 231, 0.05) 35%, rgba(0, 0, 0, 0) 75%)",
        }}
      />

      {/* Futuristic tech lines crossing */}
      <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
      <div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
      <div className="absolute top-[40%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d2d3]/5 to-transparent"></div>
    </div>
  );
};
