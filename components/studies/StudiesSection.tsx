import { CourseCard } from './CourseCard';
import { certificate } from './certificate';

export const StudiesSection = () => {
	return (
		<section id="certificates" className="my-12 pb-12 md:pt-6 md:pb-48">
			<h2
				className="text-center font-bold text-6xl my-20"
				data-aos="fade-up"
				data-aos-duration="800"
			>
				Certificados 🎓
				<hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded" />
			</h2>
			<div className="flex flex-wrap justify-center">
				{certificate.map(course => (
					<CourseCard key={course.name} course={course} />
				))}
			</div>
		</section>
	);
};
