import ProjectCard from "./ProjectCard";
import JobBoardImg from "../assets/images/job-board-img.png";
import IssueTrackerImg from "../assets/images/issue-tracker-img.png";
import PercolationImg from "../assets/images/percolation-img.png";
import PhotoGalleryImg from "../assets/images/photo-galery.png";
import KDTreeImg from "../assets/images/kd-tree-img.png";
import SlideInLeft from "./utils/SlideInLeft";
import { projectList } from "../assets/ProjectData";

export default function Projects() {
  return (
    <>
      {projectList.map((project) => (
        <SlideInLeft delay="0">
          <ProjectCard
            title={project.name}
            text={project.shortDescription}
            image={project.image}
            href={project.href}
          />
        </SlideInLeft>
      ))}
    </>
  );
}
