import Image from "next/image";
import Link from "next/link";

/* =======================
   TIPOS
======================= */
type LlaveroCategoriaKey = "acrilicos" | "metalicos" | "carro" | "simil_piel";

type LlaveroSubcat = {
  key: string; // "redondos", "rectangulares", etc.
  label: string; // "Redondos"
  previewImage?: string; // 
  modelos: string[];
};

type LlaveroCategoria = {
  key: LlaveroCategoriaKey;
  label: string;
  subcats: LlaveroSubcat[];
};

/* =======================
   DATA (temporal)
   - aquí tendrás que ir completando subcats/modelos
======================= */
const llaveros: LlaveroCategoria[] = [
  {
    key: "acrilicos",
    label: "Llaveros acrílicos",
    subcats: [
      {
        key: "redondos",
        label: "Redondos",
        previewImage: "/IMG_Publicidad/llaveros/acrilicos/redondos/1.png", // una sola imagen
        modelos: ["CR-37", "CR-33", "CR-25", "LAZ-25", "GP25DC", "CR-Z D", "R-25 RUEDA"],
      },
      // TODO: rectangular, formas, pulsera, abrebotellas, tira...
      // {
      //   key: "rectangulares",
      //   label: "Rectangulares",
      //   previewImage: "/IMG_Publicidad/llaveros/acrilicos/rectangulares/portada.jpg",
      //   modelos: ["CR-30", "CR-45", ...],
      // },
    ],
  },
  {
    key: "metalicos",
    label: "Llaveros metálicos",
    subcats: [
      // TODO
    ],
  },
  {
    key: "carro",
    label: "Llaveros carro",
    subcats: [
      // TODO
    ],
  },
  {
    key: "simil_piel",
    label: "Llaveros símil piel",
    subcats: [
      // TODO
    ],
  },
];

/* =======================
   HELPERS
======================= */
function isCategoriaKey(x: string | undefined): x is LlaveroCategoriaKey {
  return x === "acrilicos" || x === "metalicos" || x === "carro" || x === "simil_piel";
}

function buildHref(base: string, params: Record<string, string | null | undefined>) {
  const sp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v) sp.set(k, v);
  });
  const qs = sp.toString();
  return qs ? `${base}?${qs}` : base;
}

function labelCategoria(key: LlaveroCategoriaKey) {
  return llaveros.find((c) => c.key === key)?.label ?? key;
}

