import './globals.css';

import { Open_Sans } from '@next/font/google';

const openSans = Open_Sans({
	variable: '--font-open-sans',
	display: 'optional',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${openSans.variable}`}>
			<head />
			<body>{children}</body>
		</html>
	);
}
