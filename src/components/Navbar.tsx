"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Automatically determine active tab based on scroll position
      const sections = ["hero", "services", "cases", "pricing", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveTab(targetId);
    }
  };

  return (
    <>
      {/* Top Navbar - visible on desktop, just clean logo on mobile */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#070514]/85 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveTab("hero");
            }}
          >
            <Image
              src="/logo.png"
              alt="Almain Logo"
              width={32}
              height={32}
              className="rounded-lg object-contain"
            />
            <span className="font-outfit font-black tracking-widest text-lg bg-gradient-to-r from-white via-slate-200 to-[#00d2d3] bg-clip-text text-transparent">
              AL<span className="text-white">MAIN</span> <span className="text-xs font-normal text-slate-400 tracking-normal ml-1">TIC</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "hero")}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "hero" ? "text-[#00d2d3]" : "text-slate-300 hover:text-white"
              }`}
            >
              Inicio
            </a>
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, "services")}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "services" ? "text-[#00d2d3]" : "text-slate-300 hover:text-[#00d2d3]"
              }`}
            >
              Servicios
            </a>
            <a
              href="#cases"
              onClick={(e) => handleLinkClick(e, "cases")}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "cases" ? "text-[#a29bfe]" : "text-slate-300 hover:text-[#a29bfe]"
              }`}
            >
              Casos de Éxito
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleLinkClick(e, "pricing")}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "pricing" ? "text-white underline decoration-[#00d2d3] decoration-2 underline-offset-4" : "text-slate-300 hover:text-white"
              }`}
            >
              Precios
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00d2d3] to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-outfit font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-[#00d2d3]/10 hover:shadow-cyan-400/20 active:scale-95 cursor-pointer"
            >
              Consulta Técnica
            </a>
          </div>
        </div>
      </nav>

      {/* Fixed Bottom Navigation Bar - Mobile Exclusive */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0c0926]/90 backdrop-blur-lg border-t border-white/10 pb-5 pt-3 px-4 flex justify-around items-center shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        {/* Tab 1: Inicio */}
        <button
          onClick={(e) => handleLinkClick(e, "hero")}
          className={`flex flex-col items-center text-[10px] font-bold uppercase tracking-wider transition-all ${
            activeTab === "hero" ? "text-[#00d2d3] scale-105" : "text-slate-400"
          }`}
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span>Inicio</span>
        </button>

        {/* Tab 2: Servicios */}
        <button
          onClick={(e) => handleLinkClick(e, "services")}
          className={`flex flex-col items-center text-[10px] font-bold uppercase tracking-wider transition-all ${
            activeTab === "services" ? "text-[#00d2d3] scale-105" : "text-slate-400"
          }`}
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
          <span>Servicios</span>
        </button>

        {/* Tab 3: Casos */}
        <button
          onClick={(e) => handleLinkClick(e, "cases")}
          className={`flex flex-col items-center text-[10px] font-bold uppercase tracking-wider transition-all ${
            activeTab === "cases" ? "text-[#a29bfe] scale-105" : "text-slate-400"
          }`}
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0A2.25 2.25 0 004.5 15h15a2.25 2.25 0 002.25-2.25m-19.5 0v.25C2.25 16.185 5.065 19 8.625 19h6.75c3.56 0 6.375-2.815 6.375-6.25v-.25m-19.5 0V7.5A2.25 2.25 0 014.5 5.25h3.375c.9 0 1.74.45 2.25 1.2l1.25 1.875a1.5 1.5 0 001.5.75H19.5a2.25 2.25 0 012.25 2.25v.75" />
          </svg>
          <span>Casos</span>
        </button>

        {/* Tab 4: Precios */}
        <button
          onClick={(e) => handleLinkClick(e, "pricing")}
          className={`flex flex-col items-center text-[10px] font-bold uppercase tracking-wider transition-all ${
            activeTab === "pricing" ? "text-white scale-105" : "text-slate-400"
          }`}
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a1.5 1.5 0 002.122 0l4.318-4.318a1.5 1.5 0 000-2.122L11.16 3.659A2.25 2.25 0 009.568 3zM6 7.5h.008v.008H6V7.5z" />
          </svg>
          <span>Precios</span>
        </button>

        {/* Tab 5: Contacto */}
        <button
          onClick={(e) => handleLinkClick(e, "contact")}
          className={`flex flex-col items-center text-[10px] font-bold uppercase tracking-wider transition-all ${
            activeTab === "contact" ? "text-[#00d2d3] scale-105" : "text-slate-400"
          }`}
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          <span>Contacto</span>
        </button>
      </div>
    </>
  );
};
