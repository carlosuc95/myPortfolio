import Badge from "../Badge";
import { Project } from "../../interfaces/interfaces";
import Image from "next/image";

interface Props {
  project: Project;
}
export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="mb-10 py-2">
      <div className="flex flex-col-reverse md:flex-row md:space-x-5">
        <div className="lg:w-1/4 text-left mt-2">
          {project.image && (
            <Image
              className="border-2"
              src={project.image}
              width={100}
              height={10}
              alt={""}
            />
          )}
        </div>
        <div className="flex flex-col space-y-3 md:w-3/4">
          <h2 className="font-bold">{project.title}</h2>
          <p className="text-sm leading-5">{project.description}</p>
          <div className="flex flex-wrap">
            {project.tecnologies.map((tecnology) => (
              <Badge key={tecnology} name={tecnology} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
