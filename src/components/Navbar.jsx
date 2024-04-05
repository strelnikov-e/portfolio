import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Email from "./primitives/Email";
import Reveal from "./utils/Reveal";

const navigation = [
  { name: "WORK", href: "/work" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACTS", href: "/contacts" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar({ switchTheme }) {
  const path = window.location.pathname;

  return (
    <Disclosure
      as="nav"
      className="bg-bkg-mate text-content-vivid shadow-sm sm:shadow-none sm:bg-transparent sm:backdrop-blur-sm border-b border-neutral-600 border-opacity-20 w-dvw h-16 fixed top-0 text-md z-10"
    >
      {({ open }) => (
        <>
          <Reveal delay="0" duration="0.2">
            <div className="max-h-12 px-2 sm:px-12 lg:px-24 fade-in-fast-animation">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset hover:bg-content-mate hover:text-bkg-mate focus:ring-bkg-mate">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 justify-center sm:items-center sm:justify-between text-lg">
                  <a href="/">
                    <div className="flex flex-shrink-0 font-medium">
                      STRELNIKOV.
                    </div>
                  </a>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.href === path
                              ? "bg-content-vivid text-bkg-mate hover:text-bkg-vivid"
                              : "text-content-vivid hover:bg-content-mate hover:text-bkg-mate",
                            "rounded-md px-3 py-2 font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative w-6 flex justify-center items-center px-5">
                  <button
                    className="bg-content-vivid hover:bg-content-vivid rounded-full p-2.5 h-2.5"
                    onClick={switchTheme}
                  ></button>
                </div>
              </div>
            </div>
          </Reveal>

          <Disclosure.Panel className="sm:hidden">
            <div className="fixed flex flex-col top-16 pb-24 w-screen h-screen pt-2 bg-bkg-mate shadow-sm justify-end">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === path
                      ? "bg-content-vivid text-bkg-mate hover:text-bkg-vivid"
                      : "text-content-vivid hover:bg-content-mate hover:text-bkg-mate",
                    "block py-2 px-8 text-5xl font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="mt-10 ms-8">
                <Email />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
