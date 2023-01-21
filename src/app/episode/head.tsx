export default function EpisodeHead() {
	const episodeTitle = 'Episode 1: The Beginning';

	return (
		<>
			<title>{`${episodeTitle} - Raising Our Future`}</title>
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta
				name="description"
				content="Raising Our Future is a podcast for parents who want to raise their children to be independent, self-sufficient, and successful. We discuss parenting, homeschooling, and life."
			/>
			<link rel="icon" href="/favicon.ico" />
		</>
	);
}
