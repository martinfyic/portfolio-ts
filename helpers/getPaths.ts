import { ICertificate, IProyect } from '@/interfaces';

interface Props {
	prop: (ICertificate | IProyect)[];
}

export const getPaths = async ({ prop }: Props): Promise<string[]> => {
	return prop.map(c => c.slug);
};
