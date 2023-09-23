'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider attribute="class" enableSystem enableColorScheme>
			{children}
		</ThemeProvider>
	);
};
