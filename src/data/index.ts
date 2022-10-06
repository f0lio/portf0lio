import {
  SiNextdotjs,
  SiPython,
  SiDocker,
  SiGatsby,
  SiReact,
  SiNodedotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiPostgresql,
  SiMysql,
  SiLinux,
  SiNestjs,
} from "react-icons/si";

export const techs = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Gatsby",
    icon: SiGatsby,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "NestJS",
    icon: SiNestjs,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "Holy C",
    icon: SiC,
  },
  {
    name: "C++",
    icon: SiCplusplus,
  },
  {
    name: "Linux",
    icon: SiLinux,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    name: "styled-components",
    icon: SiStyledcomponents,
  },
];

export const projects = [
  {
    name: "HuMaps",
    description: "Discover people through maps.",
    link: "https://humaps.vercel.app/",
    github: "https://github.com/f0lio/humaps",
    // image: "/humaps.png",
    tags: ["React", "NextJS", "Mapbox", "Redis", "Maps"],
    techs: ["Nextjs", "Typescript", "Mapbox", "Redis"],
  },
  {
    name: "HiLight",
    description:
      "VSCode extension for hilighting code parts to avoid wasting time looking for them.",
    link: "https://marketplace.visualstudio.com/items?itemName=f0lio.hilight",
    github: "https://github.com/f0lio/hilight",
    image: "/hilight.png",
    tags: ["VSCode", "extension"],
    techs: ["VSCode", "Typescript"],
  },
  {
    name: "WebServ",
    description: "HTTP Server written in C++ using UNIX Sockets. ",
    link: "",
    github: "https://github.com/f0lio/webserv",
    image: "/webserv.png",
    school: true,
    team: true,
    tags: ["server", "unix", "web", "nginx"],
    techs: ["C++", "sockets", "HTTP"],
  },
  {
    name: "NextJS Shopify Store",
    description:
      "Minimal E-Commerce Store built with NextJS using Shopify storefront API.",
    link: "",
    github: "https://github.com/f0lio/nextjs-shopify-store",
    image: "/next-shopify-store.jpeg",
    tags: ["React", "Shopify", "storefront", "E-Commerce"],
    techs: ["Nextjs", "Typescript", "GraphQL", "TailwindCSS"],
  },
  {
    name: "FDF",
    description: "3D Wireframe Viewer - isometric projection of 3D models.",
    link: "",
    github: "https://github.com/f0lio/FdF",
    image: "/fdf2.png",
    school: true,
    tags: ["3D", "isometric", "graphics"],
    techs: ["C", "minilibx"],
  },
  {
    name: "Philosophers",
    description:
      "multithreading-based solution for the Dining Philosophers Problem",
    link: "",
    github: "https://github.com/f0lio/philosophers",
    image: "/philosophers.png",
    school: true,
    tags: ["multithreading", "philosophers", "threads"],
    techs: ["C", "pthreads", "mutex"],
  },
  {
    name: "Inception",
    description:
      "Docker based infrastructure for running WordPress website using nginx and MariaDB",
    link: "",
    github: "https://github.com/f0lio/inception",
    image: "/docker.png",
    school: true,
    tags: ["infrastructure", "DevOps", "42"],
    techs: ["Docker", "docker-compose", "nginx", "MariaDB", "PHP", "WordPress"],
  },
  {
    name: "Minishell",
    description: "custom shell inspired by BASH, written in C",
    link: "",
    github: "https://github.com/f0lio/minishell",
    image: "/minishell.png",
    school: true,
    team: true,
    tags: ["C", "shell", "bash", "unix", "parsing"],
    techs: ["C", "signals", "processes", "file descriptors"],
  },
  // {
  // 	name: 'Cub3D',
  // 	description: 'ray-casting 3D engine written in C, using minilibx',
  // 	link: '',
  // 	github: 'https://github.com/f0lio/cub3d',
  // 	image: '/cub3d.png',
  // 	school: true,
  // 	tags: ['3D', 'ray-casting', 'graphics', 'engine'],
  // 	techs: ['C', 'minilibx'],
  // },
];
