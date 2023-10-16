"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";

import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Sobre Mi",
    page: "about",
  },
  {
    label: "Proyectos",
    page: "projects",
  },
  {
    label: "Certificados",
    page: "certificates",
  },
  {
    label: "Contacto",
    page: "contact",
  },
];

export const HomeNavbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  // set activ class ------------------------------------------
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentActive = null;

      sections.forEach((section) => {
        const sectionId = section.id;
        const rect = section.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom >= 100) {
          currentActive = sectionId;
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpia el oyente al desmontar el componente.
    };
  }, []);
  // ---------------------------------------------------------------

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
    <header className="fixed left-0  top-0 z-50 mx-auto w-full bg-white px-4 shadow dark:border-b dark:border-stone-600 dark:bg-darker sm:px-20">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3">
            <NextLink
              href="#home"
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
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map(({ label, page }) => {
                return (
                  <NextLink
                    key={label}
                    href={`#${page}`}
                    className={`font-semibol block cursor-pointer hover:text-orange-300 dark:hover:text-orange-300 lg:inline-block ${
                      activeSection === page
                        ? "text-primary underline opacity-90"
                        : ""
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
