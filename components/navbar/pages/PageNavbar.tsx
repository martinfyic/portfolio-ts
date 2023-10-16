"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

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
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  const path = usePathname();
  console.log(path);

  const handleLightTheme = () => {
    setTheme("light");
    handleNavbarButton();
  };

  const handleDarkTheme = () => {
    setTheme("dark");
    handleNavbarButton();
  };

  const handleNavbarButton = () => {
    setNavbar(!navbar);
  };

  return (
    <header className="fixed top-0  z-50 mx-auto w-full bg-white px-4 shadow dark:border-b dark:border-stone-600 dark:bg-darker sm:px-20">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3">
            <NextLink
              href="/"
              className="cursor-pointer text-2xl font-bold md:block md:py-3"
            >
              Martin Ferreira
            </NextLink>
            <div className="md:hidden">
              <button onClick={handleNavbarButton} aria-label="menu button">
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map(({ label, page }) => {
                return (
                  <li
                    key={label}
                    className={
                      path === page ? "text-primary underline opacity-90" : ""
                    }
                  >
                    <NextLink
                      href={page}
                      className="block cursor-pointer font-semibold  hover:text-orange-300 dark:hover:text-orange-300 lg:inline-block"
                      onClick={handleNavbarButton}
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
