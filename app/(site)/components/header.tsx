import Image from "next/image";
import logo from "@/public/logodark.svg";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-14 w-full px-5 border-gray-300 border-b-1 bg-slate-50 flex items-center justify-center fixed top-0 z-50">
      <div className="max-w-screen-xl w-full flex items-center justify-between">
        <Image height={10} width={175} alt="Logo" src={logo} />
        <div>
          <Link href={"/login"}>
            <Button
              className="text-white bg-blue font-semibold px-6"
              radius="md"
            >
              COMEÇAR
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
