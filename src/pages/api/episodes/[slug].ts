import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// const response = await fetch('https://api.spreaker.com/v2/shows/4134456/episodes');
	// const data = await response.json();

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
	].filter(({ slug }) => slug === req.query.slug)[0];

	// const dataDir = path.join(process.cwd(), 'data');

	// const fileContents = await fs.readFile(path.join(dataDir, 'episodes.json'), 'utf8');

	// const data = JSON.parse(fileContents);

	if (!data) {
		return res.status(404).json({ message: 'No data found' });
	}

	interface IRes {
		id: number;
		title: string;
		description: string;
		slug: string; // tSK
		content: string;
		enclosures: {
			url: string;
			type: string;
		}[];
		published: string;
	}

	// const episode = data?.find(({ title }: IRes) => sluggify(title) === req.query.title);
	const episode = data;

	const transformedEpisode = {
		id: episode.id.toString(),
		title: episode.title,
		description: episode.description,
		slug: episode.slug,
		publishedAt: episode.published,
		content: episode.content,
		url: `https://their-side-feed.vercel.app/episode-00${episode.id}.mp3`,
		audio: episode.enclosures.map((enclosure: any) => ({
			src: enclosure.url,
			type: enclosure.type,
		}))[0],
	};

	return res.status(200).json(transformedEpisode);
}
