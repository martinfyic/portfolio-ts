import Image from 'next/image';
import NextLink from 'next/link';

import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';

import { proyects } from '@/data';

export const ProyectSection = () => {
	return (
		<section id="projects" className="my-12 pb-12 md:pt-3 md:pb-24">
			<h2
				className="text-center font-bold text-4xl md:text-6xl my-14"
				data-aos="fade-up"
				data-aos-duration="800"
			>
				Proyectos
				<hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded" />
			</h2>
			<div className="flex flex-col space-y-28">
				{proyects.map((proy, idx) => {
					return (
						<div key={idx}>
							<div
								className="flex flex-col md:flex-row md:space-x-12"
								data-aos="fade-up"
								data-aos-duration="1500"
							>
								<picture className="md:w-1/2 mb-4">
									<NextLink
										href={`/project/${proy.slug}`}
										className="cursor-pointer"
									>
										<Image
											src={proy.image}
											alt={proy.name}
											width={1000}
											height={1000}
											priority
											className="rounded-xl shadow-xl hover:opacity-70"
										/>
									</NextLink>
								</picture>
								<div className="md:w-1/2">
									<h3 className="text-2xl md:text-3xl font-semibold mb-6">
										{proy.name}
									</h3>
									<p className="sm:text-base md:text-lg leading-7 mb-4 truncate-3-lines">
										{proy.description}
									</p>
									<div className="flex flex-row align-bottom space-x-4">
										<NextLink href={`/project/${proy.slug}`}>
											<BsArrowUpRightSquare
												size={30}
												className="hover:-translate-y-1 transition-transform cursor-pointer"
											/>
										</NextLink>
										<NextLink href={proy.github} target="_blank">
											<BsGithub
												size={30}
												className="hover:-translate-y-1 transition-transform cursor-pointer"
											/>
										</NextLink>
										<NextLink href={proy.link} target="_blank">
											<BiWorld
												size={30}
												className="hover:-translate-y-1 transition-transform cursor-pointer"
											/>
										</NextLink>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex justify-center items-center mt-10 pt-10">
				<NextLink
					href="/project"
					className="font-semibold px-6 py-3 border-black dark:border-white border-2 cursor-pointer rounded shadow flex flex-row gap-2 items-center justify-center hover:-translate-y-1 transition-transform"
				>
					Todos los proyectos
					<BsArrowUpRightSquare size={20} />
				</NextLink>
			</div>
		</section>
	);
};
