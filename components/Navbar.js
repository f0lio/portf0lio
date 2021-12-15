import React, { useState } from "react";
import Link from "@common/Link";
import { motion, AnimateSharedLayout } from "framer-motion";
import { MaxWidthWrapper } from "./common/Containers";

const NavItem = ({ children, href, isActive }) => {
	return (
		<motion.li
			drag={true}
			dragSnapToOrigin
			whileDrag={{
				scale: 1.2,
			}}
			dragElastic={1}
			dragPropagation
			dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
			whileTap={{ scale: 0.9 }}
			className={`${
				isActive ? " text-primary-3" : "text-primary-1"
			} text-sm font-mono rounded-2xl hover:bg-gray-800 py-3 px-4 cursor-pointer max-h-min duration-75 font-primary hover:text-primary-3 `}
		>
			<Link href={href}>{children}</Link>
		</motion.li>
	);
};

const Navbar = ({ pageName }) => {
	return (
		<nav className="flex justify-center py-6 ">
			<MaxWidthWrapper>
				<AnimateSharedLayout>
					<ul className="flex justify-between">
						<div className="flex justify-center gap-x-6">
							<NavItem isActive={pageName == "home"} href="/">
								/home
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
					{/* <div className="w-32 py-4 border-b border-white"></div> */}
				</AnimateSharedLayout>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
