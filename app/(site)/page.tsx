"use client";

import "../themes/animations.css"

import Image from "next/image";
import Header from "./components/header";

import { p1, p2, example1, example2, wave, grid, mode } from "@/public/imgs";
import Carousel from "./components/carousel";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Header />
      <div className="landing">
        <div className="section flex items-center justify-center flex-col text-center gap-20 min-h-screen w-full pt-20 relative z-10">
          <div className="flex flex-col items-center justify-center gap-6 p-5">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-blue tracking-wider font-medium frombottom">
                SUA NOVA PLATAFORMA DE ESTUDOS
              </p>
              <h1 className="text-4xl font-semibold">
                O estudo que{" "}
                <strong className="font-semibold bg-blue bg-opacity-50 px-2 border-l rounded-l-lg border-r-3 border-r-blue relative">
                  você
                  <div className="bg-blue py-1 px-2 absolute right-[-66px] top-[-23px] text-xs text-white hidden sm:block">
                    StudyTec
                  </div>
                </strong>{" "}
                <br /> merece.
              </h1>
            </div>
            <p className="max-w-md font-medium text-slate-700">
              A plataforma de estudos StudyTec poderá ampliar a forma como
              estudamos para um vestibulinho ou até mesmo para revisão de
              conteúdos fundamentais.
            </p>
          </div>
          <div className="images flex items-center justify-center w-full h-full overflow-hidden pb-20">
            <Image
              width={325}
              height={330}
              alt="Image about (something)"
              src={p1}
              className="shadow-2xl relative rounded-md hidden md:block select-none"
            />
            <Image
              width={325}
              height={450}
              alt="Image about (something)"
              src={p2}
              className="shadow-2xl relative z-10 rounded-md select-none"
            />
            <Image
              width={325}
              height={330}
              alt="Image about (something)"
              src={p1}
              className="shadow-2xl relative rounded-md hidden md:block select-none"
            />
          </div>
        </div>
        <div className="w-full h-60 relative">
          <Image
            alt=""
            src={wave}
            className="w-full absolute bottom-0 select-none"
          />
        </div>
        <div className="section bg-slate-900 text-white min-h-[600px] flex flex-col justify-center items-center gap-10 text-center xl:text-left xl:flex-row">
          <div className="description w-full max-w-md flex flex-col gap-4 px-5">
            <p className="font-medium text-slate-300 tracking-wide text-base">
              SE <strong className="text-blue font-medium">APROFUNDE</strong> EM{" "}
              <strong className="text-white font-medium">NOVAS</strong>{" "}
              <strong className="text-amber-300 font-medium">CORES</strong>
            </p>
            <h1 className="text-4xl font-semibold">
              Explore outros temas <br /> de cores
            </h1>
            <p className="text-base text-slate-300">
              Sinta-se livre para mudar o seu tema de cores do site, seja para
              modo claro, escuro ou alto contraste.
            </p>
          </div>
          <div className="illustrations">
            <Image
              width={600}
              height={600}
              alt=""
              src={grid}
              className="opacity-20 absolute right-0 hidden lg:right-auto md:block"
            />
            <Image
              alt=""
              src={mode}
              className="z-10 top-10 left-10 md:relative"
            />
          </div>
        </div>
        <div className="w-full h-60 relative">
          <Image
            alt=""
            src={wave}
            className="w-full absolute rotate-180 select-none"
          />
        </div>
        <div className="section w-full min-h-screen relative z-10 flex items-center flex-col gap-10 justify-center p-10 md:flex-row">
          <Image alt="" src={example1} className="hidden md:block" />
          <div className="description max-w-lg text-center md:text-right flex flex-col">
            <div className="text py-20">
              <h1 className="font-semibold text-4xl">
                Estudar ficou ainda <br /> mais fácil
              </h1>
              <p>
                Conte com a nossa equipe para aprimorar a sua experiência, nosso
                suporte sempre estará aberto para ajudar.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <Image alt="" src={example1} className="w-full md:hidden" />
              <Image alt="" src={example2} className="" />
            </div>
          </div>
        </div>
        <div className="section w-full items-center justify-center">
          <div className="description flex flex-col items-center justify-center w-full text-center py-40 gap-20">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-semibold">Nossa equipe</h1>
              <p className="text-base max-w-[500px]">
                Conte com a nossa equipe para aprimorar a sua experiência, nosso
                suporte sempre estará aberto para ajudar.
              </p>
            </div>
            <Carousel />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
