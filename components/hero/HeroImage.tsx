import { FC } from 'react';
import Image from 'next/image';
import profilPic from '../../public/personal-foto.png';

export const HeroImage: FC = () => {
	return (
		<div className="md:w-1/2 md:mt-2 animate__animated animate__fadeIn animate__slow">
			<Image
				src={profilPic}
				alt="Foto de Martin Ferreira"
				priority
				sizes="100vw"
				style={{
					width: 400,
					height: 'auto',
				}}
			/>
		</div>
	);
};
