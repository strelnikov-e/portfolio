import Time from "./utils/Time";

export default function Footer({ setIsOpen }) {
  return (
    <div className="bg-accent-2 text-accent-1 max-h-full flex flex-col px-3 md:px-12 lg:px-24 py-16 pb-8 justify-evenly sm:gap-8 text-start z-30">
      <div className="text-md sm:text-2xl lg:text-3xl">
        INTERESTED IN WORKING TOGETHER?
      </div>
      <div className="text-3xl sm:text-5xl lg:text-7xl">
        evstrelnikov@gmail.com
      </div>
      <div className="text-md sm:text-2xl lg:text-3xl flex justify-between mb-8">
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
      <div className="sm:flex sm:flex-row items-end justify-between mt-6 hidden">
        MONTREAL, CA
        <a href="#hero" className="self-center hidden sm:block">
          BACK TO TOP
        </a>
        <div className="flex gap-1">
          LOCAL TIME -<Time />
        </div>
      </div>
      <a href="#hero" className="self-center sm:hidden">
          BACK TO TOP
        </a>
    </div>
  );
}
