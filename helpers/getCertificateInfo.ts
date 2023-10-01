import { certificate } from '@/components';
import { ICertificate } from '@/interfaces';

export const getCertificateInfo = async (
	slug: string,
): Promise<ICertificate> => {
	const data = certificate.filter(c => c.slug === slug);
	return data[0];
};
