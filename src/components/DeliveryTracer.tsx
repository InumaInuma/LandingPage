"use client";

import { useState, useEffect } from "react";

export const DeliveryTracer = () => {
  const [progress, setProgress] = useState(15);
  const [status, setStatus] = useState("Asignado a Repartidor");
  const [courier, setCourier] = useState("Luis E.");
  const [orderId, setOrderId] = useState(2042);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Reset flow with new mock order
          setOrderId((id) => id + 1);
          const couriers = ["Carlos M.", "Ana R.", "Fernando V.", "Julio C."];
          setCourier(couriers[Math.floor(Math.random() * couriers.length)]);
          setStatus("Pedido Asignado");
          return 0;
        }

        const next = prev + 5;
        if (next < 35) {
          setStatus("Preparando en Comercio...");
        } else if (next < 85) {
          setStatus("Repartidor en Ruta de Entrega 🛵");
        } else if (next < 100) {
          setStatus("Llegando al Destino...");
        } else {
          setStatus("¡Pedido Entregado con éxito! 🎉");
        }
        return next;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 p-4 rounded-2xl bg-slate-950/40 border border-white/5 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6c5ce7] animate-pulse mr-2"></span>
          Monitoreo de Ruta de Despacho
        </span>
        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Delivery Connect</span>
      </div>

      <div className="bg-slate-950/50 p-3 rounded-xl border border-white/5 space-y-3.5">
        <div className="flex items-center justify-between text-[10px]">
          <div>
            <span className="font-outfit font-black text-white">Orden #{orderId}</span>
            <span className="text-slate-500 mx-2">|</span>
            <span className="text-slate-400">Repartidor: <strong className="text-slate-200">{courier}</strong></span>
          </div>
          <span className="text-[9px] font-bold text-[#a29bfe] bg-[#6c5ce7]/10 px-2 py-0.5 rounded uppercase tracking-wider">
            {status}
          </span>
        </div>

        {/* Progress tracker bar */}
        <div className="relative pt-2">
          <div className="overflow-hidden h-1.5 text-xs flex rounded bg-white/5 relative">
            {/* Target dots */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-[#6c5ce7] border border-white/20"></div>
            <div className="absolute top-1/2 left-[50%] -translate-y-1/2 w-2 h-2 rounded-full bg-slate-800 border border-white/20"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-800 border border-white/20"></div>

            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] transition-all duration-500"
            ></div>
          </div>

          {/* Sliding courier indicator */}
          <div
            style={{ left: `calc(${progress}% - 8px)` }}
            className="absolute top-1 transition-all duration-500 text-xs pointer-events-none"
          >
            🛵
          </div>
        </div>

        <div className="flex justify-between text-[8px] text-slate-500 font-bold uppercase tracking-wider pt-1">
          <span>Tienda</span>
          <span>Despachando</span>
          <span>Cliente</span>
        </div>
      </div>
    </div>
  );
};
