import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Martin Ferreira | Full Stack Web Developer',
	description:
		'Portfolio de Martin Ferreira Yic, Desarrollador Web Full Stack, stack MERN, Next.js, CSS, HTML',
};

export default function Home() {
	return (
		<>
			<h1 className='text-center text-5xl'>Start Project 🚀</h1>
		</>
	);
}
