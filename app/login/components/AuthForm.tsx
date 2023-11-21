"use client";

import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useState, useCallback, useEffect, useMemo } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Input, Button } from "@nextui-org/react";

import {
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineGoogle,
  AiOutlineGithub,
} from "react-icons/ai";
import { toast } from "react-hot-toast";

type Variant = "LOGIN" | "REGISTER";

export default function AuthForm() {
  const session = useSession();
  const router = useRouter();

  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    toast.loading("Carregando...");
    if (session?.status == "authenticated") {
      router.push("/users");
      setIsLoading(true);
      toast.dismiss();
      toast.success(`Bem-vindo, ${session.data.user?.name}!`);
    }
    if (session?.status !== "authenticated") {
      setIsLoading(false);
      toast.dismiss();
    }
  }, [session?.status, router, isLoading]);

  const validateEmail = (value: any) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const changeVariant = useCallback(() => {
    if (variant == "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant == "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Algo deu errado!"))
        .finally(() => setIsLoading(false));
    }

    if (variant == "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Credenciais incorretas");
          }

          if (callback?.ok && !callback?.error) {
            router.push("/users");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Credenciais inválidas");
          toast.loading("Voltando ao StudyTec...");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="bg-white rounded-lg py-12 px-9 w-full max-w-md">
      <form
        className="flex flex-col justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-semibold w-full text-center text-2xl py-4">
          Conecte-se na StudyTec
        </h1>
        {variant == "REGISTER" && (
          <Input
            id="name"
            label="Name"
            {...register("name", { required: true })}
            variant="bordered"
            isDisabled={isLoading}
          />
        )}
        <Input
          value={value}
          id="email"
          label="Email"
          type="email"
          {...register("email", { required: true })}
          variant="bordered"
          isDisabled={isLoading}
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "default"}
          errorMessage={isInvalid && "Por favor coloque um email válido"}
          onValueChange={setValue}
        />
        <Input
          id="password"
          label="Senha"
          type={isVisible ? "text" : "password"}
          {...register("password", { required: true })}
          variant="bordered"
          isDisabled={isLoading}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
        <div>
          <Button
            fullWidth
            type="submit"
            className={`${isLoading ? "bg-gray-400" : "bg-blue"} text-white`}
            isDisabled={isLoading}
          >
            {variant == "LOGIN" ? "Entrar" : "Registrar"}
          </Button>
        </div>
        <hr />
        <p className="w-full text-center pb-4">ou continue com</p>
      </form>
      <div className="w-full flex gap-2">
        <Button
          className="w-full"
          isDisabled={isLoading}
          variant="bordered"
          onClick={() => socialAction("google")}
        >
          <AiOutlineGoogle className="w-6 h-6 text-gray-400" />
        </Button>
        <Button
          className="w-full"
          isDisabled={isLoading}
          variant="bordered"
          onClick={() => socialAction("github")}
        >
          <AiOutlineGithub className="w-6 h-6 text-gray-400" />
        </Button>
      </div>
      <p className="text-sm w-full text-center pt-7">
        {variant == "LOGIN" ? "Não possui uma conta?" : "Já possui uma conta?"}{" "}
        <button
          onClick={changeVariant}
          className={`${isLoading ? "text-gray-400" : "text-blue"}`}
          disabled={isLoading}
        >
          {variant == "LOGIN"
            ? "Clique aqui para se registrar"
            : "Clique aqui para entrar"}
        </button>
      </p>
    </div>
  );
}
