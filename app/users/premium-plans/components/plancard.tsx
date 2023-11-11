"use client"

import { Button } from "@nextui-org/react";
import { User } from "@prisma/client";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { IoSparklesSharp } from "react-icons/io5";

interface PlanCardProps {
  color: string;
  title: string;
  description: string;
  price: string;
  function1?: boolean;
  function2?: boolean;
  function3?: boolean;
  function4?: boolean;
  disabled?: boolean;
  currentUser: User
}

export default function PlanCard({
  color,
  title,
  description,
  price,
  function1,
  function2,
  function3,
  function4,
  disabled,
  currentUser
}: PlanCardProps) {
  return (
    <div className="bg-primary w-full max-w-[300px] h-[500px] flex flex-col gap-6 p-8 text-center rounded-lg flex-grow relative">
      <div className="flex flex-col gap-4 h-full">
        <h1 className={`text-2xl font-semibold ${color}`}>{title}</h1>
        <p>{description}</p>
      </div>
      <h1 className="text-3xl h-full font-bold flex items-center justify-center">
        {price}
      </h1>
      <ul className="h-full flex flex-col justify-center">
        <li className="flex items-center gap-2">
          {function1 ? (
            <AiFillCheckCircle className="fill-success" />
          ) : (
            <AiFillCloseCircle />
          )}{" "}
          Acesso aos vídeos
        </li>
        <li className="flex items-center gap-2">
          {function2 ? (
            <AiFillCheckCircle className="fill-success" />
          ) : (
            <AiFillCloseCircle />
          )}{" "}
          Ícone especial
        </li>
        <li className="flex items-center gap-2">
          {function3 ? (
            <AiFillCheckCircle className="fill-success" />
          ) : (
            <AiFillCloseCircle />
          )}{" "}
          Removedor de anúncios
        </li>
        <li className="flex items-center gap-2">
          {function4 ? (
            <AiFillCheckCircle className="fill-success" />
          ) : (
            <AiFillCloseCircle />
          )}{" "}
          Psicólogo online
        </li>
      </ul>
      <Button fullWidth disabled={disabled} className={`h-full font-bold ${disabled ? "" : "bg-success text-white"}`}>{disabled ? "JÁ POSSUI!" : "COMEÇAR O MEU PLANO"}</Button>
      <IoSparklesSharp className={`absolute right-[-16px] top-[-12px] ${color} text-3xl`} />
    </div>
  );
}
