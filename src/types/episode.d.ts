export interface IEpisode {
	id: string;
	title: string;
	description: string;
	publishedAt: string;
	content: string;
	audio: {
		src: string;
		type: string;
	};
}
