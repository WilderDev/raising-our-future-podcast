import { IAudioPlayerCtx } from '@/contexts/AudioPlayerCtx';

import ForwardIcon from '../icons/ForwardIcon';

interface IProps {
	player: IAudioPlayerCtx;
	amount?: number;
}

export default function ForwardBtn({ player, amount = 10 }: IProps) {
	return (
		<button
			type="button"
			className="group relative rounded-full focus:outline-none"
			onClick={() => player.seekBy(amount)}
			aria-label={`Fast-forward ${amount} seconds`}
		>
			<div className="absolute -inset-4 -left-2 md:hidden" />

			<ForwardIcon className="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700" />
		</button>
	);
}
