import { IEpisode } from '@/types/episode';
import baseUrl from '@/utils/baseUrl';

export default async function getEpisodes() {
	const res = await fetch(
		baseUrl + '/api/episodes',
		{ cache: 'no-store' }
		// { next: { revalidate: 10 } } // TSK
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const episodes: IEpisode[] = await res.json();

	console.log('episodes:', episodes);

	return episodes;
}

// import { parse } from 'rss-to-json';

// let feed = await parse('https://their-side-feed.vercel.app/api/feed');
