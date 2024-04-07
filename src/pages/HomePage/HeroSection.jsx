import { GitHubIcon, LinkedInIcon } from "../../assets/Icons";
import Email from "../../components/primitives/Email";
import PageNavLink from "../../components/primitives/PageNavLink";
import Reveal from "../../components/utils/Reveal";
import SlideIn from "../../components/utils/SlideIn";

const socialIconSize = 32;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="grid grid-cols-12 min-h-svh pt-16 px-3 md:px-12 lg:px-24 py-8 "
      // style={{backgroundImage:`url(${splash})`, }}
    >
      <div className="col-span-11 flex flex-col sm:justify-between justify-between text-content-vivid">
        {/* <HeroBkg className="bg-green-500 fill-green-600 absolute top-0"></HeroBkg> */}
        <div></div>
        <div className="">
          <Reveal delay="0.5" duration="0.8">
            <div className="mb-3 text-5xl sm:text-6xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-normal text-start w-2/3">
              EVGENY STRELNIKOV
            </div>
          </Reveal>
          <Reveal delay="1.1" duration="0.8">
          {/* <div className="text-2xl xl:text-3xl 2xl:text-4xl  font-light mb-20">
              Software developer based in Monteal
            </div> */}
            <div className="text-3xl xl:text-3xl 2xl:text-4xl mb-20">
              Software developer{" "}
              <span className="font-extralight">based in</span> Monteal
            </div>
          </Reveal>
        </div>
      </div>

      <div className="col-span-1 sm:self-center self-start justify-self-end py-8 scale-75 sm:scale-100">
        <div className="flex md:flex-col justify-center mb-6">
          <Reveal margin="0%" delay="1.2" duration="1.0">
            <a href="https://github.com/strelnikov-e" className="me-4">
              <GitHubIcon size={socialIconSize} />
            </a>
            <a href="https://www.linkedin.com/in/evgeny-strelnikov/">
              <LinkedInIcon size={socialIconSize} />
            </a>

            <div className=" border-s border-content-vivid h-32 ms-4 mt-3 hidden sm:block"></div>
          </Reveal>
        </div>
      </div>
      <div className="col-span-12 self-end">
        <SlideIn delay="1.2" margin="0%" duration="0.5">
          <div className=" relative flex flex-col sm:flex-row gap-4 font-normal md:text-lg justify-between">
            <a href="mailto:evstrelnikov@gmail.com">
              <div className="flex">
                <Email />
              </div>
            </a>
            <a
              href="#WhatIDo"
              className="hover:text-accent-3 hidden md:block absolute left-1/2"
            >
              <PageNavLink name="SEE MORE" />
              {/* SEE MORE <span className="block h-5 w-5" aria-hidden="true"><ArrowDownIcon/></span> */}
            </a>
            <div className="">MONTREAL, CA</div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
