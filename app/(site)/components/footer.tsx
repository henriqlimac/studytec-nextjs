import Link from "next/link";

import Image from "next/image";
import logo from "@/public/logo.svg";
import {
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

import { Button } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="bg-white p-12 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-10 justify-between md:flex-row">
        <h1 className="text-3xl font-semibold max-w-[520px]">
          Está preparado para começar? Se inscreva hoje!
        </h1>
        <Link href={"/login"} className="w-full md:w-auto max-w-[520px]">
          <Button
            className="text-white bg-blue font-semibold px-6 w-full"
            radius="md"
          >
            COMEÇAR
          </Button>
        </Link>
      </div>
      <hr />
      <div className="flex flex-col justify-center">
        <Image width={200} height={50} alt="" src={logo} />
        <p className="text-slate-400 max-w-[300px]">
          Estude de forma moderna e organizada. Construa o seu futuro.
        </p>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <p>&copy; 2023 StudyTec</p>
        <div className="buttons flex gap-2">
          <Button isIconOnly className="bg-red-600 text-white text-2xl">
            <AiOutlineGoogle />
          </Button>
          <Button isIconOnly className="bg-violet-500 text-white text-2xl">
            <AiOutlineInstagram />
          </Button>
          <Button isIconOnly className="bg-black text-white text-2xl">
            <AiOutlineGithub />
          </Button>
        </div>
      </div>
    </footer>
  );
}
