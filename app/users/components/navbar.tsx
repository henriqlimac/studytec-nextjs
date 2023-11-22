"use client";

import { User } from "@prisma/client";

import useRoutes from "@/app/hooks/useRoutes";
import { useEffect, useState } from "react";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import NavItem from "./navitem";
import UserActions from "./actions";

import "../../themes/images.css";
import Link from "next/link";

interface NavbarProps {
  currentUser: User;
}

export default function Navbar({ currentUser }: NavbarProps) {
  const routes = useRoutes();

  const [left, setLeft] = useState("left-[-100%]");
  const [theme, getTheme]: any = useState();

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme");
    getTheme(storageTheme);
  }, [theme]);

  const navOpen = () => {
    if (left == "left-[-100%]") {
      setLeft("left-0");
    } else {
      setLeft("left-[-100%]");
    }
  };

  return (
    <div>
      <aside
        className={`inset-0 ${left} xl:left-0 fixed w-full min-h-screen bg-primary text-white md:w-[220px] transition-left py-4 px-5 z-50 border-r-border border-r-1 shadow-sm`}
      >
        <ul className="h-full flex flex-col justify-between">
          <div className="flex justify-between xl:justify-center items-center">
            <Link href={"/users"} className={`h-12 w-40 logo`}></Link>
            <button onClick={navOpen} className="xl:hidden text-primary">
              <BiChevronLeft className="w-6 h-6 text-typography" />
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
          <div className="w-full flex flex-col">
            <p className="text-center text-xs opacity-50 text-typography">
              &copy; 2023 StudyTec
            </p>
            <p className="text-center text-xs opacity-50 text-typography">
              Artes feitas por{" "}
              <a
                href="https://pablostanley.gumroad.com/l/transhumans"
                className="text-blue"
                target="_blank"
              >
                Pablo Stanley
              </a>
            </p>
          </div>
        </ul>
      </aside>
      <header className="w-full fixed bg-secondary h-14 p-4 flex items-center justify-between xl:justify-end border-b-border border-b-1 z-40 shadow-sm shadow-shadow">
        <button onClick={navOpen} className="xl:hidden text-typography p-[1px]">
          <BiChevronRight className="w-6 h-6" />
        </button>
        <UserActions currentUser={currentUser} />
      </header>
    </div>
  );
}
