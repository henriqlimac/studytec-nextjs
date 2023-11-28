"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Banner from "./components/banner";
import Progress from "./components/progress";

import { BsCheck, BsPlus } from "react-icons/bs";
import { LuSparkles } from "react-icons/lu";
import { MdWorkspacePremium } from "react-icons/md";
import { IoBuild } from "react-icons/io5";

const ExercisesList = [
  {
    id: 1,
    matter: "Matemática",
  },
  {
    id: 2,
    matter: "Português",
  },
  {
    id: 3,
    matter: "Física",
  },
  {
    id: 4,
    matter: "Geografia",
  },
  {
    id: 5,
    matter: "Biologia",
  },
  {
    id: 6,
    matter: "História",
  },
];

export default function Users() {
  const [isFinished, setIsFinished] = useState(false);
  const progress = 0;

  const weeklyPercentageProgress = progress * 8.3;
  const totalPercentageProgress = progress * 0.83;

  useEffect(() => {
    if (weeklyPercentageProgress >= 100) {
      setIsFinished(true);
    } else {
      setIsFinished(false);
    }
  }, [isFinished]);

  return (
    <div>
      <Banner>
        <h1 className="text-3xl font-bold text-white">BEM-VINDO!</h1>
        <p className="text-base opacity-70 text-white tracking-wide">
          O seu perfil foi criado! Agora você pode começar a estudar em nossa
          plataforma. Nesta página você poderá analisar seu desempenho semanal.
        </p>
        <a href="#beginning">
          <Button
            className="w-full md:w-[250px] bg-primary z-10 font-bold"
            radius="full"
          >
            <BsPlus className="w-6 h-6" />
            VER MAIS
          </Button>
        </a>
      </Banner>
      <section className="w-full flex flex-col gap-5 p-6" id="beginning">
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="bg-primary rounded-lg p-4 w-full flex flex-col items-center justify-center border-border border-1">
            <h1 className="font-semibold text-2xl text-center">
              Progresso Geral
            </h1>
            <div className="flex flex-col md:flex-row justify-center gap-5 p-6">
              <div className="flex flex-col items-center justify-center gap-3 bg-primary rounded-lg">
                <Progress
                  label="Semanal"
                  percentage={weeklyPercentageProgress}
                  progress={progress}
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-3 bg-primary p-5 rounded-lg">
                <Progress
                  label="Total"
                  percentage={totalPercentageProgress}
                  progress={progress}
                />
              </div>
            </div>
          </div>
          <div className="w-full bg-primary rounded-lg hidden 2xl:flex flex-col justify-start items-center gap-6 p-10 text-center relative border-border border-1">
            <h3 className="text-lg font-semibold">
              Exercícios relacionados (semanal)
            </h3>
            <ul className="w-full h-full flex flex-col items-start gap-5">
              {ExercisesList.map((matter) => (
                <a
                  className="text-typography justify-start bg-opacity-20 cursor-pointer w-full"
                  key={matter.id}
                >
                  <li className="flex items-center gap-2">
                    <BsCheck className="bg-success rounded-full" /> Lista de
                    exercícios - {matter.matter}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <div className="w-full lg:max-w-[400px] bg-primary rounded-lg flex flex-col justify-center items-center gap-6 p-10 text-center relative border-border border-1">
            <h2 className="text-2xl font-semibold">Ainda não é Premium?</h2>
            <p className="text-[0.90rem]">
              Na StudyTec proporcionamos planos diversos, dos quais vão do
              &quot;Básico&quot; até o &quot;Premium Plus&quot;. Está
              interessado? Clique no botão abaixo para saber mais.
            </p>
            <Link
              href="/users/premium-plans"
              className="w-full bg-success text-sm text-white font-semibold flex justify-center items-center py-2 rounded-xl hover:bg-success-600 transition gap-2"
            >
              <MdWorkspacePremium className="h-5 w-5" />
              QUERO SER PREMIUM!
            </Link>
            <LuSparkles className="absolute right-[-16px] top-[-12px] text-3xl text-amber-400 fill-amber-400" />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full bg-primary rounded-lg 2xl:hidden flex flex-col justify-start items-center gap-6 p-10 text-center relative border-border border-1">
            <h3 className="text-lg font-semibold">
              Exercícios relacionados (semanal)
            </h3>
            <ul className="w-full flex flex-col items-start gap-5">
              {ExercisesList.map((matter) => (
                <a
                  className="text-typography justify-start bg-opacity-20 cursor-pointer py-2 px-5 bg-secondary rounded-lg w-full select-none hover:text-typography/25 border-border border-1"
                  key={matter.id}
                >
                  <li className="flex items-center gap-2">
                    <BsCheck className="bg-success rounded-full" /> Lista de
                    exercícios - {matter.matter}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <div className="w-full bg-primary rounded-lg flex flex-col justify-start items-center gap-6 p-10 text-center relative border-border border-1">
            <h3 className="text-lg font-semibold">
              Redações relacionadas (semanal)
            </h3>
            <ul className="w-full flex flex-col items-start gap-5">
              <li>Assunto: Reciclagem</li>
              <li>Assunto: Cyberbullying</li>
            </ul>
          </div>
          <div className="hidden 2xl:flex w-full flex-col md:flex-row gap-5 relative">
            <div className="w-full bg-blue text-white rounded-lg flex justify-between items-center gap-2 p-10 relative border-border border-1">
              <div>
                <h2 className="text-xl font-semibold">
                  Gosta da nossa plataforma ou acha que tem algo a melhorar?
                </h2>
                <p>Nos mande um feedback!</p>
              </div>
              <div>
                <Link
                  href={
                    "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMjKSKwxFgsMCwPWVtNjRMTHWRLkplJCBwJkQRvvmNGkzrncqPSzLhLvjFrLMtNvXxQHMVB"
                  }
                >
                  <Button className="bg-success text-white font-semibold">
                    ENVIAR FEEDBACK
                  </Button>
                </Link>
              </div>
            </div>
            <IoBuild className="absolute right-4 top-4 text-3xl text-white fill-white" />
          </div>
        </div>
        <div className="flex 2xl:hidden w-full flex-col md:flex-row gap-5 relative">
          <div className="w-full bg-blue text-white rounded-lg flex flex-col md:flex-row justify-between items-center gap-6 p-10 relative border-border border-1">
            <div className="w-full">
              <h2>
                Gosta da nossa plataforma ou acha que tem algo a melhorar?
              </h2>
              <p>Nos mande um feedback!</p>
            </div>
            <div className="w-full md:w-auto">
              {" "}
              <Link
                href={
                  "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMjKSKwxFgsMCwPWVtNjRMTHWRLkplJCBwJkQRvvmNGkzrncqPSzLhLvjFrLMtNvXxQHMVB"
                }
              >
                <Button className="bg-success text-white font-semibold w-full md:w-auto">
                  ENVIAR FEEDBACK
                </Button>
              </Link>
            </div>
          </div>
          <IoBuild className="absolute right-[-16px] top-[-12px] text-3xl text-white fill-white" />
        </div>
        <div className="flex w-full flex-col md:flex-row gap-5">
          <div className="w-full bg-primary rounded-lg flex flex-col justify-center items-center p-10 relative border-border border-1">
            <h2 className="text-lg font-semibold">
              Tendo dúvidas em como utilizar o site? Acesse nosso suporte!
            </h2>
            <Link href={"/users/support"} className="text-blue cursor-pointer">
              Clique aqui para acessar o suporte.
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
