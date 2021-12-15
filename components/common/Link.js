import { default as NextLink } from "next/link";
import { motion } from "framer-motion";

const Link = (props) => (
	<NextLink href={props.href || "#"}>
		<motion.a variants={props.variants} className={props.className}>
			{props.children}
		</motion.a>
	</NextLink>
);

export default Link;
