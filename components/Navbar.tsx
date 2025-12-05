"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  // 🚫 No mostramos la barra en la página raíz (/)
  if (pathname === "/") {
    return null;
  }

  // Si NO quieres que se vuelva oscuro tras scroll, pon alwaysSolid = true
  const alwaysSolid = false;

  const [solid, setSolid] = useState(alwaysSolid);

  useEffect(() => {
    if (alwaysSolid) return;
    const handleScroll = () => {
      setSolid(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysSolid]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        solid
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent border-transparent"
      }
    `}
    >
      <nav className="mx-auto max-w-6xl px-4 py-4 flex justify-end gap-8 text-slate-200 text-sm font-medium">
        <Link
          href="/home"
          className={`hover:text-white transition ${
            pathname === "/home" ? "text-[#4fa3ff]" : ""
          }`}
        >
          Home
        </Link>

        <Link
          href="/servicios"
          className={`hover:text-white transition ${
            pathname === "/servicios" ? "text-[#4fa3ff]" : ""
          }`}
        >
          Servicios
        </Link>

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
