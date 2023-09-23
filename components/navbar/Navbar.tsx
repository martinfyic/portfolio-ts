'use client';

import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Inicio',
    page: 'home',
  },
  {
    label: 'Sobre Mi',
    page: 'about',
  },
  {
    label: 'Proyectos',
    page: 'projects',
  },
  {
    label: 'Certificados',
    page: 'certificates',
  },
];

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  const handleLightTheme = () => {
    setTheme('light');
  };

  const handleDarkTheme = () => {
    setTheme('dark');
  };

  const handleNavbarButton = () => {
    setNavbar(!navbar);
  };

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3">
            <Link
              to="home"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="md:py-3 md:block">
                <h2 className=" text-2xl font-bold">Martin Ferreira</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button onClick={handleNavbarButton}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map(({ label, page }) => {
                return (
                  <Link
                    key={label}
                    to={page}
                    className="block lg:inline-block text-neutral-900 font-semibold  hover:text-orange-300 dark:text-neutral-100 dark:hover:text-orange-300 cursor-pointer"
                    activeClass="active"
                    activeStyle={{
                      color: '#fd8900',
                      textDecoration: 'underline',
                    }}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={handleNavbarButton}
                  >
                    {label}
                  </Link>
                );
              })}
              {currentTheme === 'dark' ? (
                <button
                  onClick={handleLightTheme}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={handleDarkTheme}
                  className="bg-slate-100 p-2 rounded-xl"
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
