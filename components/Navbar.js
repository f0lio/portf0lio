import React, { useState, useEffect } from "react";
import Link from "@common/Link";
import { motion, AnimateSharedLayout } from "framer-motion";
import { MaxWidthWrapper } from "./common/Containers";

import { useWindowWidth } from "@hooks/index";

import { HiMenu as OpenIcon } from "react-icons/hi";
import { IoCloseSharp as CloseIcon } from "react-icons/io5";

const ToggleButton = (props) => (
	<button
		className="py-2 hover:text-primary-3 text-white h-11 outline-none"
		onClick={() => props.onClick()}
	>
		{props.isOpen ? (
			<CloseIcon className="w-full h-full" />
		) : (
			<OpenIcon className="w-full h-full" />
		)}
	</button>
);

const SmallNavItem = ({ children, href, isActive, className = "" }) => {
	return (
		<li>
			<Link href={href}>
				<motion.div
					drag={true}
					dragSnapToOrigin
					dragElastic={1}
					dragPropagation
					dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
					whileTap={{ scale: 0.9 }}
					className={`${className} ${
						isActive ? " text-primary-3" : "text-gray-300"
					} text-sm font-mono rounded-2lx hover:text-primary-3 py-3 px-4 cursor-pointer max-h-min duration-150 font-primary`}
				>
					{children}
				</motion.div>
			</Link>
		</li>
	);
};

const SmallNavbar = (props) => {
	return (
		<div className="relative z-40">
			<div className="flex justify-between px-4 pt-8">
				<Link
					href="/"
					className="px-6 py-2 font-mono text-xl cursor-pointer hover:bg-gray-800 text-primary-3 rounded-2xl"
				>
					~ F0lio
				</Link>
				<ToggleButton isOpen={props.isOpen} onClick={() => props.onClick()} />
			</div>
			{props.isOpen && (
				<nav className="fixed w-full h-full ">
					<ul className="flex flex-col items-center h-full py-32 bg-opacity-0 shadow-sm justify-items-center backdrop-filter backdrop-blur-md">
						<SmallNavItem isActive={props.pageName == "about"} href="/about">
							/about
						</SmallNavItem>
						<SmallNavItem
							isActive={props.pageName == "projects"}
							href="/projects"
							scroll
						>
							/projects
						</SmallNavItem>

						<SmallNavItem isActive={props.pageName == "etc"} href="/etc">
							/etc
						</SmallNavItem>
						<div className="border-b border-gray-200 h-3 w-24"></div>
						<SmallNavItem
							className="py-5"
							isActive={props.pageName == "contact"}
							href="/contact"
						>
							/contact
						</SmallNavItem>
					</ul>
				</nav>
			)}
		</div>
	);
};

const NavItem = ({ children, href, isActive, className = "" }) => {
	return (
		<li>
			<Link href={href}>
				<motion.div
					drag={true}
					dragSnapToOrigin
					dragElastic={1}
					dragPropagation
					dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
					whileTap={{ scale: 0.9 }}
					className={`${className} ${
						isActive ? " text-primary-3" : "text-primary-1"
					} text-sm font-mono rounded-2xl  hover:bg-gray-800 hover:text-primary-3 py-3 px-4 cursor-pointer max-h-min duration-150 font-primary`}
				>
					{children}
				</motion.div>
			</Link>
		</li>
	);
};

const Navbar = ({ pageName }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isSmallNav, setIsSmallNav] = useState(false);
	const windowWidth = useWindowWidth();

	useEffect(() => {
		if (windowWidth > 640) {
			setIsSmallNav(false);
			setIsOpen(false);
		} else setIsSmallNav(true);
	}, [windowWidth]);
	return (
		<>
			{isSmallNav && (
				<SmallNavbar
					pageName={pageName}
					isOpen={isOpen}
					onClick={() => setIsOpen(!isOpen)}
				/>
			)}
			<nav className="flex justify-center py-8 ">
				<MaxWidthWrapper>
					<AnimateSharedLayout>
						<ul className="items-center justify-between hidden sm:flex">
							<div className="flex items-center justify-center gap-x-6 ">
								<NavItem isActive={pageName == "home"} href="/">
									~F0lio
								</NavItem>
								<NavItem isActive={pageName == "about"} href="about">
									/about
								</NavItem>
								<NavItem isActive={pageName == "projects"} href="projects">
									/projects
								</NavItem>
								<NavItem isActive={pageName == "etc"} href="etc">
									/etc
								</NavItem>
							</div>

							<NavItem isActive={pageName == "contact"} href="contact">
								/contact
							</NavItem>
						</ul>
					</AnimateSharedLayout>
				</MaxWidthWrapper>
			</nav>
		</>
	);
};

export default Navbar;
