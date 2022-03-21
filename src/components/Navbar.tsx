import React, { useState, useEffect } from 'react';
import Link from '@components/common/Link';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { MaxWidthWrapper } from './common/Containers';

import { useWindowWidth } from '@hooks/index';

import { HiMenu as OpenIcon } from 'react-icons/hi';
import { IoCloseSharp as CloseIcon } from 'react-icons/io5';

const ToggleButton = (props) => (
	<button
		className="h-11 py-2 text-white outline-none hover:text-primary-3"
		onClick={() => props.onClick()}
	>
		{props.isOpen ? (
			<CloseIcon className="h-full w-full" />
		) : (
			<OpenIcon className="h-full w-full" />
		)}
	</button>
);

const SmallNavItem = ({ children, href, isActive, className = '' }) => {
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
						isActive ? ' text-primary-3' : 'text-gray-300'
					} rounded-2lx font-primary max-h-min cursor-pointer py-3 px-4 font-mono text-sm duration-150 hover:text-primary-3`}
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
					className="cursor-pointer rounded-2xl px-6 py-2 font-mono text-xl text-primary-3 hover:bg-gray-800"
				>
					~ F0lio
				</Link>
				<ToggleButton isOpen={props.isOpen} onClick={() => props.onClick()} />
			</div>
			{props.isOpen && (
				<nav className="fixed h-full w-full ">
					<ul className="flex h-full flex-col items-center justify-items-center bg-opacity-0 py-32 shadow-sm backdrop-blur-md backdrop-filter">
						<SmallNavItem isActive={props.pageName == 'about'} href="/about">
							/about
						</SmallNavItem>
						<SmallNavItem
							isActive={props.pageName == 'projects'}
							href="/projects"
							scroll
						>
							/projects
						</SmallNavItem>

						<SmallNavItem isActive={props.pageName == 'etc'} href="/etc">
							/etc
						</SmallNavItem>
						<div className="h-3 w-24 border-b border-gray-200"></div>
						<SmallNavItem
							className="py-5"
							isActive={props.pageName == 'contact'}
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

const NavItem = ({ children, href, isActive, className = '' }) => {
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
						isActive ? ' text-primary-3' : 'text-primary-1'
					} font-primary max-h-min cursor-pointer  rounded-2xl py-3 px-4 font-mono text-sm duration-150 hover:bg-gray-800 hover:text-primary-3`}
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
						<ul className="hidden items-center justify-between sm:flex">
							<div className="flex items-center justify-center gap-x-6 ">
								<NavItem isActive={pageName == 'home'} href="/">
									~F0lio
								</NavItem>
								<NavItem isActive={pageName == 'about'} href="about">
									/about
								</NavItem>
								<NavItem isActive={pageName == 'projects'} href="projects">
									/projects
								</NavItem>
								<NavItem isActive={pageName == 'etc'} href="etc">
									/etc
								</NavItem>
							</div>

							<NavItem isActive={pageName == 'contact'} href="contact">
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
