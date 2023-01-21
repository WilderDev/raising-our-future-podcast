function getBaseUrl() {
	// If prod
	if (process.env.NODE_ENV === 'production') {
		// return 'https://www.example.com';
	}

	// If server
	if (typeof window === 'undefined') {
		// return 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local';
	}

	// If dev
	return 'http://localhost:3000';
}

export default getBaseUrl();
