import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import type { Classes } from "@sonnat/ui/typings";
import usePreviousValue from "@sonnat/ui/utils/usePreviousValue";
import createClassName from "classnames";
import ActiveLink from "components/ActiveLink";
import { Content, InnerLink, NavItem, Trigger } from "components/Collapsable";
import { diff } from "deep-diff";
import * as React from "react";

export type ChildLabel = { en: string; fa: string };

export interface LeafChild {
  label: ChildLabel;
  href: string;
  excludeFromComponentsPage?: boolean;
}

export interface ChildSchema {
  label: ChildLabel;
  isDivarSpecific?: boolean;
  byChild: {
    [P: string]: ChildSchema | LeafChild;
  };
  children: ChildLabel[];
}

export interface Schema {
  byChild: {
    [P: string]: ChildSchema | LeafChild;
  };
  children: ChildLabel[];
}

const schema: Schema = {
  byChild: {
    Components: {
      label: { en: "Components", fa: "کامپوننت‌ها" },
      byChild: {
        Actions: {
          label: { en: "Actions", fa: "کنش‌گرها" },
          byChild: {
            Button: {
              label: { en: "Button", fa: "دکمه" },
              href: "/components/Button"
            }
          },
          children: [{ en: "Button", fa: "دکمه" }]
        },
        Controlers: {
          label: { en: "Controlers", fa: "کنترل‌کننده‌ها" },
          byChild: {
            InputSlider: {
              label: { en: "InputSlider", fa: "اسلایدر محدوده" },
              href: "/components/InputSlider"
            },
            SwitchControls: {
              label: { en: "SwitchControls", fa: "کنترل‌های انتخاب" },
              href: "/components/SwitchControls"
            },
            Select: {
              label: { en: "Select", fa: "فیلد انتخابی" },
              href: "/components/Select"
            },
            InputStepper: {
              label: { en: "InputStepper", fa: "فیلد پله‌ای" },
              href: "/components/InputStepper"
            },
            TextField: {
              label: { en: "TextField", fa: "فیلد متنی" },
              href: "/components/TextField"
            }
          },
          children: [
            { en: "InputSlider", fa: "اسلایدر محدوده" },
            { en: "SwitchControls", fa: "کنترل‌های انتخاب" },
            { en: "Select", fa: "فیلد انتخابی" },
            { en: "InputStepper", fa: "فیلد پله‌ای" },
            { en: "TextField", fa: "فیلد متنی" }
          ]
        },
        Display: {
          label: { en: "Display", fa: "نمایش‌دهنده‌ها" },
          byChild: {
            Tag: {
              label: { en: "Tag", fa: "برچسب" },
              href: "/components/Tag"
            },
            Chip: {
              label: { en: "Chip", fa: "چیپس" },
              href: "/components/Chip"
            },
            Divider: {
              label: { en: "Divider", fa: "جداکننده" },
              href: "/components/Divider"
            },
            Backdrop: {
              label: { en: "Backdrop", fa: "پوشاننده" },
              href: "/components/Backdrop"
            },
            Tooltip: {
              label: { en: "Tooltip", fa: "راهنمای ابزار" },
              href: "/components/Tooltip"
            },
            Progress: {
              label: { en: "Progress", fa: "نشانگر پیشرفت" },
              href: "/components/Progress"
            },
            Badge: {
              label: { en: "Badge", fa: "نشان و نشانگر" },
              href: "/components/Badge"
            }
          },
          children: [
            { en: "Tag", fa: "برچسب" },
            { en: "Chip", fa: "چیپس" },
            { en: "Divider", fa: "جداکننده" },
            { en: "Backdrop", fa: "پوشاننده" },
            { en: "Tooltip", fa: "راهنمای ابزار" },
            { en: "Progress", fa: "نشانگر پیشرفت" },
            { en: "Badge", fa: "نشان و نشانگر" }
          ]
        },
        Navigation: {
          label: { en: "Navigation", fa: "راهبری" },
          byChild: {
            Breadcrumb: {
              label: { en: "Breadcrumb", fa: "بردکرام" },
              href: "/components/Breadcrumb"
            },
            TabBar: {
              label: { en: "TabBar", fa: "نوار تب" },
              href: "/components/TabBar"
            }
          },
          children: [
            { en: "Breadcrumb", fa: "بردکرام" },
            { en: "TabBar", fa: "نوار تب" }
          ]
        },
        Rows: {
          label: { en: "Rows", fa: "ردیف‌ها" },
          isDivarSpecific: true,
          byChild: {
            "Introduction to Rows": {
              excludeFromComponentsPage: true,
              label: { en: "Introduction to Rows", fa: "آشنایی با ردیف‌ها" },
              href: "/components/divar/rows-introduction"
            },
            FeatureRow: {
              label: { en: "FeatureRow", fa: "ردیف ویژگی" },
              href: "/components/divar/FeatureRow"
            },
            AccordionRow: {
              label: { en: "AccordionRow", fa: "ردیف آکاردئون" },
              href: "/components/divar/AccordionRow"
            },
            RateRow: {
              label: { en: "RateRow", fa: "ردیف ارزیابی" },
              href: "/components/divar/RateRow"
            },
            ScoreRow: {
              label: { en: "ScoreRow", fa: "ردیف امتیاز" },
              href: "/components/divar/ScoreRow"
            },
            SelectorRow: {
              label: { en: "SelectorRow", fa: "ردیف انتخابی" },
              href: "/components/divar/SelectorRow"
            },
            PriceEstimationRow: {
              label: { en: "PriceEstimationRow", fa: "ردیف تخمین قیمت" },
              href: "/components/divar/PriceEstimationRow"
            },
            PriceChangeRow: {
              label: { en: "PriceChangeRow", fa: "ردیف تغییرات قیمت" },
              href: "/components/divar/PriceChangeRow"
            },
            InfoRow: {
              label: { en: "InfoRow", fa: "ردیف داده" },
              href: "/components/divar/InfoRow"
            },
            EvaluationRow: {
              label: { en: "EvaluationRow", fa: "ردیف سنجش" },
              href: "/components/divar/EvaluationRow"
            },
            ControlRow: {
              label: { en: "ControlRow", fa: "ردیف کنترل" },
              href: "/components/divar/ControlRow"
            },
            TitleRow: {
              label: { en: "TitleRow", fa: "ردیف عنوان" },
              href: "/components/divar/TitleRow"
            }
          },
          children: [
            { en: "Introduction to Rows", fa: "آشنایی با ردیف‌ها" },
            { en: "FeatureRow", fa: "ردیف ویژگی" },
            { en: "AccordionRow", fa: "ردیف آکاردئون" },
            { en: "RateRow", fa: "ردیف ارزیابی" },
            { en: "ScoreRow", fa: "ردیف امتیاز" },
            { en: "SelectorRow", fa: "ردیف انتخابی" },
            { en: "PriceEstimationRow", fa: "ردیف تخمین قیمت" },
            { en: "PriceChangeRow", fa: "ردیف تغییرات قیمت" },
            { en: "InfoRow", fa: "ردیف داده" },
            { en: "EvaluationRow", fa: "ردیف سنجش" },
            { en: "ControlRow", fa: "ردیف کنترل" },
            { en: "TitleRow", fa: "ردیف عنوان" }
          ]
        }
      },
      children: [
        { en: "Actions", fa: "کنش‌گرها" },
        { en: "Controlers", fa: "کنترل‌کننده‌ها" },
        { en: "Display", fa: "نمایش‌دهنده‌ها" },
        { en: "Navigation", fa: "راهبری" },
        { en: "Rows", fa: "ردیف‌ها" }
      ]
    },
    Introduction: {
      label: { en: "Introduction", fa: "آشنایی با سنّت" },
      href: "/introduction"
    },
    Foundation: {
      label: { en: "Foundation", fa: "بنیان سنّت" },
      byChild: {
        Typography: {
          label: { en: "Typography", fa: "تایپوگرافی" },
          href: "/foundation/typography"
        },
        Layout: {
          label: { en: "Layout", fa: "چیدمان" },
          byChild: {
            "Understanding layout and spacings": {
              label: {
                en: "Understanding layout and spacings",
                fa: "درک چیدمان و فاصله‌گذاری"
              },
              href: "/foundation/layout/understanding-layout-and-spacings"
            },
            "Grid and breakpoints": {
              label: {
                en: "Grid and breakpoints",
                fa: "گرید و نقاط‌شکست"
              },
              href: "/foundation/layout/grid-and-breakpoints"
            }
          },
          children: [
            {
              en: "Understanding layout and spacings",
              fa: "درک چیدمان و فاصله‌گذاری"
            },
            {
              en: "Grid and breakpoints",
              fa: "گرید و نقاط‌شکست"
            }
          ]
        },
        Icon: {
          label: { en: "Icon", fa: "آیکون" },
          href: "/foundation/icon"
        }
      },
      children: [
        { en: "Typography", fa: "تایپوگرافی" },
        { en: "Layout", fa: "چیدمان" },
        { en: "Icon", fa: "آیکون" }
      ]
    }
  },
  children: [
    { en: "Introduction", fa: "آشنایی با سنّت" },
    { en: "Foundation", fa: "بنیان سنّت" },
    { en: "Components", fa: "کامپوننت‌ها" }
  ]
};

