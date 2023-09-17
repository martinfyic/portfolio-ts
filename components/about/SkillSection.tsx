import Image from 'next/image';

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Node' },
  { skill: 'Express' },
  { skill: 'Tailwind CSS' },
  { skill: 'Bootstrap' },
  { skill: 'Git' },
  { skill: 'GitHub' },
];

export const SkillSection = () => {
  return (
    <div className="md:w-1/2" data-aos="fade-up" data-aos-duration="2000">
      <h2 className="text-center text-2xl font-bold mb-6 md:text-left">
        Mis Skills
      </h2>
      <ul className="flex flex-wrap flex-row justify-center z-10 md:justify-start md:pb-7">
        {skills.map((item, idx) => {
          return (
            <li
              key={idx}
              className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
            >
              {item.skill}
            </li>
          );
        })}
      </ul>
      <Image
        src="/skills-image.svg"
        alt="Imagen representativa de Martin"
        width={350}
        height={350}
        className="hidden md:block md:relative md:bottom-0 md:left-24 md:z-0"
      />
    </div>
  );
};
