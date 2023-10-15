import { BiografiSection, SkillSection } from './';

export const AboutSection = () => {
	return (
		<section id="about">
			<div className="my-12 pb-12 md:pt-6 md:pb-24">
				<h2 className="text-center font-bold text-4xl md:text-6xl mt-6 mb-12">
					Sobre Mi
					<hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded" />
				</h2>
				<div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
					<BiografiSection />
					<SkillSection />
				</div>
			</div>
		</section>
	);
};
