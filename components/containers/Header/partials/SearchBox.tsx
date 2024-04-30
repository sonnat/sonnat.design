import { MagnifierLarge, Close } from "@sonnat/icons";
import InputAdornment from "@sonnat/ui/InputAdornment";
import Portal from "@sonnat/ui/Portal";
import { DefaultTheme, makeStyles } from "@sonnat/ui/styles";
import TextField from "@sonnat/ui/TextField";
import createClass from "classnames";
import SearchResults from "components/SearchResults";
import throttle from "lodash.throttle";
import { getSchema } from "nav-schema";
import * as React from "react";
import search, { SearchReturnType } from "utils/search";

const componentName = "SearchBox";

const useStyles = makeStyles<
  DefaultTheme,
  unknown,
  "root" | "dimmer" | "open" | "clearFieldButton" | "searchResults"
>(
  theme => {
    const {
      colors,
      zIndexes,
      breakpoints,
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: pxToRem(64),
        left: 0,
        right: 0,
        backgroundColor: colors.white,
        zIndex: zIndexes.header - 1,
        opacity: 0,
        padding: [[pxToRem(8), pxToRem(8)]],
        visibility: "hidden",
        transform: "translateY(-100%)",
        transition:
          "transform 360ms ease, opacity 260ms ease, visibility 260ms ease"
      },
      dimmer: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: zIndexes.header - 2,
        backgroundColor: "rgba(0, 0, 0, 0.26)",
        visibility: "hidden",
        opacity: 0,
        transition: "opacity 360ms ease, visibility 360ms ease"
      },
      open: {
        opacity: 1,
        visibility: "visible",
        "&$root": {
          transform: "translateY(0)"
        }
      },
      clearFieldButton: {
        height: "100%",
        width: pxToRem(40),
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      searchResults: {
        top: "100%",
        overflow: "auto",
        maxHeight: `calc(100vh - ${pxToRem(136)})`,
        transform: `translateY(${pxToRem(-8)})`,
        width: `calc(100% - ${pxToRem(32)})`
      },
      [breakpoints.up("lg")]: {
        root: { opacity: 0, visibility: "hidden" },
        dimmer: { opacity: 0, visibility: "hidden" }
      }
    };
  },
  { name: componentName }
);

interface Props {
  open: boolean;
  toggle: () => void;
}

const SearchBox: React.FC<Props> = React.memo(function SearchBox(props) {
  const { open: openProp, toggle: toggleFn } = props;

  const localClass = useStyles();

  const { current: isOpenControlled } = React.useRef(openProp != null);

  const fieldRef = React.useRef<HTMLDivElement>(null);

  const [isOpen, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<SearchReturnType>(
    []
  );
  const [isFocused, setFocused] = React.useState(false);

  const openState = isOpenControlled ? openProp : isOpen;

  const toggle = React.useCallback(() => {
    if (isOpenControlled) {
      if (toggleFn) requestAnimationFrame(toggleFn);
    } else requestAnimationFrame(() => setOpen(s => !s));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleFn]);

  return (
    <Portal>
      <div
        onTransitionEnd={e => {
          const isOpenTransitionEnd = e.propertyName
            .toLowerCase()
            .includes("transform");

          if (isOpenTransitionEnd) {
            setFocused(openState);
            if (openState) fieldRef.current?.focus();
            else fieldRef.current?.blur();
          }
        }}
        className={createClass(localClass.root, {
          [localClass.open]: openState
        })}
      >
        <TextField
          fluid
          focused={isFocused}
          ref={fieldRef}
          value={searchValue}
          variant="filled"
          leadingAdornment={
            <InputAdornment variant="icon">
              <MagnifierLarge />
            </InputAdornment>
          }
          trailingAdornment={
            !!searchValue && (
              <InputAdornment
                variant="icon"
                color="inherit"
                aria-label="پاک کردن فیلد متنی"
                onClick={() => {
                  setSearchValue("");
                  setSearchResults([]);
                  fieldRef.current?.focus();
                }}
                className={localClass.clearFieldButton}
              >
                <Close />
              </InputAdornment>
            )
          }
          placeholder="جستجو در سنّت"
          inputProps={{ autoComplete: "off" }}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          onChange={e => {
            setSearchValue(e.target.value);
            throttle(() => {
              if (e.target.value.length >= 2) {
                const results = search(getSchema(), e.target.value);
                setSearchResults(results);
              } else setSearchResults([]);
            }, 250)();
          }}
        />
        {searchResults.length > 0 && (
          <SearchResults
            isOutOfFocus={!isFocused}
            className={localClass.searchResults}
            results={searchResults}
          />
        )}
      </div>
      <div
        className={createClass(localClass.dimmer, {
          [localClass.open]: openState
        })}
        onClick={toggle}
      ></div>
    </Portal>
  );
});

SearchBox.displayName = componentName;

export default SearchBox;
