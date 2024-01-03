import { AllCourseCard } from "@/components";
import { certificate } from "@/data";

const CertificatePage = () => {
  return (
    <section className="mx-auto max-w-3xl md:max-w-5xl">
      <h1 className="mb-12 text-center text-4xl font-bold md:text-6xl">
        Certificados 🎓
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {certificate.map((course) => {
          if (!course.slug) return;
          return <AllCourseCard key={course.slug} course={course} />;
        })}
      </div>
    </section>
  );
};
export default CertificatePage;
