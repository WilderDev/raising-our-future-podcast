'use client';

import { useState } from 'react';

import cn from '@/utils/classNames';

import TinyWaveFormIcon from '../icons/TinyWaveFormIcon';

export default function About({ ...props }) {
	let [isExpanded, setIsExpanded] = useState(false);

	return (
		<section {...props}>
			<h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
				<TinyWaveFormIcon colors={['fill-green-300', 'fill-emerald-300']} className="h-2.5 w-2.5" />
				<span className="ml-2.5">About</span>
			</h2>

			<p className={cn('mt-2 space-y-4 text-base leading-7 text-slate-700', !isExpanded && 'lg:line-clamp-3')}>
				<div className="block">
					Welcome to &quot;Raising Our Future,&quot; a podcast hosted by two parents who are passionate about
					homeschooling, raising children, and life.
				</div>
				<span className="block">
					Our goal is to provide valuable insights and inspiration to parents who are navigating the
					challenges of homeschooling and raising children in today&apos;s world.
				</span>
				<span className="block">
					Each episode, we will share our personal experiences and perspectives on a variety of topics, from
					homeschooling curriculum and methods, to discipline and behavior, to the joys and struggles of
					raising children. We will also feature interviews with experts and other parents who have valuable
					insights to share.
				</span>
				<span className="block">
					Our mission is to empower parents with the knowledge, tools, and inspiration they need to raise
					confident, capable, and resilient children. We believe that by working together and sharing our
					experiences, we can build a better future for our children and for the world.
				</span>
				<span className="block">
					We invite you to join us on this journey and be a part of the conversation. Thank you for listening!
				</span>
			</p>

			<button
				type="button"
				className="mt-2 hidden text-sm font-bold leading-6 text-emerald-500 hover:text-emerald-700 active:text-emerald-900 lg:inline-block"
				onClick={() => setIsExpanded(!isExpanded)}
			>
				{isExpanded ? 'Show Less' : 'Show More'}
			</button>
		</section>
	);
}
