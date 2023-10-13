import Image from 'next/image';

import {
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaNodeJs,
	FaBootstrap,
} from 'react-icons/fa';
import {
	SiJavascript,
	SiNextdotjs,
	SiMongodb,
	SiTailwindcss,
	SiGithub,
	SiTypescript,
	SiExpress,
} from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { ISkill } from '@/interfaces/skills';

const skills: ISkill[] = [
	{ skill: 'HTML', icon: <FaHtml5 size={'2rem'} /> },
	{ skill: 'CSS', icon: <FaCss3Alt size={'2rem'} /> },
	{ skill: 'JavaScript', icon: <SiJavascript size={'2rem'} /> },
	{ skill: 'TypeScript', icon: <SiTypescript size={'2rem'} /> },
	{ skill: 'React JS', icon: <FaReact size={'2rem'} /> },
	{ skill: 'Next JS', icon: <SiNextdotjs size={'2rem'} /> },
	{ skill: 'Node JS', icon: <FaNodeJs size={'2rem'} /> },
	{ skill: 'Express', icon: <SiExpress size={'2rem'} /> },
	{ skill: 'Tailwind CSS', icon: <SiTailwindcss size={'2rem'} /> },
	{ skill: 'Bootstrap', icon: <FaBootstrap size={'2rem'} /> },
	{ skill: 'Mongo DB', icon: <SiMongodb size={'2rem'} /> },
	{ skill: 'Git', icon: <BsGit size={'2rem'} /> },
	{ skill: 'GitHub', icon: <SiGithub size={'2rem'} /> },
];

export const SkillSection = () => {
	return (
		<div className="md:w-1/2" data-aos="fade-up" data-aos-duration="2000">
			<h2 className="text-center text-2xl font-bold mb-6 md:text-left">
				Mis Skills
			</h2>
			<ul className="flex flex-wrap flex-row justify-center z-10 md:justify-start md:pb-7">
				{skills.map(({ icon, skill }, idx) => {
					return (
						<li
							key={idx}
							// className="bg-primary flex justify-center items-center gap-2 text-lg px-4 py-2 mr-2 mt-2 text-orange-100 rounded font-semibold"
							className="bg-primary flex justify-center items-center gap-2 text-sm md:text-lg px-2 md:px-4 py-2 mr-2 mt-2 text-orange-100 rounded font-semibold"
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
				className="hidden md:h-auto md:block md:relative md:bottom-0 md:left-24 md:z-0"
			/>
		</div>
	);
};
