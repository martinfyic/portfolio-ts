"use client";

import NextLink from "next/link";

import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { useActivClass, useDarkMode } from "@/hooks";
import { Logo } from "@/components";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Sobre Mi",
    page: "#about",
  },
  {
    label: "Proyectos",
    page: "#projects",
  },
  {
    label: "Certificados",
    page: "#certificates",
  },
  {
    label: "Contacto",
    page: "#contact",
  },
];

export const HomeNavbar = () => {
  const {
    currentTheme,
    handleDarkTheme,
    handleLightTheme,
    handleNavbarButton,
    navbar,
  } = useDarkMode();

  const { activeSection } = useActivClass();

  return (
    <header className="navbar fixed left-0 top-0  z-50 mx-auto w-full bg-light bg-opacity-90 px-4 shadow sm:px-20 dark:border-b dark:border-stone-600 dark:bg-darker dark:bg-opacity-95">
      <div className="justify-between lg:flex lg:items-center">
        <div>
          <div className="flex items-center justify-between py-3">
            <NextLink
              href="#home"
              className="cursor-pointer lg:block"
              aria-label="home button"
            >
              <Logo currentTheme={currentTheme} />
            </NextLink>
            <div className="lg:hidden">
              <button onClick={handleNavbarButton} aria-label="menu button">
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 lg:mt-0 lg:block lg:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center justify-center space-y-8 lg:flex lg:flex-row lg:space-x-6 lg:space-y-0">
              {NAV_ITEMS.map(({ label, page }) => {
                return (
                  <NextLink
                    key={label}
                    href={page}
                    aria-label={`Link to ${label}`}
                    className={`block cursor-pointer font-semibold hover:text-orange-300 lg:inline-block dark:hover:text-orange-300 ${
                      activeSection === page ? "text-primary opacity-90" : ""
                    }`}
                    onClick={handleNavbarButton}
                  >
                    {label}
                  </NextLink>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={handleLightTheme}
                  className="rounded-xl bg-slate-100 p-2"
                  aria-label="Light button theme"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={handleDarkTheme}
                  className="rounded-xl bg-slate-100 p-2"
                  aria-label="Dark button theme"
                >
                  <RiMoonFill size={25} color="black" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
