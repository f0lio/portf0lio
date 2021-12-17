import React from "react";

export const Title = ({ children }) => (
	<p className="py-3 text-4xl font-bold text-gray-50">{children}</p>
);
export const SubTitle = ({ children }) => (
	<p className="py-2 text-2xl font-bold text-gray-200 break-words">
		{children}
	</p>
);

export const Description = ({ children }) => (
	<p className="py-2 text-base font-light text-gray-300 break-words">
		{children}
	</p>
);
