"use client";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import axios from "axios";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Dangerzone() {
  const router = useRouter();
  const [disabled, isDisabled] = useState(true);

  function enableButton() {
    isDisabled(false);
  }

  setInterval(enableButton, 3000);

  const deleteAccount = () => {
    axios
      .delete("/api/settings")
      .then(() => {
        signOut();
        router.push("/login");
      })
      .catch(() => toast.error("Algo deu errado!"))
      .finally(() => {
        toast.success("Conta deletada com sucesso");
        router.push("/login");
      });
  };

  return (
    <div className="w-full min-h-screen bg-secondary flex justify-center items-center">
      <div className="bg-primary rounded-xl flex flex-col gap-5 py-5 px-5">
        <div className="w-full flex gap-10 items-center junstify-center">
          <div>
            <h2 className="font-semibold">Deletar a conta</h2>
            <p className="text-sm w-full max-w-[425px]">
              Ao clicar no botão abaixo você concordará em deletar sua conta
              permanentemente.
            </p>
          </div>
          <Button
            className="bg-blue text-sm text-white font-semibold px-3 hover:bg-blue/50 rounded-xl transition"
            onClick={() => router.push("/configs")}
          >
            VOLTAR
          </Button>
        </div>
        <div className="flex flex-col">
          <li>Ao deletar sua conta todos os seus dados serão removidos</li>
          <li>Mesmo se tiver um plano já pago e em uso também será removido</li>
          <li>A remoção de dados também inclui cartões de crédito</li>
          <li>Ao clicar no botão abaixo você está ciente de suas ações</li>
        </div>
        <button
          className={clsx(
            `bg-danger text-white font-medium text-sm py-3 px-6 m-4 rounded-xl`,
            disabled && "bg-danger/50 text-white/50"
          )}
          onClick={deleteAccount}
          disabled={disabled}
        >
          Sim, estou ciente das minhas ações e desejo deletar a minha conta.
        </button>
      </div>
    </div>
  );
}
