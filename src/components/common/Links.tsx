import cx from "classnames";
import { motion } from "framer-motion";
import { default as NextLink } from "next/link";
import { IconType } from "react-icons";

const Link = (props) => (
  <NextLink href={props.href || "#"}>
    <motion.a variants={props.variants} className={props.className}>
      {props.children}
    </motion.a>
  </NextLink>
);

export const SocialLink = ({
  label,
  href,
  icon,
  className,
}: {
  label: string;
  href: string;
  icon: IconType;
  className?: string;
}) => {
  const Icon = icon;
  return (
    <a
      href={href}
      target={"_blank"}
      className={cx(
        "flex min-w-fit items-center gap-x-3 hover:text-primary",
        className
      )}
      rel="noreferrer"
    >
      <Icon className="h-5 w-5" />
      <p>{label}</p>
    </a>
  );
};

export default Link;
