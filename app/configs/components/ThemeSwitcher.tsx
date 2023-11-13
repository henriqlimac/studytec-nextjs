"use client";

import { useState, useEffect } from "react";

import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  BsChevronDown,
  BsSunFill,
  BsMoonFill,
  BsCircleHalf,
} from "react-icons/bs";

const themeStorageKey = "theme";

enum Theme {
  light = "light",
  dark = "dark",
  highContrast = "highContrast",
}

export default function ThemeSwitcher() {
  const [storageTheme, setStorageTheme] = useState<Theme>()
  const [theme, setTheme] = useState<Theme>(storageTheme || Theme.light);

  useEffect(() => {
    const localStorageTheme: any = localStorage.getItem("theme");
    setStorageTheme(localStorageTheme)
  }, [])

  useEffect(() => {
    const selectedTheme: Theme =
      (localStorage.getItem(themeStorageKey) as Theme) ?? Theme.light;
    setTheme(selectedTheme ?? Theme.light);
  }, []);

  useEffect(() => {
    const rootElem = document.documentElement;
    rootElem.setAttribute("data-theme", theme);
    localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  const descriptionsMap = {
    light:
      "Esquema de cores que trará ao site um ar diurno, onde recomendamos que utilize em locais mais claros, se for o caso.",
    dark: "Esquema de cores que trará ao site um ar noturno, onde recomendamos que utilize em locais mais escuros, se for o caso.",
    highconstrast:
      "Esquema de cores que trará ao site um grande contraste de cores, recomendamos que utilize em casos de dificuldade em enxergar diferença entre as cores.",
  };

  const labelsMap: any = {
    light: "Modo claro",
    dark: "Modo escuro",
    highconstrast: "Modo alto contraste",
  };

  return (
    <div>
        <ButtonGroup variant="flat">
          <Button className="text-typograpy">
            {theme == Theme.light ? <BsSunFill /> : ""}{" "}
            {theme == Theme.dark ? <BsMoonFill /> : ""}{" "}
            {theme == Theme.highContrast ? <BsCircleHalf /> : ""}{" "}
          </Button>
          <Dropdown
            placement="bottom-end"
            className="bg-primary text-typography"
          >
            <DropdownTrigger>
              <Button isIconOnly>
                <BsChevronDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              selectedKeys={storageTheme}
              selectionMode="single"
              className="max-w-[300px]"
            >
              <DropdownItem
                key="light"
                description={
                  <p className="hidden md:inline-block">
                    {descriptionsMap["light"]}
                  </p>
                }
                onClick={() => setTheme(Theme.light)}
                startContent={<BsSunFill />}
              >
                {labelsMap["light"]}
              </DropdownItem>
              <DropdownItem
                key="highconstrast"
                description={
                  <p className="hidden md:inline-block">
                    {descriptionsMap["highconstrast"]}
                  </p>
                }
                onClick={() => setTheme(Theme.highContrast)}
                startContent={<BsCircleHalf />}
              >
                {labelsMap["highconstrast"]}
              </DropdownItem>
              <DropdownItem
                key="dark"
                description={
                  <p className="hidden md:inline-block">
                    {descriptionsMap["dark"]}
                  </p>
                }
                onClick={() => setTheme(Theme.dark)}
                startContent={<BsMoonFill />}
              >
                {labelsMap["dark"]}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ButtonGroup>
    </div>
  );
}
