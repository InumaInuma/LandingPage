"use client";

import { useState } from "react";

export const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = {
    fourgym: [
      {
        name: "Standard",
        monthlyPrice: 50,
        description: "Ideal para gimnasios pequeños y estudios independientes.",
        features: [
          "Hasta 200 socios activos",
          "Reserva de asientos básica",
          "Control de asistencia básica",
          "Soporte por correo electrónico",
        ],
        badge: null,
      },
      {
        name: "Pro",
        monthlyPrice: 100,
        description: "Para gimnasios en crecimiento con alta afluencia.",
        features: [
          "Socios activos ilimitados",
          "Reserva de asientos en tiempo real (SignalR)",
          "Control de asistencia automatizado",
          "Módulo de Caja Chica & POS Ventas",
          "Soporte Prioritario WhatsApp 24/7",
        ],
        badge: "Más Vendido",
      },
    ],
    delivery: [
      {
        name: "Logística Express",
        monthlyPrice: 70,
        description: "Para agencias de reparto locales con flota mediana.",
        features: [
          "Hasta 10 Repartidores activos",
          "Despachador para 5 comercios",
          "Monitoreo de pedidos en tiempo real",
          "App móvil para repartidores",
        ],
        badge: null,
      },
      {
        name: "Flota Corporativa",
        monthlyPrice: 130,
        description: "Control absoluto para agencias de logística masiva.",
        features: [
          "Repartidores y Comercios ilimitados",
          "Asignación inteligente de rutas",
          "Reportes de rendimiento & KPI",
          "Integración API externa",
          "Soporte dedicado & SLA",
        ],
        badge: "Premium",
      },
    ],
  };

  const handleContactScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 relative border-t border-white/5 bg-gradient-to-b from-[#0c0926]/40 to-[#070514]">
      {/* Accent glow lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#6c5ce7]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-white tracking-tight mb-4">
            Planes de Suscripción Flexibles
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
            Comienza a operar hoy mismo con tarifas mensuales sin permanencia obligatoria en Soles (S/).
          </p>

          {/* Monthly / Yearly Switch Toggle */}
          <div className="inline-flex items-center p-1 rounded-2xl bg-slate-950/80 border border-white/10">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2.5 rounded-xl font-outfit font-bold text-xs uppercase tracking-widest transition-all cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-gradient-to-r from-[#00d2d3] to-cyan-400 text-slate-950 shadow-md shadow-[#00d2d3]/10"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-5 py-2.5 rounded-xl font-outfit font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center space-x-1.5 ${
                billingPeriod === "yearly"
                  ? "bg-gradient-to-r from-[#00d2d3] to-cyan-400 text-slate-950 shadow-md shadow-[#00d2d3]/10"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Anual</span>
              <span className="text-[9px] font-black bg-rose-500 text-white px-1.5 py-0.5 rounded-md leading-none">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Subsections */}
        <div className="space-y-16">
          {/* 1. FourGym Pricing Grid */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <span className="w-1.5 h-6 bg-[#00d2d3] rounded-full"></span>
              <h3 className="font-outfit font-black text-xl text-white uppercase tracking-wider">
                Planes FourGym (Gimnasios)
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {plans.fourgym.map((plan, idx) => {
                const isYearly = billingPeriod === "yearly";
                const displayedPrice = isYearly ? plan.monthlyPrice * 0.8 : plan.monthlyPrice;
                const yearlyTotal = plan.monthlyPrice * 12 * 0.8;

                return (
                  <div
                    key={idx}
                    className={`glass-panel rounded-3xl p-8 relative flex flex-col justify-between transition-all duration-300 border ${
                      plan.badge 
                        ? "border-[#00d2d3]/30 shadow-2xl shadow-[#00d2d3]/5 scale-[1.02]" 
                        : "border-white/5"
                    }`}
                  >
                    {plan.badge && (
                      <span className="absolute top-4 right-4 bg-gradient-to-r from-[#00d2d3] to-cyan-400 text-slate-950 font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                    <div>
                      <h4 className="font-outfit font-black text-xl text-white mb-2">{plan.name}</h4>
                      <p className="text-slate-400 text-xs mb-6 min-h-[32px]">{plan.description}</p>
                      
                      <div className="flex flex-col mb-8">
                        <div className="flex items-baseline space-x-1.5">
                          <span className="font-outfit font-black text-4xl text-white">S/ {displayedPrice.toFixed(0)}</span>
                          <span className="text-slate-500 text-xs">/ mes</span>
                        </div>
                        {isYearly && (
                          <span className="text-[10px] text-[#00d2d3] font-bold mt-1.5 uppercase tracking-wide">
                            Facturado anualmente (S/ {yearlyTotal.toFixed(0)}/año)
                          </span>
                        )}
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start text-xs text-slate-300">
                            <svg className="w-4 h-4 text-[#00d2d3] mr-2.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#contact"
                      onClick={handleContactScroll}
                      className={`w-full py-3.5 rounded-xl font-outfit font-bold text-xs uppercase tracking-widest text-center transition-all cursor-pointer ${
                        plan.badge
                          ? "bg-gradient-to-r from-[#00d2d3] to-cyan-400 text-slate-950 hover:from-cyan-400 hover:to-cyan-300 shadow-md shadow-[#00d2d3]/10"
                          : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                      }`}
                    >
                      Adquirir Plan
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Delivery Connect Pricing Grid */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <span className="w-1.5 h-6 bg-[#6c5ce7] rounded-full"></span>
              <h3 className="font-outfit font-black text-xl text-white uppercase tracking-wider">
                Planes Delivery Connect (Envíos)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {plans.delivery.map((plan, idx) => {
                const isYearly = billingPeriod === "yearly";
                const displayedPrice = isYearly ? plan.monthlyPrice * 0.8 : plan.monthlyPrice;
                const yearlyTotal = plan.monthlyPrice * 12 * 0.8;

                return (
                  <div
                    key={idx}
                    className={`glass-panel rounded-3xl p-8 relative flex flex-col justify-between transition-all duration-300 border ${
                      plan.badge 
                        ? "border-[#6c5ce7]/30 shadow-2xl shadow-[#6c5ce7]/5 scale-[1.02]" 
                        : "border-white/5"
                    }`}
                  >
                    {plan.badge && (
                      <span className="absolute top-4 right-4 bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] text-white font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                    <div>
                      <h4 className="font-outfit font-black text-xl text-white mb-2">{plan.name}</h4>
                      <p className="text-slate-400 text-xs mb-6 min-h-[32px]">{plan.description}</p>

                      <div className="flex flex-col mb-8">
                        <div className="flex items-baseline space-x-1.5">
                          <span className="font-outfit font-black text-4xl text-white">S/ {displayedPrice.toFixed(0)}</span>
                          <span className="text-slate-500 text-xs">/ mes</span>
                        </div>
                        {isYearly && (
                          <span className="text-[10px] text-[#a29bfe] font-bold mt-1.5 uppercase tracking-wide">
                            Facturado anualmente (S/ {yearlyTotal.toFixed(0)}/año)
                          </span>
                        )}
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start text-xs text-slate-300">
                            <svg className="w-4 h-4 text-[#a29bfe] mr-2.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#contact"
                      onClick={handleContactScroll}
                      className={`w-full py-3.5 rounded-xl font-outfit font-bold text-xs uppercase tracking-widest text-center transition-all cursor-pointer ${
                        plan.badge
                          ? "bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] text-white hover:from-[#a29bfe] hover:to-[#b2bec3] shadow-md shadow-[#6c5ce7]/10"
                          : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                      }`}
                    >
                      Adquirir Plan
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
