import { projects } from "@/data";
import { IProject } from "@/interfaces";

export const getProjectInfo = async (slug: string): Promise<IProject> => {
  const data = projects.filter((p) => p.slug === slug);
  return data[0];
};
