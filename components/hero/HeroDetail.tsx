import { FC } from 'react';
import { Link } from 'react-scroll/modules';

export const HeroDetail: FC = () => {
	return (
		<div className="md:mt-2 md:w-3/5 animate__animated animate__fadeIn animate__slow md:text-left">
			<h1 className="font-bold text-4xl mt-6 md:text-6xl md:mt-0">
				Hola 👋🏻, soy Martín!
			</h1>
			<p className="text-lg mt-4 mb-6 md:text-2xl">
				Desarrollador{' '}
				<span className="text-primary font-semibold">Full Stack</span> en
				Montevideo, UY.
			</p>
			<Link
				to="proyectos"
				className="text-neutral-100 font-semibold px-6 py-3 bg-primary hover:bg-neutral-900 hover:text-primary cursor-pointer rounded shadow dark:hover:bg-orange-100 dark:hover:text-primary transition-all duration-500"
				activeClass="active"
				spy={true}
				smooth={true}
				offset={-100}
				duration={500}
			>
				Proyectos
			</Link>
		</div>
	);
};
