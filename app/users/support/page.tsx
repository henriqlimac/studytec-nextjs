"use client";

import { useState } from "react";
import { Input, useDisclosure, Link } from "@nextui-org/react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";

import staring from "@/public/imgs/girl-staring.svg";
import flying from "@/public/imgs/robot-flying.svg";

import Article from "./components/article";
import SupportModal from "./components/modal";

const articleElements = [
  {
    id: 1,
    text: "Como faço para estudar na plataforma StudyTec?",
    modal:
      "Primeiramente entre na página de 'Estudos' e então escolha a sua primeira matéria ou a matéria de sua preferência. Após clicar em 'Ver mais' clique em um dos vídeos que deseja assistir na semana.",
  },
  {
    id: 2,
    text: "Estou tendo problemas com o pagamento dos planos, o que faço?",
    modal:
      "Caso você esteja tendo problemas para começar a pagar um plano, tente verificar se você já possui um cartão salvo em suas conta na parte de 'Configurações', remova-o e então coloque denovo e tente novamente.",
  },
  {
    id: 3,
    text: "Acabei de criar minha conta na StudyTec e desejo alterar informações, como faço?",
    modal:
      "Clique na seta ao lado do seu nome e vá em 'Configurações', nesta página você poderá alterar o que quiser do seu perfil.",
  },
  {
    id: 4,
    text: "Coloquei um e-mail perdido/não existente e desejo trocar, como faço?",
    modal:
      "Caso tenha colocado um email inexistente ou que tenha perdido nos mande um email mostrando suas configurações de perfil (com nome e email atual aparecendo) e nos dizendo o email que deseja recolocar.",
  },
  {
    id: 5,
    text: "Por acaso minhas credenciais de cartão ficam salvas nos dados do website?",
    modal:
      "Não, utilizamos sistemas dos próprios bancos, onde as informações ficam salvas apenas nestes bancos. Apenas recolhemos o 'salvamento' dos cartões, mas sem nenhum dado sequer do usuário.",
  },
  {
    id: 6,
    text: "Quais formas de pagamento posso utilizar para pagar os planos?",
    modal: "Cartões de crédito no geral, para que possa ser cobrada a fatura.",
  },
];

export default function Support() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [articleElement, setArticleElement] = useState<any>(null);

  const openDisclosure = (articleElement: any) => {
    setArticleElement(articleElement);
    onOpen();
  };

  return (
    <div className="pt-12">
      <div className="relative h-[40vh] p-4 bg-blue flex flex-col items-center justify-center gap-5 overflow-hidden bg-gradient-to-r from-blue to-indigo-400">
        <h1 className="text-2xl font-medium text-white z-20">
          Como podemos ajudar?
        </h1>
        <Input
          startContent={<BsSearch className="relative px-2 w-8 h-8 text-2xl" />}
          placeholder="Ex: Como faço para estudar"
          className="max-w-[400px] z-10"
          variant="faded"
        />
        <Image
          alt=""
          src={staring}
          className="opacity-10 xl:opacity-100 hidden lg:inline-block absolute w-[600px] left-0 top-0 z-0 select-none"
        />
        <Image
          alt=""
          src={flying}
          className="opacity-10 xl:opacity-100 absolute w-[600px] left-auto md:right-0 top-0 z-0 select-none"
        />
      </div>
      <div className="w-full flex flex-col items-center p-10 gap-10">
        <h1 className="text-2xl font-semibold">Perguntas Frequentes</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 flex-wrap">
          {articleElements.map((props) => (
            <>
              <Article
                key={props.id}
                text={props.text}
                onOpen={() => openDisclosure(props)}
              />
            </>
          ))}
        </div>
        {articleElement !== null ? (
          <SupportModal
            key={articleElement.id}
            title={articleElement.text}
            text={articleElement.modal}
            isOpen={isOpen}
            onOpenChange={() => {
              onOpenChange();
              setArticleElement(null);
            }}
          />
        ) : null}
      </div>
      <div className="w-full flex flex-col items-center p-10">
        <div className="flex flex-col items-center justify-center flex-wrap bg-primary p-12 rounded-xl w-full gap-5 border-1 border-border">
          <h1 className="text-2xl font-semibold">
            Não encontrou seu problema?
          </h1>
          <div className="text-center">
            <h2>Nos mande um email!</h2>
            <Link
              className="text-blue cursor-pointer text-xl"
            >
              studytec@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
