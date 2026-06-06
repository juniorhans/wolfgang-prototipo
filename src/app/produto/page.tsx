"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";

export default function Produto() {
    const [imagemAtual, setImagemAtual] = useState(0);
    const [menuAberto, setMenuAberto] = useState(false);

    const imagens = [
        "/images/produtos/produto-1-frente.jpg",
        "/images/produtos/produto-1-verso.jpg",
    ];

    const [detalhesAberto, setDetalhesAberto] = useState(false);
    const [envioAberto, setEnvioAberto] = useState(false);
    const [avaliacoesAberto, setAvaliacoesAberto] = useState(false);

    return (
        <main className="min-h-screen bg-[linear-gradient(to_bottom,#ffffff,#fafafa,#f4f4f5)]">
            

            {/* Barra superior */}

            <div className="bg-black text-center text-xs py-2 tracking-widest border-b border-zinc-800 text-white">
                FRETE GRÁTIS ACIMA DE R$199
            </div>

            {/* Header */}

            <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800 text-white">

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

                        <button>
                            <Search size={22} />
                        </button>

                        <button>
                            <ShoppingBag size={22} />
                        </button>

                    </div>

                </div>

            </header>

            {/* Overlay */}

            <div
                className={`fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 ${menuAberto
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
                onClick={() => setMenuAberto(false)}
            />

            {/* Menu */}

            <div
                className={`fixed top-0 left-0 h-full w-[85%] max-w-[340px] bg-black z-50 border-r border-zinc-800 transform transition-transform duration-300 ${menuAberto
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
                        className="text-2xl text-white"
                    >
                        ✕
                    </button>

                </div>

                <div className="px-6 py-8 text-white">

                    <ul className="space-y-6">

                        <li className="text-lg uppercase">Camisetas</li>
                        <li className="text-lg uppercase">Oversized</li>
                        <li className="text-lg uppercase">Regatas</li>
                        <li className="text-lg uppercase">Lançamentos</li>
                        <li className="text-lg uppercase">Mais Vendidos</li>

                    </ul>

                </div>

            </div>

            {/* Voltar */}

            <div className="px-4 py-4">

                <Link
                    href="/"
                    className="text-3xl font-light text-black"
                >
                    ←
                </Link>

            </div>

            {/* Imagem principal */}

<div className="px-4 pt-4">

  <div className="overflow-hidden  border border-zinc-200 bg-white shadow-sm">

    <Image
      src={imagens[imagemAtual]}
      alt="Anti Vitimista"
      width={1200}
      height={1200}
      className="w-full aspect-square object-cover"
      priority
    />

  </div>

</div>

            {/* Miniaturas */}

            <div className="flex gap-3 px-4 py-4">

                {imagens.map((img, index) => (

                    <button
                        key={index}
                        onClick={() => setImagemAtual(index)}
                 className={`
overflow-hidden
rounded-lg
border-2
transition-all
duration-200

${imagemAtual === index
  ? "border-black shadow-md scale-105"
  : "border-zinc-200 hover:border-zinc-400"
}
`}
                    >

                        <Image
                            src={img}
                            alt=""
                            width={80}
                            height={80}
                            className="w-20 h-20 object-cover"
                        />

                    </button>

                ))}

            </div>

            {/* Informações */}

            <div className="px-3 pb-30 text-black">

                <h1 className="text-2xl font-bold mt-2">
                   Camisa T-Shirt Wolfgang "Anti Vitimista"
                </h1>

     

                <div className="mt-6">

                    <p className="text-4xl font-bold">
                        R$ 89,90
                    </p>

                    <p className="text-zinc-500 mt-2">
                        ou 3x de R$ 29,97
                    </p>

                </div>

                <div className="mt-10">


                    <h2 className="font-semibold mb-4">
                        Tamanhos
                    </h2>

                    <div className="flex gap-3">

                        <button
                            disabled
                            className="relative w-12 h-12 border border-zinc-300 text-zinc-400"
                        >
                            P

                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-10 border-t border-zinc-400 rotate-[-35deg]" />
                            </span>
                        </button>
                        <button className="w-12 h-12 border border-zinc-300">M</button>
                        <button className="w-12 h-12 border border-zinc-300">G</button>
                        <button
                            disabled
                            className="relative w-12 h-12 border border-zinc-300 text-zinc-400"
                        >
                            GG

                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-10 border-t border-zinc-400 rotate-[-35deg]" />
                            </span>
                        </button>

                    </div>

                </div>

                <div className="flex gap-3 mt-10">

                    <div className="flex items-center border border-zinc-300">

                        <button
                            className="w-12 h-14 text-xl"
                        >
                            -
                        </button>

                        <span className="w-10 text-center">
                            1
                        </span>

                        <button
                            className="w-12 h-14 text-xl"
                        >
                            +
                        </button>

                    </div>

                    <button className="flex-1 bg-black text-white uppercase tracking-wider font-semibold">
                        Adicionar ao Carrinho
                    </button>

                </div>


                <div className="mt-10 border-t border-zinc-200">

  {/* DETALHES */}

  <button
    onClick={() => setDetalhesAberto(!detalhesAberto)}
    className="w-full py-5 flex justify-between items-center border-b border-zinc-200"
  >
    <span className="text-lg font-medium">
      Detalhes do Produto
    </span>

    <span className="text-2xl">
      {detalhesAberto ? "−" : "+"}
    </span>
  </button>

  {detalhesAberto && (

    <div className="pb-6">

      <p className="text-zinc-600 leading-7 mb-6">
        Camiseta premium Wolfgang desenvolvida para quem vive a disciplina
        todos os dias. Produzida com tecido confortável, modelagem moderna
        e estampa exclusiva.
      </p>

      <div className="space-y-4 text-sm">

        <div className="flex justify-between border-b pb-3">
          <span>Modelagem</span>
          <span>Oversized</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Cor</span>
          <span>Preto Estonado</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Tecido</span>
          <span>100% Algodão</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Estampa</span>
          <span>Silk Premium</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Marca</span>
          <span>Wolfgang Club</span>
        </div>

      </div>

    </div>

  )}

  {/* ENVIO */}

  <button
    onClick={() => setEnvioAberto(!envioAberto)}
    className="w-full py-5 flex justify-between items-center border-b border-zinc-200"
  >
    <span className="text-lg font-medium">
      Envios e Devoluções
    </span>

    <span className="text-2xl">
      {envioAberto ? "−" : "+"}
    </span>
  </button>

  {envioAberto && (

    <div className="pb-6 text-zinc-600 leading-7">

      Entrega local realizada pela equipe Wolfgang.
      Trocas podem ser solicitadas em até 7 dias após o recebimento.

    </div>

  )}

  {/* AVALIAÇÕES */}

  <button
    onClick={() => setAvaliacoesAberto(!avaliacoesAberto)}
    className="w-full py-5 flex justify-between items-center"
  >
    <span className="text-lg font-medium">
      Avaliações
    </span>

    <span className="text-2xl">
      {avaliacoesAberto ? "−" : "+"}
    </span>
  </button>

  {avaliacoesAberto && (

    <div className="pb-6 text-zinc-600">

      Ainda não existem avaliações para este produto.

    </div>

  )}

</div>

            </div>

            {/* Footer */}

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

                    <div className="mt-5 border-t border-zinc-800 pt-4 text-white">

                        <h3 className="font-semibold tracking-wider uppercase text-sm">
                            Suporte
                        </h3>

                        <div className="mt-4 space-y-3 text-zinc-400">

                            <p>Trocas e Devoluções</p>
                            <p>Rastreamento</p>
                            <p>Contato</p>

                        </div>

                    </div>

                    <div className="mt-10 border-t border-zinc-800 pt-8 text-white">

                        <h3 className="font-semibold tracking-wider uppercase text-sm">
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

        </main>
    );
}