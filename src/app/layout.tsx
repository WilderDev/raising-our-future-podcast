import './globals.css';

import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import WaveForm from '@/components/layout/WaveForm';
import AudioPlayer from '@/components/player/AudioPlayer';
import { Open_Sans } from '@next/font/google';

const openSans = Open_Sans({
	variable: '--font-open-sans',
	display: 'optional',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${openSans.variable}`}>
			<head />
			<body>
				{/* Sidebar */}
				<Sidebar />

				{/* Main Content */}
				<main className="lg:ml-112 xl:ml-120 border-t border-slate-200 lg:relative lg:mb-28 lg:border-t-0">
					<WaveForm className="absolute left-0 top-0 h-20 w-full" />

					<div className="relative">{children}</div>
				</main>

				{/* Footer */}
				<Footer />

				{/* Audio Player */}
				<section className="lg:left-112 xl:left-120 fixed inset-x-0 bottom-0 z-10">
					{/* <AudioPlayer /> */}
				</section>
			</body>
		</html>
	);
}
