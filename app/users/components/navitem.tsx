"use client";

import clsx from "clsx";
import Link from "next/link";

interface NavItemProps {
  label: string;
  icon: any;
  href: string;
  active?: boolean;
  onClick: () => void;
}

export default function NavItem({
  label,
  icon: Icon,
  href,
  active,
  onClick
}: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={clsx(
          `
                group
                flex
                gap-x-3
                rounded-md
                p-3
                leading-6
                hover:bg-slate-900
            `,
          active && "bg-slate-900 font-medium"
        )}
      >
        <Icon
          className="
                h-6 w-6 shrink-0
            "
        />
        <span className="text-sm">{label}</span>
      </Link>
    </li>
  );
}
