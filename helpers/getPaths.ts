import { certificate } from '@/data';

export const getPaths = async (): Promise<string[]> => {
	return certificate.map(c => c.slug);
};
