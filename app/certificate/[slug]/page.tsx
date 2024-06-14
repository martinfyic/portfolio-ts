import Image from "next/image";
import NextLink from "next/link";
import { redirect } from "next/navigation";

import { BiWorld } from "react-icons/bi";

import { getCertificateInfo, getPaths } from "@/helpers";
import { certificate } from "@/data";

export async function generateStaticParams() {
  const paths = await getPaths({ prop: certificate });

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
  const certificate = await getCertificateInfo(params.slug);
  if (!certificate) {
    redirect("/");
  }

  return {
    title: `Certificado ${certificate.name} | Martin Ferreira`,
    description: certificate.description,
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

const CertificatePage = async ({ params }: { params: { slug: string } }) => {
  const data = await getCertificateInfo(params.slug);
  if (!data) {
    redirect("/");
  }
  const {
    courseHours,
    courseWeeks,
    dateFinished,
    description,
    image,
    linkCurso,
    name,
    place,
    url,
  } = data;

  return (
    <main className="fade-in mx-auto mt-32 max-w-3xl px-4 sm:px-6 md:max-w-5xl">
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
          className="shadow-xl"
        />
      </picture>
      <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">
        Resumen
        <hr className="mx-auto my-4 h-1 w-20 rounded border-0 bg-primary" />
      </h2>
      <div className="my-3 flex flex-col items-start justify-start gap-3 font-semibold text-gray-700 dark:text-slate-400 md:flex-row md:items-center md:justify-around">
        <p>Fecha obtención: {dateFinished}</p>

        <div className="flex flex-row items-center gap-2">
          <NextLink
            href={url}
            target="_blank"
            aria-label={`Navigate to course ${name}`}
            className="flex flex-row items-center justify-center gap-1"
          >
            <p className="hover:underline">Url certificado</p>
            <BiWorld
              size={20}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </NextLink>
        </div>
        <div className="flex flex-row items-center gap-2">
          <NextLink
            href={linkCurso}
            target="_blank"
            aria-label={`Navigate to course ${name}`}
            className="flex flex-row items-center justify-center gap-1"
          >
            <p className="hover:underline">Realizado en {place} </p>
            <BiWorld
              size={20}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </NextLink>
        </div>
      </div>
      <p className="md:m-3 md:text-pretty">{description}</p>
    </main>
  );
};

export default CertificatePage;
