const dateFormatter = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
});

export function formatDate(date: Date) {
	return dateFormatter.format(date);
}
