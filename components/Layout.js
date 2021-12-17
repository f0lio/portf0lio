import React from "react";
import Navbar from "./Navbar";
import { MaxWidthWrapper } from "@common/Containers";
import { motion } from "framer-motion";
import Head from "next/head";

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
				<meta name="description" content={props.description || "portfolio"} />
				<meta
					name="keywords"
					content={props.keywords || "portfolio, developer, resume"}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex-col relative justify-center w-full h-screen bg-primary">
				<Navbar pageName={props.pageName} />
				<motion.main
					variants={variants}
					initial="hidden"
					animate="enter"
					exit="exit"
					className="flex flex-col items-center justify-center w-full px-8 pt-16"
				>
					<MaxWidthWrapper>{props.children}</MaxWidthWrapper>
				</motion.main>
			</div>
		</>
	);
};
export default Layout;
