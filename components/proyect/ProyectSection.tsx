import Image from "next/image";
import NextLink from "next/link";

import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

import { proyects } from "@/data";

export const ProyectSection = () => {
  return (
    <section id="projects" className="my-12 py-12 md:pb-24">
      <h2 className="my-14 text-center text-4xl font-bold md:text-6xl">
        Proyectos
        <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-primary" />
      </h2>
      <div className="flex flex-col space-y-28">
        {proyects.map(
          ({ slug, image, name, description, github, link }, idx) => {
            return (
              <div key={idx}>
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <picture className="mb-4 md:w-1/2">
                    <NextLink
                      href={`/project/${slug}`}
                      className="cursor-pointer"
                      aria-label={`Navigate to project page ${name}`}
                    >
                      <Image
                        src={image}
                        alt={name}
                        width={1000}
                        height={1000}
                        priority
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </NextLink>
                  </picture>
                  <div className="md:w-1/2">
                    <h3 className="mb-6 text-2xl font-semibold md:text-3xl">
                      {name}
                    </h3>
                    <p className="mb-4 line-clamp-5 leading-7 sm:text-base md:text-lg">
                      {description}
                    </p>
                    <div className="flex flex-row space-x-4 align-bottom">
                      <NextLink
                        href={`/project/${slug}`}
                        aria-label={`Navigate to project page ${name}`}
                      >
                        <BsArrowUpRightSquare
                          size={30}
                          className="cursor-pointer transition-transform hover:-translate-y-1"
                        />
                      </NextLink>
                      <NextLink
                        href={github}
                        target="_blank"
                        aria-label={`Navigate to project github page ${name}`}
                      >
                        <BsGithub
                          size={30}
                          className="cursor-pointer transition-transform hover:-translate-y-1"
                        />
                      </NextLink>
                      <NextLink
                        href={link}
                        target="_blank"
                        aria-label={`Navigate to project url page ${name}`}
                      >
                        <BiWorld
                          size={30}
                          className="cursor-pointer transition-transform hover:-translate-y-1"
                        />
                      </NextLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          },
        )}
      </div>
      <div className="mt-10 flex items-center justify-center pt-10">
        <NextLink
          href="/project"
          className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded border-2 border-black px-6 py-3 font-semibold shadow transition-transform hover:-translate-y-1 dark:border-white"
          aria-label="Navigate to all project page"
        >
          Todos los proyectos
          <BsArrowUpRightSquare size={20} />
        </NextLink>
      </div>
    </section>
  );
};
