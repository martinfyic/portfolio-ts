import { ICertificate, IProject } from "@/interfaces";

interface Props {
  prop: (ICertificate | IProject)[];
}

export const getPaths = async ({ prop }: Props): Promise<string[]> => {
  return prop.map((c) => c.slug);
};
