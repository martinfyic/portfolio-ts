import { proyects } from '@/data';
import { AllProjectsDetail } from '@/components';

export const generateMetadata = async () => {
	return {
		title: 'Todos mis Proyectos | Martin Ferreira',
		description: 'Portfolio de Martin Ferreira Yic, Todos los proyectos',
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
		<section className="mx-auto max-w-3xl md:max-w-5xl">
			<h1 className="text-center font-bold text-4xl md:text-6xl mb-12">
				Todos mis Proyectos
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-content-center py-8">
				{proyects.map(proyect => {
					if (!proyect.slug) return;
					return <AllProjectsDetail key={proyect.slug} proyect={proyect} />;
				})}
			</div>
		</section>
	);
};
export default ProjectPage;
