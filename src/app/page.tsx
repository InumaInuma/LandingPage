import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import { HeroGlow } from "@/components/HeroGlow";
import { LiveActivityFeed } from "@/components/LiveActivityFeed";
import { DeliveryTracer } from "@/components/DeliveryTracer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070514] overflow-x-hidden text-slate-100 selection:bg-[#00d2d3] selection:text-slate-950">
      {/* Background abstract ambient glow spots */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full glow-cyan blur-[120px] pointer-events-none opacity-40"></div>
      <div className="absolute top-[20%] right-1/4 w-[600px] h-[600px] rounded-full glow-purple blur-[150px] pointer-events-none opacity-30"></div>

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 max-w-7xl mx-auto px-6">
        <HeroGlow />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-in">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00d2d3]/10 border border-[#00d2d3]/20 text-[#00d2d3] font-bold text-[10px] uppercase tracking-widest leading-none">
              🚀 SOFTWARE COMO SERVICIO (SaaS) PARA TU NEGOCIO
            </span>
            <h1 className="font-outfit font-black text-4xl md:text-6xl text-white tracking-tight leading-[1.05] max-w-2xl">
              Automatiza y escala tu empresa con <span className="bg-gradient-to-r from-[#00d2d3] via-cyan-400 to-[#6c5ce7] bg-clip-text text-transparent">Software Inteligente</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
              En <strong className="text-white">Almain</strong> ofrecemos soluciones SaaS listas para operar: gestiona membresías, POS de BarFit, rutinas y dietas digitales de tu gimnasio con **FourGym** o digitaliza tu logística de envíos con **Delivery Connect**.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#pricing"
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#00d2d3] to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-outfit font-black text-xs uppercase tracking-widest text-center transition-all duration-300 shadow-lg shadow-[#00d2d3]/10 hover:shadow-cyan-400/20 active:scale-95 cursor-pointer"
              >
                Ver Planes & Suscripciones
              </a>
              <a
                href="#contact"
                className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/5 font-outfit font-black text-xs uppercase tracking-widest text-center transition-all duration-300 cursor-pointer"
              >
                Agendar Videollamada Demo
              </a>
            </div>
          </div>

          {/* Interactive Mockups Showcase */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="w-full relative z-10 glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl animate-fade-in [animation-delay:200ms] glow-border corner-accent">
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">ECOSISTEMA MULTI-TENANT</span>
              </div>

              {/* Showcase Cards list */}
              <div className="space-y-4">
                {/* FourGym Card Item */}
                <div className="p-4 rounded-2xl bg-[#0c0926]/80 border border-[#00d2d3]/15 flex items-center justify-between hover:border-[#00d2d3]/30 transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00d2d3]/10 flex items-center justify-center text-[#00d2d3] font-bold font-outfit text-sm">
                      🏋️‍♂️
                    </div>
                    <div>
                      <h4 className="font-outfit font-black text-xs text-white uppercase tracking-wider">FourGym</h4>
                      <p className="text-[10px] text-slate-400">Software para Gimnasios & Studios</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-[#00d2d3] bg-[#00d2d3]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">Activo</span>
                </div>

                {/* Delivery Connect Card Item */}
                <div className="p-4 rounded-2xl bg-[#0c0926]/80 border border-[#6c5ce7]/15 flex items-center justify-between hover:border-[#6c5ce7]/30 transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#6c5ce7]/10 flex items-center justify-center text-[#6c5ce7] font-bold font-outfit text-sm">
                      📦
                    </div>
                    <div>
                      <h4 className="font-outfit font-black text-xs text-white uppercase tracking-wider">Delivery Connect</h4>
                      <p className="text-[10px] text-slate-400">Software de Logística & Reparto</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-[#a29bfe] bg-[#6c5ce7]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">Próximamente</span>
                </div>

                {/* Super Admin Command Card Item */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 font-bold font-outfit text-sm">
                      ⚙️
                    </div>
                    <div>
                      <h4 className="font-outfit font-black text-xs text-slate-300 uppercase tracking-wider">Super Admin Backoffice</h4>
                      <p className="text-[10px] text-slate-500">Módulo Central de Suscripciones</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-500 bg-white/5 px-2 py-0.5 rounded-full uppercase tracking-wider">Privado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FourGym Product Showcase Section */}
      <section id="fourgym" className="py-20 border-t border-white/5 relative bg-[#070514]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Mockup Preview container */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-[#00d2d3]/5 blur-3xl pointer-events-none rounded-full"></div>

              {/* Graphic Seat map mock */}
              <div className="w-full max-w-lg mx-auto glass-panel rounded-3xl p-6 border border-white/10 relative z-10 shadow-2xl glow-border corner-accent">
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">PREVISUALIZACIÓN DE SALA EN VIVO</span>
                  <span className="text-[9px] font-bold text-[#00d2d3] uppercase tracking-wider bg-[#00d2d3]/10 px-2 py-0.5 rounded">FourGym Room</span>
                </div>

                <p className="text-[10px] text-slate-400 mb-6">Mapa dinámico de ubicaciones para Spinning/Cardio.</p>

                {/* Grid representation */}
                <div className="grid grid-cols-6 gap-2.5 max-w-md mx-auto mb-6">
                  {Array.from({ length: 24 }).map((_, idx) => {
                    const isOccupied = idx % 3 === 0;
                    const isSelected = idx === 11;
                    return (
                      <div
                        key={idx}
                        className={`aspect-square rounded-xl border flex items-center justify-center text-[10px] font-bold transition-all ${isOccupied
                            ? "bg-rose-950/40 border-rose-500/20 text-rose-500 cursor-not-allowed"
                            : isSelected
                              ? "bg-[#00d2d3] border-[#00d2d3] text-slate-950 shadow-md shadow-[#00d2d3]/20"
                              : "bg-slate-950/50 border-white/5 text-slate-400 hover:border-slate-500 cursor-pointer"
                          }`}
                      >
                        {idx + 1}
                      </div>
                    );
                  })}
                </div>

                {/* Status legends */}
                <div className="flex items-center justify-center space-x-6 text-[10px] font-bold text-slate-400 pt-3 border-t border-white/5">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-slate-950 border border-white/5"></span>
                    <span>Libre</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-[#00d2d3]"></span>
                    <span>Tu Reserva</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-rose-950/40 border border-rose-500/20"></span>
                    <span>Ocupado</span>
                  </div>
                </div>

                {/* Live Activity Feed simulation */}
                <LiveActivityFeed />
              </div>
            </div>

            {/* Features description */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#00d2d3]/10 border border-[#00d2d3]/20 text-[#00d2d3] font-bold text-[9px] uppercase tracking-widest leading-none">
                🏋️‍♂️ GESTIÓN DEPORTIVA DE ALTO NIVEL
              </span>
              <h2 className="font-outfit font-black text-3xl md:text-5xl text-white tracking-tight mb-4 leading-tight">
                FourGym: Tu Gimnasio bajo Control 360°
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Mucho más que reservas de aforo. FourGym te ofrece una suite administrativa integral para controlar tu negocio fitness desde la palma de tu mano.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#00d2d3]/10 flex items-center justify-center text-[#00d2d3] font-bold text-sm mr-3.5 flex-shrink-0 mt-0.5">
                    💳
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-slate-200 text-sm">Membresías & Asistencia</h4>
                    <p className="text-slate-400 text-xs mt-1">Control automatizado de vencimientos, venta de planes recurrentes e historial de accesos de socios.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#00d2d3]/10 flex items-center justify-center text-[#00d2d3] font-bold text-sm mr-3.5 flex-shrink-0 mt-0.5">
                    🥤
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-slate-200 text-sm">POS de BarFit (Tienda)</h4>
                    <p className="text-slate-400 text-xs mt-1">Caja chica y facturación rápida de suplementos, bebidas saludables y snacks con control estricto de inventario.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#00d2d3]/10 flex items-center justify-center text-[#00d2d3] font-bold text-sm mr-3.5 flex-shrink-0 mt-0.5">
                    🥗
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-slate-200 text-sm">Rutinas & Planes de Alimentación</h4>
                    <p className="text-slate-400 text-xs mt-1">Diseña y asigna programas de entrenamiento interactivos y dietas personalizadas para cada miembro.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#00d2d3]/10 flex items-center justify-center text-[#00d2d3] font-bold text-sm mr-3.5 flex-shrink-0 mt-0.5">
                    📍
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-slate-200 text-sm">Reservas en Tiempo Real</h4>
                    <p className="text-slate-400 text-xs mt-1">Mapa interactivo con SignalR para separar bicicletas de spinning o ubicaciones en clases grupales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Connect Product Showcase Section */}
      <section id="delivery" className="py-20 border-t border-white/5 relative bg-[#0c0926]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Features description */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#6c5ce7]/10 border border-[#6c5ce7]/20 text-[#a29bfe] font-bold text-[9px] uppercase tracking-widest leading-none">
                📦 LOGÍSTICA & DESPACHO LOCAL
              </span>
              <h2 className="font-outfit font-black text-3xl md:text-5xl text-white tracking-tight mb-4 leading-tight">
                Delivery Connect: Centraliza tu Flota de Envíos
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Una potente solución para agencias de delivery que brindan servicios de reparto a comercios locales (restaurantes, farmacias, tiendas de ecommerce). Optimiza el flujo y minimiza los tiempos de entrega.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#6c5ce7]/10 flex items-center justify-center text-[#a29bfe] font-bold text-sm mr-3.5 flex-shrink-0 mt-0.5">
                    🏪
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-slate-200 text-sm">Portal para Comercios</h4>
                    <p className="text-slate-400 text-xs mt-1">Los negocios aliados acceden a su panel privado para despachar pedidos y solicitar repartidores automáticamente.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#6c5ce7]/10 flex items-center justify-center text-[#a29bfe] font-bold text-sm mr-3.5 flex-shrink-0 mt-0.5">
                    🛵
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-slate-200 text-sm">App Móvil del Repartidor</h4>
                    <p className="text-slate-400 text-xs mt-1">Tu equipo de reparto recibe alertas de pedidos asignados, coordenadas del comercio y mapas de ruta en tiempo real.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#6c5ce7]/10 flex items-center justify-center text-[#a29bfe] font-bold text-sm mr-3.5 flex-shrink-0 mt-0.5">
                    📈
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-slate-200 text-sm">Monitoreo & KPIs de Entrega</h4>
                    <p className="text-slate-400 text-xs mt-1">Controla tiempos de despacho, efectividad de la flota y comisiones por envío en un panel administrativo unificado.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup Preview container */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-[#6c5ce7]/5 blur-3xl pointer-events-none rounded-full"></div>

              {/* Graphic Delivery dispatcher mock */}
              <div className="w-full max-w-lg mx-auto glass-panel rounded-3xl p-6 border border-white/10 relative z-10 shadow-2xl glow-border corner-accent">
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">PANEL DE DESPACHO EN TIEMPO REAL</span>
                  <span className="text-[9px] font-bold text-[#a29bfe] uppercase tracking-wider bg-[#6c5ce7]/10 px-2 py-0.5 rounded">Delivery Connect</span>
                </div>

                <div className="space-y-3.5">
                  {/* Delivery order mock item 1 */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-outfit font-bold text-xs text-white">Pedido #2041</span>
                        <span className="text-[8px] font-black uppercase bg-[#00d2d3]/10 text-[#00d2d3] px-2 py-0.5 rounded">En Ruta</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Comercio: Pizza Napoletana $\rightarrow$ Repartidor: Luis E.</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">12 mins</span>
                  </div>

                  {/* Delivery order mock item 2 */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-outfit font-bold text-xs text-white">Pedido #2040</span>
                        <span className="text-[8px] font-black uppercase bg-[#6c5ce7]/20 text-[#a29bfe] px-2 py-0.5 rounded">Preparando</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Comercio: Burger Lab $\rightarrow$ Repartidor: Pendiente</p>
                    </div>
                    <button className="px-3 py-1 rounded bg-[#6c5ce7] hover:bg-[#a29bfe] text-white font-bold text-[9px] uppercase tracking-widest transition-colors cursor-pointer">
                      Asignar
                    </button>
                  </div>

                  {/* Delivery order mock item 3 */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between opacity-60">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-outfit font-bold text-xs text-white">Pedido #2039</span>
                        <span className="text-[8px] font-black uppercase bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded">Entregado</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Comercio: Farmacia A $\rightarrow$ Repartidor: Carlos M.</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400">Completado</span>
                  </div>
                </div>

                {/* Delivery live path tracer simulation */}
                <DeliveryTracer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section Component */}
      <Pricing />

      {/* Contact Section & Form */}
      <section id="contact" className="py-20 relative max-w-7xl mx-auto px-6">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full glow-cyan blur-[120px] pointer-events-none opacity-20"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Key Value Propositions */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-[#00d2d3] font-bold text-[9px] uppercase tracking-widest leading-none">
                ✉️ ¿LISTO PARA INICIAR?
              </span>
              <h2 className="font-outfit font-black text-3xl md:text-5xl text-white tracking-tight leading-tight">
                Impulsa la productividad de tu negocio hoy
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Completa el formulario y uno de nuestros expertos técnicos se pondrá en contacto contigo para asesorarte en el despliegue del sistema y configurar tu base de datos central.
              </p>
            </div>

            <div className="space-y-6">
              {/* Prop 1 */}
              <div className="flex items-start">
                <span className="text-2xl mr-4 mt-0.5">🔒</span>
                <div>
                  <h4 className="font-outfit font-bold text-sm text-slate-200 uppercase tracking-wide">Infraestructura Segura en AWS</h4>
                  <p className="text-slate-400 text-xs mt-1">Hospedamos tu sistema en contenedores de AWS con bases de datos aisladas e integradas para garantizar el máximo rendimiento.</p>
                </div>
              </div>
              {/* Prop 2 */}
              <div className="flex items-start">
                <span className="text-2xl mr-4 mt-0.5">⚡</span>
                <div>
                  <h4 className="font-outfit font-bold text-sm text-slate-200 uppercase tracking-wide">99.9% Uptime y SLA</h4>
                  <p className="text-slate-400 text-xs mt-1">Garantizamos la disponibilidad de tu software las 24 horas del día, los 365 días del año.</p>
                </div>
              </div>
              {/* Prop 3 */}
              <div className="flex items-start">
                <span className="text-2xl mr-4 mt-0.5">🚀</span>
                <div>
                  <h4 className="font-outfit font-bold text-sm text-slate-200 uppercase tracking-wide">Soporte Dedicado</h4>
                  <p className="text-slate-400 text-xs mt-1">Recibe asistencia especializada de forma directa por chat prioritario de WhatsApp para resolver cualquier consulta en minutos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Capture Form component */}
          <div className="lg:col-span-6 w-full max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Almain Logo"
              width={28}
              height={28}
              className="rounded-lg object-contain"
            />
            <span className="font-outfit font-black tracking-widest text-sm text-white">
              ALMAIN <span className="text-[#00d2d3]">TIC</span>
            </span>
          </div>

          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Almain. Todos los derechos reservados.
          </p>

          <div className="flex items-center space-x-6 text-xs text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">Inicio</a>
            <a href="#fourgym" className="hover:text-[#00d2d3] transition-colors">FourGym</a>
            <a href="#delivery" className="hover:text-[#a29bfe] transition-colors">Delivery Connect</a>
            <a href="#pricing" className="hover:text-white transition-colors">Precios</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
