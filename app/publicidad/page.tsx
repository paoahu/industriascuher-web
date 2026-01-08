"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type GrupoPublicidad =
  | "Chapas"
  | "Llaveros"
  | "Imanes"
  | "Máquinas y moldes"
  | "Otros";

type ProductoPublicidad = {
  id: string;
  grupo: GrupoPublicidad;
  subgrupo: string;
  nombre: string;
  ref?: string;
  medidas?: string;
  acabado?: string;
  descripcionCorta?: string;
  descripcionLarga?: string;
  imageSrc: string;
  imageDetailSrc?: string;
  moq?: number; // MOQ por producto
};

const productos: ProductoPublicidad[] = [
  // ---------- CHAPAS ----------
  {
    id: "chapas-aguja",
    grupo: "Chapas",
    subgrupo: "Aguja",
    nombre: "Chapa con aguja",
    ref: "CH-AG",
    medidas: "Ø 25, 32, 38, 44, 56, 75 mm",
    acabado: "Impresión a todo color, acabado brillo o mate",
    descripcionCorta:
      "Chapa clásica con cierre de aguja, ideal para promociones y eventos.",
    imageSrc: "/IMG_Publicidad/chapas-aguja.jpg",
    imageDetailSrc: "/IMG_Publicidad/chapas-aguja-detalle.jpg",
    descripcionLarga:
      "Chapa metálica con cierre de aguja trasera. Disponible en varios diámetros y acabados brillo o mate. Ideal para campañas promocionales, eventos, merchandising y asociaciones.",
    moq: 1000,
  },
  {
    id: "chapas-iman",
    grupo: "Chapas",
    subgrupo: "Imán",
    nombre: "Chapa imán",
    ref: "CH-IM",
    medidas: "Ø 25–75 mm",
    acabado: "Imán trasero, impresión a todo color",
    descripcionCorta: "Versión imantada para nevera o superficies metálicas.",
    imageSrc: "/IMG_Publicidad/chapas-iman.jpg",
    moq: 1000,
  },
  {
    id: "chapas-abridor",
    grupo: "Chapas",
    subgrupo: "Abridor",
    nombre: "Chapa abridor",
    ref: "CH-AB",
    medidas: "Ø 56 mm (otras medidas bajo consulta)",
    acabado: "Con abridor e imán trasero",
    descripcionCorta:
      "Chapa con función de abridor, muy usada en hostelería y campañas de bebida.",
    imageSrc: "/IMG_Publicidad/chapas-abridor.jpg",
    moq: 1000,
  },
  {
    id: "chapas-doble-iman",
    grupo: "Chapas",
    subgrupo: "Doble imán",
    nombre: "Chapa doble imán",
    ref: "CH-DIM",
    medidas: "Ø 25–56 mm",
    acabado: "Sistema de doble imán, no perfora la prenda",
    descripcionCorta:
      "Chapa con fijación magnética que evita perforar ropa o tejido.",
    imageSrc: "/IMG_Publicidad/chapas-doble-iman.jpg",
    moq: 1000,
  },

  // ---------- LLAVEROS ----------
  {
    id: "llaveros-acrilicos",
    grupo: "Llaveros",
    subgrupo: "Acrílicos",
    nombre: "Llavero acrílico",
    ref: "LL-AC",
    medidas: "Distintas formas y tamaños",
    acabado: "Acrílico transparente con inserción de papel impreso",
    descripcionCorta:
      "Llavero ligero y económico, personalizable por ambas caras.",
    imageSrc: "/IMG_Publicidad/llavero-acrilico.jpg",
    moq: 1000,
  },
  {
    id: "llaveros-simil-piel",
    grupo: "Llaveros",
    subgrupo: "Simil piel",
    nombre: "Llavero simil piel",
    ref: "LL-SP",
    medidas: "Formatos estándar y especiales",
    acabado: "Cuerpo en simil piel con pieza metálica personalizada",
    descripcionCorta: "Opción más elegante para regalos corporativos.",
    imageSrc: "/IMG_Publicidad/llavero-simil-piel.jpg",
    moq: 1000,
  },
  {
    id: "llaveros-metal",
    grupo: "Llaveros",
    subgrupo: "Metal",
    nombre: "Llavero metálico",
    ref: "LL-MT",
    medidas: "Varios modelos",
    acabado: "Metal pulido o satinado, grabado o impresión",
    descripcionCorta: "Llavero resistente con diferentes formas y acabados.",
    imageSrc: "/IMG_Publicidad/llavero-metal.jpg",
    moq: 1000,
  },
  {
    id: "llaveros-carro",
    grupo: "Llaveros",
    subgrupo: "Carro",
    nombre: "Llavero carro supermercado",
    ref: "LL-CAR",
    medidas: "Ficha formato moneda",
    acabado: "Metal o plástico, personalizable",
    descripcionCorta: "Ficha para carros de supermercado con llavero integrado.",
    imageSrc: "/IMG_Publicidad/llavero-carro.jpg",
    moq: 1000,
  },

  // ---------- IMANES ----------
  {
    id: "imanes-acrilicos",
    grupo: "Imanes",
    subgrupo: "Acrílicos",
    nombre: "Imán acrílico",
    ref: "IM-AC",
    medidas: "Varios formatos",
    acabado: "Cuerpo acrílico con imán trasero",
    descripcionCorta: "Imán promocional con protección acrílica frontal.",
    imageSrc: "/IMG_Publicidad/iman-acrilico.jpg",
    moq: 1000,
  },
  {
    id: "imanes-nevera",
    grupo: "Imanes",
    subgrupo: "Nevera",
    nombre: "Imán nevera flexible",
    ref: "IM-NV",
    medidas: "A medida, bajo plano o estándar",
    acabado: "Imán flexible impreso a color",
    descripcionCorta: "Imán plano para nevera, ideal para publicidad continua.",
    imageSrc: "/IMG_Publicidad/iman-nevera.jpg",
    moq: 1000,
  },

  // ---------- MÁQUINAS Y MOLDES ----------
  {
    id: "maq-f300",
    grupo: "Máquinas y moldes",
    subgrupo: "Máquina F300",
    nombre: "Máquina F-300",
    ref: "F-300",
    descripcionCorta:
      "Máquina semiautomática para montaje de chapas de gran volumen.",
    imageSrc: "/IMG_Publicidad/maquina-f300.jpg",
    moq: 1,
  },
  {
    id: "maq-f150",
    grupo: "Máquinas y moldes",
    subgrupo: "Máquina F150",
    nombre: "Máquina F-150",
    ref: "F-150",
    descripcionCorta:
      "Equipo compacto para chapas y pequeños trabajos de publicidad.",
    imageSrc: "/IMG_Publicidad/maquina-f150.jpg",
    moq: 1,
  },
  {
    id: "maq-c90",
    grupo: "Máquinas y moldes",
    subgrupo: "Máquina C90",
    nombre: "Máquina C-90",
    ref: "C-90",
    descripcionCorta:
      "Cizalla / troqueladora para corte de papeles e insertos.",
    imageSrc: "/IMG_Publicidad/maquina-c90.jpg",
    moq: 1,
  },
  {
    id: "maq-c25",
    grupo: "Máquinas y moldes",
    subgrupo: "Máquina C25",
    nombre: "Máquina C-25",
    ref: "C-25",
    descripcionCorta: "Equipo auxiliar para trabajos de menor formato.",
    imageSrc: "/IMG_Publicidad/maquina-c25.jpg",
    moq: 1,
  },
  {
    id: "moldes-f300-f150",
    grupo: "Máquinas y moldes",
    subgrupo: "Molde montaje F300/F150",
    nombre: "Moldes de montaje F-300 / F-150",
    ref: "MOLD-F",
    descripcionCorta:
      "Moldes para el montaje de distintos diámetros de chapa en nuestras máquinas.",
    imageSrc: "/IMG_Publicidad/moldes-f300-f150.jpg",
    moq: 1,
  },
  {
    id: "troqueles-corte",
    grupo: "Máquinas y moldes",
    subgrupo: "Troqueles de corte",
    nombre: "Troqueles de corte",
    ref: "TROC",
    descripcionCorta:
      "Troqueles para el corte de papeles y soportes según formato de chapa o llavero.",
    imageSrc: "/IMG_Publicidad/troqueles-corte.jpg",
    moq: 1,
  },

  // ---------- OTROS ----------
  {
    id: "otros-identificadores",
    grupo: "Otros",
    subgrupo: "Identificadores",
    nombre: "Identificadores personalizados",
    ref: "ID-PERS",
    medidas: "Rectangulares, ovalados y especiales",
    acabado: "Clip, imperdible o imán según uso",
    descripcionCorta: "Identificadores para ferias, congresos y retail.",
    imageSrc: "/IMG_Publicidad/identificadores.jpg",
    moq: 1000,
  },
  {
    id: "otros-pins",
    grupo: "Otros",
    subgrupo: "Pins",
    nombre: "Pins metálicos",
    ref: "PIN",
    medidas: "Según diseño",
    acabado: "Baños metálicos, resina, relieve, etc.",
    descripcionCorta: "Pins personalizados para imagen corporativa o colecciones.",
    imageSrc: "/IMG_Publicidad/pins.jpg",
    moq: 1000,
  },
];

