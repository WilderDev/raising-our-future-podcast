import getEpisode from '@/backend/getEpisode';

import EpisodePageContent from './EpisodePageContent';

export default async function SingleEpisodePage({ params: { title } }: { params: { title: string } }) {
	const episode = await getEpisode(title);

	return <EpisodePageContent episode={episode} />;
}

// TSK: Get Static Paths
// https://beta.nextjs.org/docs/data-fetching/fetching