export const getSchema = (): Readonly<Schema> => {
  return Object.freeze(schema);
};

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      typography: { pxToRem, fontWeight }
    } = theme;

    return {
      root: {
        height: `calc(100% - ${pxToRem(225)})`,
        paddingRight: pxToRem(32),
        paddingLeft: pxToRem(32),
        paddingBottom: pxToRem(16),
        paddingTop: pxToRem(16),
        overflowX: "hidden",
        overflowY: "auto"
      },
      navigationList: {
        position: "relative",
        margin: 0,
        padding: 0,
        listStyle: "none",
        "& $navigationList": {
          paddingRight: pxToRem(32),
          "& $navigationList": {
            paddingRight: pxToRem(16),
            "&:before": {
              right: pxToRem(16),
              position: "absolute",
              top: pxToRem(8),
              bottom: pxToRem(8),
              content: '""',
              backgroundColor: colors.divider,
              width: pxToRem(1)
            }
          }
        }
      },
      navigationItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        "& $navigationItem": {
          position: "relative",
          "& $navigationItem": {
            flexDirection: "row",
            alignItems: "center",
            "& > $navigationItemLink": {
              height: pxToRem(32),
              "&:before": {
                content: '""',
                position: "absolute",
                right: 0,
                backgroundColor: colors.transparent,
                width: pxToRem(1),
                height: pxToRem(24),
                transition: "background-color 360ms ease"
              }
            },
            "& > $navigationItemLink$active:before": {
              backgroundColor: colors.primary.origin
            }
          }
        }
      },
      navigationItemLink: {
        paddingRight: pxToRem(8),
        position: "relative",
        height: pxToRem(40),
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        color: colors.text.secondary,
        transition: "color 360ms ease, font-weight 360ms ease",
        "&$active": {
          color: colors.primary.origin,
          fontWeight: fontWeight.medium
        },
        "&:not($active):hover": {
          color: colors.text.primary
        }
      },
      active: {}
    };
  },
  { name: "Nav" }
);

