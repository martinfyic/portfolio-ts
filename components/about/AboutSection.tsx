import { BiografiSection, SkillSection } from "./";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12">
      <div className="my-12 pb-12 md:pb-24 md:pt-6">
        <h2 className="mb-12 mt-6 text-center text-4xl font-bold md:text-6xl">
          Sobre Mi
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-primary" />
        </h2>
        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <BiografiSection />
          <SkillSection />
        </div>
      </div>
    </section>
  );
};
