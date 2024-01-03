"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useDarkMode } from "@/hooks";
import { Logo } from "@/components";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Inicio",
    page: "/",
  },
  {
    label: "Sobre Mi",
    page: "/about",
  },
  {
    label: "Proyectos",
    page: "/project",
  },
  {
    label: "Certificados",
    page: "/certificate",
  },
  {
    label: "Contacto",
    page: "/contact",
  },
];

export const PageNavbar = () => {
  const path = usePathname();

  const {
    currentTheme,
    handleDarkTheme,
    handleLightTheme,
    handleNavbarButton,
    navbar,
  } = useDarkMode();

  return (
    <header className="fixed top-0  z-50 mx-auto w-full bg-light bg-opacity-90 px-4 shadow sm:px-20 dark:border-b dark:border-stone-600 dark:bg-darker dark:bg-opacity-90">
      <div className="justify-between lg:flex lg:items-center">
        <div>
          <div className="flex items-center justify-between py-3">
            <Logo currentTheme={currentTheme} />
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
            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {NAV_ITEMS.map(({ label, page }) => {
                return (
                  <li
                    key={label}
                    className={path === page ? "text-primary opacity-90" : ""}
                  >
                    <NextLink
                      href={page}
                      className="block cursor-pointer font-semibold  hover:text-orange-300 lg:inline-block dark:hover:text-orange-300"
                      onClick={handleNavbarButton}
                      aria-label={`Link navigate to ${label}`}
                    >
                      {label}
                    </NextLink>
                  </li>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={handleLightTheme}
                  className="rounded-xl bg-slate-100 p-2"
                  aria-label="Light buttom theme"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={handleDarkTheme}
                  className="rounded-xl bg-slate-100 p-2"
                  aria-label="Dark buttom theme"
                >
                  <RiMoonFill size={25} color="black" />
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
