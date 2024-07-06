import Image from "next/image";
import NextLink from "next/link";
import { redirect } from "next/navigation";

import { BsGithub } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

import { getProjectInfo, getPaths } from "@/helpers";
import { projects } from "@/data";

export async function generateStaticParams() {
  const paths = await getPaths({ prop: projects });

  return paths.map((path) => {
    return {
      slug: path,
    };
  });
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const project = await getProjectInfo(params.slug);
  if (!project) {
    redirect("/");
  }

  return {
    title: `Proyecto ${project.name} | Martin Ferreira`,
    description: project.description,
    authors: [
      {
        name: "Martin Ferreira Yic",
        url: "https://www.linkedin.com/in/martin-ferreira-yic/",
      },
    ],
    icons: {
      icon: ["/favicon.ico?v=4"],
      apple: ["/apple-touch-icon.png?v=4"],
      shortcut: ["apple-touch-icon.png"],
    },
  };
};

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getProjectInfo(params.slug);
  if (!data) {
    redirect("/");
  }
  const { description, image, name, github, link } = data;

  return (
    <main className="fade-in mx-auto mt-32 h-dvh max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <h1 className="mb-12 text-center text-4xl font-bold md:text-6xl">
        {name}
      </h1>
      <picture className="mb-10 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          title={name}
          width={600}
          height={600}
          className="shadow-xl"
        />
      </picture>
      <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">
        Resumen
        <hr className="mx-auto my-4 h-1 w-20 rounded border-0 bg-primary" />
      </h2>
      <div className="my-3 flex flex-row items-center justify-around gap-3 font-semibold text-gray-700 dark:text-slate-400">
        <NextLink
          href={github}
          target="_blank"
          aria-label={`Navegar al repositorio del proyecto ${name}`}
          title={`Navegar al repositorio del proyecto ${name}`}
          className="flex flex-row items-center gap-2"
        >
          <p className="hover:underline">Github </p>
          <BsGithub
            size={20}
            className="cursor-pointer transition-transform hover:-translate-y-1"
          />
        </NextLink>
        <NextLink
          href={link}
          target="_blank"
          aria-label={`Navegar al proyecto ${name}`}
          title={`Proyecto ${name}`}
          className="flex flex-row items-center gap-2"
        >
          <p className="hover:underline">Site </p>
          <BiWorld
            size={20}
            className="cursor-pointer transition-transform hover:-translate-y-1"
          />
        </NextLink>
      </div>
      <div className="mx-auto mt-10 max-w-4xl">
        <p className="text-balance text-center text-lg">{description}</p>
      </div>
    </main>
  );
};

export default ProjectPage;
