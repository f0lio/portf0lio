export const FlexDiv = ({ children }) => (
	<div className="flex justify-center w-full">{children}</div>
);
export const MaxWidthWrapper = ({ children }) => (
	<div className="px-4  max-w-3xl w-full xl:px-0">{children}</div>
);

export const StickyHeader = ({ children }) => (
	<div className="sticky top-0 z-50">{children}</div>
);
