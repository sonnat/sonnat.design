import InputAdornment from "@sonnat/ui/InputAdornment";
import Select, {
  SelectOption,
  SelectOptionGroup,
  SelectProps
} from "@sonnat/ui/Select";
import InteractiveDemo from "components/InteractiveDemo";
import * as React from "react";
import { useAdjustments } from "./utils";

const componentName = "SelectDemo";

interface Props {
  className?: string;
}

const SelectDemo: React.FC<Props> = React.memo(({ className }) => {
  const breakingChanges = React.useRef(0);

  const [size, setSize] = React.useState<SelectProps["size"]>("medium");
  const [isSuffixVisible, setSuffixVisible] = React.useState(false);
  const [rootProps, setRootProps] = React.useState<SelectProps>({
    fluid: true,
    placeholder: "متنی وارد کنید..."
  });

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
              fa: "با متن راهنما",
              en: "Helper text"
            },
            toggleCallback: (currentValue: any) => {
              setRootProps(p => ({
                ...p,
                helperText: currentValue ? "این یک متن راهنما است." : undefined
              }));
            }
          },
          {
            id: "options.bool2",
            type: "boolean",
            label: {
              fa: "با فیلد جستجو",
              en: "Searchable"
            },
            toggleCallback: (currentValue: any) => {
              setRootProps(p => ({
                ...p,
                searchable: currentValue
              }));
            }
          },
          {
            id: "options.bool3",
            type: "boolean",
            label: {
              fa: "با پسوند",
              en: "Suffix"
            },
            toggleCallback: () => setSuffixVisible(v => !v)
          },
          {
            id: "options.bool4",
            type: "boolean",
            label: {
              fa: "چند انتخابی",
              en: "Multiple"
            },
            toggleCallback: (currentValue: any) => {
              currentValue
                ? breakingChanges.current++
                : breakingChanges.current--;
              setRootProps(p => ({
                ...p,
                multiple: currentValue
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
          },
          {
            id: "states.bool2",
            type: "boolean",
            label: {
              fa: "خطا",
              en: "Has error"
            },
            toggleCallback: (currentValue: any) => {
              setRootProps(p => ({ ...p, hasError: currentValue }));
            }
          }
        ]
      }
    },
    []
  );

  React.useEffect(() => {
    if (isSuffixVisible) {
      setRootProps(p => ({
        ...p,
        trailingAdornment: isSuffixVisible && (
          <InputAdornment variant="text">متن پسوند</InputAdornment>
        )
      }));
    } else {
      setRootProps(p => ({
        ...p,
        trailingAdornment: null
      }));
    }
  }, [isSuffixVisible]);

  return (
    <InteractiveDemo
      className={className}
      DemoComponent={
        <Select
          {...rootProps}
          fluid
          preventPageScrolling={false}
          key={breakingChanges.current}
          size={size}
        >
          <SelectOptionGroup title="گروه اول">
            <SelectOption value="1">انتخاب اول</SelectOption>
            <SelectOption value="2">انتخاب دوم</SelectOption>
          </SelectOptionGroup>
          <SelectOption value="3">انتخاب سوم</SelectOption>
          <SelectOption value="4">انتخاب چهارم</SelectOption>
        </Select>
      }
      adjustments={adjustments}
    />
  );
});

SelectDemo.displayName = componentName;

export default SelectDemo;
