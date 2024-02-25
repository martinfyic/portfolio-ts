import { projects } from "@/data";
import { AllProjectsDetail } from "@/components";
import { titleFont } from "@/config/fonts";

const ProjectPage = () => {
  return (
    <section className="mx-auto h-dvh max-w-3xl md:max-w-5xl">
      <h1
        className={`mb-12 text-center text-4xl font-bold md:text-6xl ${titleFont.className}`}
      >
        Proyectos
      </h1>
      <div className="grid grid-cols-2 place-content-center gap-4 py-8 md:grid-cols-3">
        {projects.map((project) => {
          if (!project.slug) return;
          return <AllProjectsDetail key={project.slug} project={project} />;
        })}
      </div>
    </section>
  );
};
export default ProjectPage;
