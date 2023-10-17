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
          className="shadow-xl"
        />
      </picture>
      <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">
        Resumen
        <hr className="mx-auto my-4 h-1 w-20 rounded border-0 bg-primary" />
      </h2>
      <div className="my-3 flex flex-col items-start justify-start gap-3 font-semibold text-gray-700 dark:text-slate-400 md:flex-row md:items-center md:justify-around">
        <p>Fecha obtención: {dateFinished}</p>
        <p>Semanas: {courseWeeks}</p>
        <p>Horas curso: {courseHours}</p>
        <div className="flex flex-row items-center gap-2">
          <p>Url certificado</p>
          <NextLink href={url} target="_blank">
            <BiWorld
              size={20}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </NextLink>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p>Realizado en {place} </p>
          <NextLink href={linkCurso} target="_blank">
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

export default CertificatePage;
