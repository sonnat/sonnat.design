import {
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  Tab,
  TabBar,
  Text,
  TextField
} from "@sonnat/ui";
import { Tune, CloseLarge } from "@sonnat/icons";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import createClass from "classnames";
import * as React from "react";

const componentName = "Demo";

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      breakpoints,
      direction,
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        width: "100%",
        borderRadius: pxToRem(4),
        boxShadow: `0 1px 6px 0 rgba(0, 0, 0, 0.1)`,
        backgroundColor: "rgba(255, 255, 255, 0.88)",
        marginTop: pxToRem(16)
      },
      header: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        height: pxToRem(48),
        borderBottom: `1px solid ${colors.divider}`
      },
      tabs: {
        ...(direction === "rtl"
          ? { paddingRight: pxToRem(32) }
          : { paddingLeft: pxToRem(32) })
      },
      adjustmentButtons: {
        ...(direction === "rtl"
          ? { marginRight: "auto" }
          : { marginLeft: "auto" }),
        display: "flex",
        alignItems: "center",
        width: pxToRem(116),
        transition: "width 360ms ease",
        "&:before": {
          ...(direction === "rtl"
            ? { marginLeft: pxToRem(16) }
            : { marginRight: pxToRem(16) }),
          content: '""',
          height: pxToRem(24),
          width: pxToRem(1),
          alignSelf: "center",
          backgroundColor: colors.divider
        }
      },
      openAdjustmentsButton: {
        "&$disabled > *": {
          color: [colors.text.secondary, "!important"]
        }
      },
      closeAdjustmentsButton: {
        ...(direction === "rtl"
          ? { marginLeft: pxToRem(16), marginRight: "auto" }
          : { marginRight: pxToRem(16), marginLeft: "auto" })
      },
      body: {
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        overflow: "hidden"
      },
      mainContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexShrink: 0,
        padding: pxToRem(32),
        transition: "width 360ms ease"
      },
      sidebar: {
        ...(direction === "rtl" ? { right: 0 } : { left: 0 }),
        width: pxToRem(240),
        padding: pxToRem(16),
        position: "relative",
        flexShrink: 0,
        height: "100%",
        overflow: "auto",
        borderRight: `1px solid ${colors.divider}`,
        "& > $adjustment:first-child": { margin: 0 },
        "& > $adjustment:last-child:after": { content: "none" }
      },
      adjustment: {
        marginTop: pxToRem(16),
        "&:after": {
          content: '""',
          display: "block",
          marginTop: pxToRem(8),
          height: pxToRem(1),
          width: "100%",
          backgroundColor: colors.divider
        }
      },
      utilAdjustment: {
        "&:after": { content: "none" }
      },
      adjustmentTitle: { marginBottom: pxToRem(8) },
      adjustmentField: {},
      switchLabel: { fontSize: pxToRem(12) },
      disabled: {},
      opened: {
        "& $mainContent": {
          width: `calc(100% - ${pxToRem(240)})`
        },
        "& $adjustmentButtons": { width: pxToRem(240) }
      },
      [breakpoints.down("sm")]: {
        adjustmentButtons: { display: "none" },
        tabs: { width: "100%", padding: [0, "!important"] },
        mainContent: {
          width: [`calc(100vw - ${pxToRem(32)})`, "!important"],
          minHeight: pxToRem(185),
          padding: pxToRem(16)
        },
        body: {
          minHeight: pxToRem(300),
          flexDirection: "column",
          maxHeight: "none"
        },
        sidebar: {
          width: "100%",
          borderRight: "none",
          borderTop: `${pxToRem(1)} solid ${colors.divider}`
        }
      }
    };
  },
  { name: componentName }
);

interface Props {
  className?: string;
  DemoComponent: React.ReactNode;
  disabledAdjustments?: string[];
  adjustments?: { bySegment: { [P: string]: any }; allSegments: string[] };
  variants?: { label: string; onActiveCallback: () => void }[];
}

