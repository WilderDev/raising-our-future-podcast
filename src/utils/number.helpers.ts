export function randomBetween(min: number, max: number, seed = 1) {
	return () => {
		let rand = Math.sin(seed++) * 10000;

		rand = rand - Math.floor(rand);

		return Math.floor(rand * (max - min + 1) + min);
	};
}
