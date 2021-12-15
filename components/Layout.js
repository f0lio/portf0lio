import React from "react";
import Navbar from "./Navbar";
import { MaxWidthWrapper } from "@common/Containers";
import { motion } from "framer-motion";

const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
	exit: { opacity: 0 },
};

const Layout = ({ children, pageName }) => {
	return (
		<div className="flex-col justify-center w-full h-screen bg-primary">
			<Navbar pageName={pageName} />
			<motion.main
				variants={variants}
				initial="hidden"
				animate="enter"
				exit="exit"
				transition={{
					type: "keyframes",
					delay: 0.2,
				}}
				// className="flex items-start justify-center px-8 pt-24 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96"
				className="flex flex-col items-center justify-center w-full pt-16"
			>
				<MaxWidthWrapper>{children}</MaxWidthWrapper>
			</motion.main>
		</div>
	);
};
export default Layout;
