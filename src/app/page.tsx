"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Home() {
  const [antiVerso, setAntiVerso] = useState(false);
  const [choreVerso, setChoreVerso] = useState(false);
  const [traumaVerso, setTraumaVerso] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Barra superior */}

      <div className="bg-black text-center text-xs py-2 tracking-widest border-b border-zinc-800">
        FRETE GRÁTIS ACIMA DE R$199
      </div>

      {/* Header */}

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

            <button>
              <Search size={22} />
            </button>

            <button>
              <ShoppingBag size={22} />
            </button>

          </div>

        </div>

      </header>

      {/* Overlay escuro */}
<div
  className={`fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 ${
    menuAberto
      ? "opacity-100 visible"
      : "opacity-0 invisible"
  }`}
  onClick={() => setMenuAberto(false)}
/>

{/* Menu lateral */}
<div
  className={`fixed top-0 left-0 h-full w-[85%] max-w-[340px] bg-black z-50 border-r border-zinc-800 transform transition-transform duration-300 ${
    menuAberto
      ? "translate-x-0"
      : "-translate-x-full"
  }`}
>

  {/* Cabeçalho */}
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

  {/* Links */}
  <div className="px-6 py-8">

    <ul className="space-y-6">

      <li className="text-lg tracking-wide uppercase">
        Camisetas
      </li>

      <li className="text-lg tracking-wide uppercase">
        Oversizeds
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

      {/* Banner */}

      <section className="relative h-[90vh]">

        <Image
          src="/images/banner.jpg"
          alt="Banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />

        <div className="absolute inset-0">

          <div className="absolute top-[10%] left-1/2 -translate-x-1/2">

            <Image
              src="/images/logo-com-nome.png"
              alt="Wolfgang"
              width={200}
              height={200}
              className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"

            />

          </div>

          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center">

            <p className="text-sm tracking-[0.25em] uppercase text-zinc-300 leading-relaxed">
              PARA QUEM VIVE A DISCIPLINA
              <br />
              TODOS OS DIAS.
            </p>

            <button className="mt-8 border border-white px-10 py-4 uppercase tracking-wider font-bold">
              VER COLEÇÃO →
            </button>

          </div>

        </div>

      </section>

      {/* Beneficios */}




      {/* -----------MAIS VENDIDOS------------- */}

      <section className="px-4 py-16 bg-white text-black">
        <h3 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-8">
          Mais vendidos
        </h3>

        <Swiper
          spaceBetween={10}
          slidesPerView={1.3}
          grabCursor={true}
        >

          <SwiperSlide>

            <div className="bg-white rounded-lg overflow-hidden border border-zinc-200 shadow-sm">

              <Image
                src={
                  antiVerso
                    ? "/images/produtos/produto-1-verso.jpg"
                    : "/images/produtos/produto-1-frente.jpg"
                }
                alt="Produto"
                width={1000}
                height={1000}
                className="w-full aspect-[0.9] object-cover"
              />
              <div className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
                -20%
              </div>
              <div className="flex justify-center gap-2 py-3 border-b border-zinc-200">

                <button
                  onClick={() => setAntiVerso(false)}
                  className={`px-4 py-1 text-xs font-medium border transition ${!antiVerso
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-zinc-300"
                    }`}
                >
                  FRENTE
                </button>

                <button
                  onClick={() => setAntiVerso(true)}
                  className={`px-4 py-1 text-xs font-medium border transition ${antiVerso
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-zinc-300"
                    }`}
                >
                  COSTAS
                </button>

              </div>

              <div className="p-4">

                <h4 className="text-sm text-zinc-800 leading-5">
                  Anti Vitimista
                </h4>

                <p className="mt-3 text-xl font-semibold text-zinc-900">
                  R$ 89,90

                  <span className="block text-zinc-500 text-sm font-normal mt-1">
                    ou 3x de R$ 29,97
                  </span>

                </p>
                <button className="w-full mt-4 bg-black text-white py-3 font-semibold uppercase tracking-wide">
                  Comprar
                </button>

              </div>

            </div>

          </SwiperSlide>

          <SwiperSlide>

            <div className="bg-white rounded-lg overflow-hidden border border-zinc-200 shadow-sm">

              <Image
                src={
                  choreVerso
                    ? "/images/produtos/produto-2-verso.jpg"
                    : "/images/produtos/produto-2-frente.jpg"
                }
                alt="Produto"
                width={1000}
                height={1000}
                className="w-full aspect-[0.9] object-cover"
              />

              <div className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
                -20%
              </div>

              <div className="flex justify-center gap-2 py-3 border-b border-zinc-200">

                <button
                  onClick={() => setChoreVerso(false)}
                  className={`px-4 py-1 text-xs font-medium border transition ${!choreVerso
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-zinc-300"
                    }`}
                >
                  FRENTE
                </button>

                <button
                  onClick={() => setChoreVerso(true)}
                  className={`px-4 py-1 text-xs font-medium border transition ${choreVerso
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-zinc-300"
                    }`}
                >
                  COSTAS
                </button>

              </div>

              <div className="p-4">

                <h4 className="text-sm text-zinc-800 leading-5">
                  Chore no Banho
                </h4>

                <p className="mt-3 text-xl font-semibold text-zinc-900">
                  R$ 89,90

                  <span className="block text-zinc-500 text-sm font-normal mt-1">
                    ou 3x de R$ 29,97
                  </span>

                </p>

                <button className="w-full mt-4 bg-black text-white py-3 font-semibold uppercase tracking-wide">
                  Comprar
                </button>

              </div>

            </div>

          </SwiperSlide>

          <SwiperSlide>

            <div className="bg-white rounded-lg overflow-hidden border border-zinc-200 shadow-sm">

              <Image
                src={
                  traumaVerso
                    ? "/images/produtos/produto-3-verso.jpg"
                    : "/images/produtos/produto-3-frente.jpg"
                }
                alt="Produto"
                width={1000}
                height={1000}
                className="w-full aspect-[0.9] object-cover"
              />

              <div className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
                -20%
              </div>

              <div className="flex justify-center gap-2 py-3 border-b border-zinc-200">

                <button
                  onClick={() => setTraumaVerso(false)}
                  className={`px-4 py-1 text-xs font-medium border transition ${!traumaVerso
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-zinc-300"
                    }`}
                >
                  FRENTE
                </button>

                <button
                  onClick={() => setTraumaVerso(true)}
                  className={`px-4 py-1 text-xs font-medium border transition ${traumaVerso
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-zinc-300"
                    }`}
                >
                  COSTAS
                </button>

              </div>

              <div className="p-4">

                <h4 className="text-sm text-zinc-800 leading-5">
                  Seu Trauma Não Queima Calorias
                </h4>

                <p className="mt-3 text-xl font-semibold text-zinc-900">
                  R$ 89,90

                  <span className="block text-zinc-500 text-sm font-normal mt-1">
                    ou 3x de R$ 29,97
                  </span>

                </p>

                <button className="w-full mt-4 bg-black text-white py-3 font-semibold uppercase tracking-wide">
                  Comprar
                </button>

              </div>

            </div>

          </SwiperSlide>

        </Swiper>

      </section>



      <section className="px-6 py-16 bg-black">

        <div className="flex justify-center mb-6">

          <Image
            src="/images/logo.png"
            alt="Wolfgang"
            width={80}
            height={80}
          />

        </div>

        <h2 className="text-4xl font-black text-center mb-6">
          A MENTALIDADE WOLFGANG
        </h2>

        <p className="text-zinc-400 text-center leading-7 max-w-xl mx-auto">
          Wolfgang não é apenas uma marca de roupas.
          É para quem treina quando está cansado,
          continua quando ninguém acredita
          e busca evolução todos os dias.
        </p>

      </section>

      <section className="  bg-white">

        <div className="relative overflow-hidden">

          <Image
            src="/images/banner-camisetas2.png"
            alt="Camisetas"
            width={1600}
            height={900}
            className="w-full"
          />


          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Conteúdo */}
          <div className="absolute inset-0 flex flex-col justify-center px-8">

            <h2 className=" mb-15 text-white text-[40px] leading-none font-thin tracking-[0.08em]">
              CAMISETAS
            </h2>



            <button className="mt-10 w-fit text-white text-[13px] tracking-[0.15em] uppercase border-b border-white pb-2">
              VER COLEÇÃO →
            </button>

          </div>

        </div>

      </section>

      <div className="grid grid-cols-2 bg-white">

        {/* OVERSIZED */}

        <div className="relative h-[320px] overflow-hidden">

          <Image
            src="/images/banner-oversized2.png"
            alt="Oversizeds"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-6 left-5">

            <h3 className="text-white text-2xl font-semibold">
              Oversizeds
            </h3>

            <p className="text-white/90 mt-2 text-sm">
              Ver coleção
            </p>

          </div>

        </div>

        {/* REGATAS */}

        <div className="relative h-[320px] overflow-hidden">

          <Image
            src="/images/banner-regatas.png"
            alt="Regatas"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-6 left-5">

            <h3 className="text-white text-2xl font-semibold">
              Regatas
            </h3>

            <p className="text-white/90 mt-2 text-sm">
              Ver coleção
            </p>

          </div>

        </div>

      </div>

      <section className="bg-white py-14">

        <div className="px-4 mb-8">

          <h2 className="text-black text-3xl font-semibold">
            Novidades
          </h2>

        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={12}
          slidesPerView={1}
          grabCursor={true}
        >

          <SwiperSlide>

            <Image
              src="/images/novidades/novidade-1.png"
              alt=""
              width={800}
              height={1200}
              className="w-full aspect-[0.75] object-cover"
            />

          </SwiperSlide>

          <SwiperSlide>

            <Image
              src="/images/novidades/novidade-2.png"
              alt=""
              width={800}
              height={1200}
              className="w-full aspect-[0.75] object-cover"
            />

          </SwiperSlide>

          <SwiperSlide>

            <Image
              src="/images/novidades/novidade-3.png"
              alt=""
              width={800}
              height={1200}
              className="w-full aspect-[0.75] object-cover"
            />

          </SwiperSlide>

          <SwiperSlide>

            <Image
              src="/images/novidades/novidade-4.png"
              alt=""
              width={800}
              height={1200}
              className="w-full aspect-[0.75] object-cover"
            />

          </SwiperSlide>



        </Swiper>

      </section>


      <footer className="bg-black border-t border-zinc-800">

        <div className="px-1 py-4">

          {/* Logo */}

          <div className="flex justify-center">

            <Image
              src="/images/logo.png"
              alt="Wolfgang"
              width={70}
              height={70}
            />

          </div>





          {/* Suporte */}

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

          {/* Instagram */}

          <div className="mt-10 border-t border-zinc-800 pt-8">

            <h3 className="text-white font-semibold tracking-wider uppercase text-sm">
              Instagram
            </h3>

            <p className="mt-4 text-zinc-400">
              @wolfgang.club
            </p>

          </div>

          {/* Rodapé final */}

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