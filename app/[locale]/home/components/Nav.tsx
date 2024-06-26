"use client";
import clsx from "clsx";
import Link from "next/link";
import { useHashState } from "../hooks/useHash";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export const Nav = () => {
  const [hash, setHash] = useHashState();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("links");
  const keys = ["about", "experiences", "projects"] as const;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-1/2 grow mt-12 font-bold tracking-widest uppercase text-sm hidden lg:block">
        {keys.map((key) => (
          <Link
            key={key}
            href={t(`${key}.href`)}
            className="group flex items-center py-2"
          >
            <span className="navLine"></span>
            <span className="navName">{t(`${key}.name`)}</span>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="w-1/2 grow mt-12 font-bold tracking-widest uppercase text-sm hidden lg:block">
      {keys.map((key) => (
        <Link
          key={key}
          href={t(`${key}.href`)}
          className="group flex items-center py-2"
        >
          <span
            className={clsx("navLine", {
              navLineActive: hash === t(`${key}.href`).split("#")[1],
            })}
          ></span>
          <span
            className={clsx("navName", {
              navNameActive: hash === t(`${key}.href`).split("#")[1],
            })}
          >
            {t(`${key}.name`)}
          </span>
        </Link>
      ))}
    </div>
  );
};
{
  /* <div className="w-1/2 grow mt-12 font-bold tracking-widest uppercase text-sm hidden lg:block">
        {keys.map((key) => (
          <Link
            key={key}
            href={t(`${key}.href`)}
            className="group flex items-center py-2"
          >
            <span className="navLine"></span>
            <span className="navName">{t(`${key}.name`)}</span>
          </Link>
        ))}
      </div> */
}
