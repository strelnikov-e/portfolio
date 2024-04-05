import Photo from "../assets/portrait-sea-bw.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { GitHubIcon, GitHubIconOutline, LinkedInIcon } from "../assets/Icons";

const socialIconSize = 32;

export default function Hero() {
  return (
    <div className="grid grid-cols-12 px-12 lg:px-24">
      <div className=" col-span-7 flex flex-col justify-evenly items-start py-20 ">
        <div className="top-16 text-8xl xl:text-9xl font-normal text-start">
          EVGENY STRELNIKOV
        </div>
        <div className="text-2xl xl:text-3xl mb-20">
          Software developer <span className="font-extralight">based in</span>{" "}
          Monteal
        </div>

        <a
          href="mailto:evstrelnikov@gmail.com"
          className="text-black hover:text-gray-600 "
        >
          <div className="flex flex-nowrap align-center">
            EVSTRELNIKOV@GMAIL.COM <ArrowUpRightIcon height={22} />
          </div>
        </a>
      </div>
      <div className="col-span-4">
        <div className="flex flex-col justify-end">
          <img
            src={Photo}
            alt="Photo"
            width={450}
            height={450}
            className=" max-w-screen-2xl"
          />
        </div>
      </div>

      <div className="grid col-span-1 content-center justify-end gap-4">
        <a href="https://github.com/strelnikov-e">
          <GitHubIcon size={socialIconSize} />
        </a>
        <a href="https://www.linkedin.com/in/evgeny-strelnikov/">
          <LinkedInIcon size={socialIconSize} />
        </a>

        <div className="border-s border-black h-32 ms-4"></div>
      </div>
    </div>
  );
}
