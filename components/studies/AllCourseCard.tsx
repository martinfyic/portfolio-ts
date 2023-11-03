import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";

import { BsArrowUpRightSquare } from "react-icons/bs";

import { ICertificate } from "@/interfaces";

interface CourseCardProps {
  course: ICertificate;
}

export const AllCourseCard: FC<CourseCardProps> = ({ course }) => {
  const { image, name, slug } = course;
  return (
    <div className="p-4">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="rounded shadow-xl dark:shadow-xl"
        priority
        data-aos="zoom-in"
      />

      <h2 className="my-3 p-2 text-center text-sm font-semibold md:text-lg">
        {name}
        <hr className="mx-auto my-4 h-1 w-20 rounded border-0 bg-primary" />
      </h2>
      <div className="mt-3 flex items-center justify-center">
        <NextLink
          href={`/certificate/${slug}`}
          aria-label={`Navigate to ${name} course`}
        >
          <BsArrowUpRightSquare
            size={30}
            className="cursor-pointer transition-transform hover:-translate-y-1"
          />
        </NextLink>
      </div>
    </div>
  );
};
