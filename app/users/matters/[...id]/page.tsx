"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import i1 from "@/public/imgs/placeholder1.svg";
import i2 from "@/public/imgs/placeholder2.svg";
import astronaut from "@/public/imgs/astronaut.png";

import { BiChevronLeft } from "react-icons/bi";

export default function Matter() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

  const pageElements = [
    {
      id: 1,

      i1: i1,
      p1: "Henrique Lima",

      i2: i2,
      p2: "Lorem Ipsum",

      i3: i1,
      p3: "Lorem Ipsum",

      i4: i2,
      p4: "Lorem Ipsum",

      matter: "Matemática",
      color: "text-amber-400",
    },
    {
      id: 2,

      i1: i1,
      p1: "Amanda Chagas",

      i2: i2,
      p2: "Lorem Ipsum",

      i3: i1,
      p3: "Lorem Ipsum",

      i4: i2,
      p4: "Lorem Ipsum",

      matter: "Português",
      color: "text-blue",
    },
    {
      id: 3,

      i1: i1,
      p1: "Hoender",

      i2: i2,
      p2: "Lorem Ipsum",

      i3: i1,
      p3: "Lorem Ipsum",

      i4: i2,
      p4: "Lorem Ipsum",

      matter: "Física",
      color: "text-red-500",
    },
    {
      id: 4,

      i1: i1,
      p1: "Ivan Bonadio",

      i2: i2,
      p2: "Lorem Ipsum",

      i3: i1,
      p3: "Lorem Ipsum",

      i4: i2,
      p4: "Lorem Ipsum",

      matter: "Geografia",
      color: "text-orange-400",
    },
    {
      id: 5,

      i1: i1,
      p1: "Régis",

      i2: i2,
      p2: "Lorem Ipsum",

      i3: i1,
      p3: "Lorem Ipsum",

      i4: i2,
      p4: "Lorem Ipsum",

      matter: "Biologia",
      color: "text-green-400",
    },
    {
      id: 6,

      i1: i1,
      p1: "Nicolau Kardash",

      i2: i2,
      p2: "Lorem Ipsum",

      i3: i1,
      p3: "Lorem Ipsum",

      i4: i2,
      p4: "Lorem Ipsum",

      matter: "História",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="p-5 min-h-screen max-h-screen transition-all flex flex-col items-center justify-center">
      {pageElements
        .filter((x) => x.id == id)
        .map((params) => (
          <div
            key={params.id}
            className="flex flex-col gap-7 justify-center items-center w-full pt-14 text-center"
          >
            <h1 className="text-xl font-medium xl:text-2xl">
              Esses serão seus professores da matéria de <br />
              <strong className={`uppercase text-3xl ${params.color}`}>
                {params.matter}
              </strong>
            </h1>
            <div className="flex flex-col gap-5 justify-center items-start w-full max-w-[620px]">
              <div className="flex items-center gap-3 bg-primary py-3 px-4 rounded-xl w-full">
                <Image
                  height={50}
                  width={50}
                  alt=""
                  src={params.i1}
                  className={`bg-primary rounded-full w-full h-full max-w-[50px] max-h-[50px] object-cover ${
                    params.p1 ? "inline-block" : "hidden"
                  }`}
                />
                <p>{params.p1}</p>
              </div>
              <div className="flex items-center gap-3 bg-primary py-3 px-4 rounded-xl w-full">
                <Image
                  height={50}
                  width={50}
                  alt=""
                  src={params.i2}
                  className={`bg-primary rounded-full w-full h-full max-w-[50px] max-h-[50px] object-cover ${
                    params.p2 ? "inline-block" : "hidden"
                  }`}
                />
                <p>{params.p2}</p>
              </div>
              <div className="flex items-center gap-3 bg-primary py-3 px-4 rounded-xl w-full">
                <Image
                  height={50}
                  width={50}
                  alt=""
                  src={params.i3}
                  className={`bg-primary rounded-full w-full h-full max-w-[50px] max-h-[50px] object-cover ${
                    params.p3 ? "inline-block" : "hidden"
                  }`}
                />
                <p>{params.p3}</p>
              </div>
              <div className="flex items-center gap-3 bg-primary py-3 px-4 rounded-xl w-full">
                <Image
                  height={50}
                  width={50}
                  alt=""
                  src={params.i4}
                  className={`bg-primary rounded-full w-full h-full max-w-[50px] max-h-[50px] object-cover ${
                    params.p4 ? "inline-block" : "hidden"
                  }`}
                />
                <p>{params.p4}</p>
              </div>
            </div>
            <button
              className="text-blue flex gap-1 items-center underline md:no-underline md:hover:underline md:active:underline"
              onClick={() => router.push("/users/matters")}
            >
              <BiChevronLeft />
              VOLTAR
            </button>
          </div>
        ))}
      {isNaN(id) || id > 6 ? (
        <div className="min-h-screen w-full flex flex-col items-center justify-center gap-5">
          <div className="relative">
            <Image
              width={150}
              alt="Ícone de astronauta flutuando"
              src={astronaut}
              className="animate-appearance-in"
            />
          </div>
          <h1 className="text-2xl font-semibold">
            Esta página não está disponível
          </h1>
          <button
            className="text-blue flex gap-1 items-center p-2 px-4 border-1 border-blue/50 rounded-full hover:bg-blue/10 transition"
            onClick={() => router.push("/users/matters")}
          >
            Clique aqui para voltar
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
