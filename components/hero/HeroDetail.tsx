import { FC } from "react";
import NextLink from "next/link";

export const HeroDetail: FC = () => {
  return (
    <div className="md:mt-2 md:w-3/5 md:text-left">
      <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-6xl">
        Hola 👋🏻, soy Martín!
      </h1>
      <p className="mb-6 mt-4 text-lg font-semibold md:text-2xl">
        Desarrollador <span className="text-primary">Full Stack</span> en
        Montevideo, UY.
      </p>
      <div className="flex items-center justify-center gap-3 md:justify-start">
        <NextLink
          href="#projects"
          className="cursor-pointer rounded bg-primary px-6 py-3 font-semibold text-white shadow transition-transform hover:-translate-y-1 hover:opacity-70"
        >
          Proyectos
        </NextLink>
        <NextLink
          href="#contact"
          className="cursor-pointer rounded border-2 border-black px-6 py-3 font-semibold shadow transition-transform hover:-translate-y-1 hover:opacity-70 dark:border-white"
        >
          Contacto
        </NextLink>
      </div>
    </div>
  );
};
