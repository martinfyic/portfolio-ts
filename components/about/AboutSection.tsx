import NextLink from "next/link";

import { BsArrowUpRightSquare } from "react-icons/bs";

import { SubTitleSection } from "../ui";
import { BiografiSection, SkillSection } from "./";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12">
      <article className="my-12 pb-12 md:pb-24 md:pt-6">
        <SubTitleSection text="Sobre Mi" />
        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <BiografiSection />
          <SkillSection />
        </div>
      </article>
      <div className="mt-4 flex items-center justify-center pt-4">
        <NextLink
          href="/about"
          className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded border-2 border-black px-6 py-3 font-semibold shadow transition-transform hover:-translate-y-1 dark:border-light"
        >
          Más sobre mí
          <BsArrowUpRightSquare size={20} />
        </NextLink>
      </div>
    </section>
  );
};
