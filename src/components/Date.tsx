import { formatDate } from '@/utils/formatDate';

interface IProps {
	date: Date;
}

export function FormattedDate({ date, ...props }: IProps) {
	return (
		<time dateTime={date.toISOString()} {...props}>
			{formatDate(date)}
		</time>
	);
}
