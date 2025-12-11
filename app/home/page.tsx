"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const heroImages = [
  { src: "/IMG_Home/Fachada.jpg", alt: "Fachada de Industrias Cuher" },
  { src: "/IMG_Home/Maquina.jpg", alt: "Maquinaria de producción" },
  { src: "/IMG_Home/Piezas.jpg", alt: "Piezas fabricadas" },
  { src: "/IMG_Home/Soldador.jpg", alt: "Proceso de trabajo" },
];

const productShots = [
    {
      src: "/IMG_Home/3dprinter.png",
      title: "Diseño y validación 3D",
      description:
        "Modelamos y optimizamos geometrías evaluando materiales, esfuerzos y funcionalidad para asegurar piezas listas para fabricar.",
    },
    {
      src: "/IMG_Home/moldeplastico2.png",
      title: "Fabricación de moldes de inyección",
      description:
        "Desarrollo de moldes para plástico, adaptados a las necesidades de la pieza, el material y los volúmenes de producción.",
    },
    {
      src: "/IMG_Home/prensa.png",
      title: "Diseño y fabricación de matrices",
      description:
        "Matrices de corte, punzonado y conformado para procesos de estampación metálica con alta precisión.",
    },
    {
        src: "/IMG_Home/producto.png",
        title: "Piezas listas para montaje",
        description:
          "Componentes terminados y verificados, listos para integrarse en líneas de producción o productos finales.",
      },
      
  ];
  
  
  

export default function HomeReal() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // izquierda / derecha
  const [sending, setSending] = useState(false);
const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
const [productIndex, setProductIndex] = useState(0);
const [productDirection, setProductDirection] = useState(1);



  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setProductDirection(1);
      setProductIndex((prev) => (prev + 1) % productShots.length);
    }, 6000);
  
    return () => clearInterval(id);
  }, []);
  
  const productVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
    }),
    center: {
      x: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
    }),
  };
  

 
  

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
      <section className="relative overflow-hidden border-b border-slate-800 min-h-[45vh] md:min-h-[50vh]">


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
        <div className="relative z-10 mx-auto max-w-5xl px-4 pt-16 pb-12 md:pt-24 md:pb-16">



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
                     className="rounded-full border border-slate-500 px-6 py-2 text-sm font-semibold text-slate-100 hover:border-[#4fa3ff]"
                >
                 Solicitar información
                </a>

                <a
                     href="/servicios"
                     className="inline-flex items-center gap-2 rounded-full bg-[#4fa3ff] px-7 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-[#4fa3ff]/30 hover:bg-[#76b8ff]"
                >
                Ver procesos y servicios
                 <span aria-hidden>→</span>
                 </a>
            </div>


          </div>
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
            Somos una empresa familiar con más de 30 años de experiencia,
            especializada en fabricar componentes plásticos, metálicos y
            conjuntos mixtos, siempre con flexibilidad, proximidad y un
            acompañamiento técnico constante.
          </p>

{/* 
          <div className="mt-8 mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-sm font-semibold text-[#4fa3ff] leading-relaxed">
              “Nuestro objetivo es ser el proveedor de confianza al que recurres
              cuando necesitas una pieza de plástico o metal hecha a medida,
              pensada para encajar perfectamente en tu proyecto.”
            </p>
          </div>
          */}
        </div>
      </section>

 {/* Carrusel de productos acabados */}
