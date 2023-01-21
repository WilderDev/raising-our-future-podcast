'use client';

import { DOMAttributes, useRef } from 'react';
import { useFocusRing, useSlider } from 'react-aria';
import { SliderStateOptions, useSliderState } from 'react-stately';

import cn from '@/utils/classNames';
import { formatSliderTime, parseTime } from '@/utils/time.helpers';

import SliderThumb from './SliderThumb';

export default function Slider({ ...props }) {
	let trackRef = useRef(null);
	let state = useSliderState({ ...props } as SliderStateOptions<number | number[]>);

	let { groupProps, trackProps, labelProps, outputProps } = useSlider(props, state, trackRef);
	let { focusProps, isFocusVisible } = useFocusRing();

	let currentTime = parseTime(state.getThumbValue(0));
	let totalTime = parseTime(state.getThumbMaxValue(0));

	return (
		<div
			{...groupProps}
			className="absolute inset-x-0 bottom-full flex flex-auto touch-none items-center gap-6 md:relative"
		>
			{props.label && (
				<label className="sr-only" {...labelProps}>
					{props.label}
				</label>
			)}

			<div
				{...trackProps}
				onMouseDown={(...args) => {
					const defTrackProps = trackProps as any;
					defTrackProps.onMouseDown(...args);
					props.onChangeStart?.();
				}}
				onPointerDown={(...args) => {
					const defTrackProps = trackProps as any;
					defTrackProps.onPointerDown(...args);
					props.onChangeStart?.();
				}}
				ref={trackRef}
				className="relative w-full bg-slate-100 md:rounded-full"
			>
				<div
					className={cn(
						'h-2 md:rounded-r-md md:rounded-l-xl',
						isFocusVisible || state.isThumbDragging(0) ? 'bg-slate-900' : 'bg-slate-700'
					)}
					style={{
						width:
							state.getThumbValue(0) === 0
								? 0
								: `calc(${state.getThumbPercent(0) * 100}% - ${
										isFocusVisible || state.isThumbDragging(0) ? '0.3125rem' : '0.25rem'
								  })`,
					}}
				/>
				<SliderThumb
					index={0}
					state={state}
					trackRef={trackRef}
					onChangeStart={props.onChangeStart}
					focusProps={focusProps}
					isFocusVisible={isFocusVisible}
				/>
			</div>

			<div className="hidden items-center gap-2 md:flex">
				<output
					{...outputProps}
					aria-live="off"
					className={cn(
						'hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 md:block',
						state.getThumbMaxValue(0) === 0 && 'opacity-0',
						isFocusVisible || state.isThumbDragging(0) ? 'bg-slate-100 text-slate-900' : 'text-slate-500'
					)}
				>
					{formatSliderTime(currentTime, totalTime)}
				</output>

				<span className="text-sm leading-6 text-slate-300" aria-hidden="true">
					/
				</span>

				<span
					className={cn(
						'hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 text-slate-500 md:block',
						state.getThumbMaxValue(0) === 0 && 'opacity-0'
					)}
				>
					{formatSliderTime(totalTime)}
				</span>
			</div>
		</div>
	);
}
