import { Nav } from "./Nav";
import { BasicInfo } from "./BasicInfo";
import { Social } from "./social/Social";
import { Button } from "./Button";
import { IoMoonOutline } from "react-icons/io5";
import { HeaderButtons } from "./HeaderButtons";

export const Header = () => {
  return (
    <header className="pt-16 lg:py-16 max-h-screen flex flex-col lg:w-1/2 lg:sticky lg:top-0">
      <HeaderButtons />
      <BasicInfo />
      <Nav />
      <Social />
    </header>
  );
};
