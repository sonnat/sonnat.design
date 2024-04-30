import {
  BurgerMenu as BurgerMenuIcon,
  CloseLarge,
  MagnifierLarge
} from "@sonnat/icons";
import Button from "@sonnat/ui/Button";
import SonnatSvgLogo from "components/SonnatSvgLogo";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import createClassName from "classnames";
import Link from "next/link";
import * as React from "react";
import useStore from "store";
import BurgerMenu from "./partials/BurgerMenu";
import SearchBox from "./partials/SearchBox";

const componentName = "Header";

interface Props {
  className?: string;
}

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      zIndexes,
      breakpoints,
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: zIndexes.header,
        height: pxToRem(64),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: pxToRem(16),
        paddingLeft: pxToRem(16),
        backgroundColor: colors.createWhiteColor({ alpha: 0.98 }),
        boxShadow: `0 1px 2px 0 ${colors.divider}`,
        opacity: 0,
        visibility: "hidden",
        transition: "opacity 360ms ease, visibility 360ms ease"
      },
      searchButton: {},
      brandingLogo: { verticalAlign: "middle" },
      burgerButton: {},
      visible: {
        opacity: 1,
        visibility: "visible"
      },
      [breakpoints.down("lg")]: {
        root: { opacity: 1, visibility: "visible" }
      }
    };
  },
  { name: componentName }
);

const Header = React.memo(function Header(props: Props) {
  const { className, ...otherProps } = props;

  const classes = useStyles();

  const [isMounted, setMounted] = React.useState(false);

  const isBurgerMenuOpen = useStore(state => state.isBurgerMenuOpen);
  const setBurgerMenuOpen = useStore(state => state.setBurgerMenuOpen);

  const isSearchBoxOpen = useStore(state => state.isSearchBoxOpen);
  const setSearchBoxOpen = useStore(state => state.setSearchBoxOpen);

  React.useEffect(() => {
    setMounted(true);
    return () => void setMounted(false);
  }, []);

  return (
    <header
      id="header"
      className={createClassName(classes.root, className)}
      {...otherProps}
    >
      <Button
        aria-label="Toggle burger menu"
        leadingIcon={!isBurgerMenuOpen ? <BurgerMenuIcon /> : <CloseLarge />}
        variant="inlined"
        onClick={() => {
          if (isMounted) {
            setBurgerMenuOpen(!isBurgerMenuOpen);
            setSearchBoxOpen(false);
          }
        }}
        className={classes.burgerMenuToggle}
      />
      <Link href="/">
        <a title="Home">
          <SonnatSvgLogo className={classes.brandingLogo} size={40} />
        </a>
      </Link>
      <Button
        aria-label="دسترسی به جستجو"
        leadingIcon={<MagnifierLarge />}
        variant="inlined"
        className={classes.searchButton}
        onClick={() => {
          if (isMounted) {
            setSearchBoxOpen(!isSearchBoxOpen);
            setBurgerMenuOpen(false);
          }
        }}
      />
      <BurgerMenu
        open={isBurgerMenuOpen}
        toggle={() => void (isMounted && setBurgerMenuOpen(!isBurgerMenuOpen))}
      />
      <SearchBox
        open={isSearchBoxOpen}
        toggle={() => void (isMounted && setSearchBoxOpen(!isSearchBoxOpen))}
      />
    </header>
  );
});

Header.displayName = componentName;

export default Header;
