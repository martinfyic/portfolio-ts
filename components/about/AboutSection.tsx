import { SubTitleSection } from "../ui";
import { BiografiSection, SkillSection } from "./";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12">
      <div className="my-12 pb-12 md:pb-24 md:pt-6">
        <SubTitleSection text="Sobre Mi" />
        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <BiografiSection />
          <SkillSection />
        </div>
      </div>
    </section>
  );
};
