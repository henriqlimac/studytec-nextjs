"use client";

import { User } from "@prisma/client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Divider, Input } from "@nextui-org/react";
import ThemeSwitcher from "./themeSwitcher";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

interface UserInfoProps {
  currentUser: User;
}

export default function UserInfo({ currentUser }: UserInfoProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      image: currentUser?.image,
    },
  });

  const image = watch("image");

  const handleUpload = (result: any) => {
    setValue("image", result?.info?.secure_url, {
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/settings", data)
      .then(() => {
        router.refresh();
      })
      .catch(() => toast.error("Algo deu errado!"))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="bg-primary p-4 rounded-md h-full md:h-auto md:max-w-[450px] w-full flex flex-col justify-center gap-7 border-1 border-border shadow-shadow shadow-lg">
      <div className="w-full flex justify-between">
        <div>
          <h2 className="font-semibold">Perfil</h2>
          <p className="text-sm">Edite suas informações.</p>
        </div>
        <button
          className="border-danger bg-danger text-sm text-white px-3 border-3 hover:bg-transparent hover:text-danger rounded-xl transition"
          onClick={() => router.back()}
        >
          VOLTAR
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="flex flex-col gap-7">
            <div className="flex gap-2">
              <div className="flex flex-col justify-center items-center gap-3 w-full">
                <h2 className="font-medium">Foto de Perfil</h2>
                <div className="flex flex-col gap-5">
                  <Image
                    width={100}
                    height={100}
                    className="rounded-full object-cover aspect-[1/1]"
                    alt="Avatar"
                    src={image || currentUser?.image || "/images/"}
                  />
                  <CldUploadButton
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset="dlw1oseb"
                    className="underline"
                  >
                    Mudar
                  </CldUploadButton>
                </div>
              </div>
              <Divider orientation="vertical"/>
              <div className="flex flex-col w-full gap-2">
                <Input
                  labelPlacement="outside"
                  label={<h2 className="font-medium text-base">Nome</h2>}
                  id="name"
                  required
                  {...register("name", { required: true })}
                  placeholder="Coloque o nome que deseja aqui"
                />
                <Input
                  disabled
                  labelPlacement="outside"
                  label={<h2 className="font-medium text-base">Email</h2>}
                  placeholder={currentUser?.email || ""}
                />
              </div>
            </div>
            <Divider />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 items-start">
                <h2 className="font-medium">Esquema de Cores</h2>
                <div className="flex w-full justify-between">
                  <ThemeSwitcher />
                  {/* Habilitar P&B */}
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`text-sm w-full py-2 rounded-xl bg-blue text-white hover:bg-blue/90 transition ${isLoading ? "bg-gray-400" : ""
                  }`}
                onClick={() => {
                  toast.success("Alterações feitas com sucesso!");
                  router.push("/users");
                }}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
