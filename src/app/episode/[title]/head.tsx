interface IProps {
	params: { title: string };
}

// https://beta.nextjs.org/docs/api-reference/file-conventions/head

export default function EpisodeHead({ params }: IProps) {
	const episode = {
		title: params.title.split('-').join(' ').toUpperCase(),
		description: 'An episode of Raising Our Future', // TSK
	};

	return (
		<>
			<title>{`🎧 [${episode.title}] - Raising Our Future`}</title>
			<meta name="description" content={episode.description} />
		</>
	);
}
