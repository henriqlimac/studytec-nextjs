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
  onClick,
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
                hover:bg-secondary
                text-typography
                transition
                border-border
            `,
          active && "bg-secondary font-medium border-border border-1"
        )}
      >
        <Icon className={clsx(`h-6 w-6 shrin-0`, active && "fill-blue")} />
        <span className="text-sm">{label}</span>
      </Link>
    </li>
  );
}
