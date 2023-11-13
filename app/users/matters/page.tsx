"use client";

import Image from "next/image";
import MattersCard from "./components/card";

import miniature from "@/public/imgs/boy-running.svg"

const CardElements = [
  {
    id: 1,
    matter: "matemática",
    color: "text-amber-400",
    button: "bg-amber-400",
  },
  {
    id: 2,
    matter: "português",
    color: "text-blue",
    button: "bg-blue",
  },
  {
    id: 3,
    matter: "física",
    color: "text-red-500",
    button: "bg-red-500",
  },
  {
    id: 4,
    matter: "geografia",
    color: "text-orange-400",
    button: "bg-orange-400",
  },
  {
    id: 5,
    matter: "biologia",
    color: "text-green-400",
    button: "bg-green-400",
  },
  {
    id: 6,
    matter: "história",
    color: "text-purple-400",
    button: "bg-purple-400",
  },
];

export default function Matters() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen pt-20 px-5 gap-10 relative">
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-6 z-10">
          {CardElements.map((matter) => (
            <MattersCard
              key={matter.id}
              matter={matter.matter}
              color={matter.color}
              button={matter.button}
              link={String(matter.id)}
            />
          ))}
        </div>
      </div>
      <Image 
        height={500}
        width={500}
        alt=""
        src={miniature}
        className="fixed right-0 bottom-[-25px] opacity-25"
      />
    </div>
  );
}
