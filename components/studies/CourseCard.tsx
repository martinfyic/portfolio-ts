import Image from 'next/image';

import { ICertificate } from '@/interfaces';

interface CourseCardProps {
	course: ICertificate;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
	return (
		<div className="rounded-lg overflow-hidden m-4 w-80">
			<Image src={course.image} alt={course.name} width={300} height={300} />
			<div className="p-4">
				<h3 className="text-xl font-semibold">{course.name}</h3>
				<p className="text-gray-500 text-sm mb-2 truncate">
					{course.description}
				</p>
				<p className="text-gray-700 text-sm">
					Fecha de inicio: {course.dateStart}
				</p>
				<p className="text-gray-700 text-sm">
					Fecha de fin: {course.dateFinished}
				</p>
				<p className="text-gray-700 text-sm">Lugar: {course.place}</p>
			</div>
		</div>
	);
};
