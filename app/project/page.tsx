import { projects } from "@/data";
import { AllProjectsDetail } from "@/components";

const ProjectPage = () => {
  return (
    <section className="mx-auto max-w-3xl md:max-w-5xl">
      <h1 className="mb-12 text-center text-4xl font-bold md:text-6xl">
        Proyectos
      </h1>
      <div className="grid grid-cols-2 place-content-center gap-4 py-8 md:grid-cols-3">
        {projects.map((proyect) => {
          if (!proyect.slug) return;
          return <AllProjectsDetail key={proyect.slug} proyect={proyect} />;
        })}
      </div>
    </section>
  );
};
export default ProjectPage;
