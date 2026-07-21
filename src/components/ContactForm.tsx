"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    product: "fourgym",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: null, text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.isSuccess) {
        // Format WhatsApp message to Peru (+51) owner number (907269610)
        const productLabel = formData.product === "fourgym" 
          ? "FourGym (Gestión de Gimnasios)" 
          : "Delivery Connect (Envíos & Logística)";
        
        const messageText = 
          `¡Hola Almain TIC! Me gustaría agendar una demo gratis.\n\n` +
          `- *Nombre:* ${formData.name}\n` +
          `- *Correo:* ${formData.email}\n` +
          `- *WhatsApp:* ${formData.phone}\n` +
          `- *Empresa:* ${formData.businessName || "No especificada"}\n` +
          `- *Interés:* ${productLabel}\n` +
          `- *Detalles:* ${formData.message}`;

        const encodedText = encodeURIComponent(messageText);
        const whatsappUrl = `https://wa.me/51907269610?text=${encodedText}`;

        setStatusMessage({ 
          type: "success", 
          text: "¡Formulario registrado! Redirigiéndote a WhatsApp para atención directa..." 
        });

        // Open WhatsApp in a new window/tab
        if (typeof window !== "undefined") {
          window.open(whatsappUrl, "_blank");
        }

        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          product: "fourgym",
          message: "",
        });
      } else {
        setStatusMessage({
          type: "error",
          text: result.message || "Error al enviar el formulario.",
        });
      }
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Error de red. Por favor, comprueba tu conexión y vuelve a intentarlo.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
      {/* Decorative inner glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#00d2d3]/5 blur-3xl pointer-events-none"></div>

      <h3 className="font-outfit font-black text-2xl text-white mb-2">
        Agenda una Demostración Gratis
      </h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        Cuéntanos de tu negocio y uno de nuestros asesores técnicos te contactará para mostrarte el software en acción.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              Tu Nombre *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez"
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00d2d3] focus:ring-1 focus:ring-[#00d2d3] transition-all"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              Correo Electrónico *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Ej: juan@miempresa.com"
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00d2d3] focus:ring-1 focus:ring-[#00d2d3] transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              Teléfono / WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ej: +51 987 654 321"
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00d2d3] focus:ring-1 focus:ring-[#00d2d3] transition-all"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              Nombre de tu Empresa
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Ej: Gold Gym Miraflores"
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00d2d3] focus:ring-1 focus:ring-[#00d2d3] transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
            Software de Interés *
          </label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full bg-[#070514] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00d2d3] focus:ring-1 focus:ring-[#00d2d3] transition-all cursor-pointer"
          >
            <option value="fourgym">FourGym - Gestión de Gimnasios</option>
            <option value="delivery">Delivery Connect - Logística & Envíos</option>
            <option value="both">Ambos Sistemas SaaS</option>
            <option value="custom">Proyecto de Software a Medida</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
            ¿Cómo podemos ayudarte? *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Hola, me gustaría tener más información sobre las tarifas mensuales de suscripción y ver cómo opera el sistema de reservas en tiempo real..."
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00d2d3] focus:ring-1 focus:ring-[#00d2d3] transition-all resize-none"
          ></textarea>
        </div>

        {/* Status notification */}
        {statusMessage.type && (
          <div
            className={`p-4 rounded-xl text-xs font-semibold flex items-start space-x-2.5 ${
              statusMessage.type === "success"
                ? "bg-emerald-950/40 border border-emerald-500/20 text-emerald-400"
                : "bg-rose-950/40 border border-rose-500/20 text-rose-400"
            }`}
          >
            {statusMessage.type === "success" ? (
              <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )}
            <span>{statusMessage.text}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00d2d3] to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-outfit font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#00d2d3]/10 hover:shadow-cyan-400/20 active:scale-95 disabled:opacity-50 cursor-pointer disabled:pointer-events-none flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <span>Solicitar Demo Gratis</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
