import { useTranslations } from "next-intl";
import { Experience } from "../../interfaces/interfaces";
import { ExternalLink } from "../ExternalLink";
import { ExperienceCard } from "./ExperienceCard";
import { IoCodeDownloadOutline } from "react-icons/io5";
export const Experiences = () => {
  const t = useTranslations();
  const resume = useTranslations("resume");
  return (
    <section id="experiences" className="pt-16">
      <h2 className="uppercase font-bold pb-6 lg:hidden">
        {t("links.experiences.name")}
      </h2>
      {t.raw("experiences").map((experience: Experience) => (
        <ExperienceCard key={experience.title} data={experience} />
      ))}
      <ExternalLink
        name={resume("download")}
        src={resume("src")}
        Icon={IoCodeDownloadOutline}
      />
    </section>
  );
};
