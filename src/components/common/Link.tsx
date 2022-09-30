import { motion } from "framer-motion";
import { default as NextLink } from "next/link";

const Link = (props) => (
  <NextLink href={props.href || "#"}>
    <motion.a variants={props.variants} className={props.className}>
      {props.children}
    </motion.a>
  </NextLink>
);

export default Link;
