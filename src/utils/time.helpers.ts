export function parseTime(seconds: number) {
	let hours = Math.floor(seconds / 3600);
	let minutes = Math.floor((seconds - hours * 3600) / 60);

	seconds = seconds - hours * 3600 - minutes * 60;

	return [hours, minutes, seconds];
}

export function formatHumanTime(seconds: number) {
	let [h, m, s] = parseTime(seconds);

	return `${h} hour${h === 1 ? '' : 's'}, ${m} minute${m === 1 ? '' : 's'}, ${s} second${s === 1 ? '' : 's'}`;
}
