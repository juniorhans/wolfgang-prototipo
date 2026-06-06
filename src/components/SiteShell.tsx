"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Search, ShoppingBag } from "lucide-react";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <div className="bg-black text-center text-xs py-2 tracking-widest border-b border-zinc-800">
        FRETE GRÁTIS ACIMA DE R$199
      </div>

      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">

        <div className="relative h-14 flex items-center justify-between px-4">

          <button onClick={() => setMenuAberto(true)}>
            <Menu size={24} />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">

            <Image
              src="/images/logo.png"
              alt="Wolfgang"
              width={40}
              height={50}
            />

          </div>

          <div className="flex items-center gap-4">

            <Search size={22} />
            <ShoppingBag size={22} />

          </div>

        </div>

      </header>

      {/* Overlay */}

      <div
        className={`fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 ${
          menuAberto
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setMenuAberto(false)}
      />

      {/* Menu */}

      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[340px] bg-black z-50 border-r border-zinc-800 transform transition-transform duration-300 ${
          menuAberto
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        <div className="h-16 flex items-center justify-between px-5 border-b border-zinc-800">

          <Image
            src="/images/logo.png"
            alt="Wolfgang"
            width={45}
            height={45}
          />

          <button
            onClick={() => setMenuAberto(false)}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        <div className="px-6 py-8">

          <ul className="space-y-6">

            <li className="text-lg tracking-wide uppercase">
              Camisetas
            </li>

            <li className="text-lg tracking-wide uppercase">
              Oversized
            </li>

            <li className="text-lg tracking-wide uppercase">
              Regatas
            </li>

            <li className="text-lg tracking-wide uppercase">
              Lançamentos
            </li>

            <li className="text-lg tracking-wide uppercase">
              Mais Vendidos
            </li>

          </ul>

        </div>

      </div>

      {children}

      <footer className="bg-black border-t border-zinc-800">

        <div className="px-1 py-4">

          <div className="flex justify-center">

            <Image
              src="/images/logo.png"
              alt="Wolfgang"
              width={70}
              height={70}
            />

          </div>

          <div className="mt-5 border-t border-zinc-800 pt-4">

            <h3 className="text-white font-semibold tracking-wider uppercase text-sm">
              Suporte
            </h3>

            <div className="mt-4 space-y-3 text-zinc-400">

              <p>Trocas e Devoluções</p>
              <p>Rastreamento</p>
              <p>Contato</p>

            </div>

          </div>

          <div className="mt-10 border-t border-zinc-800 pt-8">

            <h3 className="text-white font-semibold tracking-wider uppercase text-sm">
              Instagram
            </h3>

            <p className="mt-4 text-zinc-400">
              @wolfgang.club
            </p>

          </div>

          <div className="mt-12 pt-8 border-t border-zinc-800">

            <p className="text-center text-xs text-zinc-500">
              © 2026 Wolfgang. Todos os direitos reservados.
            </p>

          </div>

        </div>

      </footer>
    </>
  );
}