"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  item: string;
  hash: any;
}
export const CustomLink = ({ item, hash }: Props) => {
  const t = useTranslations("links");

  return (
    <Link
      key={item}
      href={t(`${item}.href`)}
      className="group flex items-center py-2"
    >
      {/* <span className={navClass}></span> */}
      <span className={`red  `}>{t(`${item}.name`)}</span>
    </Link>
  );
};
