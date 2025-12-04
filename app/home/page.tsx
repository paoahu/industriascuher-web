"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  { src: "/IMG_Home/Fachada.jpg", alt: "Fachada de Industrias Cuher" },
  { src: "/IMG_Home/Maquina.jpg", alt: "Maquinaria de producción" },
  { src: "/IMG_Home/Piezas.jpg", alt: "Piezas fabricadas" },
  { src: "/IMG_Home/Soldador.jpg", alt: "Proceso de trabajo" },
];

export default function HomeReal() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // izquierda / derecha

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -150 : 150,
      opacity: 0,
    }),
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">

      {/* HERO con animación */}
      <section className="relative overflow-hidden border-b border-slate-800 min-h-[55vh] md:min-h-[60vh]">

        <div className="absolute inset-0">
          <AnimatePresence custom={direction}>
            <motion.div
              key={heroImages[current].src}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 60, damping: 20 },
                opacity: { duration: 0.4 },
              }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[current].src}
                alt={heroImages[current].alt}
                fill
                priority
                className="object-cover object-center md:object-[center_top]"
              />
              <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px]" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTENIDO DEL HERO */}
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-20">
          <div className="flex-1">
            <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Soluciones en{" "}
              <span className="text-[#4fa3ff]">plástico y metal</span> a medida
              para múltiples sectores.
            </h1>

            <p className="mt-4 max-w-xl text-sm text-slate-200 md:text-base">
              Fabricamos componentes mediante estampación metálica, inyección
              de plástico y montaje de subconjuntos, ofreciendo piezas
              adaptadas a las necesidades de sectores como descanso, tapicería
              y mobiliario.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-[#4fa3ff] px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-[#4fa3ff]/30 hover:bg-[#76b8ff]"
              >
                Solicitar información
              </a>
              <a
                href="#servicios"
                className="text-sm text-slate-200 underline-offset-4 hover:underline"
              >
                Ver productos y servicios
              </a>
            </div>
          </div>
        </div>

        {/* BOTONES del carrusel */}
        <div className="relative z-10 mb-6 flex justify-center gap-2 md:mb-8">
          {heroImages.map((img, index) => (
            <button
              key={img.src}
              type="button"
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`h-2.5 w-2.5 rounded-full border border-white/50 transition ${
                index === current
                  ? "bg-[#4fa3ff] border-[#4fa3ff]"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Sección empresa */}
      <section
        id="empresa"
        className="border-b border-slate-800 bg-slate-950/90"
      >
        <div className="mx-auto max-w-4xl px-4 py-12 md:py-14 text-center">
          <h2 className="text-xl font-semibold md:text-2xl">
            Tres generaciones fabricando las piezas que nuestros clientes
            necesitan.
          </h2>

          <p className="mt-4 text-sm text-slate-300 md:text-base leading-relaxed">
            Desde nuestros inicios con Antoni Cuenca en el sector de las
            fornituras, hasta la expansión hacia el descanso y la tapicería,
            nuestra trayectoria ha estado impulsada por un mismo objetivo: dar
            forma a las piezas que cada cliente necesita.
          </p>

          <p className="mt-4 text-sm text-slate-300 md:text-base leading-relaxed">
            Somos una empresa familiar con más de 30 años de experiencia,
            especializada en fabricar componentes plásticos, metálicos y
            conjuntos mixtos, siempre con flexibilidad, proximidad y un
            acompañamiento técnico constante.
          </p>

          <div className="mt-8 mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-sm font-semibold text-[#4fa3ff] leading-relaxed">
              “Nuestro objetivo es ser el proveedor de confianza al que recurres
              cuando necesitas una pieza de plástico o metal hecha a medida,
              pensada para encajar perfectamente en tu proyecto.”
            </p>
          </div>
        </div>
      </section>

      {/* Sección servicios */}
      <section id="servicios" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">
                Qué fabricamos
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">
                Fabricamos piezas metálicas según plano o muestra para distintas
                aplicaciones industriales.
              </p>
            </div>
            <p className="text-xs text-slate-400">
              Aquí más adelante podemos enlazar a una página de catálogo.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-[#4fa3ff]/60">
              <div className="h-24 rounded-xl bg-slate-800/70 group-hover:bg-slate-800/90" />
              <h3 className="mt-3 text-sm font-semibold text-slate-100">
                Accesorios para cerramientos
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                Piezas metálicas para puertas, portones, automatismos y sistemas
                de cierre.
              </p>
            </article>

            <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-[#4fa3ff]/60">
              <div className="h-24 rounded-xl bg-slate-800/70 group-hover:bg-slate-800/90" />
              <h3 className="mt-3 text-sm font-semibold text-slate-100">
                Componentes mecanizados
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                Piezas troqueladas, plegadas o mecanizadas según requisitos
                técnicos del cliente.
              </p>
            </article>

            <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-[#4fa3ff]/60">
              <div className="h-24 rounded-xl bg-slate-800/70 group-hover:bg-slate-800/90" />
              <h3 className="mt-3 text-sm font-semibold text-slate-100">
                Subconjuntos y montaje
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                Montaje de subconjuntos metálicos y verificación según plan de
                control.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Sección contacto */}
      <section
        id="contacto"
        className="border-t border-slate-800 bg-slate-950/95"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">
                Hablemos de tu proyecto.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
                Próximamente añadiremos un formulario de contacto. Mientras
                tanto, puedes escribirnos o llamarnos y te atenderemos
                personalmente.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-300">
              <p className="font-semibold text-[#4fa3ff]">
                Próximo paso: formulario real
              </p>
              <p className="mt-2">
                Cuando quieras, montamos aquí un formulario que envíe los datos
                por correo usando una API de Next.js, sin necesidad de backend
                adicional.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
