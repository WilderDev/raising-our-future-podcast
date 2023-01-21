'use client';

import { useMemo } from 'react';

import { DateTime } from '@/components/DateTime';
import Container from '@/components/layout/Container';
import PlayBtn from '@/components/player/PlayBtn';
import { useAudioPlayer } from '@/contexts/AudioPlayerCtx';
import { IEpisode } from '@/types/episode';

interface IProps {
	episode: IEpisode;
}

export default function EpisodePageContent({ episode }: IProps) {
	let audioPlayerData = useMemo(() => episode, [episode]);

	let player = useAudioPlayer(audioPlayerData);

	return (
		<article className="py-16 lg:py-36">
			<Container>
				<header className="flex flex-col">
					<div className="flex items-center gap-6">
						<PlayBtn player={player} size="large" />
						<div className="flex flex-col">
							<h1 className="mt-2 text-4xl font-bold text-slate-900">{episode.title}</h1>
							<DateTime
								date={new Date(episode.publishedAt)}
								className="order-first font-mono text-sm leading-7 text-slate-500"
							/>
						</div>
					</div>
					<p className="ml-24 mt-3 text-lg font-medium leading-8 text-slate-700">{episode.description}</p>
				</header>
				<hr className="my-12 border-gray-200" />
				<div
					className="prose prose-slate mt-14 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2:nth-of-type(3n)]:before:bg-violet-200"
					dangerouslySetInnerHTML={{ __html: episode.content }}
				/>
			</Container>
		</article>
	);
}
