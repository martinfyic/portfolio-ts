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
			<div className="flex flex-wrap justify-around items-center">
				{firstFiveCertificate.map(course => (
					<CourseCard key={course.slug} course={course} />
				))}
			</div>
			<div className="flex justify-center items-center mt-16">
				<NextLink
					data-aos="fade-up"
					data-aos-duration="1500"
					href="/certificate"
					className="text-neutral-100 font-semibold px-6 py-3 bg-primary hover:bg-neutral-900 hover:text-primary cursor-pointer rounded shadow dark:hover:bg-orange-100 dark:hover:text-primary transition-all duration-500 flex flex-row gap-2 items-center justify-center"
				>
					Todos los certificados
					<BsArrowUpRightSquare size={20} />
				</NextLink>
			</div>
		</section>
	);
};
