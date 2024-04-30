import makeStyles from "@sonnat/ui/styles/makeStyles";
import Skeleton from "@sonnat/ui/Skeleton";
import InfoCircleLargeO from "@sonnat/icons/InfoCircleLargeO";
import Text from "@sonnat/ui/Text";
import clx from "classnames";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import useIsomorphicLayoutEffect from "utils/useIsomorphicLayoutEffect";
import * as React from "react";

const componentName = "Anatomy";

const useStyles = makeStyles(
  theme => ({
    root: {
      margin: 0,
      cursor: "pointer",
      "&:hover $specImage": {
        opacity: 1,
        visibility: "visible"
      }
    },
    container: {
      position: "relative",
      borderRadius: theme.typography.pxToRem(4),
      overflow: "hidden",
      border: "1px solid rgba(0, 0, 0, 0.04)",
      backgroundColor: "rgba(0, 0, 0, 0.02)"
    },
    imageWrapper: {
      width: "100%",
      position: "absolute",
      top: 0
    },
    hoverInfo: {
      position: "absolute",
      top: theme.typography.pxToRem(8),
      right: theme.typography.pxToRem(8),
      display: "flex",
      alignItems: "center",
      "& > * + *": { marginRight: theme.typography.pxToRem(4) }
    },
    hoverInfoDesktop: {},
    hoverInfoMobile: {},
    caption: { marginTop: theme.typography.pxToRem(8) },
    captionText: {},
    mainImage: {},
    specImage: {
      opacity: 0,
      visibility: "hidden",
      transition: ["opacity 360ms ease", "visibility 360ms ease"].join(", ")
    },
    [theme.breakpoints.down("md")]: {
      hoverInfoDesktop: { display: "none" }
    },
    [theme.breakpoints.up("md")]: {
      hoverInfoMobile: { display: "none" }
    }
  }),
  { name: componentName }
);

interface AnatomyProps {
  className?: string;
  imageProps: NextImageProps & {
    mainSrc: string;
    specSrc: string;
    width: number;
    height: number;
  };
  caption: string;
}

const Anatomy: React.FC<AnatomyProps> = props => {
  const classes = useStyles();

  const { imageProps, caption, className, ...otherProps } = props;
  const {
    mainSrc,
    specSrc,
    width,
    height,
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    src,
    className: imageClassName,
    ...otherImageProps
  } = imageProps;

  const ratio = width / height;
  const paddingTop = (height / width) * 100;

  const [isMainLoaded, setMainLoaded] = React.useState(false);
  const [isSpecLoaded, setSpecLoaded] = React.useState(false);

  const isReady = isMainLoaded && isSpecLoaded;

  useIsomorphicLayoutEffect(() => {
    const mainImage = new window.Image();
    const specImage = new window.Image();

    mainImage.src = mainSrc;
    specImage.src = specSrc;

    mainImage.onload = () => {
      setMainLoaded(true);
    };

    specImage.onload = () => {
      setSpecLoaded(true);
    };
  }, []);

  return (
    <figure className={clx(classes.root, className)} {...otherProps}>
      <div
        className={classes.container}
        style={{ paddingTop: isReady ? `${paddingTop}%` : undefined }}
      >
        {isReady ? (
          <React.Fragment>
            <div className={classes.hoverInfo}>
              <InfoCircleLargeO color="textSecondary" size={14} />
              <Text variant="captionSmall" color="textSecondary">
                برای دیدن مشخصات{" "}
                <span className={classes.hoverInfoDesktop}>هاور کنید</span>
                <span className={classes.hoverInfoMobile}>کلیک کنید</span>
              </Text>
            </div>
            <div className={classes.imageWrapper}>
              <NextImage
                className={clx(classes.mainImage, imageClassName)}
                src={mainSrc}
                width={width}
                height={height}
                layout="responsive"
                {...otherImageProps}
              />
            </div>
            <div className={classes.imageWrapper}>
              <NextImage
                className={clx(classes.specImage, imageClassName)}
                src={specSrc}
                width={width}
                height={height}
                layout="responsive"
                {...otherImageProps}
              />
            </div>
          </React.Fragment>
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
};

Anatomy.displayName = componentName;

export default Anatomy;
