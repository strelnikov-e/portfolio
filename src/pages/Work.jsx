import WorkCard from "../components/WorkCard";
import { projectList } from "../assets/ProjectData";

const IssueTrackerDescription =
  "This project helps to add, track issues through the lifecycle. It alse includes functionality to assign responsible person and project managers.";

export default function Work() {
  return (
    <div className="bg-bkg-mate text-content-vivid min-h-screen px-2 sm:px-6 md:px-12 lg:px-24 py-20">
      <div className="text-6xl xl:w-4/5 font-light  mt-32 mb-24">
        Explore a selection of recent projects I've worked on.
      </div>
      {projectList.map((proj) => (
        <WorkCard project={proj} key={proj.name} />
      ))}
    </div>
  );
}
