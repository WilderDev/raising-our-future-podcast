import { IAudioPlayerCtx } from '@/contexts/AudioPlayerCtx';

import MuteIcon from '../icons/MuteIcon';

interface IProps {
	player: IAudioPlayerCtx;
}

export default function MuteBtn({ player }: IProps) {
	return (
		<button
			type="button"
			className="group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none"
			onClick={() => player.toggleMute()}
			aria-label={player.muted ? 'Unmute' : 'Mute'}
		>
			<div className="absolute -inset-4 md:hidden" />

			<MuteIcon
				muted={player.muted}
				className="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"
			/>
		</button>
	);
}
