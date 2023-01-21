'use client';

import { IAudioPlayerCtx } from '@/contexts/AudioPlayerCtx';
import cn from '@/utils/classNames';

import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';

interface IProps {
	player: IAudioPlayerCtx;
	size?: 'large' | 'medium' | 'small';
}

export default function PlayBtn({ player, size = 'large' }: IProps) {
	return (
		<button
			type="button"
			className={cn(
				'group relative flex flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-slate-700',
				{
					large: 'h-18 w-18 focus:ring focus:ring-offset-4',
					medium: 'h-14 w-14 focus:ring-2 focus:ring-offset-2',
					small: 'h-10 w-10 focus:ring-2 focus:ring-offset-2',
				}[size]
			)}
			onClick={player.toggle}
			aria-label={player.playing ? 'Pause' : 'Play'}
		>
			<div className="absolute -inset-3 md:hidden" />

			{player.playing ? (
				<PauseIcon
					className={cn(
						'fill-white group-active:fill-white/80',
						{
							large: 'h-7 w-7',
							medium: 'h-5 w-5',
							small: 'h-4 w-4',
						}[size]
					)}
				/>
			) : (
				<PlayIcon
					className={cn(
						'fill-white group-active:fill-white/80',
						{
							large: 'h-9 w-9',
							medium: 'h-7 w-7',
							small: 'h-5 w-5',
						}[size]
					)}
				/>
			)}
		</button>
	);
}
