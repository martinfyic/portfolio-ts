import NextLink from "next/link";

import { BsArrowUpRightSquare } from "react-icons/bs";

import { CourseCard } from "./CourseCard";
import { certificate } from "@/data";
import { SubTitleSection } from "../ui";

export const StudiesSection = () => {
  const firstFourCertificate = certificate.slice(0, 4);

  return (
    <section id="certificates" className="my-8 py-16">
      <SubTitleSection text="Certificados 🎓" />
      <div className="grid grid-cols-2 place-content-center place-items-center gap-4 md:grid-cols-2">
        {firstFourCertificate.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center pt-10">
        <NextLink
          href="/certificate"
          className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded border-2 border-black px-6 py-3 font-semibold shadow transition-transform hover:-translate-y-1 dark:border-light"
        >
          Todos los certificados
          <BsArrowUpRightSquare size={20} />
        </NextLink>
      </div>
    </section>
  );
};
