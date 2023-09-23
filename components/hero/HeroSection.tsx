'use client';
import { FC } from 'react';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';
import { HeroImage } from './HeroImage';
import { HeroDetail } from './HeroDetail';

export const HeroSection: FC = () => {
	return (
		<section id="home">
			<div className="flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-28 md:my-24">
				<HeroImage />
				<HeroDetail />
			</div>
			<div className="flex flex-row justify-center align-middle">
				<Link
					to="about"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="cursor-pointer"
				>
					<HiArrowDown
						size={35}
						className="animate__animated animate__bounce animate__infinite"
					/>
				</Link>
			</div>
		</section>
	);
};