// @ts-ignore
const schemaToJSX = (
  schema: Schema | ChildSchema,
  classes: Classes<
    | "root"
    | "navigationList"
    | "navigationItem"
    | "navigationItemLink"
    | "active"
  >,
  depth: number = 0
) => {
  let jsx: (React.ReactNode | null)[] = [];

  if (schema.children && schema.children.length > 0) {
    jsx = schema.children.map((child, index) => {
      const childSchema = schema.byChild[child.en];
      const key = `${child}/${index}`;

      if (!childSchema) return null;

      const isLeaf =
        !(childSchema as unknown as ChildSchema).children ||
        (childSchema as unknown as ChildSchema).children.length === 0;

      if (isLeaf) {
        if (depth === 0) {
          return (
            <li key={key} className={classes.navigationItem}>
              <ActiveLink
                href={(childSchema as unknown as LeafChild).href}
                activeClassName={classes.active}
                passHref
              >
                <Text
                  title={childSchema.label.fa}
                  rootNode="a"
                  variant="bodySmall"
                  className={classes.navigationItemLink}
                >
                  {childSchema.label.fa}
                </Text>
              </ActiveLink>
            </li>
          );
        } else {
          return (
            <li key={key} className={classes.navigationItem}>
              <InnerLink
                href={(childSchema as unknown as LeafChild).href}
                activeClassName={classes.active}
                passHref
              >
                <Text
                  title={childSchema.label.fa}
                  rootNode="a"
                  variant={depth === 1 ? "bodySmall" : "caption"}
                  className={classes.navigationItemLink}
                >
                  {childSchema.label.fa}
                </Text>
              </InnerLink>
            </li>
          );
        }
      } else {
        const isDivarSpecific = (childSchema as unknown as ChildSchema)
          .isDivarSpecific;

        return (
          <li key={key} className={classes.navigationItem}>
            <NavItem
              trigger={
                <Trigger
                  title={childSchema.label.fa}
                  isDivarSpecific={isDivarSpecific}
                  className={classes.navigationItemLink}
                />
              }
              content={
                <Content>
                  <ul className={classes.navigationList}>
                    {schemaToJSX(
                      childSchema as ChildSchema,
                      classes,
                      depth + 1
                    )}
                  </ul>
                </Content>
              }
            />
          </li>
        );
      }
    });
  }

  return jsx;
};

export const useNavJsx = (className?: string) => {
  const classes = useStyles();

  const children = React.useRef<React.ReactNode[]>();
  const changeId = React.useRef("");

  const prevClasses = usePreviousValue(classes);

  const classesChanged = diff(classes, prevClasses) != null;
  const idChanged = classes.root !== changeId.current;

  if (classesChanged && idChanged) {
    changeId.current = classes.root;
    children.current = schemaToJSX(getSchema(), classes);
  }

  return (
    <nav className={createClassName(classes.root, className)}>
      <ul className={classes.navigationList}>{children.current}</ul>
    </nav>
  );
};
