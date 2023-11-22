"use client";

import { Card, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";

import Image from "next/image";

interface ArticleProps {
  text: string;
  onOpen: () => void;
}

export default function Article({ text, onOpen }: ArticleProps) {
  return (
    <Card className="w-full max-w-[400px] shadow-none border-border border-1 bg-primary">
      <CardBody className="h-[200px] flex flex-col items-center justify-center gap-5 px-10 text-center overflow-hidden">
        <div className="bg-black py-5 px-5 text-white rounded-xl flex items-center justify-center">
            <h1 className="text-4xl font-thin">ST</h1>
        </div>
        <p>{text}</p>
      </CardBody>
      <Divider />
      <CardFooter className="flex items-center justify-center text-center">
        <Link
          showAnchorIcon
          onClick={() => onOpen()}
          className="text-blue cursor-pointer"
        >
          Clique aqui para saber mais.
        </Link>
      </CardFooter>
    </Card>
  );
}
