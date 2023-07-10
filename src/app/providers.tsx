'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			themes={['red', 'orange', 'yellow', 'green', 'blue', 'purple']}
			defaultTheme="blue"
			enableSystem={false}
		>
			{children}
		</ThemeProvider>
	);
}
