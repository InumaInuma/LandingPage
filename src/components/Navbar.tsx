"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("hero");
  // menuState can be: 'hidden', 'icons', 'full'
  const [menuState, setMenuState] = useState<"hidden" | "icons" | "full">("hidden");

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
          if (rect.top <= 150 && rect.bottom >= 150) {
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
      {/* 1. Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
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
              setMenuState("hidden");
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

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => {
              if (menuState === "hidden") {
                setMenuState("icons");
              } else {
                setMenuState("hidden");
              }
            }}
            className="md:hidden text-slate-300 hover:text-white focus:outline-none cursor-pointer z-50 p-2"
          >
            {menuState === "hidden" ? (
              // Hamburger Icon (3 lines)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              // Close Icon (X)
              <svg className="w-6 h-6 text-[#00d2d3]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* 2. Mobile Floating Sidebar Menu - Collapsed State (Thin strip of icons) */}
      {menuState === "icons" && (
        <div className="md:hidden fixed right-0 top-0 bottom-0 z-50 w-16 bg-[#0c0926]/90 backdrop-blur-md border-l border-white/10 flex flex-col items-center justify-between py-24 shadow-2xl animate-fade-in">
          {/* Decorative Indicator */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#00d2d3] animate-pulse"></div>

          {/* Vertical Stack of Icons */}
          <div className="flex flex-col space-y-6 items-center">
            {/* Home Icon */}
            <button
              onClick={(e) => handleLinkClick(e, "hero")}
              className={`p-2 rounded-xl transition-all ${
                activeTab === "hero" ? "bg-[#00d2d3]/15 text-[#00d2d3] scale-110" : "text-slate-400 hover:text-white"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </button>

            {/* Services Icon */}
            <button
              onClick={(e) => handleLinkClick(e, "services")}
              className={`p-2 rounded-xl transition-all ${
                activeTab === "services" ? "bg-[#00d2d3]/15 text-[#00d2d3] scale-110" : "text-slate-400 hover:text-white"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </button>

            {/* Cases Icon */}
            <button
              onClick={(e) => handleLinkClick(e, "cases")}
              className={`p-2 rounded-xl transition-all ${
                activeTab === "cases" ? "bg-[#6c5ce7]/15 text-[#a29bfe] scale-110" : "text-slate-400 hover:text-white"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0A2.25 2.25 0 004.5 15h15a2.25 2.25 0 002.25-2.25m-19.5 0v.25C2.25 16.185 5.065 19 8.625 19h6.75c3.56 0 6.375-2.815 6.375-6.25v-.25m-19.5 0V7.5A2.25 2.25 0 014.5 5.25h3.375c.9 0 1.74.45 2.25 1.2l1.25 1.875a1.5 1.5 0 001.5.75H19.5a2.25 2.25 0 012.25 2.25v.75" />
              </svg>
            </button>

            {/* Pricing Icon */}
            <button
              onClick={(e) => handleLinkClick(e, "pricing")}
              className={`p-2 rounded-xl transition-all ${
                activeTab === "pricing" ? "bg-white/10 text-white scale-110" : "text-slate-400 hover:text-white"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a1.5 1.5 0 002.122 0l4.318-4.318a1.5 1.5 0 000-2.122L11.16 3.659A2.25 2.25 0 009.568 3zM6 7.5h.008v.008H6V7.5z" />
              </svg>
            </button>

            {/* Contact Icon */}
            <button
              onClick={(e) => handleLinkClick(e, "contact")}
              className={`p-2 rounded-xl transition-all ${
                activeTab === "contact" ? "bg-[#00d2d3]/15 text-[#00d2d3] scale-110" : "text-slate-400 hover:text-white"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </button>
          </div>

          {/* Bottom Expand Arrow (opens full menu) */}
          <button
            onClick={() => setMenuState("full")}
            className="w-10 h-10 rounded-xl bg-white/5 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>
      )}

      {/* 3. Mobile Floating Sidebar Menu - Expanded State (Full Text Menu) */}
      {menuState === "full" && (
        <div className="md:hidden fixed inset-y-0 right-0 z-50 w-64 bg-[#0c0926]/98 backdrop-blur-xl border-l border-white/10 flex flex-col justify-between py-24 px-4 shadow-[0_0_50px_rgba(0,0,0,0.85)] animate-fade-in">
          {/* Header Area */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/5">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Almain Logo"
                  width={24}
                  height={24}
                  className="rounded-md object-contain"
                />
                <span className="font-outfit font-black tracking-widest text-sm text-white">
                  ALMAIN <span className="text-[#00d2d3]">TIC</span>
                </span>
              </div>
              <button
                onClick={() => setMenuState("hidden")}
                className="p-1 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu List - Row layout (Icon + Text) */}
            <div className="flex flex-col space-y-3 pt-6">
              {/* Link 1 */}
              <button
                onClick={(e) => {
                  handleLinkClick(e, "hero");
                  setMenuState("hidden");
                }}
                className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl transition-all text-xs font-bold uppercase tracking-wider ${
                  activeTab === "hero"
                    ? "bg-[#00d2d3] text-slate-950 shadow-md shadow-[#00d2d3]/20"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Inicio</span>
              </button>

              {/* Link 2 */}
              <button
                onClick={(e) => {
                  handleLinkClick(e, "services");
                  setMenuState("hidden");
                }}
                className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl transition-all text-xs font-bold uppercase tracking-wider ${
                  activeTab === "services"
                    ? "bg-[#00d2d3] text-slate-950 shadow-md shadow-[#00d2d3]/20"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <span>Servicios</span>
              </button>

              {/* Link 3 */}
              <button
                onClick={(e) => {
                  handleLinkClick(e, "cases");
                  setMenuState("hidden");
                }}
                className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl transition-all text-xs font-bold uppercase tracking-wider ${
                  activeTab === "cases"
                    ? "bg-[#6c5ce7] text-white shadow-md shadow-[#6c5ce7]/20"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0A2.25 2.25 0 004.5 15h15a2.25 2.25 0 002.25-2.25m-19.5 0v.25C2.25 16.185 5.065 19 8.625 19h6.75c3.56 0 6.375-2.815 6.375-6.25v-.25m-19.5 0V7.5A2.25 2.25 0 014.5 5.25h3.375c.9 0 1.74.45 2.25 1.2l1.25 1.875a1.5 1.5 0 001.5.75H19.5a2.25 2.25 0 012.25 2.25v.75" />
                </svg>
                <span>Casos de Éxito</span>
              </button>

              {/* Link 4 */}
              <button
                onClick={(e) => {
                  handleLinkClick(e, "pricing");
                  setMenuState("hidden");
                }}
                className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl transition-all text-xs font-bold uppercase tracking-wider ${
                  activeTab === "pricing"
                    ? "bg-white text-slate-950 shadow-md shadow-white/10"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a1.5 1.5 0 002.122 0l4.318-4.318a1.5 1.5 0 000-2.122L11.16 3.659A2.25 2.25 0 009.568 3zM6 7.5h.008v.008H6V7.5z" />
                </svg>
                <span>Precios</span>
              </button>

              {/* Link 5 */}
              <button
                onClick={(e) => {
                  handleLinkClick(e, "contact");
                  setMenuState("hidden");
                }}
                className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl transition-all text-xs font-bold uppercase tracking-wider ${
                  activeTab === "contact"
                    ? "bg-[#00d2d3] text-slate-950 shadow-md shadow-[#00d2d3]/20"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <span>Contacto</span>
              </button>
            </div>
          </div>

          {/* Bottom Collapse Button (collapses back to icons strip) */}
          <div className="space-y-4">
            <button
              onClick={() => setMenuState("icons")}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-2xl bg-white/5 text-slate-400 hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest cursor-pointer"
            >
              <span>Solo mostrar iconos</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
