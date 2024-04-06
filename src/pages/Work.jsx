import WorkCard from "../components/WorkCard";
import { projectList } from "../assets/ProjectData";
import Footer from "../components/Footer";
import { useState } from "react";
import Drawer from "../components/Drawer";
import ContactForm from "../components/ContactForm";

const IssueTrackerDescription =
  "This project helps to add, track issues through the lifecycle. It alse includes functionality to assign responsible person and project managers.";

export default function Work() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-bkg-mate text-content-vivid min-h-screen px-6 md:px-12 lg:px-24 py-20 ">
        <div className="text-6xl xl:w-4/5 font-light  mt-24 mb-20 md:mt-32 md:mb-24">
          Explore a selection of recent projects I've worked on.
        </div>
        {projectList.map((proj) => (
          <WorkCard project={proj} key={proj.name} />
        ))}
      </div>
      <Footer setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <ContactForm />
      </Drawer>
    </>
  );
}
