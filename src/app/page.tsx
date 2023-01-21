import getEpisodes from '@/backend/getEpisodes';
import Episode from '@/components/EpisodeItem';
import Container from '@/components/layout/Container';

export default async function LandingPage() {
	const episodes = await getEpisodes();

	return (
		<div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
			<Container>
				<h1 className="text-2xl font-bold leading-7 text-slate-900">Episodes</h1>
			</Container>

			<section className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
				{episodes?.map((ep) => (
					<Episode key={ep.id} episode={ep} />
				))}
			</section>
		</div>
	);
}

// https://beta.nextjs.org/docs/data-fetching/fetching
