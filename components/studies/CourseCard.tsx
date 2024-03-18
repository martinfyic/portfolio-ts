import Image from "next/image";
import NextLink from "next/link";

import { ICertificate } from "@/interfaces";

interface CourseCardProps {
  course: ICertificate;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { image, name, slug } = course;

  return (
    <div className="m-4 flex w-36 flex-col items-center justify-center overflow-hidden rounded-lg align-middle md:w-80">
      <NextLink href={`certificate/${slug}`}>
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="duration-300 hover:scale-105"
        />
      </NextLink>
      <div className="p-4">
        <NextLink href={`certificate/${slug}`}>
          <h3 className="mb-1 text-sm font-semibold hover:underline md:text-xl">
            {name}
          </h3>
        </NextLink>
      </div>
    </div>
  );
};
