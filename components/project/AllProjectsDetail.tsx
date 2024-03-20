import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";

import { IProject } from "@/interfaces";

interface AllProjectsDetailProps {
  project: IProject;
}

export const AllProjectsDetail: FC<AllProjectsDetailProps> = ({ project }) => {
  const { image, name, slug } = project;
  return (
    <div className="p-4">
      <NextLink
        href={`/project/${slug}`}
        aria-label="Navigate to project selected page"
      >
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="fade-in rounded shadow-xl duration-300 hover:scale-105"
          priority
        />
      </NextLink>

      <NextLink
        href={`/project/${slug}`}
        aria-label="Navigate to project selected page"
      >
        <h2 className="my-3 p-2 text-center text-sm font-semibold transition-all duration-300 hover:underline md:text-lg">
          {name}
        </h2>
      </NextLink>
    </div>
  );
};
