import { formatDate } from '@/utils/formatDate';

interface IProps {
	date: Date;
	[key: string]: any;
}

export function DateTime({ date, ...props }: IProps) {
	return (
		<time dateTime={date.toISOString()} {...props}>
			{formatDate(date)}
		</time>
	);
}
