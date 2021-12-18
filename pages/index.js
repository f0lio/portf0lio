import Layout from "@components/Layout";

import { MaxWidthWrapper } from "@components/common/Containers";
import { Description, SubTitle } from "@components/common/Text";

export default function Home() {
	return (
		<Layout pageName="home" pageTitle="F0lio - Home">
			<div className="px-2 selection:text-primary-2">
				<div className="flex items-end font-mono text-4xl sm:text-5xl text-gray-100 cursor-pointer group">
					<div className="items-start sm:flex sm:grid-cols-2">
						<p className="py-3 mr-2 max-w-min sm:py-0">Hi,</p>
						<div className="flex items-end col-span-2 whitespace-nowrap ">
							<p className="">I&#39;m Omar</p>
							<p className="px-3 text-lg sm:text-xl text-gray-400 group-hover:text-primary-3 ">
								(aka F0lio)
							</p>
						</div>
					</div>
				</div>
				<div className="py-8 text-base font-normal ">
					<Description>
						Id ex ea do magna culpa esse. Sint pariatur ipsum consectetur
						mollit. Proident laboris ut sint sunt quis ipsum. Dolore id ut ad
						dolor.
					</Description>
				</div>
			</div>
		</Layout>
	);
}
