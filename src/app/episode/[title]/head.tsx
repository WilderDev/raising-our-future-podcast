interface IProps {
	params: { title: string };
}

export default function EpisodeHead({ params }: IProps) {
	const episode = {
		title: params.title.split('-').join(' ').toUpperCase(),
		description: 'The first episode of Raising Our Future', // TSK
	};

	return (
		<>
			<title>{`🎧 [${episode.title}] - Raising Our Future`}</title>
			<meta name="description" content={episode.description} />
		</>
	);
}
