import React from 'react';
import Navbar from './Navbar';

import { MaxWidthWrapper } from '@components/common/Containers';
import Head from 'next/head';
import { motion } from 'framer-motion';

const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
	exit: { opacity: 0 },
};

const Layout = (props) => {
	return (
		<>
			<Head>
				<title>{props.pageTitle}</title>
				<meta
					name="description"
					content={props.description || 'omar magoury f0lio'}
				/>
				<meta
					name="keywords"
					content={props.keywords || 'portfolio, developer, resume'}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="relative min-h-screen w-full flex-col justify-center bg-black">
				<Navbar pageName={props.pageName} />
				<motion.main
					variants={variants}
					initial="hidden"
					animate="enter"
					exit="exit"
					className="flex w-full flex-col items-center justify-center px-8 py-16"
				>
					<MaxWidthWrapper>{props.children}</MaxWidthWrapper>
				</motion.main>
			</div>
		</>
	);
};
export default Layout;
