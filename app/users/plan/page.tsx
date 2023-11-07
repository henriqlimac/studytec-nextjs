"use client";

import { useState } from "react";
import CardComponent from "./components/card";
import PlanModal from "./components/modal";

import { useDisclosure } from "@nextui-org/react";

const CardElements = [
  {
    id: 1,
    matter: "matemática",
    link1: "/users/plan/video",
    link2: "/users/plan/video",
    i1: "Potência",
    i2: "Equação",
    color: "text-amber-400",
    button: "bg-amber-400",
    success: false
  },
  {
    id: 2,
    matter: "português",
    link1: "/users/plan/video",
    link2: "/users/plan/video",
    i1: "Pretéritos",
    i2: "Expressões",
    color: "text-sky-500",
    button: "bg-sky-500",
    success: false
  },
  {
    id: 3,
    matter: "física",
    link1: "/users/plan/video",
    link2: "/users/plan/video",
    i1: "MRU",
    i2: "MRUV",
    color: "text-red-500",
    button: "bg-red-500",
    success: false
  },
  {
    id: 4,
    matter: "geografia",
    link1: "/users/plan/video",
    link2: "/users/plan/video",
    i1: "Nações",
    i2: "Formação de Espaços Geográficos",
    color: "text-orange-400",
    button: "bg-orange-400",
    success: false
  },
  {
    id: 5,
    matter: "biologia",
    link1: "/users/plan/video",
    link2: "/users/plan/video",
    i1: "Célula",
    i2: "DNA",
    color: "text-green-400",
    button: "bg-green-400",
    success: false
  },
  {
    id: 6,
    matter: "história",
    link1: "/users/plan/video",
    link2: "/users/plan/video",
    i1: "Era Vargas",
    i2: "Revolução Industrial",
    color: "text-purple-400",
    button: "bg-purple-400",
    success: false
  },
];

interface PlanProps {
  success: boolean;
}

export default function Plan({ success }: PlanProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [cardElement, setCardElement] = useState<any>(null);

  const openDisclosure = (cardElement: any) => {
    setCardElement(cardElement);
    onOpen();
  };

  return (
    <div className="pt-16 p-4">
      <div className="w-full flex flex-col items-center">
        {CardElements.map((props) => (
          <>
            <CardComponent
              key={props.id}
              matter={props.matter}
              i1={props.i1}
              i2={props.i2}
              color={props.color}
              button={props.button}
              success={props.success}
              onOpen={() => openDisclosure(props)}
            />
          </>
        ))}
      </div>
      {cardElement !== null ? (
        <PlanModal
          key={cardElement.id}
          matter={cardElement.matter}
          link1={cardElement.link1}
          link2={cardElement.link2}
          i1={cardElement.i1}
          i2={cardElement.i2}
          color={cardElement.color}
          isOpen={isOpen}
          onOpenChange={() => {
            onOpenChange();
            setCardElement(null);
          }}
        />
      ) : null}
    </div>
  );
}
