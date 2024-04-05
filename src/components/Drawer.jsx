import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        "fixed overflow-hidden z-50 bg-content-vivid bg-opacity-25 inset-0 transform ease-in-out" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all opacity-0 duration-500 delay-200 translate-x-full ")
      }
    >
      
      <section
        className={
          "w-screen sm:w-4/5 md:w-2/3 lg:w-1/2 right-0 absolute p-4 bg-bkg-vivid h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="flex justify-end">
        <button onClick={() => setIsOpen(false)} className="bg-bkg-vivid"><XMarkIcon width={40}/></button>
        </div>
        <article className="px-6 flex flex-col justify-center overflow-y-scroll h-full">
          <div className="font-light text-4xl sm:text-5xl mb-10">Send me an email</div>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
