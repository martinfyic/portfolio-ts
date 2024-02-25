import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";

import { BsArrowUpRightSquare } from "react-icons/bs";

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

      <h2 className="my-3 p-2 text-center text-sm font-semibold md:text-lg">
        {name}
        <hr className="mx-auto my-4 h-1 w-20 rounded border-0 bg-primary" />
      </h2>
    </div>
  );
};
