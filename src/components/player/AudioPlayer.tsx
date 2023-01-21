'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { useAudioPlayer } from '@/contexts/AudioPlayerCtx';
import { formatHumanTime } from '@/utils/time.helpers';

import ForwardBtn from './ForwardBtn';
import MuteBtn from './MuteBtn';
import PlaybackRateBtn from './PlaybackRateBtn';
import PlayBtn from './PlayBtn';
import RewindBtn from './RewindBtn';

export default function AudioPlayer() {
	let player = useAudioPlayer(null);

	let wasPlayingRef = useRef(false);

	let [currentTime, setCurrentTime] = useState<number | null>(player.currentTime);

	useEffect(() => {
		setCurrentTime(null);
	}, [player.currentTime]);

	if (!player.meta) {
		return null;
	}

	return (
		<div className="flex items-center gap-6 bg-white/90 py-4 px-4 shadow shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6">
			<div className="hidden md:block">
				<PlayBtn player={player} size="medium" />
			</div>
			<div className="mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1">
				<Link
					href={player.meta.url}
					className="truncate text-center text-sm font-bold leading-6 md:text-left"
					title={player.meta.title}
				>
					{player.meta.title}
				</Link>
				<div className="flex justify-between gap-6">
					<div className="flex items-center md:hidden">
						<MuteBtn player={player} />
					</div>
					<div className="flex flex-none items-center gap-4">
						<RewindBtn player={player} />
						<div className="md:hidden">
							<PlayBtn player={player} size="small" />
						</div>
						<ForwardBtn player={player} />
					</div>

					{/* <Slider
						label="Current time"
						maxValue={player.duration}
						step={1}
						value={[currentTime ?? player.currentTime]}
						// onChange={([v]) => setCurrentTime(v)}
						onChangeEnd={(value: number) => {
							// player.seek(value);

							if (wasPlayingRef.current) {
								player.play();
							}
						}}
						numberFormatter={{ format: formatHumanTime }}
						onChangeStart={() => {
							wasPlayingRef.current = player.playing;
							// player.pause();
						}}
					/> */}

					<div className="flex items-center gap-4">
						<div className="flex items-center">
							<PlaybackRateBtn player={player} />
						</div>
						<div className="hidden items-center md:flex">
							<MuteBtn player={player} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
