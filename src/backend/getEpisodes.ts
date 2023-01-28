import { IEpisode } from '@/types/episode';
import baseUrl from '@/utils/baseUrl';

export default async function getEpisodes() {
	// const res = await fetch(
	// 	baseUrl + '/api/episodes',
	// 	{ cache: 'no-store' }
	// 	// { next: { revalidate: 10 } } // TSK
	// );

	// if (!res.ok) {
	// 	throw new Error('Failed to fetch data');
	// }

	// const episodes: IEpisode[] = await res.json();

	const data = [
		{
			id: 1,
			title: 'The Beginning',
			description: 'The first episode of the podcast.',
			slug: 'the-beginning',
			published: '2021-01-01',
			content: 'This is the first episode of the podcast.',
			enclosures: [
				{
					url: 'https://their-side-feed.vercel.app/episode-001.mp3',
					type: 'audio/mpeg',
				},
			],
		},
		{
			id: 2,
			title: 'The Next Beginning',
			description: 'The second episode of the podcast.',
			slug: 'the-next-beginning',
			published: '2021-01-02',
			content: 'This is the second episode of the podcast.',
			enclosures: [
				{
					url: 'https://their-side-feed.vercel.app/episode-002.mp3',
					type: 'audio/mpeg',
				},
			],
		},
	];

	console.log('data:', data);

	const episodes = data?.map(({ id, title, description, slug, content, enclosures, published }) => ({
		id: id.toString(),
		title: title,
		description: description,
		slug: slug,
		publishedAt: published,
		content: content,
		url: `https://their-side-feed.vercel.app/episode-00${id}.mp3`,
		audio: enclosures.map((enclosure: any) => ({
			src: enclosure.url,
			type: enclosure.type,
		}))[0],
	}));

	console.log('episodes:', episodes);

	return episodes;
}

// import { parse } from 'rss-to-json';

// let feed = await parse('https://their-side-feed.vercel.app/api/feed');
