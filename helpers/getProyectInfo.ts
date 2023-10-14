import { proyects } from '@/data';
import { IProyect } from '@/interfaces';

export const getProyectInfo = async (slug: string): Promise<IProyect> => {
	const data = proyects.filter(p => p.slug === slug);
	return data[0];
};
