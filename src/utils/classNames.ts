export default function cn(...args: any[]) {
	return args.filter(Boolean).join(' ');
}
