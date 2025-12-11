"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Familia =
  | "Todas"
  | "Confección"
  | "Tapicería"
  | "Otros"
  | "Máquinas y complementos";

type ProductoFornitura = {
  id: string;
  familia: Familia;
  nombre: string;
  tipo: string;
  ref: string;
  medidas: string;
  material: string;
  imageSrc: string;         
  imageDetailSrc?: string;   
  descripcionLarga?: string;
};

const productos: ProductoFornitura[] = [
  // ---------- CONFECCIÓN ----------
  {
    id: "conf-bombe",
    familia: "Confección",
    nombre: "Botón bombé",
    tipo: "Botón",
    ref: "BOMBÉ",
    medidas: "Ø 18–30 mm",
    material: "Plástico / metal, varios acabados",
    imageSrc: "/IMG_Fornituras/boton-bombe.png",
    imageDetailSrc: "/IMG_Fornituras/bombeEXP.png", 
    descripcionLarga:
      "Botón clásico con volumen, disponible en distintos diámetros y alturas. Ideal para tapicería, cabeceros y confección donde se busca un acabado más vistoso.",
  },
  {
    id: "conf-media-bola",
    familia: "Confección",
    nombre: "Botón media bola",
    tipo: "Botón",
    ref: "MEDIA BOLA",
    medidas: "Ø 14–25 mm",
    material: "Plástico / metal",
    imageSrc: "/IMG_Fornituras/boton-media-bola.jpg",
  },
  {
    id: "conf-plano",
    familia: "Confección",
    nombre: "Botón plano",
    tipo: "Botón",
    ref: "PLANO",
    medidas: "Ø 12–25 mm",
    material: "Plástico / metal",
    imageSrc: "/IMG_Fornituras/boton-plano.jpg",
  },
  {
    id: "conf-bola",
    familia: "Confección",
    nombre: "Botón bola",
    tipo: "Botón",
    ref: "BOLA",
    medidas: "Ø 10–20 mm",
    material: "Plástico",
    imageSrc: "/IMG_Fornituras/boton-bola.jpg",
  },
  {
    id: "conf-conica",
    familia: "Confección",
    nombre: "Botón cónico",
    tipo: "Botón",
    ref: "CÓNICO",
    medidas: "Distintas alturas y diámetros",
    material: "Plástico",
    imageSrc: "/IMG_Fornituras/boton-conico.jpg",
  },
  {
    id: "conf-eyelet",
    familia: "Confección",
    nombre: "Ojal / Eyelet",
    tipo: "Ojal metálico",
    ref: "EYELET",
    medidas: "Varios diámetros interiores",
    material: "Latón / acero",
    imageSrc: "/IMG_Fornituras/eyelet.jpg",
  },
  {
    id: "conf-camisero",
    familia: "Confección",
    nombre: "Botón camisero",
    tipo: "Botón",
    ref: "CAMISERO",
    medidas: "Ø 11–14 mm",
    material: "Plástico",
    imageSrc: "/IMG_Fornituras/boton-camisero.jpg",
  },
  {
    id: "conf-anilla-cuadrada",
    familia: "Confección",
    nombre: "Anilla cuadrada",
    tipo: "Anilla",
    ref: "ANILLA CUADRADA",
    medidas: "Distintas medidas interiores",
    material: "Acero / latón",
    imageSrc: "/IMG_Fornituras/anilla-cuadrada.jpg",
  },
  {
    id: "conf-snap",
    familia: "Confección",
    nombre: "Snap",
    tipo: "Cierre a presión",
    ref: "SNAP",
    medidas: "Varios diámetros",
    material: "Metal / plástico",
    imageSrc: "/IMG_Fornituras/snap.jpg",
  },
  {
    id: "conf-combi",
    familia: "Confección",
    nombre: "Combi",
    tipo: "Sistema de cierre",
    ref: "COMBI",
    medidas: "Según aplicación",
    material: "Metal",
    imageSrc: "/IMG_Fornituras/combi.jpg",
  },
  {
    id: "conf-aro",
    familia: "Confección",
    nombre: "Aro",
    tipo: "Anilla circular",
    ref: "ARO",
    medidas: "Distintos diámetros",
    material: "Metal",
    imageSrc: "/IMG_Fornituras/aro.jpg",
  },

  // ---------- TAPICERÍA ----------
  {
    id: "tap-anilla",
    familia: "Tapicería",
    nombre: "Anilla tapicería",
    tipo: "Anilla",
    ref: "ANILLA TAPICERÍA",
    medidas: "Varios diámetros",
    material: "Metal",
    imageSrc: "/IMG_Fornituras/anilla-tapiceria.jpg",
  },
  {
    id: "tap-clavo",
    familia: "Tapicería",
    nombre: "Clavo tapicero",
    tipo: "Clavo decorativo",
    ref: "CLAVO",
    medidas: "Ø cabeza y largo según modelo",
    material: "Acero / latón, varios acabados",
    imageSrc: "/IMG_Fornituras/clavo-tapicero.jpg",
  },

  // ---------- OTROS ----------
  {
    id: "otros-fantasia",
    familia: "Otros",
    nombre: "Botones fantasía",
    tipo: "Botón",
    ref: "FANTASÍA",
    medidas: "Bajo pedido",
    material: "Plástico / metal",
    imageSrc: "/IMG_Fornituras/fantasia.jpg",
  },
  {
    id: "otros-nylon",
    familia: "Otros",
    nombre: "Piezas en nylon",
    tipo: "Componente plástico",
    ref: "NYLON",
    medidas: "Según diseño",
    material: "Nylon",
    imageSrc: "/IMG_Fornituras/nylon.jpg",
  },
  {
    id: "otros-enganche-rapido",
    familia: "Otros",
    nombre: "Enganche rápido",
    tipo: "Accesorio de fijación",
    ref: "ENGANCHE RÁPIDO",
    medidas: "Según aplicación",
    material: "Metal / plástico",
    imageSrc: "/IMG_Fornituras/enganche-rapido.jpg",
  },
  {
    id: "otros-diamond",
    familia: "Otros",
    nombre: "Diamond",
    tipo: "Botón decorativo",
    ref: "DIAMOND",
    medidas: "Varios diámetros",
    material: "Plástico",
    imageSrc: "/IMG_Fornituras/diamond.jpg",
  },

  // ---------- MÁQUINAS Y COMPLEMENTOS ----------
  {
    id: "maq-f150",
    familia: "Máquinas y complementos",
    nombre: "Máquina F-150",
    tipo: "Máquina de forrar",
    ref: "F-150",
    medidas: "Para distintos diámetros de botón",
    material: "Construcción metálica",
    imageSrc: "/IMG_Fornituras/maquina-f150.jpg",
    descripcionLarga:
      "Máquina de sobremesa para el forrado de botones en series cortas y medias. Robusta, sencilla de ajustar y compatible con nuestros moldes estándar.",
  },
  {
    id: "maq-f150e",
    familia: "Máquinas y complementos",
    nombre: "Máquina F-150-E",
    tipo: "Máquina de forrar eléctrica",
    ref: "F-150-E",
    medidas: "Para producción continuada",
    material: "Construcción metálica",
    imageSrc: "/IMG_Fornituras/maquina-f150e.jpg",
  },
  {
    id: "maq-f300",
    familia: "Máquinas y complementos",
    nombre: "Máquina F-300",
    tipo: "Máquina de forrar",
    ref: "F-300",
    medidas: "Mayor capacidad de producción",
    material: "Construcción metálica",
    imageSrc: "/IMG_Fornituras/maquina-f300.jpg",
  },
  {
    id: "maq-r30",
    familia: "Máquinas y complementos",
    nombre: "Máquina R-30",
    tipo: "Remachadora",
    ref: "R-30",
    medidas: "Para distintos sistemas de cierre",
    material: "Construcción metálica",
    imageSrc: "/IMG_Fornituras/maquina-r30.jpg",
  },
  {
    id: "maq-c90",
    familia: "Máquinas y complementos",
    nombre: "Máquina C-90",
    tipo: "Cizalla / troqueladora",
    ref: "C-90",
    medidas: "Según utillaje",
    material: "Construcción metálica",
    imageSrc: "/IMG_Fornituras/maquina-c90.jpg",
  },
  {
    id: "maq-moldes",
    familia: "Máquinas y complementos",
    nombre: "Moldes para forrar y troquelar",
    tipo: "Moldes y utillajes",
    ref: "MOLDES",
    medidas: "Adaptados a cada máquina y modelo",
    material: "Acero tratado",
    imageSrc: "/IMG_Fornituras/moldes-forrar-troquelar.jpg",
    descripcionLarga:
      "Diseñamos y fabricamos moldes para el forrado de botones y troquelado de tejidos, compatibles con nuestras máquinas y adaptados a las necesidades de cada cliente.",
  },
];

