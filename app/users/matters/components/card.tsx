import { Card, CardBody, Button } from "@nextui-org/react";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

interface MattersCardProps {
  matter: string;
  color: string;
  button: string;
  link: string;
}

export default function MattersCard({ matter, color, button, link }: MattersCardProps) {
  return (
    <Card className={`max-w-[400px] bg-primary text-typography rounded-md py-4 shadow-none border-border border-1`}>
      <CardBody className="flex flex-col gap-4">
        <h1 className={`font-semibold text-xl uppercase tracking-tight ${color}`}>{matter}</h1>
        <p className="text-sm font-medium">
          Veja os professores da matéria de {matter} clicando no botão abaixo:
        </p>
        <Link className={`flex items-center justify-center text-white border-black border-opacity-10 font-medium rounded-full max-w-[225px] py-2 text-sm ${button}`} href={`/users/matters/${link}`}>
          Ver os professores <BiChevronRight className="text-lg"/>
        </Link>
      </CardBody>
    </Card>
  );
}
