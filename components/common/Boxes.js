export const TechBox = ({ tech }) => {
	const Icon = tech.icon;
	return (
		<li
			className={`flex p-3 text-gray-200  hover:text-primary-3 gap-x-3 items-center`}
		>
			<div className=" cursor-pointer">
				{tech.icon && <Icon className="w-7 h-7" />}
			</div>
			<p className="text-sm min-w-max  cursor-pointer">{tech.name}</p>
		</li>
	);
};