const familias: Familia[] = [
  "Todas",
  "Confección",
  "Tapicería",
  "Otros",
  "Máquinas y complementos",
];

export default function ForniturasPage() {
  const [familiaActiva, setFamiliaActiva] = useState<Familia>("Todas");
  const [detalle, setDetalle] = useState<ProductoFornitura | null>(null);

  const filtrados =
    familiaActiva === "Todas"
      ? productos
      : productos.filter((p) => p.familia === familiaActiva);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO CON IMAGEN */}
<section className="relative border-b border-slate-800 h-[28vh] md:h-[35vh]
 overflow-hidden">
  
  {/* Imagen de fondo */}
  <div className="absolute inset-0">
    <Image
      src="/IMG_Fornituras/ForniturasPortada.png"
      alt="Fornituras Cuher"
      fill
      priority
      className="object-cover object-center"
    />
    {/* Oscurecido suave para que el texto se lea */}
    <div className="absolute inset-0 bg-slate-950/60" />
  </div>

  {/* Contenido */}
  <div className="relative z-10 flex flex-col justify-center h-full mx-auto max-w-4xl px-4">
    <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
      Fornituras Cuher
    </p>
    <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
      Catálogo de fornituras para confección y tapicería
    </h1>
    <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-200">
      Botones, anillas, clavos y sistemas de fijación, junto con máquinas
      y moldes propios. Todo lo que necesita un taller o fabricante.
    </p>
  </div>

