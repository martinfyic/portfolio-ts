import { AllCourseCard } from "@/components";
import { certificate } from "@/data";

export const generateMetadata = async () => {
  return {
    title: `Todos mis Cursos | Martin Ferreira`,
    description: "Portfolio de Martin Ferreira Yic, Todos los certificados",
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
