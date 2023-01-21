import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import { IEpisode } from '@/types/episode';
import sluggify from '@/utils/sluggify';

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

	const episode = data.find(({ title }: IRes) => sluggify(title) === req.query.title);

	const transformedEpisode = {
		id: episode.id.toString(),
		title: episode.title,
		description: episode.description,
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