</section>


      {/* FILTROS POR FAMILIA */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-4 md:py-5">
          <div className="flex flex-wrap gap-2">
            {familias.map((familia) => {
              const activa = familiaActiva === familia;
              return (
                <button
                  key={familia}
                  type="button"
                  onClick={() => setFamiliaActiva(familia)}
                  className={`rounded-full border px-3 py-1.5 text-xs md:text-sm transition ${
                    activa
                      ? "border-[#4fa3ff] bg-[#4fa3ff]/10 text-[#4fa3ff]"
                      : "border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500"
                  }`}
                >
                  {familia}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GRID PRODUCTOS */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-4 md:pb-14">
          <div className="grid gap-5 md:grid-cols-2">
            {filtrados.map((producto) => (
              <button
                key={producto.id}
                type="button"
                onClick={() => setDetalle(producto)}
                className="group flex w-full gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-left hover:border-[#4fa3ff]/60 hover:bg-slate-900"
              >
                {/* Imagen pequeña */}
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-slate-800">
                  <Image
                    src={producto.imageSrc}
                    alt={producto.nombre}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Texto resumen */}
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {producto.familia}
                  </p>
                  <h2 className="mt-1 text-sm font-semibold text-slate-50 md:text-base">
                    {producto.nombre}
                  </h2>
                  <p className="mt-1 text-xs text-slate-300 md:text-sm">
                    <span className="font-semibold text-slate-200">
                      {producto.tipo}
                    </span>{" "}
                    · {producto.ref} · {producto.medidas}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400 md:text-xs">
                    Material: {producto.material}
                  </p>
                  <div className="mt-2 ml-auto">

                    {/* Icono OJO */}
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="#4fa3ff"
                        className="h-4 w-4 opacity-80 transition-transform transition-opacity duration-200 
                        group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:scale-110"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                        <circle cx="12" cy="12" r="3" />
                        </svg>
                    </div>

                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DETALLE PRODUCTO */}
      <AnimatePresence>
        {detalle && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-950 p-5 md:p-6 shadow-2xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
            >
              {/* Botón cerrar */}
              <button
                type="button"
                onClick={() => setDetalle(null)}
                className="absolute right-4 top-4 text-sm text-slate-400 hover:text-slate-100"
              >
                ✕
              </button>

              <div className="flex flex-col gap-4 md:flex-row">
                {/* Imagen grande (usa detalle si existe, si no la normal) */}
                <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-slate-900 md:h-48 md:w-1/2">
                  <Image
                    src={detalle.imageDetailSrc || detalle.imageSrc}
                    alt={detalle.nombre}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Texto detalle */}
                <div className="md:w-1/2 flex flex-col">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {detalle.familia}
                  </p>
                  <h2 className="mt-1 text-base font-semibold text-slate-50 md:text-lg">
                    {detalle.nombre}
                  </h2>
                  <p className="mt-1 text-xs text-slate-300 md:text-sm">
                    <span className="font-semibold text-slate-200">
                      {detalle.tipo}
                    </span>{" "}
                    · {detalle.ref}
                    <br />
                    Medidas: {detalle.medidas}
                    <br />
                    Material: {detalle.material}
                  </p>

                  {detalle.descripcionLarga && (
                    <p className="mt-3 text-xs text-slate-300 md:text-sm leading-relaxed">
                      {detalle.descripcionLarga}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setDetalle(null)}
                  className="rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-200 hover:border-slate-500"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA FINAL */}
      <section className="border-t border-slate-800 bg-slate-950/95">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8 text-center">
            <h2 className="text-lg font-semibold md:text-xl">
              ¿No encuentras la fornitura que necesitas?
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Podemos adaptar medidas, materiales y utillajes a tu aplicación.
              Envíanos tu idea, plano o muestra y estudiaremos la mejor forma de
              fabricarla.
            </p>
            <a
              href="/home#contacto"
              className="mt-6 inline-flex rounded-full bg-[#4fa3ff] px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-[#4fa3ff]/30 hover:bg-[#76b8ff]"
            >
              Hablar sobre un proyecto de fornituras
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
