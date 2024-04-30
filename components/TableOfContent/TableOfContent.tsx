import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import { clamp, getOffsetFromWindow } from "@sonnat/ui/utils";
import useIsomorphicLayoutEffect from "utils/useIsomorphicLayoutEffect";
import useEventListener from "@utilityjs/use-event-listener";
import createClass from "classnames";
import debounce from "lodash.debounce";
import throttle from "lodash.throttle";
import * as React from "react";

const componentName = "TableOfContents";

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      direction,
      typography: { pxToRem, fontWeight }
    } = theme;

    return {
      root: { position: "sticky", top: pxToRem(32) },
      title: { fontWeight: fontWeight.medium },
      list: {
        margin: [[pxToRem(10), 0, 0, 0]],
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      },
      listItem: {
        ...(direction === "rtl"
          ? { paddingRight: pxToRem(16) }
          : { paddingLeft: pxToRem(16) }),
        paddingTop: pxToRem(4),
        display: "flex",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
        "&:not($active):hover, &:not($active):focus": {
          "& $listItemLinkText": { color: colors.text.primary }
        },
        "&:before": {
          content: '""',
          position: "absolute",
          right: 0,
          width: pxToRem(1),
          height: pxToRem(16),
          transition: "background-color 360ms ease",
          backgroundColor: colors.transparent
        }
      },
      listItemLink: { textDecoration: "none", color: "inherit" },
      listItemLinkText: {
        color: colors.text.secondary,
        lineHeight: 2,
        transition: "color 360ms ease, font-weight 360ms ease"
      },
      active: {
        "&:before": { backgroundColor: colors.primary.origin },
        "& $listItemLinkText": {
          color: colors.primary.origin,
          fontWeight: fontWeight.medium
        }
      }
    };
  },
  { name: componentName }
);

type TableDataType = { id: string; label: string }[];

interface Props {
  tableData: TableDataType;
}

const TableOfContents: React.FC<Props> = React.memo(props => {
  const { tableData = [] } = props;

  const localClass = useStyles();

  const [activeItem, setActiveItem] = React.useState("");
  const [isLoaded, setLoaded] = React.useState(false);
  const [isScrollingAllowed, setScrollingAllowed] = React.useState(true);

  const update = (): {
    all: string[];
    section: Record<string, { start: number; end: number }>;
  } =>
    tableData.reduce<{
      all: string[];
      section: Record<string, { start: number; end: number }>;
    }>(
      (result, data, index) => {
        const anchor = document.getElementById(data.id);

        if (anchor) {
          const offset = getOffsetFromWindow(anchor);
          const start = offset.top;

          const record = { start, end: document.body.scrollHeight };

          const prevAnchor: string | null =
            index > 0 ? tableData[index - 1].id : null;

          return {
            ...result,
            all: [...result.all, data.id],
            section: {
              ...result.section,
              ...(prevAnchor
                ? {
                    [prevAnchor]: { ...result.section[prevAnchor], end: start },
                    [data.id]: record
                  }
                : { [data.id]: record })
            }
          };
        } else return { ...result };
      },
      { all: [], section: {} }
    );

  const handleScroll = () => {
    const boundaries = update();

    let _activeItem = "";
    const { all = [], section = {} } = boundaries;

    all.forEach((sectionName, index) => {
      const nextIndex = clamp(index + 1, 0, all.length - 1);
      const prevIndex = clamp(index - 1, 0, all.length - 1);

      const start = index === 0 ? 0 : section[all[prevIndex]].end;
      const end =
        index === all.length - 1
          ? document.body.scrollHeight
          : section[all[nextIndex]].start;

      if (start - 4 <= window.scrollY && window.scrollY <= end + 4) {
        _activeItem = sectionName;
      }
    });

    setActiveItem(_activeItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useIsomorphicLayoutEffect(() => {
    if (isLoaded) handleScroll();
  }, [isLoaded]);

  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEventListener({
      target: window,
      eventType: "load",
      handler: () => void setLoaded(true)
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEventListener(
      {
        target: window,
        eventType: "scroll",
        handler: () => {
          if (isLoaded && isScrollingAllowed) throttle(handleScroll, 250)();
          else if (isLoaded && !isScrollingAllowed) {
            debounce(() => void setScrollingAllowed(true), 125)();
          }
        }
      },
      isLoaded
    );
  }

  return (
    <div className={localClass.root}>
      <Text
        rootNode="strong"
        variant="caption"
        color="textSecondary"
        className={localClass.title}
      >
        فهرست محتوا
      </Text>
      <ul className={localClass.list}>
        {tableData.map((data, index) => (
          <li
            className={createClass(localClass.listItem, {
              [localClass.active]: data.id === activeItem
            })}
            key={`${data.label}/${index}`}
          >
            <a
              href={`#${data.id}`}
              className={localClass.listItemLink}
              onClick={() => {
                setActiveItem(data.id);
                setScrollingAllowed(false);
              }}
            >
              <Text
                rootNode="span"
                variant="caption"
                className={localClass.listItemLinkText}
              >
                {data.label}
              </Text>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});

TableOfContents.displayName = componentName;

export default TableOfContents;
