import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";

import { ICertificate } from "@/interfaces";

interface CourseCardProps {
  course: ICertificate;
}

export const AllCourseCard: FC<CourseCardProps> = ({ course }) => {
  const { image, name, slug } = course;
  return (
    <div className="p-4">
      <NextLink
        href={`/certificate/${slug}`}
        aria-label={`Navigate to ${name} course`}
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
        href={`/certificate/${slug}`}
        aria-label={`Navigate to ${name} course`}
      >
        <h2 className="my-3 p-2 text-center text-sm font-semibold hover:underline md:text-lg">
          {name}
        </h2>
      </NextLink>
    </div>
  );
};
