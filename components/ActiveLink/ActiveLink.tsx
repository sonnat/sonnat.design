import createClassName from "classnames";
import Link, { LinkProps as NextLinkProps } from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

export interface ActiveLinkProps extends NextLinkProps {
  onActive?: () => void;
  activeClassName?: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = props => {
  const {
    children,
    href,
    onActive,
    activeClassName = "active",
    ...otherProps
  } = props;

  const child = React.Children.only(
    children
  ) as NonNullable<React.ReactElement>;

  const router = useRouter();

  const isActive = React.useMemo(
    () => router.pathname === href,
    [href, router.pathname]
  );

  React.useEffect(() => {
    if (isActive && onActive) onActive();
  }, [isActive, onActive]);

  return (
    <Link href={href} {...otherProps}>
      {React.cloneElement(child, {
        className: createClassName(child.props?.className, {
          [activeClassName]: isActive
        })
      })}
    </Link>
  );
};

export default ActiveLink;
