export const FlexDiv = ({ children }) => (
	<div className="flex w-full justify-center">{children}</div>
);
export const MaxWidthWrapper = ({ children }) => (
	<div className="w-full max-w-3xl  sm:px-8 xl:px-0">{children}</div>
);

export const StickyHeader = ({ children }) => (
	<div className="sticky top-0 z-50">{children}</div>
);
