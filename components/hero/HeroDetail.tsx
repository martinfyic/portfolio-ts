import { FC } from "react";
import NextLink from "next/link";
import { DownLoadCvButton, MainTitle } from "../ui";

export const HeroDetail: FC = () => {
  return (
    <div className="fade-in mt-5 flex flex-col items-center justify-center py-8">
      <MainTitle title="Hola 👋🏻, soy Martín!" />

      <p className="mb-6 mt-4 text-lg font-semibold lg:text-2xl">
        Programador Web{" "}
        <span className="bg-gradient-to-r from-pink-500 via-primary to-violet-500 bg-clip-text text-transparent lg:text-3xl">
          Full Stack JS
        </span>{" "}
        en Montevideo, UY.
      </p>
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row lg:justify-start">
        <NextLink
          href="#contact"
          className="cursor-pointer rounded border-2 border-black bg-light px-6 py-3 font-semibold shadow-md transition-transform hover:-translate-y-1 dark:border-l dark:border-white dark:bg-darker"
          aria-label="Navegar a sección de contacto"
          title="Navigate to contact section"
        >
          Contacto
        </NextLink>
        <DownLoadCvButton />
      </div>
    </div>
  );
};
