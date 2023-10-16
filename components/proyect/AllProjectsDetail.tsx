import { FC } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import { BsArrowUpRightSquare } from 'react-icons/bs';

import { IProyect } from '@/interfaces';

interface AllProjectsDetailProps {
	proyect: IProyect;
}

export const AllProjectsDetail: FC<AllProjectsDetailProps> = ({ proyect }) => {
	const { image, name, slug } = proyect;
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

			<h2 className="text-sm text-center font-semibold md:text-lg p-2 my-3">
				{name}
				<hr className="w-20 h-1 mx-auto my-4 bg-primary border-0 rounded" />
			</h2>
			<div className="flex justify-center items-center mt-3">
				<NextLink href={`/project/${slug}`}>
					<BsArrowUpRightSquare
						size={30}
						className="hover:-translate-y-1 transition-transform cursor-pointer"
					/>
				</NextLink>
			</div>
		</div>
	);
};
