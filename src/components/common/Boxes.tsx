import React from 'react';
import { motion } from 'framer-motion';

interface TechBoxesProps {
	name: string;
	icon: React.ReactNode;
}

export const TechBox: React.FC<TechBoxesProps> = ({ tech }) => {
	const Icon = tech.icon;
	return (
		<motion.li
			drag={true}
			dragSnapToOrigin
			dragElastic={1}
			dragPropagation
			dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
			whileTap={{ scale: 0.9 }}
			className="flex max-w-max items-center gap-x-3 p-3 text-gray-300 hover:text-primary-3"
		>
			<div className="cursor-pointer ">
				{tech.icon && <Icon className="h-7 w-7" />}
			</div>
			<p className="min-w-max cursor-pointer text-sm">{tech.name}</p>
		</motion.li>
	);
};
