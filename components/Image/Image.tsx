import clx from "classnames";
import Skeleton from "@sonnat/ui/Skeleton";
import Text from "@sonnat/ui/Text";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import * as React from "react";
import useIsomorphicLayoutEffect from "utils/useIsomorphicLayoutEffect";

const componentName = "Image";

export interface ImageProps {
  imageProps: NextImageProps & { width: number; height: number };
  caption?: React.ReactNode;
  illustration?: boolean;
  className?: string;
}

const useStyles = makeStyles(
  theme => {
    const {
      typography: { pxToRem }
    } = theme;

    return {
      root: { margin: 0 },
      container: {
        borderRadius: pxToRem(4),
        overflow: "hidden",
        border: "1px solid rgba(0, 0, 0, 0.04)",
        backgroundColor: "rgba(0, 0, 0, 0.02)"
      },
      illustration: {
        "& $container": {
          border: "none",
          backgroundColor: "transparent"
        }
      },
      skeleton: {},
      image: {},
      caption: { marginTop: pxToRem(8) },
      captionText: {}
    };
  },
  { name: componentName }
);

const Image = React.memo((props: ImageProps) => {
  const {
    className,
    caption,
    imageProps,
    illustration = false,
    ...otherProps
  } = props;

  const {
    src,
    width,
    height,
    className: imageClassName,
    ...otherImageProps
  } = imageProps;

  const classes = useStyles();

  const [isLoaded, setLoaded] = React.useState(false);

  const ratio = width / height;

  useIsomorphicLayoutEffect(() => {
    const image = new window.Image();
    image.src = src;
    image.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <figure
      className={clx(classes.root, className, {
        [classes.illustration]: illustration
      })}
      {...otherProps}
    >
      <div className={classes.container}>
        {isLoaded ? (
          <NextImage
            className={clx(classes.image, imageClassName)}
            src={src}
            width={width}
            height={height}
            layout="responsive"
            {...otherImageProps}
          />
        ) : (
          <Skeleton
            className={clx(classes.skeleton, imageClassName)}
            width="100%"
            variant="rectangular"
            ratio={ratio}
          />
        )}
      </div>
      {caption && (
        <figcaption className={classes.caption}>
          {typeof caption === "string" ? (
            <Text
              variant="caption"
              rootNode="span"
              className={classes.captionText}
              color="textSecondary"
            >
              {caption}
            </Text>
          ) : (
            caption
          )}
        </figcaption>
      )}
    </figure>
  );
});

Image.displayName = componentName;

export default Image;
