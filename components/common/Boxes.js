import { motion } from "framer-motion";
export const TechBox = ({ tech }) => {
	const Icon = tech.icon;
	return (
		<motion.li
			drag={true}
			dragSnapToOrigin
			dragElastic={1}
			dragPropagation
			dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
			whileTap={{ scale: 0.9 }}
			className="flex items-center p-3 text-gray-300 max-w-max hover:text-primary-3 gap-x-3"
		>
			<div className="cursor-pointer ">
				{tech.icon && <Icon className="w-7 h-7" />}
			</div>
			<p className="text-sm cursor-pointer min-w-max">{tech.name}</p>
		</motion.li>
	);
};
