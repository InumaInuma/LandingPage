import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Almain | Soluciones SaaS Premium",
  description: "Potencia tu negocio con software inteligente. Automatiza tu gimnasio con FourGym o digitaliza tu empresa de envíos y logística con Delivery Connect bajo el respaldo de Almain.",
  keywords: ["almain", "saas", "gimnasio", "fourgym", "delivery", "logistica", "reserva de asientos", "software comercial", "automatizacion"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070514] text-slate-100 font-sans">{children}</body>
    </html>
  );
}
