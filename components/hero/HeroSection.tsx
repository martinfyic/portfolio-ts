'use client';
import { FC } from 'react';

import { HeroImage } from './HeroImage';
import { HeroDetail } from './HeroDetail';
import { ArrowLink } from '../ui';

export const HeroSection: FC = () => {
	return (
		<section id="home">
			<div className="flex flex-col text-center items-center justify-center md:flex-row my-10 py-10 xl:my-24 xl:py-24">
				<HeroImage />
				<HeroDetail />
			</div>
			<ArrowLink />
		</section>
	);
};
