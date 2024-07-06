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
      <picture className="rounded-md bg-gradient-to-tl from-primary via-purple-400 to-pink-400 p-4">
        <NextLink href={`certificate/${slug}`}>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="duration-300 hover:scale-95"
            title={`Imagen del certificado ${name}`}
          />
        </NextLink>
      </picture>
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
