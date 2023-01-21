import Episode from '@/components/Episode';
import Container from '@/components/layout/Container';
import { IEpisode } from '@/types/episode';

const episodes: IEpisode[] = [
	{
		id: '50cd85d991be869ba027a1cfb5d34c4a',
		// title: 'Episode 1: The Beginning',
		// description: 'The first episode of the podcast.',
		// podcastNum: 1,
		// date: '2021-01-01',
		// length: '00:00:00',
		// url: 'https://anchor.fm/raisingourfuture/episodes/Episode-1-The-Beginning-eq0j0a',
	},
	{
		id: '1f10e43368d68a985fb42c4181240df5',
	},
];

export default function LandingPage() {
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
