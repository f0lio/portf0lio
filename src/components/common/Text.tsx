import React from "react";

import cn from "classnames";

export const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={cn(
      "py-3 text-4xl font-bold text-primary-1 selection:text-primary-2".split(
        " "
      ),
      className
    )}
  >
    {" "}
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
      "max-w-max break-words py-2 text-2xl font-bold text-primary-1 selection:text-primary-2".split(
        " "
      ),
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
      "break-words py-2 text-base font-light text-primary-1/80 selection:text-primary-2".split(
        " "
      ),
      className
    )}
  >
    {children}
  </p>
);

export const Bullet = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "flex break-words py-2 text-base font-light text-primary-1/80 selection:text-primary-2".split(
        " "
      ),
      className
    )}
  >
    <span className="mr-2">{"\u2022"}</span>
    {children}
  </div>
);
