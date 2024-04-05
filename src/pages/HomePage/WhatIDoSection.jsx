import {
  ReactIcon,
  JavaIcon,
  SqlIcon,
  SpringIcon,
  JavaScriptIcon,
  MongoIcon,
  GitIcon,
  AwsIcon,
} from "../../assets/Icons.jsx";
import AboutCard from "../../components/AboutCard.jsx";
import SlideIn from "../../components/utils/SlideIn.jsx";
import Reveal from "../../components/utils/Reveal.jsx";

const cardOneText =
  "Through initial sketch to the cloud. I talking through design implementations to transform desired functionalities to the code.";
const cardTwoText =
  "Good application is not created in a vacuum but rather in a shared space. It should be facilitated and iterated upon as a team.";
const cardThreeText =
  "Everything I create is a subject to change and experimentation. Not everything will work, but it’s worth trying and learning from what doesn’t.";

const sections = ["header", "one", "two", "three"];

export default function WhatIDoSection() {
  return (
    <section
      id="WhatIDo"
      className="relative bg-bkg-mate min-h-screen flex flex-col px-6 md:px-12 lg:px-24 py-8 justify-between"
    >
      <Reveal>
        <div className="text-start text-4xl mb-10 lg:mb-0 ">WHAT I DO</div>
      </Reveal>

      <SlideIn delay="0.25">
        <div className="grid lg:grid-cols-4 grid-cols-3 mb-10 lg:mb-0 ">
          <div className="hidden md:block"></div>
          <div className="col-span-3 ">
            <p className="text-start text-xl font-light">
              Working{" "}
              <span className="font-medium">on a wide range of projects</span>{" "}
              and having a rich engineering background I acquired skills to
              develop and maintain web applications{" "}
              <span className="font-medium">with customers in mind.</span>
            </p>
          </div>
        </div>
      </SlideIn>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
        <div className="hidden lg:block"></div>
        <AboutCard number="01" header="Make it" text={cardOneText} />
        <AboutCard number="02" header="Collaborate" text={cardTwoText} />
        <AboutCard
          number="03"
          header="Keep experimenting"
          text={cardThreeText}
        />
      </div>
      <SlideIn delay="0.8">
        <div className="flex gap-4 sm:justify-end mb-12">
          <span className="text-2xl font-extralight"></span>
          <JavaIcon alt="Java" />
          <SpringIcon />
          <JavaScriptIcon />
          <ReactIcon />
          <SqlIcon />
          <MongoIcon />
          <GitIcon />
          <AwsIcon />
        </div>
      </SlideIn>
    </section>
  );
}
