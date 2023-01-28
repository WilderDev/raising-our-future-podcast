import getEpisode from '@/backend/getEpisode';

import EpisodePageContent from '../../../components/EpisodePageContent';

export default async function SingleEpisodePage({ params: { slug } }: { params: { slug: string } }) {
	console.log('slug:', slug);
	const episode = await getEpisode(slug);
	console.log('episode:', episode);

	return <EpisodePageContent episode={episode} />;
}

// TSK: Get Static Paths
// https://beta.nextjs.org/docs/data-fetching/fetching
