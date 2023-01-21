import { IEpisode } from '@/types/episode';
import baseUrl from '@/utils/baseUrl';

export default async function getEpisodes() {
	const res = await fetch(baseUrl + '/api/episodes');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const episodes: IEpisode[] = await res.json();

	return episodes;
}

// TSK: Static Paths

// import { parse } from 'rss-to-json';

//   let feed = await parse('https://their-side-feed.vercel.app/api/feed');

//   return {
// 		props: {
// 			episodes: feed.items.map(({ id, title, description, enclosures, published }) => ({
// 				id,
// 				title: `${id}: ${title}`,
// 				published,
// 				description,
// 				audio: enclosures.map((enclosure) => ({
// 					src: enclosure.url,
// 					type: enclosure.type,
// 				}))[0],
// 			})),
// 		},
// 		revalidate: 10,
//   };
