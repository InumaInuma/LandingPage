"use client";

import { useEffect, useState } from "react";

export const SignaturePreloader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2800); // Start fade out at 2.8s

    const removeTimer = setTimeout(() => {
      setVisible(false);
      // Restore scroll
      document.body.style.overflow = "unset";
    }, 3400); // Fully remove from DOM at 3.4s

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070514] transition-all duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Abstract Grid background inside preloader */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Radial center glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full glow-cyan blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="relative flex flex-col items-center z-10">
        {/* SVG Signature container */}
        <div className="relative w-80 h-32 flex items-center justify-center">
          <svg
            className="w-full h-full text-[#00d2d3]"
            viewBox="0 0 400 150"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Draw Path for 'Almain' script signature */}
            <path
              className="signature-path"
              d="M 50 100 C 65 30, 85 30, 95 100 C 97 115, 105 115, 110 95 C 115 70, 120 70, 125 100 C 130 115, 138 115, 142 95 C 147 70, 152 70, 157 100 C 162 115, 170 115, 174 95 C 185 45, 195 45, 200 100 C 205 115, 212 115, 218 95 C 220 85, 225 85, 230 100 C 235 115, 243 115, 247 95 C 255 60, 275 60, 280 120"
              strokeDasharray="900"
              strokeDashoffset="900"
            />
            {/* Elegant cross-line crossing the signature */}
            <path
              className="signature-line"
              d="M 30 110 L 330 110"
              strokeDasharray="400"
              strokeDashoffset="400"
              strokeWidth="2"
            />
          </svg>

          {/* Animated Hand/Pen laser cursor */}
          <div className="absolute signature-pen-tip w-4 h-4 rounded-full bg-[#00d2d3] shadow-[0_0_15px_#00d2d3] border-2 border-white pointer-events-none">
            {/* Laser flare */}
            <div className="absolute w-8 h-8 rounded-full bg-cyan-400/20 blur-sm -top-2 -left-2 animate-ping"></div>
          </div>

          {/* Decorative sci-fi corners around signature */}
          <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-[#00d2d3]/30"></div>
          <div className="absolute -top-4 -right-4 w-4 h-4 border-t-2 border-r-2 border-[#00d2d3]/30"></div>
          <div className="absolute -bottom-4 -left-4 w-4 h-4 border-b-2 border-l-2 border-[#00d2d3]/30"></div>
          <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b-2 border-r-2 border-[#00d2d3]/30"></div>
        </div>

        {/* Loading text with blinking cursor */}
        <div className="mt-12 text-center">
          <p className="font-outfit font-black text-xs uppercase tracking-[0.25em] text-slate-400">
            ALMAIN <span className="text-[#00d2d3]">TIC</span> SYSTEM INITIALIZING
          </p>
          <div className="mt-2.5 h-1 w-44 mx-auto rounded-full bg-white/5 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00d2d3] to-[#6c5ce7] signature-progress"></div>
          </div>
        </div>
      </div>

      {/* Futuristic styling for animations */}
      <style jsx global>{`
        .signature-path {
          animation: drawSignature 2.2s cubic-bezier(0.42, 0, 0.58, 1) forwards 0.2s;
        }
        .signature-line {
          animation: drawSignature 1s cubic-bezier(0.42, 0, 0.58, 1) forwards 1.4s;
        }
        
        @keyframes drawSignature {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Pen laser trace follow (coordinates mapped along signature path) */
        .signature-pen-tip {
          animation: penFollow 2.2s cubic-bezier(0.42, 0, 0.58, 1) forwards 0.2s;
          opacity: 0;
        }

        @keyframes penFollow {
          0% {
            left: 38px;
            top: 75px;
            opacity: 1;
          }
          10% {
            left: 55px;
            top: 15px;
            opacity: 1;
          }
          20% {
            left: 77px;
            top: 70px;
            opacity: 1;
          }
          30% {
            left: 95px;
            top: 55px;
            opacity: 1;
          }
          40% {
            left: 112px;
            top: 72px;
            opacity: 1;
          }
          50% {
            left: 130px;
            top: 55px;
            opacity: 1;
          }
          60% {
            left: 148px;
            top: 72px;
            opacity: 1;
          }
          70% {
            left: 168px;
            top: 35px;
            opacity: 1;
          }
          80% {
            left: 185px;
            top: 70px;
            opacity: 1;
          }
          90% {
            left: 205px;
            top: 70px;
            opacity: 1;
          }
          98% {
            left: 232px;
            top: 85px;
            opacity: 1;
          }
          100% {
            left: 240px;
            top: 80px;
            opacity: 0; /* Fade out cursor at end */
          }
        }

        .signature-progress {
          width: 0%;
          animation: loadProgress 2.6s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
        }

        @keyframes loadProgress {
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
