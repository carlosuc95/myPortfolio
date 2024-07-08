import { Experience } from "../../interfaces/interfaces";
import Badge from "../Badge";

interface Props {
  data: Experience;
}

export const ExperienceCard = ({ data }: Props) => {
  return (
    <div className="mb-10 py-2">
      <div className="flex flex-col md:flex-row md:space-x-5">
        <div className="md:w-1/4 text-left my-1">
          <p className="font-light text-sm">{data.duration}</p>
        </div>
        <div className="flex flex-col space-y-3 md:w-3/4">
          <h2 className="font-bold">{data.title}</h2>
          <p className="text-sm leading-5">{data.description}</p>
          <div className="flex flex-wrap">
            {data.skills.map((skill) => (
              <Badge key={skill} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
