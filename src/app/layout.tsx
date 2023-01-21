import './globals.css';

import { Inter } from '@next/font/google';

const inter = Inter({
	variable: '--font-inter',
	display: 'optional',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable}`}>
			<head />
			<body>{children}</body>
		</html>
	);
}
