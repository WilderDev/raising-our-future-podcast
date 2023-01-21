import {
    NormalSpeedIcon, OneAndAHalfSpeedIcon, TwoSpeedIcon
} from '@/components/icons/PlaybackIcons';

export const playbackRates = [
	{
		value: 1,
		icon: function PlaybackIcon({ ...props }) {
			return <NormalSpeedIcon {...props} />;
		},
	},
	{
		value: 1.5,
		icon: function PlaybackIcon({ ...props }) {
			return <OneAndAHalfSpeedIcon {...props} />;
		},
	},
	{
		value: 2,
		icon: function PlaybackIcon({ ...props }) {
			return <TwoSpeedIcon {...props} />;
		},
	},
];
