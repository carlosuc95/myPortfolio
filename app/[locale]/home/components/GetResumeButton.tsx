import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoCodeDownloadOutline } from "react-icons/io5";

export const GetResumeButton = () => {
  const t = useTranslations("resume");
  return (
    <div className="flex my-10">
      <Link
        href={t("src")}
        className="flex items-center gap-3 text-blue-500 font-bold uppercase"
      >
        <IoCodeDownloadOutline size={25} />
        {t("download")}
      </Link>
    </div>
  );
};
