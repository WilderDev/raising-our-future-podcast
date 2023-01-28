import { formatDate } from '@/utils/formatDate';

interface IProps {
	date: Date;
	[key: string]: any;
}

export function DateTime({ date, ...props }: IProps) {
	console.log('date, typeof date:', date, typeof date);
	return (
		<time dateTime={date.toISOString()} {...props}>
			{formatDate(date)}
		</time>
	);
}
