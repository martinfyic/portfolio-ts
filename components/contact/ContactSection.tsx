import React from 'react';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
	return (
		<section id="contact" className="body-font relative">
			<div className="container px-5 py-24 lg:my-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h2 className="text-center font-bold text-4xl md:text-6xl mt-6 mb-12">
						Contáctame ✉️
						<hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded" />
					</h2>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Me comunicaré contigo a la mayor brevedad posible. No dudes en
						escribir si tienes alguna pregunta o inquietud.
					</p>
				</div>
				<div className="lg:w-1/2 md:w-2/3 mx-auto">
					<div className="flex flex-wrap -m-2">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
};
