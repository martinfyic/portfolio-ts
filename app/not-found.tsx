import NextLink from 'next/link';
import { PageNavbar } from '@/components';

export default function NotFound() {
	return (
		<>
			<PageNavbar />
			<main className="mt-5">
				<div className="h-screen flex justify-center items-center">
					<div>
						<h2 className="text-3xl md:text-7xl mb-8">
							<strong className="font-semibold">404</strong> | No encontrado
						</h2>
						<div className="flex justify-center items-center">
							<NextLink
								href="/"
								className="text-white font-semibold px-6 py-3 bg-primary rounded shadow hover:-translate-y-1 transition-transform cursor-pointer hover:opacity-70"
							>
								Volver a inicio
							</NextLink>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
