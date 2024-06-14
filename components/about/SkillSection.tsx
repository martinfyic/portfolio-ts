import Image from "next/image";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiPostgresql,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";

import { ISkill } from "@/interfaces/skills";
import { SubTitle } from "../ui";

const skills: ISkill[] = [
  { skill: "HTML", icon: <FaHtml5 size={"2rem"} /> },
  { skill: "CSS", icon: <FaCss3Alt size={"2rem"} /> },
  { skill: "JavaScript", icon: <SiJavascript size={"2rem"} /> },
  { skill: "TypeScript", icon: <SiTypescript size={"2rem"} /> },
  { skill: "React JS", icon: <FaReact size={"2rem"} /> },
  { skill: "Next JS", icon: <SiNextdotjs size={"2rem"} /> },
  { skill: "Node JS", icon: <FaNodeJs size={"2rem"} /> },
  { skill: "Express", icon: <SiExpress size={"2rem"} /> },
  { skill: "Nest JS", icon: <SiNestjs size={"2rem"} /> },
  { skill: "Tailwind CSS", icon: <SiTailwindcss size={"2rem"} /> },
  { skill: "Mongo DB", icon: <SiMongodb size={"2rem"} /> },
  { skill: "Postgresql", icon: <SiPostgresql size={"2rem"} /> },
  { skill: "Git", icon: <BsGit size={"2rem"} /> },
];

export const SkillSection = () => {
  return (
    <div className="md:w-1/2">
      <SubTitle text="Mis Skills" />
      <ul className="z-10 flex flex-row flex-wrap justify-center md:justify-start md:pb-7">
        {skills.map(({ icon, skill }, idx) => {
          return (
            <li
              key={idx}
              className="mr-2 mt-2 flex items-center justify-center gap-2 rounded bg-gradient-to-r from-primary to-pink-500 px-2 py-2 text-sm font-semibold text-white/90 md:px-4 md:text-lg"
            >
              {icon}

              {skill}
            </li>
          );
        })}
      </ul>
      <Image
        src="/skills-image.svg"
        priority
        alt="Imagen representativa de Martin"
        width={350}
        height={350}
        className="hidden md:relative md:bottom-0 md:left-24 md:z-0 md:block md:h-auto"
      />
    </div>
  );
};
