import { FC } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import { BsArrowUpRightSquare } from 'react-icons/bs';

import { ICertificate } from '@/interfaces';

interface CourseCardProps {
	course: ICertificate;
}

export const AllCourseCard: FC<CourseCardProps> = ({ course }) => {
	const { image, name, slug } = course;
	return (
		<div className="p-4">
			<Image
				src={image}
				alt={name}
				width={400}
				height={400}
				className="rounded shadow-lg"
				priority
				data-aos="zoom-in"
			/>
			<div className="flex justify-center items-center mt-3">
				<NextLink href={`/certificate/${slug}`}>
					<BsArrowUpRightSquare
						size={30}
						className="hover:-translate-y-1 transition-transform cursor-pointer"
					/>
				</NextLink>
			</div>
		</div>
	);
};
