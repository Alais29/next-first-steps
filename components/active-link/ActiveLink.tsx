"use client";

import Link from "next/link";

import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface IActiveLinkProps {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: IActiveLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${style.link} ${pathname === path && style["active-link"]}`}
      href={path}
    >
      {text}
    </Link>
  );
};
