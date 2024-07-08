import { About } from "./About";
import { Projects } from "./projects/Projects";
import { Footer } from "./Footer";
import { Experiences } from "./experiences/Experiences";

export const Main = () => {
  return (
    <div className="lg:w-1/2">
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
};
