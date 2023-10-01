import NextLink from 'next/link';

import { BsArrowUpRightSquare } from 'react-icons/bs';

import { CourseCard } from './CourseCard';
import { certificate } from './certificate';

export const StudiesSection = () => {
	const firstFiveCertificate = certificate.slice(0, 5);

	return (
		<section id="certificates" className="my-8 pb-12 md:pt-6 md:pb-24">
			<h2
				className="text-center font-bold text-4xl md:text-6xl my-12"
				data-aos="fade-up"
				data-aos-duration="800"
			>
				Certificados 🎓
				<hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded" />
			</h2>
			<div className="flex flex-wrap justify-around items-center mb-6">
				{firstFiveCertificate.map(course => (
					<CourseCard key={course.slug} course={course} />
				))}
			</div>
			<div className="flex justify-center items-center mt-10 pt-10">
				<NextLink
					href="/certificate"
					className="font-semibold px-6 py-3 border-black dark:border-white border-2 cursor-pointer rounded shadow flex flex-row gap-2 items-center justify-center hover:-translate-y-1 transition-transform"
				>
					Todos los certificados
					<BsArrowUpRightSquare size={20} />
				</NextLink>
			</div>
		</section>
	);
};
