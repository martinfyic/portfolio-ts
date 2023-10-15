import Image from 'next/image';
import NextLink from 'next/link';
import { redirect } from 'next/navigation';

import { BsArrowUpRightSquare, BsGithub } from 'react-icons/bs';

import { getProyectInfo, getPaths } from '@/helpers';
import { proyects } from '@/data';

export async function generateStaticParams() {
	const paths = await getPaths({ prop: proyects });

	return paths.map(path => {
		return {
			slug: path,
		};
	});
}

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}) => {
	const proyect = await getProyectInfo(params.slug);
	if (!proyect) {
		redirect('/');
	}

	return {
		title: `Proyecto ${proyect.name} | Martin Ferreira`,
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

const ProyectPage = async ({ params }: { params: { slug: string } }) => {
	const data = await getProyectInfo(params.slug);
	if (!data) {
		redirect('/');
	}
	const { description, image, name, github, link } = data;

	return (
		<main className="mx-auto mt-32 max-w-3xl px-4 sm:px-6 md:max-w-5xl">
			<h1 className="text-center font-bold text-4xl md:text-6xl mb-12">
				{name}
			</h1>
			<picture className="flex justify-center items-center mb-10">
				<Image
					src={image}
					alt={name}
					width={600}
					height={600}
					data-aos="zoom-in"
				/>
			</picture>
			<h2 className="text-center font-bold text-2xl md:text-3xl mb-3">
				Resumen
				<hr className="w-20 h-1 mx-auto my-4 bg-primary border-0 rounded" />
			</h2>
			<div className="flex flex-row justify-around items-center font-semibold gap-3 my-3 text-gray-700 dark:text-slate-400">
				<div className="flex flex-row items-center gap-2">
					<p>Github </p>
					<NextLink href={github} target="_blank">
						<BsGithub
							size={20}
							className="hover:-translate-y-1 transition-transform cursor-pointer"
						/>
					</NextLink>
				</div>
				<div className="flex flex-row items-center gap-2">
					<p>Site </p>
					<NextLink href={link} target="_blank">
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

export default ProyectPage;
