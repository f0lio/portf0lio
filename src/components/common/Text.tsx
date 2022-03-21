import React from 'react';

export const Title: React.FC<React.ReactNode> = ({ children }) => (
	<p className="py-3 text-4xl font-bold text-gray-50">{children}</p>
);

export const SubTitle: React.FC<React.ReactNode> = ({ children }) => (
	<p className="break-words py-2 text-2xl font-bold text-gray-200">
		{children}
	</p>
);

export const Description: React.FC<React.ReactNode> = ({ children }) => (
	<p className="break-words py-2 text-base font-light text-gray-300">
		{children}
	</p>
);
