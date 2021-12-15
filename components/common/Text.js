import React from "react";

export const Title = ({ children }) => (
	<p className="text-4xl font-bold py-3 text-gray-50">{children}</p>
);
export const SubTitle = ({ children }) => (
	<p className="text-2xl  py-2 break-words text-gray-200 font-bold">
		{children}
	</p>
);

export const Description = ({ children }) => (
	<p className="text-base py-2 break-words text-gray-300 font-light">
		{children}
	</p>
);
