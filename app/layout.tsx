import { ReactNode } from 'react';
import { Navbar } from '@/components';
import { Providers } from './providers';
import '../styles/globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang='es'
			suppressHydrationWarning
		>
			<body className={inter.className}>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
