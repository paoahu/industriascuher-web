"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { ModalView, LlaveroCategoria, ProductoPublicidad } from "../types/publicidad";
import { productos } from "../data";

export default function ModalProducto({
    detalle,
    getMoq,
  }: {
    detalle: ProductoPublicidad;
    getMoq: (p: ProductoPublicidad) => number;
  }) {
    const moq = getMoq(detalle);
  
    return (
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Izquierda: imagen + pedido */}
        <div className="md:w-1/2 flex flex-col gap-3">
          <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-slate-900 md:h-48">
            <Image
              src={detalle.imageDetailSrc || detalle.imageSrc}
              alt={detalle.nombre}
              fill
              className="object-cover"
            />
          </div>
  
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
            whileHover={{ scale: 1.02, boxShadow: "0 0 26px rgba(79,163,255,0.35)" }}
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
  
        {/* Derecha: texto + MOQ */}
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
                <span className="font-semibold text-slate-200">Ref.:</span>{" "}
                {detalle.ref}
              </p>
            )}
            {detalle.medidas && (
              <p>
                <span className="font-semibold text-slate-200">Medidas:</span>{" "}
                {detalle.medidas}
              </p>
            )}
            {detalle.acabado && (
              <p>
                <span className="font-semibold text-slate-200">Acabado:</span>{" "}
                {detalle.acabado}
              </p>
            )}
          </div>
  
          {detalle.descripcionLarga && (
            <p className="mt-3 text-xs text-slate-300 md:text-sm leading-relaxed">
              {detalle.descripcionLarga}
            </p>
          )}
  
          <p className="mt-2 font-semibold text-[#4fa3ff]">
            MOQ {moq} {moq === 1 ? "unidad" : "unidades"}
          </p>
        </div>
      </div>
    );
  }