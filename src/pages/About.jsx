import Reveal from "../components/utils/Reveal";
import SlideIn from "../components/utils/SlideIn";


export default function About() {
  return (
    <div className="">
      <div className="about-bg min-h-screen px-6 lg:px-12 xl:px-24">
        <div className="grid grid-cols-12 items-end md:items-center h-screen">
          <div className=" col-span-4 sm:col-span-6 lg:col-span-7"></div>
          <div className="col-span-8 sm:col-span-6 lg:col-span-5 text-white">
            <div className="text-2xl sm:text-4xl mb-4 font-thin">
              <SlideIn delay="0.4" duration="0.5">
                I'm
                <span className="font-semibold"> web developer </span>
                based in snowy Montreal, Canada.
              </SlideIn>
            </div>
            <SlideIn delay="0.8" duration="0.5">
              <div className="text-lg font-light py-8">
                For almost 10 years of{" "}
                <span className="font-semibold"> engineering</span> career I've
                engoyed finding
                <span className="font-semibold">
                  {" "}
                  simple and elegant solutions
                </span>{" "}
                for complex technical problems. While not coding you can find me
                playing with my kids, eating "Poutine", doing active sport and
                shooting photos. These things are real help to fuel me up and{" "}
                <span className="font-semibold">
                  {" "}
                  bring fresh perspective{" "}
                </span>{" "}
                to my work.
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </div>
  );
}
