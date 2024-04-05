import { GitHubIcon, LinkedInIcon } from "../../assets/Icons";
import Email from "../../components/primitives/Email";
import Reveal from "../../components/utils/Reveal";
import SlideIn from "../../components/utils/SlideIn";

const socialIconSize = 32;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="grid grid-cols-12 min-h-dvh pt-16 px-12 lg:px-24 py-8 "
      // style={{backgroundImage:`url(${splash})`, }}
    >
      <div className="col-span-11 flex flex-col sm:justify-between justify-between text-content-vivid">
        {/* <HeroBkg className="bg-green-500 fill-green-600 absolute top-0"></HeroBkg> */}
        <div></div>
        <Reveal delay="0.5" duration="0.8">
          <div className="">
            <div className="mb-6 text-6xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-normal text-start w-2/3">
              EVGENY STRELNIKOV
            </div>

            <div className="text-2xl xl:text-3xl 2xl:text-4xl mb-20">
              Software developer{" "}
              <span className="font-extralight">based in</span> Monteal
            </div>
          </div>
        </Reveal>
        <SlideIn delay="1.2" margin="0%" duration="0.5">
          <div className="flex flex-col lg:flex-row gap-4 font-normal md:text-lg justify-between">
            <a href="#WhatIDo" className="hover:text-accent-3">
              SEE MORE
            </a>
            <a href="mailto:evstrelnikov@gmail.com">
              <div className="flex">
                <Email />
              </div>
            </a>
            <div></div>
          </div>
        </SlideIn>
      </div>

      <div className="col-span-1 md:self-center self-end justify-self-end">
        <div className="flex md:flex-col justify-center mb-6">
          <Reveal margin="0%" delay="1.2" duration="1.0">
            <a href="https://github.com/strelnikov-e" className="me-4">
              <GitHubIcon size={socialIconSize} />
            </a>
            <a href="https://www.linkedin.com/in/evgeny-strelnikov/">
              <LinkedInIcon size={socialIconSize} />
            </a>

            <div className=" border-s border-content-vivid h-32 ms-4 mt-3 hidden md:block"></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
