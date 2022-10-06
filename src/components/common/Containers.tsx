import React from "react";

export const FlexDiv: React.FC = ({ children }) => (
  <div className="flex w-full justify-center">{children}</div>
);

export const MaxWidthWrapper: React.FC = ({ children }) => (
  <div className="w-full max-w-2xl sm:px-8 xl:px-0">{children}</div>
);

export const StickyHeader: React.FC = ({ children }) => (
  <div className="sticky top-0 z-50">{children}</div>
);
