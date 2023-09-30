import Image from 'next/image';
import NextLink from 'next/link';

import { BsArrowUpRightSquare } from 'react-icons/bs';

import { ICertificate } from '@/interfaces';

interface CourseCardProps {
	course: ICertificate;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
	const { dateFinished, dateStart, image, name, place, slug } = course;

	return (
		<div
			className="rounded-lg overflow-hidden m-4 w-80"
			data-aos="fade-up"
			data-aos-duration="1500"
		>
			<NextLink href={`certificate/${slug}`}>
				<Image src={image} alt={name} width={300} height={300} />
			</NextLink>
			<div className="p-4">
				<h3 className="mb-1 text-xl font-semibold">{name}</h3>
				<p className="text-gray-700 text-sm dark:text-slate-400">
					Fecha de inicio: {dateStart}
				</p>
				<p className="text-gray-700 text-sm dark:text-slate-400">
					Fecha de fin: {dateFinished}
				</p>
				<p className="text-gray-700 text-sm dark:text-slate-400">
					Lugar: {place}
				</p>
				<div className="mt-3">
					<NextLink href={`certificate/${slug}`}>
						<BsArrowUpRightSquare
							size={30}
							className="hover:-translate-y-1 transition-transform cursor-pointer"
						/>
					</NextLink>
				</div>
			</div>
		</div>
	);
};
