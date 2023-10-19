import Image from "next/image";
import NextLink from "next/link";
import { redirect } from "next/navigation";

import { BsGithub } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

import { getProyectInfo, getPaths } from "@/helpers";
import { proyects } from "@/data";

export async function generateStaticParams() {
  const paths = await getPaths({ prop: proyects });

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
  const proyect = await getProyectInfo(params.slug);
  if (!proyect) {
    redirect("/");
  }

  return {
    title: `Proyecto ${proyect.name} | Martin Ferreira`,
    authors: [
      {
        name: "Martin Ferreira Yic",
        url: "https://www.linkedin.com/in/martin-ferreira-yic/",
      },
    ],
    icons: [
      {
        rel: "icon",
        url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>",
      },
    ],
  };
};

const ProyectPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getProyectInfo(params.slug);
  if (!data) {
    redirect("/");
  }
  const { description, image, name, github, link } = data;

  return (
    <main className="mx-auto mt-32 max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <h1 className="mb-12 text-center text-4xl font-bold md:text-6xl">
        {name}
      </h1>
      <picture className="mb-10 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          data-aos="zoom-in"
        />
      </picture>
      <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">
        Resumen
        <hr className="mx-auto my-4 h-1 w-20 rounded border-0 bg-primary" />
      </h2>
      <div className="my-3 flex flex-row items-center justify-around gap-3 font-semibold text-gray-700 dark:text-slate-400">
        <div className="flex flex-row items-center gap-2">
          <p>Github </p>
          <NextLink
            href={github}
            target="_blank"
            aria-label={`Navigate to course github project ${name}`}
          >
            <BsGithub
              size={20}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </NextLink>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p>Site </p>
          <NextLink
            href={link}
            target="_blank"
            aria-label={`Navigate to url project ${name}`}
          >
            <BiWorld
              size={20}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </NextLink>
        </div>
      </div>
      <p>{description}</p>
    </main>
  );
};

export default ProyectPage;
