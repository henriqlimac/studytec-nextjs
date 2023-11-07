import { useMemo } from "react";
import { usePathname } from "next/navigation";

import {
  BiSolidHome,
  BiSolidBook,
  BiSolidZap,
  BiSolidBrain,
  BiSolidPhone,
} from "react-icons/bi";

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Página Inicial",
        href: "/users",
        icon: BiSolidHome,
        active: pathname == "/users",
      },
      {
        label: "Matérias",
        href: "/users/matters",
        icon: BiSolidBook,
        active: pathname == "/users/matters",
      },
      {
        label: "Plano",
        href: "/users/plan",
        icon: BiSolidZap,
        active: pathname == "/users/plan",
      },
      {
        label: "Provas",
        href: "/users/exams",
        icon: BiSolidBrain,
        active: pathname == "/users/exams",
      },
      {
        label: "Suporte",
        href: "/users/support",
        icon: BiSolidPhone,
        active: pathname == "/users/support",
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
