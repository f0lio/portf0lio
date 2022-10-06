import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

import { Description, Title } from "@components/common/Text";
import Layout from "@components/Layout";
import { projects } from "@data/index";

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
  <li className="group relative mx-0 h-40 rounded-lg border border-primary/30 py-2 px-5 duration-200 hover:border-primary/40">
    <figure className="group flex flex-col space-y-2 rounded-md text-left align-top no-underline outline-none focus:outline-none focus:ring focus:ring-offset-4 dark:focus:ring-offset-gray-900 md:cursor-pointer">
      <a
        href={link || github}
        target="_blank"
        className=" w-full overflow-hidden rounded-md"
        rel="noreferrer"
      >
        {image && (
          <Image
            src={image}
            alt={alt || name}
            width={400}
            height={400}
            layout="responsive"
            className="rounded-md brightness-90 transition-all duration-300 group-hover:scale-110 group-hover:rounded-md group-hover:brightness-100"
          />
        )}
      </a>
    </figure>
    <article className="flex flex-col gap-y-2 py-4 md:cursor-pointer">
      <p className="text-xl font-bold text-gray-200 duration-200 selection:text-primary group-hover:text-primary">
        {name}
      </p>

      <Description className="text-sm">{description}</Description>

      <a
        href={link || github}
        target="_blank"
        className="absolute bottom-3 right-4 text-primary/40 duration-200 hover:scale-90 group-hover:text-primary/70"
        rel="noreferrer"
      >
        <FiExternalLink className="h-6 w-6" />
      </a>
    </article>
  </li>
);

const Projects = () => {
  return (
    <Layout pageName={"projects"} pageTitle="F0lio - Projects">
      <Title>Projects</Title>
      <Description>Some projects I&apos;ve worked on.</Description>
      <section className="pt-6">
        <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
          {projects?.map((project, index) => (
            <ProjectCard key={index} {...project} image={null} />
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Projects;
