import { FC } from "react";
import NextLink from "next/link";
import { MainTitle } from "../ui";

export const HeroDetail: FC = () => {
  return (
    <div className="animate__animated animate__fadeIn lg:mt-2 lg:w-3/5 lg:text-left">
      <MainTitle title="Hola 👋🏻, soy Martín!" />

      <p className="mb-6 mt-4 text-lg font-semibold lg:text-2xl">
        Programador Web <span className="text-primary">Full Stack</span> en
        Montevideo, UY.
      </p>
      <div className="flex items-center justify-center gap-3 lg:justify-start">
        <NextLink
          href="#projects"
          className="cursor-pointer rounded bg-primary px-6 py-3 font-semibold text-light shadow transition-transform hover:-translate-y-1 hover:bg-primary/80"
          aria-label="Navigate to projects section"
        >
          Proyectos
        </NextLink>
        <NextLink
          href="#contact"
          className="cursor-pointer rounded border-2 border-black bg-light px-6 py-3 font-semibold shadow transition-transform hover:-translate-y-1 dark:border-l dark:bg-darker"
          aria-label="Navigate to contact section"
        >
          Contacto
        </NextLink>
      </div>
    </div>
  );
};
