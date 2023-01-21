import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	//   const response = await fetch("https://api.spreaker.com/v2/shows/4134456/episodes");
	//   const data = await response.json();

	const dataDir = path.join(process.cwd(), 'data');

	const fileContents = await fs.readFile(path.join(dataDir, 'episodes.json'), 'utf8');

	const data = JSON.parse(fileContents);

	return res.status(200).json(data);
}
