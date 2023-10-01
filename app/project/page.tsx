export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}) => {
	return {
		title: 'Todos mis Proyectos | Martin Ferreira',
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
			<h1 className="text-center text-4xl md:text-6xl mb-11">Proyectos</h1>
			<p className="text-8xl text-center  mb-11">🏗️</p>
			<p className="text-2xl text-center">👷🏻 En construcción ⚒️</p>
		</section>
	);
};
export default ProjectPage;
