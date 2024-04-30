import Column from "@sonnat/ui/Column";
import Row from "@sonnat/ui/Row";
import Skeleton from "@sonnat/ui/Skeleton";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import clx from "classnames";
import { ChildLabel, ChildSchema, getSchema, LeafChild } from "nav-schema";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import Link from "next/link";
import * as React from "react";
import { kebabCase } from "utils/case";
import useIsomorphicLayoutEffect from "utils/useIsomorphicLayoutEffect";

const componentName = "ComponentsOfType";

const useParentStyles = makeStyles(
  theme => ({
    root: { marginBottom: theme.typography.pxToRem(16) },
    column: {},
    card: {}
  }),
  { name: componentName }
);

const useCardStyles = makeStyles(
  theme => ({
    root: {
      border: "1px solid rgba(0, 0, 0, 0.08)",
      overflow: "hidden",
      borderRadius: theme.typography.pxToRem(4),
      marginTop: theme.typography.pxToRem(16),
      "&:hover": {
        "& $caption": {
          color: theme.colors.text.primary
        }
      }
    },
    figure: { margin: 0 },
    image: {
      verticalAlign: "middle",
      backgroundColor: "rgba(0, 0, 0, 0.02)"
    },
    caption: {
      padding: theme.typography.pxToRem(16),
      color: theme.colors.text.secondary,
      transition: "color 360ms ease"
    }
  }),
  { name: "ComponentCard" }
);

interface ParentProps {
  type: "Actions" | "Controlers" | "Display" | "Navigation" | "Rows";
}

interface CardProps {
  title: string;
  className: string;
  imageProps: NextImageProps & { width: number; height: number };
}

const ComponentsSchema = getSchema().byChild.Components as ChildSchema;

const Card: React.FC<CardProps> = props => {
  const classes = useCardStyles();

  const { className, title, imageProps, ...otherProps } = props;
  const {
    src,
    width,
    height,
    className: imageClassName,
    ...otherImageProps
  } = imageProps;

  const ratio = width / height;
  const [isImageLoaded, setImageLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    const img = new window.Image();
    img.onload = () => void setImageLoaded(true);
    img.onerror = () => void setHasError(true);
    img.src = src;
  }, [src]);

  return !hasError ? (
    <article className={clx(classes.root, className)} {...otherProps}>
      <figure className={classes.figure}>
        {isImageLoaded ? (
          <NextImage
            {...otherImageProps}
            className={clx(classes.image, imageClassName)}
            src={src}
            width={width}
            height={height}
            unoptimized
            alt={title}
            layout="responsive"
          />
        ) : (
          <Skeleton
            className={imageClassName}
            width="100%"
            variant="rectangular"
            ratio={ratio}
          />
        )}
        <figcaption className={classes.caption}>
          <Text variant="subtitleSmall">{title}</Text>
        </figcaption>
      </figure>
    </article>
  ) : null;
};

Card.displayName = "ComponentCard";

const ComponentsOfType: React.FC<ParentProps> = props => {
  const classes = useParentStyles();

  const { type, ...otherProps } = props;

  const childSchema = ComponentsSchema.byChild[type] as ChildSchema;

  const isDivarSpecific =
    childSchema.isDivarSpecific != undefined &&
    childSchema.isDivarSpecific === true;

  return (
    <Row className={classes.root} {...otherProps}>
      {childSchema.children.map((child: ChildLabel) => {
        const key = child.en;
        const leafSchema = childSchema.byChild[key] as LeafChild;
        const shouldExclude = !!leafSchema.excludeFromComponentsPage;
        const pascalCaseLabel = leafSchema.label.en;
        const kebabCaseLabel = kebabCase(pascalCaseLabel);
        const href = leafSchema.href;
        const relativePath = isDivarSpecific ? "divar/" : "";
        const imgSrc = `/static/media/representative/${relativePath}${kebabCaseLabel}.svg`;

        return !shouldExclude ? (
          <Column
            className={classes.column}
            key={kebabCaseLabel}
            all="12"
            sm="4"
          >
            <Link href={href} passHref>
              <a title={leafSchema.label.fa}>
                <Card
                  className={classes.card}
                  imageProps={{ src: imgSrc, width: 276, height: 184 }}
                  title={leafSchema.label.fa}
                />
              </a>
            </Link>
          </Column>
        ) : null;
      })}
    </Row>
  );
};

ComponentsOfType.displayName = componentName;

export default ComponentsOfType;
