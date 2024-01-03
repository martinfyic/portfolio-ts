import { projects } from "@/data";
import { IProject } from "@/interfaces";

export const getProyectInfo = async (slug: string): Promise<IProject> => {
  const data = projects.filter((p) => p.slug === slug);
  return data[0];
};
