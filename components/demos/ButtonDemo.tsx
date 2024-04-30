import Button, { ButtonProps } from "@sonnat/ui/Button";
import { Heart, ChevronDown } from "@sonnat/icons";
import InteractiveDemo from "components/InteractiveDemo";
import * as React from "react";
import { useAdjustments } from "./utils";

const componentName = "ButtonDemo";

const initialLabel = "عنوان دکمه";

interface Props {
  className?: string;
}

const ButtonDemo: React.FC<Props> = React.memo(({ className }) => {
  const [variant, setVariant] =
    React.useState<ButtonProps["variant"]>("filled");
  const [size, setSize] = React.useState<ButtonProps["size"]>("medium");

  const [isIconButton, setIconButton] = React.useState(false);
  const [blackList, setBlackList] = React.useState<string[]>([]);

  const [rootProps, setRootProps] = React.useState<object>({
    label: initialLabel
  });

  const [isFilledButton, setFilledButton] = React.useState(
    variant === "filled"
  );

  const variants = [
    {
      label: "توپر",
      onActiveCallback: () => {
        setFilledButton(true);
        setVariant("filled");
      }
    },
    {
      label: "توخالی",
      onActiveCallback: () => {
        setRootProps(p => ({ ...p, raised: false }));
        setFilledButton(false);
        setVariant("outlined");
      }
    },
    {
      label: "متنی",
      onActiveCallback: () => {
        setRootProps(p => ({ ...p, raised: false }));
        setFilledButton(false);
        setVariant("inlined");
      }
    }
  ];

  const adjustments = useAdjustments(
    {
      utils: {
        fields: [
          {
            id: "utils.text1",
            type: "text",
            placeholder: {
              fa: "متن دل‌خواه دکمه",
              en: "Enter your desired text"
            },
            label: {
              fa: "متن دکمه",
              en: "Button text"
            },
            onChangeCallback: (e: React.ChangeEvent<HTMLInputElement>) => {
              const newLabel = e.target.value || initialLabel;

              setRootProps(p => ({
                ...p,
                label: newLabel
              }));
            }
          }
        ]
      },
      sizes: {
        initial: "medium",
        type: "radioGroup",
        label: {
          fa: "سایز",
          en: "Size"
        },
        fields: [
          {
            id: "large",
            type: "radio",
            label: {
              fa: "بزرگ",
              en: "Large"
            },
            toggleCallback: (currentValue: any) => {
              if (currentValue) setSize("large");
            }
          },
          {
            id: "medium",
            type: "radio",
            label: {
              fa: "متوسط",
              en: "Medium"
            },
            toggleCallback: (currentValue: any) => {
              if (currentValue) setSize("medium");
            }
          },
          {
            id: "small",
            type: "radio",
            label: {
              fa: "کوچک",
              en: "Small"
            },
            toggleCallback: (currentValue: any) => {
              if (currentValue) setSize("small");
            }
          }
        ]
      },
      options: {
        label: {
          fa: "گزینه‌ها",
          en: "Options"
        },
        fields: [
          {
            id: "options.bool1",
            type: "boolean",
            label: {
              fa: "رنگ برند",
              en: "Branding color"
            },
            toggleCallback: (currentValue: any) => {
              setRootProps(p => ({
                ...p,
                color: currentValue ? "primary" : undefined
              }));
            }
          },
          {
            id: "options.bool2",
            type: "boolean",
            label: {
              fa: "دکمه‌آیکون",
              en: "IconButton"
            },
            toggleCallback: (currentValue: any) => {
              setIconButton(currentValue);
              setRootProps(p => ({
                ...p,
                leadingIcon: currentValue ? <Heart /> : undefined,
                label: currentValue ? undefined : initialLabel,
                trailingIcon: undefined
              }));
            }
          },
          {
            id: "options.bool3",
            type: "boolean",
            label: {
              fa: "با آیکون ابتدایی",
              en: "Leading icon"
            },
            toggleCallback: (currentValue: any) => {
              setRootProps(p => ({
                ...p,
                leadingIcon: currentValue ? <Heart /> : undefined
              }));
            }
          },
          {
            id: "options.bool4",
            type: "boolean",
            label: {
              fa: "با آیکون انتهایی",
              en: "Trailing icon"
            },
            toggleCallback: (currentValue: any) => {
              setRootProps(p => ({
                ...p,
                trailingIcon: currentValue ? <ChevronDown /> : undefined
              }));
            }
          }
        ]
      },
      styles: {
        label: {
          fa: "استایل‌ها",
          en: "Styles"
        },
        fields: [
          {
            id: "styles.bool1",
            type: "boolean",
            label: {
              fa: "گوشه‌گرد",
              en: "Rounded"
            },
            toggleCallback: (currentValue: any) => {
              setRootProps(p => ({
                ...p,
                rounded: currentValue
              }));
            }
          },
          {
            id: "styles.bool2",
            type: "boolean",
            label: {
              fa: "سایه‌دار",
              en: "Raised"
            },
            toggleCallback: (currentValue: any) => {
              setRootProps(p => ({
                ...p,
                raised: currentValue
              }));
            }
          }
        ]
      },
      states: {
        label: {
          fa: "وضعیت‌ها",
          en: "States"
        },
        fields: [
          {
            id: "states.bool1",
            type: "boolean",
            label: {
              fa: "غیرفعال",
              en: "Disabled"
            },
            toggleCallback: (currentValue: any) => {
              setRootProps(p => ({ ...p, disabled: currentValue }));
            }
          }
        ]
      }
    },
    []
  );

  React.useEffect(() => {
    if (isIconButton) {
      setBlackList(s => [
        ...s,
        ...["options.bool3", "options.bool4", "utils.text1"]
      ]);
    } else {
      setBlackList(s =>
        s.filter(
          i => !["options.bool3", "options.bool4", "utils.text1"].includes(i)
        )
      );
    }
  }, [isIconButton]);

  React.useEffect(() => {
    if (isIconButton) {
      setRootProps(p => ({
        ...p,
        "aria-label": initialLabel
      }));
    } else {
      setRootProps(p => ({
        ...p,
        "aria-label": undefined
      }));
    }
  }, [isIconButton]);

  React.useEffect(() => {
    if (!isFilledButton) {
      setBlackList(s => [...s, "styles.bool2"]);
      setRootProps(p => ({
        ...p,
        raised: false
      }));
    } else {
      setBlackList(s => s.filter(i => i !== "styles.bool2"));
    }
  }, [isFilledButton]);

  return (
    <InteractiveDemo
      disabledAdjustments={blackList}
      className={className}
      DemoComponent={<Button {...rootProps} variant={variant} size={size} />}
      variants={variants}
      adjustments={adjustments}
    />
  );
});

ButtonDemo.displayName = componentName;

export default ButtonDemo;
