import { useTranslations } from "next-intl";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const Social = () => {
  const t = useTranslations("social");
  return (
    <div className="flex space-x-6 text-blue-600 pt-8 lg:pt-0">
      <a href={t("github")} className="" rel="noopener noreferrer">
        <IoLogoGithub size={30} />
      </a>
      <a href={t("linkedin")} className="" rel="noopener noreferrer">
        <IoLogoLinkedin size={30} />
      </a>
    </div>
  );
};