const grupos: GrupoPublicidad[] = [
  "Chapas",
  "Llaveros",
  "Imanes",
  "Máquinas y moldes",
  "Otros",
];

export default function PublicidadPage() {
  const [grupoActivo, setGrupoActivo] = useState<GrupoPublicidad>("Chapas");
  const [detalle, setDetalle] = useState<ProductoPublicidad | null>(null);

  const filtrados = productos.filter((p) => p.grupo === grupoActivo);

  const getMoq = (p: ProductoPublicidad) =>
    p.moq ?? (p.grupo === "Máquinas y moldes" ? 1 : 1000);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO CON IMAGEN */}
      <section className="relative border-b border-slate-800 h-[28vh] md:h-[35vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/IMG_Publicidad/ChapasPortada.png"
            alt="Artículos de publicidad Cuher"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        <div className="relative z-10 flex flex-col justify-center h-full mx-auto max-w-4xl px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
            Publicidad Cuher
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Artículos de publicidad y promoción para tu marca
          </h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-200">
            Chapas, llaveros, imanes y otros soportes personalizados, junto con
            máquinas y moldes propios para producirlos en serie.
          </p>
        </div>
      </section>

      {/* FILTROS POR GRUPO */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-4 md:py-5">
          <div className="flex flex-wrap gap-2">
            {grupos.map((grupo) => {
              const activo = grupoActivo === grupo;
              return (
                <button
                  key={grupo}
                  type="button"
                  onClick={() => setGrupoActivo(grupo)}
                  className={`rounded-full border px-3 py-1.5 text-xs md:text-sm transition ${
                    activo
                      ? "border-[#4fa3ff] bg-[#4fa3ff]/10 text-[#4fa3ff]"
                      : "border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500"
                  }`}
                >
                  {grupo}
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
                className="group relative w-full overflow-hidden rounded-2xl
                           border border-slate-800 bg-slate-900/70 p-4 text-left
                           hover:border-[#4fa3ff]/60 transition-colors"
              >
                <div className="relative z-0 flex gap-4 transition group-hover:brightness-75">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-slate-800">
                    <Image
                      src={producto.imageSrc}
                      alt={producto.nombre}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      {producto.grupo} · {producto.subgrupo}
                    </p>
                    <h2 className="mt-1 text-sm font-semibold text-slate-50 md:text-base">
                      {producto.nombre}
                    </h2>

                    {producto.medidas && (
                      <p className="mt-1 text-xs text-slate-300 md:text-sm">
                        {producto.medidas}
                      </p>
                    )}

                    {producto.acabado && (
                      <p className="mt-1 text-[11px] text-slate-400 md:text-xs">
                        Acabado: {producto.acabado}
                      </p>
                    )}

                    {producto.descripcionCorta && (
                      <p className="mt-1 text-[11px] text-slate-400 md:text-xs line-clamp-2">
                        {producto.descripcionCorta}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center
                             bg-slate-950/0 opacity-0 backdrop-blur-none
                             transition-all duration-200
                             group-hover:bg-slate-950/35 group-hover:opacity-100 group-hover:backdrop-blur-[2px]"
                >
                  <span
                    className="pointer-events-auto rounded-full bg-[#4fa3ff]
                               px-4 py-1.5 text-xs font-semibold text-slate-950
                               shadow-lg shadow-[#4fa3ff]/40
                               transform translate-y-1 opacity-0
                               group-hover:translate-y-0 group-hover:opacity-100
                               transition-all duration-200"
                  >
                    Ver información
                  </span>
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
              {/* Cerrar */}
              <button
                type="button"
                onClick={() => setDetalle(null)}
                className="absolute right-4 top-4 text-sm text-slate-400 hover:text-slate-100"
              >
                ✕
              </button>

              {/* --- CONTENIDO MODAL (corregido) --- */}
              <div className="flex flex-col gap-4 md:flex-row">
                {/* Columna izquierda */}
                <div className="md:w-1/2 flex flex-col gap-3">
                  <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-slate-900 md:h-48">
                    <Image
                      src={detalle.imageDetailSrc || detalle.imageSrc}
                      alt={detalle.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Haz tu pedido debajo de la imagen (como fornituras) */}
                  <motion.div
                    className="
                      rounded-2xl
                      border border-[#4fa3ff]/50
                      bg-slate-900/80
                      px-4 py-4
                      text-[11px] md:text-xs
                      text-slate-200
                      shadow-[0_0_0_1px_rgba(79,163,255,0.15)]
                    "
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 26px rgba(79,163,255,0.35)",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-sm md:text-base font-semibold text-[#4fa3ff] mb-2">
                      Haz tu pedido
                    </p>

                    <div className="flex flex-col gap-2">
                      <p className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#4fa3ff"
                          strokeWidth="2"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2 4.5C2 3.67 2.67 3 3.5 3h2.03c.58 0 1.08.39 1.23.95l.72 2.77c.13.51-.02 1.06-.39 1.44L5.93 9.74c1.23 2.53 3.3 4.6 5.83 5.83l1.58-1.15c.38-.27.93-.42 1.44-.29l2.77.72c.56.15.95.65.95 1.23V20.5c0 .83-.67 1.5-1.5 1.5C8.49 22 2 15.51 2 7.5v-3Z"
                          />
                        </svg>
                        <span>93 685 94 94</span>
                      </p>

                      <p className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#4fa3ff"
                          strokeWidth="2"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l8.2 5.5c.5.3 1.1.3 1.6 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
                          />
                        </svg>
                        <a
                          href="mailto:cuher@industriascuher.com"
                          className="hover:text-[#4fa3ff] transition"
                        >
                          cuher@industriascuher.com
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Columna derecha */}
                <div className="md:w-1/2 flex flex-col">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {detalle.grupo} · {detalle.subgrupo}
                  </p>

                  <h2 className="mt-1 text-base font-semibold text-slate-50 md:text-lg">
                    {detalle.nombre}
                  </h2>

                  <div className="mt-1 text-xs text-slate-300 md:text-sm space-y-1">
                    {detalle.ref && (
                      <p>
                        <span className="font-semibold text-slate-200">
                          Ref.:
                        </span>{" "}
                        {detalle.ref}
                      </p>
                    )}
                    {detalle.medidas && (
                      <p>
                        <span className="font-semibold text-slate-200">
                          Medidas:
                        </span>{" "}
                        {detalle.medidas}
                      </p>
                    )}
                    {detalle.acabado && (
                      <p>
                        <span className="font-semibold text-slate-200">
                          Acabado:
                        </span>{" "}
                        {detalle.acabado}
                      </p>
                    )}
                  </div>

                  {detalle.descripcionLarga && (
                    <p className="mt-3 text-xs text-slate-300 md:text-sm leading-relaxed">
                      {detalle.descripcionLarga}
                    </p>
                  )}

                  {/* MOQ justo debajo de la descripción */}
                  <p className="mt-2 font-semibold text-[#4fa3ff]">
                    MOQ {getMoq(detalle)}{" "}
                    {getMoq(detalle) === 1 ? "unidad" : "unidades"}
                  </p>
                </div>
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
              ¿Quieres lanzar una campaña de chapas, llaveros o imanes?
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Podemos ayudarte con el diseño de las piezas, la elección del
              soporte y la producción en serie. Cuéntanos qué necesitas y te
              proponemos la mejor combinación de artículos promocionales.
            </p>
            <a
              href="/home#contacto"
              className="mt-6 inline-flex rounded-full bg-[#4fa3ff] px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-[#4fa3ff]/30 hover:bg-[#76b8ff]"
            >
              Hablar sobre un proyecto de publicidad
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
