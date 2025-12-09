"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  // No mostramos la barra en la página raíz
  if (pathname === "/") return null;

  const alwaysSolid = false;
  const [solid, setSolid] = useState(alwaysSolid);
  const [openMenu, setOpenMenu] = useState(false);

  // Efecto de fondo sólido al hacer scroll
  useEffect(() => {
    if (alwaysSolid) return;
    const handleScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Si cambiamos de ruta, cerramos el menú de productos
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  const isProductsActive = pathname.startsWith("/fornituras");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        solid
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 py-4 flex justify-end gap-8 text-slate-200 text-sm font-medium relative">
        {/* HOME */}
        <Link
          href="/home"
          className={`hover:text-white transition ${
            pathname === "/home" ? "text-[#4fa3ff]" : ""
          }`}
        >
          Home
        </Link>

        {/* SERVICIOS */}
        <Link
          href="/servicios"
          className={`hover:text-white transition ${
            pathname === "/servicios" ? "text-[#4fa3ff]" : ""
          }`}
        >
          Servicios
        </Link>

        {/* PRODUCTOS (dropdown por click) */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpenMenu((prev) => !prev)}
            className={`transition hover:text-white flex items-center gap-1 ${
              isProductsActive ? "text-[#4fa3ff]" : ""
            }`}
          >
            Productos
            <span
              className={`transition-transform text-[10px] ${
                openMenu ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {openMenu && (
            <div
              className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-800 
                bg-slate-900/95 shadow-xl backdrop-blur-md p-2"
            >
              <Link
                href="/fornituras"
                onClick={() => setOpenMenu(false)}
                className={`block px-3 py-2 rounded-lg text-sm hover:bg-slate-800 transition ${
                  pathname.startsWith("/fornituras")
                    ? "text-[#4fa3ff]"
                    : "text-slate-200"
                }`}
              >
                Fornituras
              </Link>
            </div>
          )}
        </div>

        {/* EMPRESA */}
        <Link
          href="/empresa"
          className={`hover:text-white transition ${
            pathname === "/empresa" ? "text-[#4fa3ff]" : ""
          }`}
        >
          Empresa
        </Link>
      </nav>
    </header>
  );
}
