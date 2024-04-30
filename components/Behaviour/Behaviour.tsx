import { AlertCircle, CheckCircle, CloseCircle } from "@sonnat/icons";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text, { TextProps } from "@sonnat/ui/Text";
import Image, { ImageProps as ImageProps } from "components/Image";
import * as React from "react";

const componentName = "Behaviour";

const useStyles = makeStyles(
  theme => ({
    root: {},
    caption: {},
    captionTitle: {
      display: "flex",
      alignItems: "center"
    },
    captionIcon: { marginLeft: theme.typography.pxToRem(8) }
  }),
  { name: componentName }
);

interface BehaviourProps {
  imageProps: ImageProps["imageProps"];
  caption: string;
  variant?: "do" | "dont" | "warning";
}

const Behaviour: React.FC<BehaviourProps> = props => {
  const classes = useStyles();

  const { imageProps, caption, variant = "do", ...otherProps } = props;

  const color = ({ do: "success", dont: "error", warning: "warning" }[
    variant
  ] || "textPrimary") as TextProps["color"];

  return (
    <Image
      {...otherProps}
      className={classes.root}
      imageProps={imageProps}
      caption={
        <div className={classes.caption}>
          <Text variant="body" className={classes.captionTitle} color={color}>
            {{
              do: <CheckCircle size={16} className={classes.captionIcon} />,
              dont: <CloseCircle size={16} className={classes.captionIcon} />,
              warning: <AlertCircle size={16} className={classes.captionIcon} />
            }[variant] || null}
            <span>
              {{ do: "درست", dont: "نادرست", warning: "احتیاط" }[variant] || ""}
            </span>
          </Text>
          <Text variant="bodySmall" color="textSecondary">
            {caption}
          </Text>
        </div>
      }
    />
  );
};

Behaviour.displayName = componentName;

export default Behaviour;
