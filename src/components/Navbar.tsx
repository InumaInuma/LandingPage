"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#070514]/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
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
            className="text-xs font-semibold text-slate-300 hover:text-white uppercase tracking-wider transition-colors"
          >
            Inicio
          </a>
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, "services")}
            className="text-xs font-semibold text-slate-300 hover:text-[#00d2d3] uppercase tracking-wider transition-colors"
          >
            Servicios
          </a>
          <a
            href="#cases"
            onClick={(e) => handleLinkClick(e, "cases")}
            className="text-xs font-semibold text-slate-300 hover:text-[#a29bfe] uppercase tracking-wider transition-colors"
          >
            Casos de Éxito
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleLinkClick(e, "pricing")}
            className="text-xs font-semibold text-slate-300 hover:text-white uppercase tracking-wider transition-colors"
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
            Comenzar Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none cursor-pointer"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0c0926]/95 border-b border-white/5 backdrop-blur-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[300px] py-6" : "max-h-0 py-0"
          }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="text-sm font-semibold text-slate-300 hover:text-white uppercase tracking-wider transition-colors"
          >
            Inicio
          </a>
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, "services")}
            className="text-sm font-semibold text-slate-300 hover:text-[#00d2d3] uppercase tracking-wider transition-colors"
          >
            Servicios
          </a>
          <a
            href="#cases"
            onClick={(e) => handleLinkClick(e, "cases")}
            className="text-sm font-semibold text-slate-300 hover:text-[#a29bfe] uppercase tracking-wider transition-colors"
          >
            Casos de Éxito
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleLinkClick(e, "pricing")}
            className="text-sm font-semibold text-slate-300 hover:text-white uppercase tracking-wider transition-colors"
          >
            Precios
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="inline-block text-center px-5 py-3 rounded-xl bg-gradient-to-r from-[#00d2d3] to-cyan-400 text-slate-950 font-outfit font-bold text-xs uppercase tracking-widest cursor-pointer"
          >
            Comenzar Demo
          </a>
        </div>
      </div>
    </nav>
  );
};
