import { IEpisode } from '@/types/episode';

interface IProps {
	episode: IEpisode;
}

export default function Episode({ episode }: IProps) {
	return (
		<>
			<h2>Episode</h2>
		</>
	);
}