/* =======================
   PAGE
======================= */
export default function LlaverosPage({
  searchParams,
}: {
  searchParams?: { cat?: string; sub?: string };
}) {
  const catParam = searchParams?.cat;
  const subParam = searchParams?.sub;

  const cat = isCategoriaKey(catParam) ? catParam : undefined;
  const sub = subParam?.trim() ? subParam.trim() : undefined;

  // Candidatos por categoría
  const categoriasSeleccionadas = cat ? llaveros.filter((c) => c.key === cat) : llaveros;

  // Aplanar subcats (y filtrar por sub si existe)
  const subcatsSeleccionadas = categoriasSeleccionadas.flatMap((c) =>
    (c.subcats ?? []).map((s) => ({ ...s, catKey: c.key, catLabel: c.label }))
  ).filter((s) => (sub ? s.key === sub : true));

  // Modelos (con contexto)
  const modelos = subcatsSeleccionadas.flatMap((s) =>
    (s.modelos ?? []).map((m) => ({
      modelo: m,
      catKey: s.catKey as LlaveroCategoriaKey,
      catLabel: s.catLabel as string,
      subKey: s.key,
      subLabel: s.label,
    }))
  );

  // Subcats disponibles para el filtro "sub" (dependen del cat)
  const subcatsDisponibles = (cat
    ? llaveros.find((c) => c.key === cat)?.subcats ?? []
    : llaveros.flatMap((c) => c.subcats ?? [])
  ).map((s) => ({ key: s.key, label: s.label }));

  // Evitar repetidos en el filtro de sub (si hay claves iguales entre categorías)
  const subcatsUnicos = Array.from(
    new Map(subcatsDisponibles.map((s) => [s.key, s])).values()
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* CABECERA */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Publicidad · Llaveros
          </p>

          <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
            {cat ? labelCategoria(cat) : "Llaveros"}
          </h1>

          <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">
            Filtra por tipo de llavero y por subcategoría. Puedes quitar filtros en cualquier momento.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/publicidad?grupo=Llaveros"
            className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-200 hover:border-slate-500"
          >
            ← Volver a Publicidad
          </Link>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="border-b border-slate-800 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-5">
          {/* filtro categoría */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="mr-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                Tipo
              </span>

              <Link
                href={buildHref("/publicidad/llaveros", { cat: null, sub: null })}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  !cat
                    ? "border-[#4fa3ff] bg-[#4fa3ff]/10 text-[#4fa3ff]"
                    : "border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500"
                }`}
              >
                Todos
              </Link>

              {llaveros.map((c) => (
                <Link
                  key={c.key}
                  href={buildHref("/publicidad/llaveros", { cat: c.key, sub: null })}
                  className={`rounded-full border px-3 py-1.5 text-xs transition ${
                    cat === c.key
                      ? "border-[#4fa3ff] bg-[#4fa3ff]/10 text-[#4fa3ff]"
                      : "border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500"
                  }`}
                >
                  {c.label}
                </Link>
              ))}
            </div>

            {/* filtro subcategoría */}
            <div className="flex flex-wrap gap-2">
              <span className="mr-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                Forma
              </span>

              <Link
                href={buildHref("/publicidad/llaveros", { cat: cat ?? null, sub: null })}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  !sub
                    ? "border-[#4fa3ff] bg-[#4fa3ff]/10 text-[#4fa3ff]"
                    : "border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500"
                }`}
              >
                Todas
              </Link>

              {subcatsUnicos.map((s) => (
                <Link
                  key={s.key}
                  href={buildHref("/publicidad/llaveros", { cat: cat ?? null, sub: s.key })}
                  className={`rounded-full border px-3 py-1.5 text-xs transition ${
                    sub === s.key
                      ? "border-[#4fa3ff] bg-[#4fa3ff]/10 text-[#4fa3ff]"
                      : "border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* resumen */}
          <div className="mt-4 text-xs text-slate-400">
            Filtros activos:{" "}
            <span className="text-slate-200">{cat ? labelCategoria(cat) : "Todos"}</span>
            {" · "}
            <span className="text-slate-200">{sub ? sub : "Todas"}</span>
          </div>
        </div>
      </section>

      {/* LISTADO */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-10">
          {modelos.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="text-lg font-semibold">Aún no hay modelos cargados</h2>
              <p className="mt-2 text-sm text-slate-300">
                Para que aquí aparezcan modelos, añade códigos en <code className="text-slate-200">modelos: []</code>{" "}
                dentro del array <code className="text-slate-200">llaveros</code> (en este mismo archivo, de momento).
              </p>

              {/* Tip rápido si solo tienes 1 subcat (redondos) */}
              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300">
                <p className="font-semibold text-slate-200">Tip</p>
                <p className="mt-1">
                  Si solo te sale “Redondos” en acrílicos, es porque aún no has añadido las otras subcategorías
                  (rectangulares, formas, pulsera, abrebotellas, tira).
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {modelos.map((m) => (
                <div
                  key={`${m.catKey}-${m.subKey}-${m.modelo}`}
                  className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {m.catLabel} · {m.subLabel}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-slate-50">
                    {m.modelo}
                  </h3>

                  {/* Placeholder: cuando tengas imágenes por modelo, lo cambiamos */}
                  <div className="mt-4 h-28 w-full rounded-2xl bg-slate-800/60" />

                  <div className="mt-4 text-xs text-slate-400">
                    (Aquí luego pondremos foto/medidas/acabado si lo quieres)
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
