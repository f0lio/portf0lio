// import {
// 	ReactLogo,
// 	CppLogo,
// 	CLogo,
// 	GatsbyLogo,
// 	NextLogo,
// } from "../components/icons";

// import { IconContext } from "react-icons";
// import { GrNextjs, GrGatsbyjs, GrReactjs } from "react-icons/gr";
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
		name: "TailwindCSS",
		icon: SiTailwindcss,
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
		name: "Python",
		icon: SiPython,
	},
	{
		name: "Docker",
		icon: SiDocker,
	},

	// {
	// 	name: "MongoDB",
	// 	icon: SiMongodb,
	// },

	// {
	// 	name: "C",
	// 	// icon: CLogo,
	// },
	// {
	// 	name: "C++",
	// 	// icon: CppLogo,
	// },
	{
		name: "styled-components",
		icon: SiStyledcomponents,
	},
];

export const projects = [
	{
		name: "HiLight",
		description:
			"VSCode extension that highlights parts of code to avoid searching for it.",
		link: "https://marketplace.visualstudio.com/items?itemName=f0lio.hilight",
		github: "https://github.com/f0lio/HiLight",
		image: "",
	},
	{
		name: "Minishell",
		description:
			"A bash-like shell that runs on the terminal. It has a built-in history and a built-in command-line interface.",
		link: "",
		github: "https://github.com/f0lio/minishell",
		image: "",
	},
	{
		name: "NextJS Shopify Store",
		description:
			"Minimal E-Commerce Store built with NextJS using Shopify Storefront API.",
		link: "",
		github: "https://github.com/f0lio/nextjs-shopify-store",
		image: "",
	},
	{
		name: "FDF - 3D Wireframe Viewer",
		description: "3D wireframe viewer written in C language",
		link: "",
		github: "https://github.com/f0lio/FdF",
		image: "",
	},
];
