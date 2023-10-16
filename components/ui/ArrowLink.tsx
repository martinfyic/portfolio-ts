import { FC } from 'react';
import NextLink from 'next/link';

import { HiMiniChevronDoubleDown } from 'react-icons/hi2';

interface Props {
	to: string;
}

export const ArrowLink: FC<Props> = ({ to }) => {
	return (
		<div className="flex flex-row items-center text-center justify-center mb-32">
			<NextLink href={to}>
				<HiMiniChevronDoubleDown size={35} className="animate-bounce" />
			</NextLink>
		</div>
	);
};
