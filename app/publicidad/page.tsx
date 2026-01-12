
"use client";

import { useState } from "react";
import Image from "next/image";

import { productos, grupos } from "./data";
import type { GrupoPublicidad, ModalView, LlaveroCategoriaKey } from "./types/publicidad";
import PublicidadModal from "./components/PublicidadModal";

export default function PublicidadPage() {
  const [grupoActivo, setGrupoActivo] = useState<GrupoPublicidad>("Chapas");
  const [modal, setModal] = useState<ModalView | null>(null);

  const filtrados = productos.filter((p) => p.grupo === grupoActivo);

  const getMoq = (p: any) => p.moq ?? (p.grupo === "Máquinas y moldes" ? 1 : 1000);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
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
          <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Publicidad Cuher</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Artículos de publicidad y promoción para tu marca
          </h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-200">
            Chapas, llaveros, imanes y otros soportes personalizados, junto con máquinas y moldes propios
            para producirlos en serie.
          </p>
        </div>
      </section>

      {/* FILTROS */}
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

      {/* GRID */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-4 md:pb-14">
          <div className="grid gap-5 md:grid-cols-2">
            {filtrados.map((producto) => (
              <button
                key={producto.id}
                type="button"
                onClick={() => {
                  if (producto.grupo === "Llaveros") {
                    const map: Record<string, LlaveroCategoriaKey> = {
                      "llaveros-acrilicos": "acrilicos",
                      "llaveros-metal": "metalicos",
                      "llaveros-carro": "carro",
                      "llaveros-simil-piel": "simil_piel",
                    };
                    setModal({ type: "llaveros", categoria: map[producto.id] });
                  } else {
                    setModal({ type: "producto", producto });
                  }
                }}
                className="group relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-left hover:border-[#4fa3ff]/60 transition-colors"
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
                    {producto.descripcionCorta && (
                      <p className="mt-1 text-[11px] text-slate-400 md:text-xs line-clamp-2">
                        {producto.descripcionCorta}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-slate-950/0 opacity-0 backdrop-blur-none transition-all duration-200 group-hover:bg-slate-950/35 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">
                  <span className="pointer-events-auto rounded-full bg-[#4fa3ff] px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-[#4fa3ff]/40 transform translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
                    Ver información
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <PublicidadModal modal={modal} setModal={setModal} getMoq={getMoq} />
    </main>
  );
}
