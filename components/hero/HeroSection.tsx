'use client';
import { FC } from 'react';
import { HeroImage } from './HeroImage';
import { HeroDetail } from './HeroDetail';

export const HeroSection: FC = () => {
	return (
		<section id="home">
			<div className="flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:py-24 md:my-20">
				<HeroImage />
				<HeroDetail />
			</div>
		</section>
	);
};
