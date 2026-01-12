"use client";
import Image from "next/image";
import Link from "next/link";
import type { ModalView, LlaveroCategoria, LlaveroCategoriaKey } from "../types/publicidad";
import { llaveros } from "../data";

export default function ModalLlaveros({
    modal,
    setModal,
  }: {
    modal: Extract<ModalView, { type: "llaveros" }>;
    setModal: React.Dispatch<React.SetStateAction<ModalView | null>>;
  }) {
    const catKey = modal.categoria ?? null;
    const categoriaActiva = catKey ? llaveros.find((c) => c.key === catKey) : null;
  
    if (!categoriaActiva) {
      return (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-slate-50">Llaveros</h2>
          <p className="text-sm text-slate-300">
            No se ha podido cargar la categoría. Cierra el modal y vuelve a intentarlo.
          </p>
        </div>
      );
    }
  
    return (
      <div className="relative flex flex-col gap-6">
        
    
        <div>
          <h2 className="text-xl font-semibold text-slate-50">
            {categoriaActiva.label}
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            Elige una subcategoría.
          </p>
        </div>
    
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categoriaActiva.subcats.map((sub) => (
            <Link
              key={sub.key}
              href={`/publicidad/llaveros?cat=${categoriaActiva.key}&sub=${sub.key}`}
              onClick={() => setModal(null)}
              className="block rounded-3xl border border-slate-800 bg-slate-900/60 p-4 hover:border-[#4fa3ff]/60 transition"
            >
              <p className="text-base font-semibold text-slate-50">
                {sub.label}
              </p>
    
              <div className="mt-3 relative h-32 w-full overflow-hidden rounded-2xl bg-slate-800">
                <Image
                  src={sub.previewImage}
                  alt={sub.label}
                  fill
                  className="object-cover"
                />
              </div>
    
              <p className="mt-3 text-sm text-[#4fa3ff]">Ver modelos →</p>
            </Link>
          ))}
        </div>
      </div>
    );
    
  }
  
  