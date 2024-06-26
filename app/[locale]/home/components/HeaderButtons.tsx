"use client";
import {
  IoEllipsisHorizontalOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { Button } from "./Button";
import { PiTranslate } from "react-icons/pi";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useParams, usePathname, useRouter } from "next/navigation";

const getHash = () =>
  typeof window !== "undefined" ? window.location.hash : undefined;
export const HeaderButtons = () => {
  const { theme, setTheme } = useTheme();
  // const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const [hash, setHash] = useState(getHash());
  useEffect(() => {
    setMounted(true);
    setHash(getHash());
  }, [params]);

  if (!mounted) {
    return (
      <div className="flex space-x-4 mb-2">
        {/* Dark Mode Button */}
        <Button styles="p-4 bg-blue-50 dark:bg-slate-700 rounded">
          <PiTranslate size={25} />
        </Button>
        <Button styles="p-4 bg-blue-50 dark:bg-slate-700 rounded">
          <IoEllipsisHorizontalOutline size={25} />
        </Button>
      </div>
    );
  }
  const handleTranslation = () => {
    const localePathname = pathname === "/en" ? "/es" : "en";
    router.push(localePathname + hash);
  };

  const handleDarkMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");

    //   const theme = localStorage.getItem("theme");
    //   if (!theme) localStorage.setItem("theme", "light");
    //   theme === "dark"
    //     ? localStorage.setItem("theme", "light")
    //     : localStorage.setItem("theme", "dark");
    //   setDark(!dark);
  };

  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //     setDark(true);
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     setDark(false);
  //   }
  // }, [dark]);

  return (
    <div className="flex space-x-4 mb-2">
      {/* Dark Mode Button */}
      <Button
        handleClick={handleTranslation}
        styles="p-4 bg-blue-50 dark:bg-slate-700 rounded"
      >
        {<PiTranslate size={25} />}
      </Button>
      <Button
        handleClick={handleDarkMode}
        styles="p-4 bg-blue-50 dark:bg-slate-700 rounded"
      >
        {theme === "dark" ? (
          <IoSunnyOutline className="text-orange-300" size={25} />
        ) : (
          <IoMoonOutline className="text-purple-500" size={25} />
        )}
      </Button>
    </div>
  );
};
