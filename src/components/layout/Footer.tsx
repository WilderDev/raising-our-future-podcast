import { Fragment } from 'react';

import { hosts } from '@/utils/hosts';

import PersonIcon from '../icons/PersonIcon';

export default function Footer() {
	return (
		<footer className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
			<div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
				{/* <AboutSection /> */}

				<h2 className="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
					<PersonIcon className="h-3 w-auto fill-slate-300" />
					<span className="ml-2.5">Hosted by</span>
				</h2>

				<div className="mt-2 flex gap-6 text-sm font-bold leading-7 text-slate-900">
					{hosts.map((host, hostIndex) => (
						<Fragment key={host}>
							{hostIndex !== 0 && (
								<span aria-hidden="true" className="text-slate-400">
									/
								</span>
							)}
							{host}
						</Fragment>
					))}
				</div>
			</div>
		</footer>
	);
}
