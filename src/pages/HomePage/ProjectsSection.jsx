import ProjectsFeed from "../../components/ProjectsFeed";
import Reveal from "../../components/utils/Reveal";

export default function ProjectsSection() {
  return (
    <section id="Projects" className="bg-bkg-vivid min-h-screen flex px-2 flex-col sm:px-6 md:px-12 lg:px-24 py-20 gap-12">
      <Reveal>
        <div className="text-start text-4xl">PROJECTS</div>
      </Reveal>
      <div></div>
      <ProjectsFeed />
    </section>
  );
}