const Demo: React.FC<Props> = React.memo(props => {
  const {
    className,
    adjustments,
    DemoComponent,
    variants = [],
    disabledAdjustments = []
  } = props;

  const localClass = useStyles();

  const [isSidebarOpen, setSidebarOpen] = React.useState(
    adjustments ? true : false
  );

  const createRadioGroup = (segment: any) => {
    const { fields, initial } = segment;

    const defaultField = fields.find((field: any) => field.id === initial);
    const defaultFieldValue = defaultField
      ? defaultField.label.en
      : fields[0].label.en;

    return (
      <RadioGroup defaultValue={defaultFieldValue}>
        {fields.map((field: any) => {
          const isDisabled = disabledAdjustments.includes(field.id);

          return (
            <div
              key={`${field.label.en}/${field.type}`}
              className={localClass.adjustmentField}
            >
              <Radio
                disabled={isDisabled}
                key={`${field.label.en}/${field.type}/${isDisabled}`}
                value={field.label.en}
                inputProps={{ id: field.id }}
                labelProps={{ className: localClass.switchLabel }}
                label={field.label.fa}
                onChange={e => {
                  if (field.toggleCallback)
                    field.toggleCallback(e.target.checked);
                }}
              />
            </div>
          );
        })}
      </RadioGroup>
    );
  };

  const createAdjustmentField = (field: any) => {
    const { id, type, label, toggleCallback, onChangeCallback } = field;
    const isDisabled = disabledAdjustments.includes(id);

    switch (type) {
      case "text":
        return (
          <TextField
            fluid
            inputProps={{ id, "aria-label": label.fa }}
            disabled={isDisabled}
            key={`${label.en}/${type}/${isDisabled}`}
            onChange={e => {
              if (onChangeCallback) onChangeCallback(e);
            }}
            placeholder={field.placeholder.fa}
          />
        );
      case "boolean":
        return (
          <Checkbox
            disabled={isDisabled}
            key={`${label.en}/${type}/${isDisabled}`}
            inputProps={{ id }}
            labelProps={{ className: localClass.switchLabel }}
            label={label.fa}
            onChange={e => {
              if (toggleCallback) toggleCallback(e.target.checked);
            }}
          />
        );
      default:
        return null;
    }
  };

  const createAdjustmentComponents = (
    adjustments: NonNullable<Props["adjustments"]>
  ) => {
    const { allSegments = [], bySegment } = adjustments;

    const components = allSegments.map((segmentName, index) => {
      const segment = bySegment[segmentName];

      if (segment && segment.fields && segment.fields.length) {
        if (segmentName === "utils") {
          return segment.fields.map((field: any) => (
            <React.Fragment key={`${field.label.en}/${field.type}`}>
              <div
                className={createClass(
                  localClass.adjustment,
                  localClass.utilAdjustment
                )}
              >
                <Text
                  rootNode="strong"
                  variant="bodySmall"
                  color="textPrimary"
                  weight="medium"
                  className={localClass.adjustmentTitle}
                >
                  {field.label.fa}
                </Text>
                <div className={localClass.adjustmentField}>
                  {createAdjustmentField(field)}
                </div>
              </div>
            </React.Fragment>
          ));
        } else {
          return (
            <div
              key={`${segmentName}/${index}`}
              className={localClass.adjustment}
            >
              <Text
                rootNode="strong"
                variant="bodySmall"
                color="textPrimary"
                weight="medium"
                className={localClass.adjustmentTitle}
              >
                {segment.label.fa}
              </Text>
              <div className={localClass.adjustmentFields}>
                {segment.type === "radioGroup"
                  ? createRadioGroup(segment)
                  : segment.fields.map((field: any) => (
                      <div
                        key={`${field.label.en}/${field.type}`}
                        className={localClass.adjustmentField}
                      >
                        {createAdjustmentField(field)}
                      </div>
                    ))}
              </div>
            </div>
          );
        }
      }
    });

    return components;
  };

  const sidebarContent = React.useMemo(() => {
    return adjustments ? createAdjustmentComponents(adjustments) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adjustments]);

  return (
    <div
      className={createClass(localClass.root, className, {
        [localClass.opened]: isSidebarOpen
      })}
    >
      <div className={localClass.header}>
        {variants.length > 0 && (
          <div className={localClass.tabs}>
            {/* @ts-ignore */}
            <TabBar defaultActiveTab={0} variant="fluid" size="large">
              {variants.map((variant, index) => {
                return (
                  <Tab
                    onClick={() => {
                      if (variant.onActiveCallback) variant.onActiveCallback();
                    }}
                    key={`${variant.label}/${index}`}
                    label={variant.label}
                  />
                );
              })}
            </TabBar>
          </div>
        )}
        {adjustments && (
          <div className={localClass.adjustmentButtons}>
            <Button
              variant="inlined"
              label="امکانات"
              leadingIcon={<Tune />}
              className={createClass(localClass.openAdjustmentsButton, {
                [localClass.disabled]: isSidebarOpen
              })}
              onClick={() => setSidebarOpen(true)}
              disabled={isSidebarOpen}
            />
            {isSidebarOpen && (
              <Button
                aria-label="close adjustments"
                variant="inlined"
                leadingIcon={<CloseLarge />}
                className={localClass.closeAdjustmentsButton}
                onClick={() => setSidebarOpen(false)}
              />
            )}
          </div>
        )}
      </div>
      <div className={localClass.body}>
        <div className={localClass.mainContent}>{DemoComponent}</div>
        {adjustments && (
          <div className={localClass.sidebar}>{sidebarContent}</div>
        )}
      </div>
    </div>
  );
});

Demo.displayName = componentName;

export default Demo;
