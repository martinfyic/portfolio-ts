import type { Metadata } from 'next';
import {
	AboutSection,
	ContactSection,
	HeroSection,
	HomeNavbar,
	ProyectSection,
	StudiesSection,
} from '@/components';

export const metadata: Metadata = {
	title: 'Martin Ferreira | Full Stack Dev',
	description:
		'Portfolio de Martin Ferreira Yic, Desarrollador Web Full Stack, stack MERN, Next.js, CSS, HTML',
	keywords:
		'JavaScipr, TypeScript, React, Next.js, Node, HTML, CSS, Developer, Full Stack, MERN, Express',
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
	metadataBase: new URL('http://localhost:3000/'),
	openGraph: {
		title: 'Martin Ferreira | Full Stack Developer',
		description:
			'Portfolio de Martin Ferreira Yic, Desarrollador Web Full Stack',
		images: [
			{
				url: '/og-web.png',
				width: '800',
				height: '600',
			},
		],
	},
};

export default function Home() {
	return (
		<main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
			<HomeNavbar />
			<HeroSection />
			<AboutSection />
			<ProyectSection />
			<StudiesSection />
			<ContactSection />
		</main>
	);
}
