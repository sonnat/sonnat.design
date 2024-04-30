import Heart from "@sonnat/icons/Heart";
import ActionChip, { ActionChipProps } from "@sonnat/ui/ActionChip";
import ChoiceChip from "@sonnat/ui/ChoiceChip";
import RemovableChip from "@sonnat/ui/RemovableChip";
import InteractiveDemo from "components/InteractiveDemo";
import * as React from "react";
import { useAdjustments } from "./utils";

const componentName = "ChipDemo";

interface Props {
  className?: string;
}

const ChipDemo: React.FC<Props> = React.memo(({ className }) => {
  const [variant, setVariant] =
    React.useState<ActionChipProps["variant"]>("filled");
  const [size, setSize] = React.useState<ActionChipProps["size"]>("medium");
  const [chipType, setChipType] = React.useState("action");

  const [rootProps, setRootProps] = React.useState<ActionChipProps>({
    label: "عنوان چیپس"
  });

  const variants = [
    {
      label: "توپر",
      onActiveCallback: () => {
        setVariant("filled");
      }
    },
    {
      label: "توخالی",
      onActiveCallback: () => {
        setVariant("outlined");
      }
    }
  ];

  const adjustments = useAdjustments(
    {
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
      interactions: {
        initial: "interaction1",
        type: "radioGroup",
        label: {
          fa: "نوع تعامل",
          en: "Interaction type"
        },
        fields: [
          {
            id: "interaction1",
            type: "radio",
            label: {
              fa: "کنش‌پذیر",
              en: "Action chip"
            },
            toggleCallback: (currentValue: any) => {
              setChipType(s => (currentValue ? "action" : s));
            }
          },
          {
            id: "interaction2",
            type: "radio",
            label: {
              fa: "انتخاب‌شونده",
              en: "Choice chip"
            },
            toggleCallback: (currentValue: any) => {
              setChipType(s => (currentValue ? "choice" : s));
            }
          },
          {
            id: "interaction3",
            type: "radio",
            label: {
              fa: "حذف‌شونده",
              en: "Removable chip"
            },
            toggleCallback: (currentValue: any) => {
              setChipType(s => (currentValue ? "removable" : s));
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
              fa: "با آیکون ابتدایی",
              en: "Leading icon"
            },
            toggleCallback: (currentValue: any) => {
              setRootProps(p => ({
                ...p,
                leadingIcon: currentValue ? <Heart /> : undefined
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
              setRootProps(p => ({ ...p, rounded: currentValue }));
            }
          }
        ]
      }
    },
    []
  );

  return (
    <InteractiveDemo
      className={className}
      DemoComponent={
        chipType === "action" ? (
          <ActionChip {...rootProps} variant={variant} size={size} />
        ) : chipType === "choice" ? (
          <ChoiceChip {...rootProps} variant={variant} size={size} />
        ) : chipType === "removable" ? (
          <RemovableChip {...rootProps} variant={variant} size={size} />
        ) : undefined
      }
      variants={variants}
      adjustments={adjustments}
    />
  );
});

ChipDemo.displayName = componentName;

export default ChipDemo;
