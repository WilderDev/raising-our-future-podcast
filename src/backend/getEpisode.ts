import { IEpisode } from '@/types/episode';
import baseUrl from '@/utils/baseUrl';

export default async function getEpisode(id: string) {
	const res = await fetch(baseUrl + `/api/episodes/${id}`);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const episode: IEpisode = await res.json();

	return episode;
}

// TSK: Static Paths

// import { parse } from 'rss-to-json';

// export async function getStaticProps({ params }) {
// 	let feed = await parse('https://their-side-feed.vercel.app/api/feed');
// 	let episode = feed.items
// 		.map(({ id, title, description, content, enclosures, published }) => ({
// 			id: id.toString(),
// 			title: `${id}: ${title}`,
// 			description,
// 			content,
// 			published,
// 			audio: enclosures.map((enclosure) => ({
// 				src: enclosure.url,
// 				type: enclosure.type,
// 			}))[0],
// 		}))
// 		.find(({ id }) => id === params.episode);

// 	if (!episode) {
// 		return {
// 			notFound: true,
// 		};
// 	}

// 	return {
// 		props: {
// 			episode,
// 		},
// 		revalidate: 10,
// 	};
// }

// export async function getStaticPaths() {
// 	let feed = await parse('https://their-side-feed.vercel.app/api/feed');

// 	return {
// 		paths: feed.items.map(({ id }) => ({
// 			params: {
// 				episode: id.toString(),
// 			},
// 		})),
// 		fallback: 'blocking',
// 	};
// }