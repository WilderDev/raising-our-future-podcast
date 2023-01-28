function getBaseUrl() {
	// browser should use relative path
	if (typeof window !== 'undefined') return '';

	// reference for vercel.com
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

	// assume localhost
	return `http://localhost:${process.env.PORT ?? 3000}`;
}

export default getBaseUrl();
