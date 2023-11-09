"use client";

import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { BiSolidZap, BiChevronDown, BiLogOut } from "react-icons/bi";
import {
  Avatar,
  AvatarIcon,
  Badge,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

import { BsGearFill } from "react-icons/bs";

interface NavbarProps {
  currentUser: User;
}

export default function UserActions({ currentUser }: NavbarProps) {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggle = () => {
    setOpenDropdown((old) => !old);
  };

  return (
    <div className="flex">
      <div className="flex">
        <div className="flex items-center gap-3 px-3">
          {currentUser?.isPremium == true ? (
            <Badge
              isOneChar
              content={<BiSolidZap className="w-[10px] h-[10px]" />}
              color="warning"
              placement="bottom-left"
            >
              <Avatar
                isBordered
                className="w-10 h-10"
                icon={currentUser?.image == null ? <AvatarIcon /> : null}
                color={currentUser?.isPremium == true ? "warning" : "default"}
                src={currentUser?.image || ""}
              />
            </Badge>
          ) : (
            <Avatar
              className="w-10 h-10"
              icon={currentUser?.image == null ? <AvatarIcon /> : null}
              src={currentUser?.image || ""}
            />
          )}
          <p className="text-sm">{currentUser?.name}</p>
        </div>
        <div className="flex items-center justify-center z-50">
          <button
            className="flex items-center justify-center w-[30px] h-[30px] rounded-lg bg-typography text-primary"
            onClick={() => {
              setOpenDropdown(!openDropdown);
            }}
          >
            <BiChevronDown className={`w-6 h-6 transition ${openDropdown ? "rotate-90" : ""}`} />
          </button>
          <div
            className={`absolute right-4 top-12 ${
              openDropdown ? "flex" : "hidden"
            } flex-col gap-3 bg-primary text-typography p-4 w-[300px] rounded-xl`}
          >
            <div className="flex flex-col">
              <span className="text-xs">Ações</span>
              <button
                className="flex items-center gap-2 cursor-pointer px-2 py-3 text-start hover:bg-secondary rounded-lg select-none"
                onClick={() => {
                  router.push("/configs");
                  setOpenDropdown(false);
                }}
              >
                <BsGearFill className="w-5 h-5" />
                <div className="flex flex-col">
                  <p className="text-sm">Configurações</p>
                  <p className="text-xs font-thin">Configurações de usuário</p>
                </div>
              </button>
            </div>
            <div className="flex flex-col">
              <span className="text-xs">Zona de Perigo</span>
              <button
                className="flex items-center gap-2 cursor-pointer px-2 py-3 text-start hover:bg-secondary rounded-lg select-none"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiLogOut className="w-5 h-5 text-danger" />
                <div className="flex flex-col">
                  <p className="text-sm text-danger">Finalizar sessão</p>
                  <p className="text-xs font-thin">Desconectar da conta</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        {openDropdown ? (
          <div
            className="fixed top-0 right-0 bottom-0 left-0 z-40 bg-black/20"
            onClick={toggle}
          ></div>
        ) : (
          <></>
        )}
      </div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="sm"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                SAIR DA CONTA
              </ModalHeader>
              <ModalBody>
                <p>Deseja realmente se desconectar da plataforma?</p>
              </ModalBody>
              <ModalFooter>
                <Button className="bg-blue text-white" onPress={onClose}>
                  Fechar
                </Button>
                <Button
                  color="danger"
                  className="border-danger border-3 hover:bg-transparent hover:text-danger"
                  onPress={() => {
                    signOut();
                    setOpenDropdown(false);
                  }}
                >
                  Sair
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
