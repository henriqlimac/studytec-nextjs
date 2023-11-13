import { useMemo } from "react";
import { usePathname } from "next/navigation";

import {
  FaHome,
  FaThLarge,
  FaListAlt,
  FaPenFancy,
  FaHeadset,
} from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md"

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Página Inicial",
        href: "/users",
        icon: FaHome,
        active: pathname == "/users",
      },
      {
        label: "Matérias",
        href: "/users/matters",
        icon: FaThLarge,
        active: pathname == "/users/matters",
      },
      {
        label: "Estudos",
        href: "/users/plan",
        icon: FaListAlt,
        active: pathname == "/users/plan",
      },
      {
        label: "Provas",
        href: "/users/exams",
        icon: FaPenFancy,
        active: pathname == "/users/exams",
      },
      {
        label: "Planos",
        href: "/users/premium-plans",
        icon: MdWorkspacePremium,
        active: pathname == "/users/premium-plans",
      },
      {
        label: "Suporte",
        href: "/users/support",
        icon: FaHeadset,
        active: pathname == "/users/support",
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
