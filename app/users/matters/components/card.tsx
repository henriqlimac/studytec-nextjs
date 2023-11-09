import { Card, CardBody, Button } from "@nextui-org/react";
import { BiChevronRight } from "react-icons/bi";

interface MattersCardProps {
  matter: string;
  color: string;
  button: string;
}

export default function MattersCard({ matter, color, button }: MattersCardProps) {
  return (
    <Card className={`max-w-[400px] bg-primary text-typography rounded-md py-4 shadow-sm`}>
      <CardBody className="flex flex-col gap-4">
        <h1 className={`font-semibold text-xl uppercase tracking-tight ${color}`}>{matter}</h1>
        <p className="text-sm font-medium">
          Veja os professores da matéria de {matter} clicando no botão abaixo:
        </p>
        <Button className={`flex items-center justify-center text-white border-black border-opacity-10 font-medium rounded-full max-w-[225px] ${button}`} variant="bordered">
          Ver os professores <BiChevronRight className="text-lg"/>
        </Button>
      </CardBody>
    </Card>
  );
}
