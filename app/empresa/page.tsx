// app/empresa/page.tsx
"use client";

import { motion } from "framer-motion";

export default function EmpresaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO EMPRESA */}
      <section className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto max-w-5xl px-4 pt-28 pb-14 md:pt-32 md:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase"
          >
            Empresa
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-2xl font-semibold md:text-3xl"
          >
            Tres generaciones dando forma a las piezas que nuestros clientes
            necesitan.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 max-w-3xl text-sm text-slate-300 md:text-base leading-relaxed"
          >
            Desde los inicios con Antoni Cuenca en el sector de las fornituras,
            hasta la expansión hacia el descanso, tapicería y otros sectores,
            en Industrias Cuher hemos crecido escuchando a nuestros clientes y
            adaptando nuestros procesos a lo que cada proyecto necesita.
          </motion.p>
        </div>
      </section>

      {/* BLOQUE HISTORIA / QUIÉNES SOMOS */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold md:text-xl">
              De taller familiar a socio industrial.
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base leading-relaxed">
              Empezamos fabricando fornituras y pequeños accesorios metálicos.
              Con el tiempo, y siempre a partir de necesidades concretas de
              nuestros clientes, incorporamos la inyección de plástico, el
              diseño 3D y la fabricación de moldes y utillajes propios.
            </p>
            <p className="mt-3 text-sm text-slate-300 md:text-base leading-relaxed">
              Hoy combinamos experiencia, maquinaria especializada y un trato
              directo que nos permite responder tanto a series cortas como a
              producciones en volumen, manteniendo la proximidad de una empresa
              familiar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300 space-y-3"
          >
            <h3 className="text-sm font-semibold text-slate-50">
              Lo que nos define
            </h3>
            <p>
              • Empresa familiar de tercera generación, con más de 30 años de
              experiencia acumulada.
            </p>
            <p>
              • Capaces de acompañar todo el ciclo: desde la idea y el diseño
              hasta la fabricación en serie.
            </p>
            <p>
              • Fuerte orientación al servicio: flexibilidad en plazos, lotes y
              adaptación a cada cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold md:text-xl"
          >
            Nuestros valores.
          </motion.h2>

          <div className="mt-6 grid gap-4 text-xs md:grid-cols-3 md:text-sm">
            {[
              {
                titulo: "Proximidad",
                texto:
                  "Hablamos contigo de manera directa. Sin capas intermedias, sin burocracia innecesaria.",
              },
              {
                titulo: "Flexibilidad",
                texto:
                  "Nos adaptamos a tus plazos, a los cambios de diseño y a las necesidades del proyecto.",
              },
              {
                titulo: "Rigor técnico",
                texto:
                  "Cuidamos geometrías, tolerancias y materiales para asegurar piezas estables en el tiempo.",
              },
            ].map((v) => (
              <motion.article
                key={v.titulo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <h3 className="font-semibold text-slate-50">{v.titulo}</h3>
                <p className="mt-2 text-slate-300">{v.texto}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACIDADES / DATOS RÁPIDOS */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold md:text-xl">
              Capacidades en planta.
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base leading-relaxed">
              Disponemos de prensas para estampación, máquinas de inyección de
              plástico y equipos auxiliares para el montaje de subconjuntos.
              Esto nos permite fabricar tanto componentes sueltos como conjuntos
              ya montados listos para integrar en tu línea.
            </p>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="grid grid-cols-2 gap-4 text-xs md:text-sm"
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <dt className="text-slate-400">Años de experiencia</dt>
              <dd className="mt-1 text-lg font-semibold text-[#4fa3ff]">
                +30
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <dt className="text-slate-400">Sectores</dt>
              <dd className="mt-1 text-sm">
                Descanso, tapicería, fornituras, publicitario…
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <dt className="text-slate-400">Tecnologías</dt>
              <dd className="mt-1 text-sm">
                Estampación, inyección, montaje, diseño 3D.
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <dt className="text-slate-400">Tipo de piezas</dt>
              <dd className="mt-1 text-sm">
                Plástico, metal y conjuntos mixtos.
              </dd>
            </div>
          </motion.dl>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-950/95">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl px-4 py-10 md:py-12"
        >
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8 text-center">
            <h2 className="text-lg font-semibold md:text-xl">
              ¿Te gustaría que revisáramos tu proyecto?
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Podemos analizar la pieza que necesitas, proponerte materiales y
              proceso de fabricación, y acompañarte desde el diseño hasta la
              producción en serie.
            </p>
            <a
              href="/home#contacto"
              className="mt-6 inline-flex rounded-full bg-[#4fa3ff] px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-[#4fa3ff]/30 hover:bg-[#76b8ff]"
            >
              Hablemos de tu proyecto
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
