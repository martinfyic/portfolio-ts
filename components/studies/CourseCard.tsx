import Image from "next/image";
import NextLink from "next/link";

import { BsArrowUpRightSquare } from "react-icons/bs";

import { ICertificate } from "@/interfaces";

interface CourseCardProps {
  course: ICertificate;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { dateFinished, image, name, place, slug } = course;

  return (
    <div className="m-4 flex w-36 flex-col items-center justify-center overflow-hidden rounded-lg align-middle md:w-80">
      <NextLink href={`certificate/${slug}`}>
        <Image src={image} alt={name} width={300} height={300} />
      </NextLink>
      <div className="p-4">
        <h3 className="mb-1 text-sm font-semibold md:text-xl">{name}</h3>
        <p className="text-xs text-gray-700 dark:text-slate-400 md:text-sm">
          Fecha obtención: {dateFinished}
        </p>
        <p className="text-sm text-gray-700 dark:text-slate-400">
          Lugar: {place}
        </p>
        <div className="mt-3 flex justify-center align-middle">
          <NextLink href={`/certificate/${slug}`}>
            <BsArrowUpRightSquare
              size={30}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </NextLink>
        </div>
      </div>
    </div>
  );
};
