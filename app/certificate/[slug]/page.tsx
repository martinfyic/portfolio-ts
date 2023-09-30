import Image from 'next/image';
import NextLink from 'next/link';

import { BsArrowUpRightSquare } from 'react-icons/bs';

import { getCertificateInfo, getPaths } from '@/helpers';

export async function generateStaticParams() {
	const paths = await getPaths();

	return paths.map(path => ({
		slug: path,
	}));
}

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}) => {
	const { name } = await getCertificateInfo(params.slug);
	return {
		title: `Certificado ${name} | Martin Ferreira`,
		authors: [
			{
				name: 'Martin Ferreira Yic',
				url: 'https://www.linkedin.com/in/martin-ferreira-yic/',
			},
		],
		icons: [
			{
				rel: 'icon',
				url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>',
			},
		],
	};
};

const CertificatePage = async ({ params }: { params: { slug: string } }) => {
	const {
		dateFinished,
		dateStart,
		description,
		image,
		linkCurso,
		name,
		place,
		url,
	} = await getCertificateInfo(params.slug);

	return (
		<main className="mx-auto mt-32 max-w-3xl px-4 sm:px-6 md:max-w-5xl">
			<h1 className="text-center font-bold text-4xl md:text-6xl mb-12">
				{name}
			</h1>
			<picture className="flex justify-center items-center mb-10">
				<Image src={image} alt={name} width={600} height={600} />
			</picture>
			<h2 className="text-left md:text-center font-bold text-2xl md:text-3xl mb-3">
				Resumen
			</h2>
			<div className="flex flex-col md:flex-row justify-start items-start md:justify-around font-semibold md:items-center gap-3 my-3 text-gray-700 dark:text-slate-400">
				<p>Fecha inicio: {dateStart}</p>
				<p>Fecha fin: {dateFinished}</p>
				<div className="flex flex-row items-center gap-1">
					<p>Url certificado</p>
					<NextLink href={url} target="_blank">
						<BsArrowUpRightSquare
							size={20}
							className="hover:-translate-y-1 transition-transform cursor-pointer"
						/>
					</NextLink>
				</div>
				<div className="flex flex-row items-center gap-1">
					<p>Realizado en: {place} </p>
					<NextLink href={linkCurso} target="_blank">
						<BsArrowUpRightSquare
							size={20}
							className="hover:-translate-y-1 transition-transform cursor-pointer"
						/>
					</NextLink>
				</div>
			</div>
			<p>{description}</p>
		</main>
	);
};

export default CertificatePage;
