import ProjectCard from "./ProjectCard";
import SlideInLeft from "./utils/SlideInLeft";
import { projectList } from "../assets/ProjectData";
import SlideIn from "./utils/SlideIn";

export default function ProjectsFeed() {
  return (
    <div className="w-xl flex flex-nowrap overflow-x-auto p-5 gap-6 snap-x snap-mandatory no-scrollbar">
      {projectList.map((project) => (
        <SlideIn delay="0" key={project.name}>
          <ProjectCard
            title={project.name}
            text={project.shortDescription}
            image={project.image}
            href={project.href}
          />
        </SlideIn>
      ))}
    </div>
  );
}
