import { certificate } from '@/components';

export const getPaths = async (): Promise<string[]> => {
	return certificate.map(c => c.slug);
};
