import { PageNavbar } from '@/components';
import { ReactNode } from 'react';

export default function AboutLayout({ children }: { children: ReactNode }) {
	return (
		<section className="mt-32">
			<PageNavbar />
			{children}
		</section>
	);
}
