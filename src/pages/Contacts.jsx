import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Drawer from "../components/Drawer";
import Time from "../components/utils/Time";
import Reveal from "../components/utils/Reveal";
import SlideIn from "../components/utils/SlideIn";

export default function Contacts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className="bg-bkg-mate text-content-vivid text-content h-dvh w-screen flex flex-col px-6 sm:px-12 md:px-24 pt-16 pb-8 gap-4 text-start justify-between">
        <div></div>
        <Reveal>
          <div>
            <div className="flex items-center text-xl sm:text-2xl md:text-3xl">
              Email below or fill in this
              <button
                className="underline bg-inherit border-none px-2 py-0"
                onClick={() => setIsOpen(true)}
              >
                short form
              </button>
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
              evstrelnikov@gmail.com
            </div>
          </div>
        </Reveal>
        <SlideIn margin="0%" delay="0.5" duration="0.5">
        <div className="flex flex-col sm:flex-row text-lg font-medium justify-between">
          <div className="flex gap-2 ">
            <div>LOCAL TIME -</div>
            <div>
              <Time />
            </div>
          </div>
          <div>LOCATION - MONTREAL, CA</div>
          <div></div>
          <div></div>
        </div>
        </SlideIn>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <ContactForm />
        </Drawer>
      </div>
    </div>
  );
}
