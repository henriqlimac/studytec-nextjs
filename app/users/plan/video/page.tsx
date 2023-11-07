"use client";

import { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";

export default function VideoPage() {
  const [isChecked, setIsChecked] = useState(false);

  if (isChecked == true) {
  }

  return (
    <div className="pt-16 md:pt-0 md:min-h-screen w-full flex flex-col items-center justify-center gap-5">
      <iframe
        className="w-full max-w-[900px] h-[240px] md:h-[425px] lg:h-[506px]"
        src="https://www.youtube.com/embed/NNrXShBE-tI?si=I-4oKtESis4cO9RQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="description w-full max-w-[900px] flex flex-col md:flex-row gap-2 p-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Aprender a Codar é fácil</h1>
          <p className="opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad autem
            nostrum quidem odit tempore impedit, veniam voluptates architecto
            modi atque expedita doloremque ullam earum quia. Deserunt, qui
            fugit. Est, veniam.
          </p>
        </div>
        <div className="flex md:flex-col items-end justify-between">
          <Checkbox
            color="success"
            isSelected={isChecked}
            onValueChange={setIsChecked}
          >
            <p className={`${isChecked == true ? "text-success" : ""}`}>
              Assistido
            </p>
          </Checkbox>
          <Link
            href={"/users/plan"}
            className="underline inline-flex items-center gap-2 text-blue"
          >
            <BsChevronLeft />
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}
