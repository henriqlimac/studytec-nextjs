"use client";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { AiFillCheckCircle } from "react-icons/ai";

interface CardProps {
  matter: string;
  i1: string;
  i2: string;
  color: string;
  button: string;
  onOpen: () => void;
  success?: boolean;
}

export default function CardComponent({
  matter,
  i1,
  i2,
  color,
  button,
  onOpen,
  success,
}: CardProps) {
  return (
    <Card className="w-full max-w-[800px] m-4 border-border border-1 shadow-none">
      <CardHeader
        className={`${color} bg-primary ${success ? "bg-success" : ""}`}
      >
        <h1
          className={`font-medium ${success ? "text-white" : color} uppercase`}
        >
          {matter}
        </h1>
      </CardHeader>
      <Divider className="border-border border-1" />
      <CardBody className="bg-primary flex flex-col gap-3 text-typography">
        <div className="flex justify-between">
          <h2 className="font-medium">SOBRE</h2>
          {success ? (
            <p className="flex items-center gap-2 text-success">
              <AiFillCheckCircle /> ASSISTIDO
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <p className="text-sm">
            Clique no botão para ver os 2 vídeos semanais de {matter} esta
            semana. Falaremos sobre os assuntos &quot;{i1}&quot; e &quot;{i2}
            &quot;.
          </p>
          <Button
            className={`${success ? "bg-success" : button} text-white`}
            onClick={() => onOpen()}
          >
            VER MAIS
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
