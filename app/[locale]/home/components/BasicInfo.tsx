import { useTranslations } from "next-intl";

export const BasicInfo = () => {
  const t = useTranslations("personal");
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl tracking-tight font-bold">Carlos Rubio</h1>
      <h2 className="mt-2 text-xl font-medium text-blue-600 dark:text-slate-50">
        {t("role")}
      </h2>
      <p className="mt-4 max-w-xs leading-normal">{t("presentation")}</p>
    </div>
  );
};
