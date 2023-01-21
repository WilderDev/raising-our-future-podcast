import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	//   const response = await fetch("https://api.spreaker.com/v2/shows/4134456/episodes");
	//   const data = await response.json();

	const dataDir = path.join(process.cwd(), 'data');

	const fileContents = await fs.readFile(path.join(dataDir, 'episodes.json'), 'utf8');

	const data = JSON.parse(fileContents);

	if (!data) {
		return res.status(404).json({ message: 'No data found' });
	}

	interface IRes {
		id: number;
		title: string;
		description: string;
		content: string;
		enclosures: {
			url: string;
			type: string;
		}[];
		published: string;
	}

	const transformedData = data.map(({ id, title, description, content, enclosures, published }: IRes) => ({
		id: id.toString(),
		title: title,
		description: description,
		publishedAt: published,
		content: content,
		url: `https://their-side-feed.vercel.app/episode-00${id}.mp3`,
		audio: enclosures.map((enclosure) => ({
			src: enclosure.url,
			type: enclosure.type,
		}))[0],
	}));

	return res.status(200).json(transformedData);
}
