'use client';

import { useRef } from 'react';
import { mergeProps, useSliderThumb, VisuallyHidden } from 'react-aria';

import cn from '@/utils/classNames';

export default function SliderThumb({ ...props }) {
	let { state, trackRef, focusProps, isFocusVisible, index } = props;

	let inputRef = useRef(null);

	let { thumbProps, inputProps } = useSliderThumb({ index, trackRef, inputRef }, state);

	return (
		<div
			className="absolute top-1/2 -translate-x-1/2"
			style={{
				left: `${state.getThumbPercent(index) * 100}%`,
			}}
		>
			<div
				{...thumbProps}
				onMouseDown={(...args) => {
					const defThumbProps = thumbProps as any;
					defThumbProps.onMouseDown(...args);
					props.onChangeStart?.();
				}}
				onPointerDown={(...args) => {
					const defThumbProps = thumbProps as any;
					defThumbProps.onPointerDown(...args);
					props.onChangeStart?.();
				}}
				className={cn(
					'h-4 rounded-full',
					isFocusVisible || state.isThumbDragging(index) ? 'w-1.5 bg-slate-900' : 'w-1 bg-slate-700'
				)}
			>
				<VisuallyHidden>
					<input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
				</VisuallyHidden>
			</div>
		</div>
	);
}
