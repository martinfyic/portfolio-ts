'use client';

import { ReactNode, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Footer, Navbar } from '@/components';
import { Providers } from './providers';
import 'animate.css';
import '../styles/globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<html lang="es" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
