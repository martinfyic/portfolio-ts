import { ContactSection } from '@/components';

export const generateMetadata = async () => {
	return {
		title: 'Contáctame | Martin Ferreira',
		authors: [
			{
				name: 'Martin Ferreira Yic',
				url: 'https://www.linkedin.com/in/martin-ferreira-yic/',
			},
		],
		icons: [
			{
				rel: 'icon',
				url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>',
			},
		],
	};
};

const ProjectPage = () => {
	return (
		<section className="h-screen">
			<ContactSection />
		</section>
	);
};
export default ProjectPage;
