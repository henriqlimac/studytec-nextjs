"use client";

import { User } from "@prisma/client";

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import Image from "next/image";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import logo from "@/public/logo.svg";

import NavItem from "./navitem";
import UserActions from "./actions";
import Link from "next/link";
import { Button } from "@nextui-org/react";

interface NavbarProps {
  currentUser: User;
}

export default function Navbar({ currentUser }: NavbarProps) {
  const routes = useRoutes();

  const [left, setLeft] = useState("left-[-100%]");

  const navOpen = () => {
    if (left == "left-[-100%]") {
      setLeft("left-0");
    } else {
      setLeft("left-[-100%]");
    }
  };

  return (
    <div>
      <nav
        className={`inset-0 ${left} xl:left-0 fixed w-full min-h-screen bg-slate-950 text-white md:w-[220px] transition-left py-4 px-5 z-50 border-r-border border-r-1 shadow-sm`}
      >
        <ul className="h-full flex flex-col justify-between">
          <div className="flex justify-between xl:justify-center items-center">
            <Image
              src={logo}
              alt="Logo"
              width={175}
              height={10}
              loading="lazy"
            />
            <button onClick={navOpen} className="xl:hidden text-primary">
              <BiChevronLeft className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {routes.map((item) => (
              <NavItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={navOpen}
              />
            ))}
          </div>
          <div className="w-full flex flex-col gap-4">
            {currentUser.isPremium ? (
              ""
            ) : (
              <Link
                href="/users/premium-plans"
                className="w-full bg-success text-sm flex justify-center items-center py-2 rounded-xl hover:bg-success-500 transition"
              >
                QUERO SER PREMIUM!
              </Link>
            )}
            <p className="text-center text-xs opacity-50">
              &copy; 2023 StudyTec
            </p>
          </div>
        </ul>
      </nav>
      <header className="w-full fixed bg-secondary h-14 p-4 flex items-center justify-between xl:justify-end border-b-border border-b-1 z-40 shadow-sm shadow-shadow">
        <button onClick={navOpen} className="xl:hidden text-typography p-[1px]">
          <BiChevronRight className="w-6 h-6" />
        </button>
        <UserActions currentUser={currentUser} />
      </header>
    </div>
  );
}
