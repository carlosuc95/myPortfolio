import { ProjectCard } from "./ProjectCard";
import { Project } from "../../interfaces/interfaces";
import { useTranslations } from "next-intl";

export const Projects = () => {
  const t = useTranslations();
  return (
    <section id="projects" className="pt-16">
      <h2 className="uppercase font-bold pb-6 lg:hidden">
        {t("links.projects.name")}
      </h2>
      {t.raw("projects").map((project: Project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
};
