'use client';

import { useState } from 'react';

import { IAudioPlayerCtx } from '@/contexts/AudioPlayerCtx';
import { playbackRates } from '@/utils/playbackRates';

interface IProps {
	player: IAudioPlayerCtx;
}

export default function PlaybackRateBtn({ player }: IProps) {
	let [playbackRate, setPlaybackRate] = useState(playbackRates[0]);

	return (
		<button
			type="button"
			className="relative flex h-6 w-6 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
			onClick={() => {
				setPlaybackRate((rate) => {
					let existingIdx = playbackRates.indexOf(rate);
					let idx = (existingIdx + 1) % playbackRates.length;
					let next = playbackRates[idx];

					player.playbackRate(next.value);

					return next;
				});
			}}
			aria-label="Playback rate"
		>
			<div className="absolute -inset-4 md:hidden" />
			<playbackRate.icon className="h-4 w-4" />
		</button>
	);
}
