import Layout from '@components/Layout';

import { MaxWidthWrapper } from '@components/common/Containers';
import { Description, SubTitle } from '@components/common/Text';

export default function Home() {
	return (
		<Layout pageName="home" pageTitle="F0lio - Home">
			<div className="px-2 selection:text-primary-2">
				<div className="group flex cursor-pointer items-end font-mono text-4xl text-gray-100 sm:text-6xl">
					<div className="items-start sm:flex sm:grid-cols-2">
						<p className="mr-2 max-w-min py-3 sm:py-0">Hi,</p>
						<div className="col-span-2 flex items-end whitespace-nowrap ">
							<p className="">I&#39;m Omar</p>
							<p className="px-3 pb-2 text-lg text-gray-400 group-hover:text-primary-3 sm:text-xl">
								(aka F0lio)
							</p>
						</div>
					</div>
				</div>
				<div className="py-8 text-base font-normal">
					<Description>
						{"I'm "}a Technology Enthusiast, interested in Full stack web
						development.
					</Description>
				</div>
			</div>
		</Layout>
	);
}
