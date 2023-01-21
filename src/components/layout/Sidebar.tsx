import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import { hosts } from '@/utils/hosts';

import podcastAlbumCover from '../../../public/RourF-podcast-cover.png';
import ApplePodcastIcon from '../icons/ApplePodcastIcon';
import OvercastIcon from '../icons/OvercastIcon';
import RSSIcon from '../icons/RSSIcon';
import SpotifyIcon from '../icons/SpotifyIcon';
import TinyWaveFormIcon from '../icons/TinyWaveFormIcon';
import About from './About';

const socialIcons: {
	label: string;
	icon: React.ComponentType<{ className?: string }>;
}[] = [
	{
		label: 'Spotify',
		icon: SpotifyIcon,
	},
	{
		label: 'Apple Podcast',
		icon: ApplePodcastIcon,
	},
	{
		label: 'Overcast',
		icon: OvercastIcon,
	},
	{
		label: 'RSS Feed',
		icon: RSSIcon,
	},
];

export default function Sidebar() {
	return (
		<header className="lg:w-112 xl:w-120 bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:items-start lg:overflow-y-auto">
			<div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
				<span className="font-mono text-slate-500">Hosted by</span>
				<span className="mt-6 flex gap-6 font-bold text-slate-900">
					{hosts.map((host, hostIndex) => (
						<Fragment key={host}>
							{hostIndex !== 0 && (
								<span aria-hidden="true" className="text-slate-400">
									/
								</span>
							)}
							{host}
						</Fragment>
					))}
				</span>
			</div>

			<div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-12 lg:px-8 xl:px-12">
				<Link
					href="/"
					className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
					aria-label="Homepage"
				>
					<Image
						// TSK: Responsive
						className="w-full"
						src={podcastAlbumCover}
						alt=""
						sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
						priority
					/>
					<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
				</Link>

				<div className="mt-10 text-center lg:mt-12 lg:text-left">
					<p className="text-xl font-bold text-slate-900">
						<Link href="/">Their Side</Link>
					</p>
					<p className="mt-3 text-lg font-medium leading-8 text-slate-700">
						Conversations with the most tragically misunderstood people of our time.
					</p>
				</div>

				<About className="mt-12 hidden lg:block" />

				<section className="mt-10 lg:mt-12">
					<h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
						<TinyWaveFormIcon colors={['fill-indigo-300', 'fill-blue-300']} className="h-2.5 w-2.5" />
						<span className="ml-2.5">Listen</span>
					</h2>

					<div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />

					<ul
						role="list"
						className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
					>
						{socialIcons.map((social) => (
							<li key={social.label} className="flex">
								<Link href="/" className="group flex items-center" aria-label={social.label}>
									<social.icon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
									<span className="hidden sm:ml-3 sm:block">{social.label}</span>
								</Link>
							</li>
						))}
					</ul>
				</section>
			</div>
		</header>
	);
}
