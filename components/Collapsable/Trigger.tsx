import Divar from "@sonnat/icons/Divar";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import createClass from "classnames";
import * as React from "react";

export const componentName = "CollapsableTrigger";

interface Props {
  title?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  active?: boolean;
  isDivarSpecific?: boolean;
}

const useStyles = makeStyles(
  theme => ({
    root: {},
    title: {
      color: theme.colors.text.secondary,
      transition: "color 360ms ease",
      "&:hover": {
        color: theme.colors.text.primary
      }
    },
    divarIndicator: { color: "#ea475b" },
    divider: {
      width: 1,
      height: `calc(100% - ${theme.typography.pxToRem(24)})`,
      marginRight: theme.typography.pxToRem(10),
      marginLeft: theme.typography.pxToRem(8),
      backgroundColor: theme.colors.divider
    },
    active: {
      "& $title": {
        color: theme.colors.text.primary,
        fontWeight: theme.typography.fontWeight.medium
      }
    }
  }),
  { name: componentName }
);

const CollapsableTrigger = React.memo((props: Props) => {
  const {
    className,
    title,
    onClick,
    active = false,
    isDivarSpecific = false
  } = props;

  const classes = useStyles();

  return (
    <div
      role="button"
      className={createClass(classes.root, className, {
        [classes.active]: active
      })}
      onClick={onClick}
    >
      <Text variant="bodySmall" className={classes.title}>
        {title}
      </Text>
      {isDivarSpecific && (
        <React.Fragment>
          <div className={classes.divider}></div>
          <Divar className={classes.divarIndicator} size={16} />
        </React.Fragment>
      )}
    </div>
  );
});

CollapsableTrigger.displayName = componentName;

export default CollapsableTrigger;
