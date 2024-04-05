import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import SlideIn from "./utils/SlideIn";

export default function WorkCard({ project }) {
  return (
    <SlideIn >
    <div className="grid md:grid-cols-2 gap-24 justify-center mb-12">
      <div className="">
        <div className="text-start text-4xl py-8 font-normal uppercase">
          {project.name}
        </div>

        <div
          className="text-justify text-content-mate mb-10"
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></div>

        {project.href && <a href={project.href} className="">
          <div className="flex items-center hover:text-accent-3 uppercase border-t-2 py-4">
            Visit project page <ArrowUpRightIcon height={20} />
          </div>
        </a>}
      </div>
      <div className="self-center">
        <img src={project.image} alt="" className=" " />
      </div>
    </div>
    </SlideIn>
  );
}
