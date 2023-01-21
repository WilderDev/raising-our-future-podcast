export default function EpisodeHead() {
	const episode = {
		title: 'Episode 1: The Beginning',
		description: 'The first episode of Raising Our Future',
	};

	return (
		<>
			<title>{`${episode.title} - Raising Our Future`}</title>
			<meta name="description" content={episode.description} />
		</>
	);
}
