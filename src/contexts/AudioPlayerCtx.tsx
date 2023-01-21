'use client';

import { createContext, useContext, useMemo, useReducer, useRef } from 'react';

export interface IAudioPlayerCtx {
	playing: boolean;
	muted: boolean;
	currentTime: number;
	duration: number;
	meta: {
		title: string;
		url: string;
	} | null;
	play: (data: any) => void;
	pause: () => void;
	toggle: (data: any) => void;
	seekBy: (amount: number) => void;
	seek: (time: number) => void;
	playbackRate: (rate: number) => void;
	toggleMute: () => void;
	isPlaying: (data: any) => boolean;
}

const defaultState = {
	playing: false,
	muted: false,
	currentTime: 0,
	duration: 0,
	meta: null,
	play: () => {},
	pause: () => {},
	toggle: () => {},
	seekBy: () => {},
	seek: () => {},
	playbackRate: () => {},
	toggleMute: () => {},
	isPlaying: () => false,
};

const AudioPlayerCtx = createContext<IAudioPlayerCtx>(defaultState);

const reducers = {
	SET_META(state, action) {
		return { ...state, meta: action.payload };
	},
	PLAY(state, _action) {
		return { ...state, playing: true };
	},
	PAUSE(state, _action) {
		return { ...state, playing: false };
	},
	TOGGLE_MUTE(state, _action) {
		return { ...state, muted: !state.muted };
	},
	SET_CURRENT_TIME(state, action) {
		return { ...state, currentTime: action.payload };
	},
	SET_DURATION(state, action) {
		return { ...state, duration: action.payload };
	},
};

function audioPlayerReducer(state, action) {
	return reducers[action.type as keyof typeof reducers](state, action);
}

export function AudioPlayerCtxProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(audioPlayerReducer, defaultState);

	const playerRef = useRef(null);

	const actions = useMemo(() => {
		return {
			play(data) {
				if (data) {
					dispatch({ type: 'SET_META', payload: data });

					if (playerRef?.current?.currentSrc !== data.audio.src) {
						let playbackRate = playerRef.current.playbackRate;

						playerRef.current.src = data.audio.src;
						playerRef.current.load();
						playerRef.current.pause();
						playerRef.current.playbackRate = playbackRate;
						playerRef.currentTime = 0;
					}
				}

				playerRef.current.play();
			},
			pause() {
				playerRef.current.pause();
			},
			toggle(data) {
				this.isPlaying(data) ? actions.pause() : actions.play(data);
			},
			seekBy(amount) {
				playerRef.current.currentTime += amount;
			},
			seek(time) {
				playerRef.current.currentTime = time;
			},
			playbackRate(rate) {
				playerRef.current.playbackRate = rate;
			},
			toggleMute() {
				dispatch({ type: 'TOGGLE_MUTE' });
			},
			isPlaying(data) {
				return data ? state.playing && playerRef.current.currentSrc === data.audio.src : state.playing;
			},
		};
	}, [state.playing]);

	let api = useMemo(() => ({ ...state, ...actions }), [state, actions]);

	return (
		<>
			<AudioPlayerCtx.Provider value={api}>{children}</AudioPlayerCtx.Provider>

			<audio
				ref={playerRef}
				onPlay={() => dispatch({ type: 'PLAY' })}
				onPause={() => dispatch({ type: 'PAUSE' })}
				onTimeUpdate={(event) => {
					dispatch({
						type: 'SET_CURRENT_TIME',
						payload: Math.floor(event.target.currentTime),
					});
				}}
				onDurationChange={(event) => {
					dispatch({
						type: 'SET_DURATION',
						payload: Math.floor(event.target.duration),
					});
				}}
				muted={state.muted}
			/>
		</>
	);
}

export function useAudioPlayer(data: any) {
	let player = useContext(AudioPlayerCtx);

	if (!player) {
		throw new Error('useAudioPlayer must be used within an AudioPlayerCtxProvider');
	}

	return useMemo(
		() => ({
			...player,
			play() {
				player.play(data);
			},
			toggle() {
				player.toggle(data);
			},
			get playing() {
				return player.isPlaying(data);
			},
		}),
		[player, data]
	);
}

// TSK: Use Typescript
