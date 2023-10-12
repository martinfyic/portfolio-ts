import { FC } from 'react';

import { Link } from 'react-scroll/modules';

export const HeroDetail: FC = () => {
	return (
		<div className="md:mt-2 md:w-3/5 animate__animated animate__fadeIn animate__slow md:text-left">
			<h1 className="font-bold text-4xl mt-6 md:text-6xl md:mt-0">
				Hola 👋🏻, soy Martín!
			</h1>
			<p className="text-lg font-semibold mt-4 mb-6 md:text-2xl">
				Desarrollador <span className="text-primary">Full Stack</span> en
				Montevideo, UY.
			</p>
			<div className="flex justify-start items-center gap-3">
				<Link
					to="projects"
					className="text-white font-semibold px-6 py-3 bg-primary rounded shadow hover:-translate-y-1 transition-transform cursor-pointer hover:opacity-70"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
				>
					Proyectos
				</Link>
				<Link
					to="contact"
					className="font-semibold border-black dark:border-white border-2 px-6 py-3 rounded shadow hover:-translate-y-1 transition-transform cursor-pointer hover:opacity-70"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
				>
					Contáctame
				</Link>
			</div>
		</div>
	);
};
