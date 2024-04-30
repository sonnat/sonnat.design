import { MagnifierLarge } from "@sonnat/icons";
import InputAdornment from "@sonnat/ui/InputAdornment";
import { DefaultTheme } from "@sonnat/ui/styles";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import TextField from "@sonnat/ui/TextField";
import detectScrollBarWidth from "@sonnat/ui/utils/detectScrollBarWidth";
import createClass from "classnames";
import SearchResults from "components/SearchResults";
import SonnatSvgLogo from "components/SonnatSvgLogo";
import throttle from "lodash.throttle";
import { getSchema, useNavJsx } from "nav-schema";
import Link from "next/link";
import * as React from "react";
import search, { SearchReturnType } from "utils/search";

interface Props {
  className?: string;
}

const componentName = "Sidebar";

const useStyles = makeStyles<
  DefaultTheme,
  { scrollBarWidth: number },
  | "root"
  | "heading"
  | "branding"
  | "brandingLogo"
  | "brandingText"
  | "searchRow"
>(
  theme => {
    const {
      colors,
      typography: { pxToRem, fontWeight }
    } = theme;

    return {
      root: {
        position: "sticky",
        borderLeft: `1px solid ${colors.divider}`,
        top: 0,
        zIndex: 1,
        "&:after": {
          marginLeft: ({ scrollBarWidth }) => pxToRem(scrollBarWidth),
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: pxToRem(16),
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0), ${colors.background.origin})`
        }
      },
      heading: {
        position: "relative",
        zIndex: 2,
        paddingBottom: pxToRem(16),
        paddingRight: pxToRem(32),
        paddingLeft: pxToRem(32),
        "&:after": {
          marginLeft: ({ scrollBarWidth }) => pxToRem(scrollBarWidth),
          content: '""',
          position: "absolute",
          bottom: pxToRem(-16),
          left: 0,
          right: 0,
          height: pxToRem(16),
          background: `linear-gradient(180deg, ${colors.background.origin}, rgba(255, 255, 255, 0))`
        }
      },
      branding: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: pxToRem(64)
      },
      brandingLogo: { verticalAlign: "middle" },
      brandingText: {
        fontWeight: fontWeight.medium,
        marginTop: pxToRem(8)
      },
      searchRow: {
        position: "relative",
        marginTop: pxToRem(24)
      }
    };
  },
  { name: componentName }
);

const Sidebar = React.memo<Props>(function Sidebar({ children, className }) {
  const navJsx = useNavJsx();

  const [searchResults, setSearchResults] = React.useState<SearchReturnType>(
    []
  );
  const [isFocused, setFocused] = React.useState(false);

  const _scrollBarWidth =
    typeof window !== "undefined" ? detectScrollBarWidth() : 0;

  const scrollBarWidth = React.useMemo(
    () => _scrollBarWidth,
    [_scrollBarWidth]
  );

  const classes = useStyles({ scrollBarWidth });

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.value;

    if (key.length >= 2) {
      const results = search(getSchema(), e.target.value);
      setSearchResults(results);
    } else setSearchResults([]);
  };

  return (
    <aside className={createClass(className, classes.root)}>
      <div className={classes.heading}>
        <div className={classes.branding}>
          <Link href="/">
            <a title="Home">
              <SonnatSvgLogo className={classes.brandingLogo} size={48} />
            </a>
          </Link>
          <Text
            variant="bodySmall"
            color="textPrimary"
            className={classes.brandingText}
          >
            دیزاین سیستم سنّت
          </Text>
        </div>
        <div className={classes.searchRow}>
          <TextField
            fluid
            name="search"
            leadingAdornment={
              <InputAdornment variant="icon">
                <MagnifierLarge />
              </InputAdornment>
            }
            placeholder="جستجو در سنّت"
            inputProps={{ autoComplete: "off", "aria-label": "جستجو در سنّت" }}
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            onChange={throttle(searchHandler, 250)}
          />
          {searchResults.length > 0 && (
            <SearchResults isOutOfFocus={!isFocused} results={searchResults} />
          )}
        </div>
      </div>
      {navJsx}
      {children}
    </aside>
  );
});

Sidebar.displayName = componentName;

export default Sidebar;
