import { Description, SubTitle, Title } from '@components/common/Text';
import Layout from '@components/Layout';

import Image from 'next/image';
import { projects } from '@data/index';

interface ProjectCardProps {
	name: string;
	description: string;
	image: string;
	alt?: string;
	link?: string;
	github?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	name,
	description,
	image,
	alt,
	link,
	github,
}) => (
	<li className="max-w-min">
		<figure className="group flex cursor-pointer flex-col space-y-2 rounded-md text-left align-top no-underline outline-none focus:outline-none focus:ring focus:ring-offset-4 dark:focus:ring-offset-gray-900">
			<a
				href={link || github}
				target="_blank"
				className="image-span-block w-full overflow-hidden rounded-md"
			>
				{image && (
					<Image
						src={image}
						alt={alt || name}
						width={160}
						height={160}
						className="rounded-md brightness-90 transition-all duration-300 group-hover:scale-125 group-hover:rounded-md group-hover:brightness-100"
					/>
				)}
			</a>
		</figure>
		<article className="w-40 p-2 ">
			<a
				href={link || github}
				target="_blank"
				className="py-2 text-lg font-bold text-gray-300"
			>
				{name}
			</a>
			<p className="py-3 text-sm text-gray-300">{description}</p>
		</article>
	</li>
);

const Projects = ({ data }) => {
	return (
		<Layout pageName={'projects'} pageTitle="F0lio - Projects">
			<Title>Projects</Title>
			<Description>
				Quis nulla sit excepteur laboris consectetur cupidatat sint fugiat
				veniam consequat.
				<p>Commodo sit commodo nisi magna duis do cillum veniam adipisicing.</p>
			</Description>

			<section className="py-6">
				<SubTitle>Lorem - ipusm</SubTitle>

				<ul className="grid max-w-full grid-cols-2 gap-y-6 gap-x-4 py-6  md:grid-cols-3">
					{projects?.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</ul>
			</section>
		</Layout>
	);
};

export default Projects;
