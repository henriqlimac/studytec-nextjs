"use client";

import { IoSparklesSharp } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import "../themes/animations.css";
import Banner from "./components/banner";
import Progress from "./components/progress";
import { useState, useEffect } from "react";
import { User } from "@prisma/client";
import { BsCheck } from "react-icons/bs";

interface LandingProps {
  currentUser: User;
}

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

export default function Users({ currentUser }: LandingProps) {
  const [isFinished, setIsFinished] = useState(false);

  const progress = 11;

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
        <p className="text-base opacity-70 text-white tracking-wide max-w-[650px]">
          O seu perfil foi criado! Agora você pode começar a estudar em nossa
          plataforma. Nesta página você poderá analisar seu desempenho semanal.
        </p>
        <Button
          className="w-full md:w-[250px] bg-primary z-10"
          href="#beginning"
        >
          VER MAIS
        </Button>
      </Banner>
      <section className="w-full flex flex-col gap-5 p-6" id="beginning">
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="bg-primary rounded-lg p-4 w-full flex flex-col items-center justify-center">
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
          <div className="w-full bg-primary rounded-lg hidden 2xl:flex flex-col justify-start items-center gap-6 p-10 text-center relative">
            <h3 className="text-lg font-semibold">
              Exercícios relacionados (semanal)
            </h3>
            <ul className="w-full h-full flex flex-col items-start gap-5">
              {ExercisesList.map((matter) => (
                <a className="text-typography justify-start bg-opacity-20 cursor-pointer w-full">
                  <li key={matter.id} className="flex items-center gap-2">
                    <BsCheck className="bg-success rounded-full" /> Lista de
                    exercícios - {matter.matter}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          {/* {currentUser.isPremium ? (
            ""
          ) : ( */}
          <div className="w-full lg:max-w-[400px] bg-primary rounded-lg flex flex-col justify-center items-center gap-6 p-10 text-center relative">
            <h2 className="text-2xl font-semibold">Ainda não é Premium?</h2>
            <p className="text-[0.90rem]">
              Na StudyTec proporcionamos planos diversos, dos quais vão do
              "Básico" até o "Premium Plus". Está interessado? Clique no botão
              abaixo para saber mais.
            </p>
            <Link
              href="/users/premium-plans"
              className="w-full bg-success text-sm font-semibold flex justify-center items-center py-2 rounded-xl hover:bg-success-500 transition"
            >
              QUERO SER PREMIUM!
            </Link>
            <IoSparklesSharp className="absolute right-[-16px] top-[-12px] fill-amber-400 text-3xl" />
          </div>
          {/* )} */}
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full bg-primary rounded-lg 2xl:hidden flex flex-col justify-start items-center gap-6 p-10 text-center relative">
            <h3 className="text-lg font-semibold">
              Exercícios relacionados (semanal)
            </h3>
            <ul className="w-full flex flex-col items-start gap-5">
              {ExercisesList.map((matter) => (
                <a className="text-typography justify-start bg-opacity-20 cursor-pointer py-2 px-5 bg-secondary rounded-lg w-full select-none hover:text-typography/25">
                  <li key={matter.id} className="flex items-center gap-2">
                    <BsCheck className="bg-success rounded-full" /> Lista de
                    exercícios - {matter.matter}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <div className="w-full bg-primary rounded-lg flex flex-col justify-start items-center gap-6 p-10 text-center relative">
            <h3 className="text-lg font-semibold">
              Redações relacionadas (semanal)
            </h3>
            <ul className="w-full flex flex-col items-start gap-5">
              <li>Assunto: Reciclagem</li>
              <li>Assunto: Cyberbullying</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
