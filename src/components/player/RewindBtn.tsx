import { IAudioPlayerCtx } from '@/contexts/AudioPlayerCtx';

import RewindIcon from '../icons/RewindIcon';

interface IProps {
	player: IAudioPlayerCtx;
	amount?: number;
}

export default function RewindBtn({ player, amount = 10 }: IProps) {
	return (
		<button
			type="button"
			className="group relative rounded-full focus:outline-none"
			onClick={() => player.seekBy(-amount)}
			aria-label={`Rewind ${amount} seconds`}
		>
			<div className="absolute -inset-4 -right-2 md:hidden" />

			<RewindIcon className="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700" />
		</button>
	);
}
