import { useTranslations } from "next-intl";
import { Experience } from "../../interfaces/interfaces";
import { GetResumeButton } from "../GetResumeButton";
import { ExperienceCard } from "./ExperienceCard";

export const Experiences = () => {
  const t = useTranslations();
  return (
    <section id="experiences" className="pt-16">
      <h2 className="uppercase font-bold pb-6 lg:hidden">
        {t("links.experiences.name")}
      </h2>
      {t.raw("experiences").map((experience: Experience) => (
        <ExperienceCard key={experience.title} data={experience} />
      ))}
      <GetResumeButton />
    </section>
  );
};
