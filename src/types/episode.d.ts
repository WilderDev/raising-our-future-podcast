export interface IEpisode {
	id: string;
	title: string;
	description: string;
	slug: string; // TSK
	publishedAt: string;
	content: string;
	audio: {
		src: string;
		type: string;
	};
}
