'use client';

import Link from 'next/link';
import { useMemo } from 'react';

import { useAudioPlayer } from '@/contexts/AudioPlayerCtx';
import { IEpisode } from '@/types/episode';
import sluggify from '@/utils/sluggify';

import { DateTime } from './DateTime';
import PlayPauseIcon from './icons/PlayPauseIcon';
import Container from './layout/Container';

interface IProps {
	episode: IEpisode;
}

export default function EpisodeItem({ episode }: IProps) {
	let audioPlayerData = useMemo(() => episode, [episode]);

	const player = useAudioPlayer(audioPlayerData);

	console.log('episode IN EPISODE ITEM:', episode);
	console.log('episode.publishedAt:', episode.publishedAt);

	return (
		<article aria-labelledby={`episode-${episode.id}-title`} className="py-10 sm:py-12">
			<Container>
				<div className="flex flex-col items-start">
					<h2 id={`episode-${episode.id}-title`} className="mt-2 text-lg font-bold text-slate-900">
						<Link href={`/episode/${episode.slug}`}>
							{episode.id}: {episode.title}
						</Link>
					</h2>

					<DateTime
						date={new Date(episode.publishedAt)}
						className="order-first font-mono text-sm leading-7 text-slate-500"
					/>

					<p className="mt-1 text-base leading-7 text-slate-700">{episode.description}</p>

					<div className="mt-4 flex items-center gap-4">
						<button
							type="button"
							onClick={() => player.toggle()}
							className="flex items-center text-sm font-bold leading-6 text-emerald-500 hover:text-emerald-700 active:text-emerald-900"
							aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${episode.title}`}
						>
							<PlayPauseIcon isPlaying={player.playing} className="h-2.5 w-2.5 fill-current" />

							<span className="ml-3" aria-hidden="true">
								Listen
							</span>
						</button>

						<span aria-hidden="true" className="text-sm font-bold text-slate-400">
							/
						</span>

						<Link
							href={`/episode/${episode.slug}`}
							className="flex items-center text-sm font-bold leading-6 text-emerald-500 hover:text-emerald-700 active:text-emerald-900"
							aria-label={`Show notes for episode ${episode.title}`}
						>
							Show notes
						</Link>
					</div>
				</div>
			</Container>
		</article>
	);
}
