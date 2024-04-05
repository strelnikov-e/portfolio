import Reveal from "../components/utils/Reveal";


export default function About() {
  return (
    <div className="">
      <div className="about-bg min-h-screen px-6 lg:px-12 xl:px-24">
        <div className="grid grid-cols-12 items-end md:items-center h-screen">
          <div className=" col-span-4 sm:col-span-6 lg:col-span-7"></div>
          <div className="col-span-8 sm:col-span-6 lg:col-span-5 text-white">
            <div className="text-2xl sm:text-4xl mb-4 font-thin">
              <Reveal delay="0.4" duration="1.5">
                I'm
              {/* </Reveal>
              <Reveal> */}
                <span className="font-semibold"> web developer </span>
              {/* </Reveal>
              <Reveal delay="0.4" duration="1.5"> */}
                based in snowy Montreal, Canada.
              </Reveal>
            </div>
            <Reveal delay="1.2" duration="1.5">
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
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
