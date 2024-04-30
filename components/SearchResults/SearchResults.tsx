import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import createClass from "classnames";
import Link from "next/link";
import * as React from "react";
import type { SearchReturnType } from "utils/search";

const componentName = "SearchResults";

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        position: "absolute",
        transform: `translateY(${pxToRem(4)})`,
        zIndex: 1,
        width: pxToRem(280),
        borderRadius: pxToRem(4),
        boxShadow:
          "0 1px 6px 0 rgba(0, 0, 0, 0.08)," +
          "0 -8px 32px -4px rgba(0, 0, 0, 0.04)," +
          "0 16px 24px -6px rgba(0, 0, 0, 0.04)",
        backgroundColor: colors.white
      },
      list: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      segment: {
        paddingTop: pxToRem(8),
        "& + *": {
          borderTop: `1px solid ${colors.divider}`
        }
      },
      segmentTitle: {
        padding: [[0, pxToRem(8)]],
        marginBottom: pxToRem(4)
      },
      segmentList: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      listItem: {
        height: pxToRem(40),
        display: "flex",
        backgroundColor: colors.transparent,
        transition: "background-color 180ms ease",
        "&:hover, &:focus": {
          backgroundColor: "rgba(0, 0, 0, 0.04)"
        },
        "& + $segment": {
          borderTop: `1px solid ${colors.divider}`
        }
      },
      listItemLink: {
        display: "flex",
        alignItems: "center",
        flex: [[1, 0]],
        padding: [[0, pxToRem(16)]]
      },
      hidden: {
        opacity: 0,
        visibility: "hidden",
        transition: "opacity 180ms ease, visibility 180ms ease"
      }
    };
  },
  { name: componentName }
);

interface Props {
  results: SearchReturnType;
  className?: string;
  isOutOfFocus?: boolean;
}

const SearchResults: React.FC<Props> = React.memo(
  ({ results, className, isOutOfFocus = false }) => {
    const classes = useStyles();

    const segments = React.useMemo(
      () =>
        results.reduce(
          (
            result: {
              bySegment: {
                [P: string]: {
                  title: string;
                  children: SearchReturnType;
                };
              };
              allSegments: string[];
            },
            current
          ) => {
            const parentPath = current.parents.length
              ? current.parents.map(parent => parent.label.fa).join(" / ")
              : current.label.fa;

            const exists = result.allSegments.includes(parentPath);

            if (exists) {
              return {
                bySegment: {
                  ...result.bySegment,
                  [parentPath]: {
                    ...result.bySegment[parentPath],
                    children: [
                      ...result.bySegment[parentPath].children,
                      current
                    ]
                  }
                },
                allSegments: result.allSegments
              };
            } else {
              return {
                bySegment: {
                  ...result.bySegment,
                  [parentPath]: {
                    title: parentPath,
                    children: [current]
                  }
                },
                allSegments: [...result.allSegments, parentPath]
              };
            }
          },
          { bySegment: {}, allSegments: [] }
        ),
      [results]
    );

    const children = React.useMemo(
      () =>
        segments.allSegments.map((name, index) => {
          const { title, children } = segments.bySegment[name];

          const leaves = children.map((child, index) => {
            const childKey = `${child.label.en}/${index}`;

            return (
              <li className={classes.listItem} key={childKey}>
                <Link href={child.href} passHref>
                  <Text
                    variant="bodySmall"
                    color="textPrimary"
                    rootNode="a"
                    title={child.label.fa}
                    className={classes.listItemLink}
                  >
                    <span>{child.label.fa}</span>
                  </Text>
                </Link>
              </li>
            );
          });

          if (title.includes("/")) {
            const segmentKey = `${title}/${index}`;

            return (
              <li key={segmentKey} className={classes.segment}>
                <Text
                  variant="caption"
                  display="block"
                  rootNode="small"
                  color="textSecondary"
                  className={classes.segmentTitle}
                >
                  {title}
                </Text>
                <ul className={classes.segmentList}>{leaves}</ul>
              </li>
            );
          } else return leaves;
        }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [segments]
    );

    return (
      <div
        className={createClass(classes.root, className, {
          [classes.hidden]: isOutOfFocus
        })}
      >
        <ul className={classes.list}>{children}</ul>
      </div>
    );
  }
);

SearchResults.displayName = componentName;

export default SearchResults;