<section className="border-b border-slate-800 bg-slate-950">
  <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
    <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 md:h-96">
        <AnimatePresence initial={false} custom={productDirection}>

        <motion.div
          key={productShots[productIndex].src}
          custom={productDirection}
          variants={productVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 70, damping: 20 },
          }}
          
          className="absolute inset-0"
        >
          {/* Imagen */}
          <Image
            src={productShots[productIndex].src}
            alt={productShots[productIndex].title}
            fill
            className="object-cover"
          />

          {/* Degradado y texto encima de la foto */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-slate-50">
              {productShots[productIndex].title}
            </h3>
            <p className="mt-1 text-xs md:text-sm text-slate-200 max-w-xl">
              {productShots[productIndex].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

     
    
    </div>
  </div>
</section>



      {/* Sección servicios */}
<section id="servicios" className="border-b border-slate-800 bg-slate-950">
  <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">

    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h2 className="text-xl font-semibold md:text-2xl">Qué fabricamos</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">
          Fabricamos piezas metálicas y plásticas a medida, ajustándonos a planos, muestras o necesidades específicas.
        </p>
      </div>

      {/* Enlace al catálogo */}
      <a
        href="https://www.valvulascuher.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-[#4fa3ff] hover:underline"
      >
        Ver catálogo de descanso →
      </a>
    </div>

    <div className="mt-6 grid gap-6 md:grid-cols-3">

      {/* --- TARJETA 1: FORNITURAS --- */}
<Link
  href="/fornituras"
  className="group block rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-[#4fa3ff]/60 transition-colors"
>
  <div className="relative h-32 w-full overflow-hidden rounded-xl">
    <Image
      src="/IMG_Home/ForniturasPortada.png"
      alt="Fornituras"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </div>

  <h3 className="mt-3 text-sm font-semibold text-slate-100">
    Accesorios para fornituras
  </h3>

  <p className="mt-2 text-xs text-slate-300">
    Artículos para confección y tapicería. Fabricamos las fornituras así como
    también las máquinas, moldes y troqueles.
  </p>
</Link>

      {/* --- TARJETA 2: PUBLICIDAD (ahora segunda) --- */}
      <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-[#4fa3ff]/60">
        <div className="relative h-32 w-full overflow-hidden rounded-xl">
          <Image
            src="/IMG_Home/ChapasPortada.png"
            alt="Artículos de publicidad"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <h3 className="mt-3 text-sm font-semibold text-slate-100">
          Artículos de publicidad
        </h3>
        <p className="mt-2 text-xs text-slate-300">
          Chapas, imanes, llaveros, abridores... Producto acabado o componentes, lo que necesites. 
        </p>
      </article>

      {/* --- TARJETA 3: DESCANSO (ahora tercera) --- */}
      <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-[#4fa3ff]/60">
        <div className="relative h-32 w-full overflow-hidden rounded-xl">
          <Image
            src="/IMG_Home/chicaDurmiendo3.png"
            alt="Componentes para el descanso"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <h3 className="mt-3 text-sm font-semibold text-slate-100">
          Componentes para el descanso
        </h3>
        <p className="mt-2 text-xs text-slate-300">
          Válvulas de aireación, curvas, cantoneras, tapones, accesorios para el cabecero y asas.
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
          Si necesitas desarrollar una pieza de plástico o metal, o estás
          valorando un nuevo proveedor, cuéntanos qué necesitas y te
          contactaremos para estudiarlo contigo.
        </p>

        {/* INFO DE CONTACTO */}
<div className="mt-6 space-y-3 text-slate-300 text-sm">

{/* INFORMACIÓN DE CONTACTO DESTACADA */}
<div className="mt-10 md:mt-12">
  <div className="
    rounded-3xl 
    border border-slate-800 
    bg-slate-900/60 
    p-6 md:p-8 
    shadow-lg shadow-black/20
  ">
    <ul className="space-y-4 text-slate-300">

      {/* Dirección */}
      <li className="flex items-start gap-3">
        <span className="text-[#4fa3ff] mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 9.5c0 7-7.5 11-7.5 11s-7.5-4-7.5-11a7.5 7.5 0 1115 0z" />
          </svg>
        </span>
        <p className="text-sm leading-relaxed">
          Camí de Can Ubach, Nave 44<br />
          Pol. Ind. Les Fallulles<br />
          08620 Sant Vicenç dels Horts, Barcelona
        </p>
      </li>

      {/* Email */}
      <li className="flex items-center gap-3">
        <span className="text-[#4fa3ff]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </span>
        <a href="mailto:cuher@industriascuher.com" className="text-sm hover:text-white">
          cuher@industriascuher.com
        </a>
      </li>

      {/* Teléfono */}
      <li className="flex items-center gap-3">
        <span className="text-[#4fa3ff]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 6l4-2 3 6-3 2c1 2 3 4 5 5l2-3 6 3-2 4c-5-1-10-6-11-12z" />
          </svg>
        </span>
        <a href="tel:936859494" className="text-sm hover:text-white">
          93 685 94 94
        </a>
      </li>

      {/* WhatsApp */}
      <li className="flex items-center gap-3">
        <span className="text-[#4fa3ff]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 20l1.5-3A7 7 0 1119 12a7 7 0 01-10.5 6.5L8 20z" />
          </svg>
        </span>
        <a href="https://wa.me/34692952141" target="_blank" className="text-sm hover:text-white">
          692 952 141
        </a>
      </li>

    </ul>
  </div>
</div>


</div>


        {status === "ok" && (
          <p className="mt-4 text-sm text-emerald-400">
            ✅ Hemos recibido tu mensaje. Te contactaremos lo antes posible.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">
            ⚠️ Ha habido un problema al enviar el mensaje. Inténtalo de nuevo más
            tarde o escríbenos a cuher@industriascuher.com.
          </p>
        )}
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-300">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus("idle");
            setSending(true);

            const form = e.currentTarget;
            const formData = new FormData(form);

            const body = {
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            };

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              });

              if (res.ok) {
                setStatus("ok");
                form.reset();
              } else {
                setStatus("error");
              }
            } catch (err) {
              setStatus("error");
            } finally {
              setSending(false);
            }
          }}
          className="space-y-4"
        >
          <div>
            <label className="mb-1 block text-[11px] uppercase tracking-[0.15em] text-slate-400">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[#4fa3ff]"
              placeholder="Tu nombre o el de la empresa"
            />
          </div>

          <div>
            <label className="mb-1 block text-[11px] uppercase tracking-[0.15em] text-slate-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[#4fa3ff]"
              placeholder="Tu correo de contacto"
            />
          </div>

          <div>
            <label className="mb-1 block text-[11px] uppercase tracking-[0.15em] text-slate-400">
              Mensaje
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[#4fa3ff]"
              placeholder="Explícanos qué pieza o proyecto tienes en mente."
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center rounded-full bg-[#4fa3ff] px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-[#4fa3ff]/30 hover:bg-[#76b8ff] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {sending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


    </main>
  );
}
