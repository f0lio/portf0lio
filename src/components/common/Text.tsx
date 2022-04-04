import React from 'react';
import cn from 'classnames';

export const Title = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<p
		className={cn(
			'py-3 text-4xl font-bold text-primary-1'.split(' '),
			className
		)}
	>
		{' '}
		{children}
	</p>
);

export const SubTitle = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<p
		className={cn(
			'break-words py-2 text-2xl font-bold text-primary-1'.split(' '),
			className
		)}
	>
		{children}
	</p>
);

export const Description = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<p
		className={cn(
			'text-secondary break-words py-2 text-base font-light'.split(' '),
			className
		)}
	>
		{children}
	</p>
);
