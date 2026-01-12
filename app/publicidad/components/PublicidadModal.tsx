"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ModalView, ProductoPublicidad } from "../types/publicidad";
import ModalProducto from "./ModalProducto";
import ModalLlaveros from "./ModalLlaveros";

export default function PublicidadModal({
  modal,
  setModal,
  getMoq,
}: {
  modal: ModalView | null;
  setModal: React.Dispatch<React.SetStateAction<ModalView | null>>;
  getMoq: (p: ProductoPublicidad) => number;
}) {
  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModal(null)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-950 p-5 md:p-6 shadow-2xl"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModal(null)}
              className="absolute right-4 top-4 text-sm text-slate-400 hover:text-slate-100"
              aria-label="Cerrar"
            >
              ✕
            </button>

            {modal.type === "producto" ? (
              <ModalProducto detalle={modal.producto} getMoq={getMoq} />
            ) : (
              <ModalLlaveros modal={modal} setModal={setModal} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
