"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
     
{/* Sección – Cómo trabajamos (sin el título) */}
<section className="relative border-b border-slate-800 bg-slate-950">
  {/* VIDEO DE FONDO */}
  <div className="absolute inset-0 overflow-hidden">
    <video
      src="/IMG_Servicios/chispas.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-cover opacity-70"
    />
    <div className="absolute inset-0 bg-slate-950/50" />
  </div>

  {/* CONTENIDO */}
  <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-20 text-center">

    {/* Frase principal destacada */}
    <h2 className="text-2xl md:text-3xl font-semibold text-[#4fa3ff]">
      Damos forma a tus ideas.
    </h2>

    {/* Texto principal con semibold, pero elegante */}
    <p className="mt-4 text-sm md:text-lg  text-slate-200 max-w-3xl mx-auto leading-relaxed font-medium">
      Partimos siempre de una necesidad concreta y la transformamos en una pieza real,
      pensada para su aplicación, su proceso de montaje y su fabricación en serie.
    </p>

  </div>
</section>


      {/* PROCESO GENERAL */}
<section className="border-b border-slate-800 bg-slate-950">
  <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="text-lg font-semibold md:text-xl"
    >
      Un proceso completo pensado para ayudarte.
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mt-3 text-sm text-slate-300 md:text-base"
    >
      No siempre partimos de un plano. A menudo el punto de inicio es un
      problema real: proteger, reforzar, sujetar, mejorar la imagen del
      producto… A partir de esa necesidad definimos la pieza adecuada y el
      proceso para fabricarla.
    </motion.p>

    <div className="mt-8 space-y-6">
      {[
        {
          paso: "Paso 1",
          titulo: "Análisis de la necesidad",
          texto:
            "Estudiamos el uso de la pieza, el entorno donde trabajará y condicionantes de montaje, seguridad y coste.",
          video: "/IMG_Servicios/diseño.mp4",
          reverseOnDesktop: false,
        },
        {
          paso: "Paso 2",
          titulo: "Diseño y 3D",
          texto:
            "Proponemos geometrías, materiales y sistemas de fijación. Preparamos modelos 3D y, si hace falta, prototipos.",
          video: "/IMG_Servicios/impresora3d.mp4",
          reverseOnDesktop: true,
        },
        {
          paso: "Paso 3",
          titulo: "Moldes y utillajes",
          texto:
            "Desarrollamos moldes para plástico o punzones y matrices para prensas según el diseño aprobado.",
          video: "/IMG_Servicios/torno.mp4",
          reverseOnDesktop: false,
        },
        {
          paso: "Paso 4",
          titulo: "Producción y suministro",
          texto:
            "Fabricamos la pieza en serie, realizamos controles de calidad y ajustamos plazos y lotes a tus necesidades.",
          video: "/IMG_Servicios/cadena.mp4",
          reverseOnDesktop: true,
        },
      ].map((item) => (
        <motion.article
          key={item.paso}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-4 md:p-5 md:gap-6 ${
            item.reverseOnDesktop ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Vídeo */}
          <div className="md:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900">
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              {item.paso}
            </p>
            <h3 className="mt-2 text-sm font-semibold text-slate-50 md:text-base">
              {item.titulo}
            </h3>
            <p className="mt-2 text-xs text-slate-300 md:text-sm leading-relaxed">
              {item.texto}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>


      {/* PLÁSTICO / METAL */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold md:text-xl"
          >
            Especialistas en plástico y metal.
          </motion.h2>

          <div className="mt-6 grid gap-6 text-xs md:grid-cols-2 md:text-sm">
            {/* Plástico */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src="/IMG_Servicios/plastico.png"
                  alt="Pieza plástica aplicada al sector descanso"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 font-semibold">
                  Plástico
                </p>
                <h3 className="mt-2 text-sm font-semibold text-slate-50">
                  Diseño de piezas y moldes para inyección.
                </h3>
                <ul className="mt-3 space-y-2 text-slate-300">
                  <li>• Asesoría técnica a partir de la necesidad del cliente.</li>
                  <li>• Modelado 3D y maquetación para validar el diseño.</li>
                  <li>• Diseño y fabricación de moldes para inyección.</li>
                  <li>• Optimización de geometrías, ciclo y consumo de material.</li>
                  <li>• Producción en series cortas o largas.</li>
                </ul>
              </div>
            </motion.article>

            {/* Metal */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src="/IMG_Servicios/metal.png"
                  alt="Piezas metálicas estampadas"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 font-semibold">
                  Metal
                </p>
                <h3 className="mt-2 text-sm font-semibold text-slate-50">
                  Estampación y utillajes para prensas.
                </h3>
                <ul className="mt-3 space-y-2 text-slate-300">
                  <li>• Diseño de piezas metálicas o mixtas según necesidad.</li>
                  <li>• Definición del proceso de estampación o plegado.</li>
                  <li>• Fabricación de punzones, matrices y utillajes.</li>
                  <li>• Pruebas, ajustes y verificación dimensional.</li>
                  <li>• Producción de piezas y subconjuntos montados.</li>
                </ul>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              ¿Tienes una idea o un problema que resolver?
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Cuéntanos qué pieza necesitas o qué quieres mejorar en tu
              producto. Podemos ayudarte a convertirlo en una pieza real,
              lista para fabricar.
            </p>
            <a
              href="/home#contacto"
              className="mt-6 inline-flex rounded-full bg-[#4fa3ff] px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-[#4fa3ff]/30 hover:bg-[#76b8ff]"
            >
              Hablar sobre un proyecto
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
