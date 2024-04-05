import Time from "./utils/Time";

export default function Footer({ setIsOpen }) {
  return (
    <div className="bg-accent-2 text-accent-1 max-h-full flex flex-col px-8 md:px-12 lg:px-24 py-16 pb-8 justify-evenly gap-8 text-start z-30">
      <div className=" text-lg sm:text-2xl lg:text-3xl">
        INTERESTED IN WORKING TOGETHER?
      </div>
      <div className="text-4xl sm:text-5xl lg:text-7xl">
        evstrelnikov@gmail.com
      </div>
      <div className="text-lg sm:text-2xl lg:text-3xl flex justify-between">
        <div className="flex flex-nowrap items-center">
          Or fill this
          <button
            className="underline bg-inherit border-none px-2"
            onClick={() => setIsOpen(true)}
          >
            short form
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        MONTREAL, CA
        <a href="#hero" className="self-center">
          BACK TO TOP
        </a>
        <div className="flex gap-1">
          LOCAL TIME -<Time />
        </div>
      </div>
    </div>
  );
}