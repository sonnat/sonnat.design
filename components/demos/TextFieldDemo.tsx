import { Eye, Heart } from "@sonnat/icons";
import InputAdornment from "@sonnat/ui/InputAdornment";
import TextField, { TextFieldProps } from "@sonnat/ui/TextField";
import InteractiveDemo from "components/InteractiveDemo";
import * as React from "react";
import { useAdjustments } from "./utils";

const componentName = "TextFieldDemo";

interface Props {
  className?: string;
}

const TextFieldDemo: React.FC<Props> = React.memo(({ className }) => {
  const [size, setSize] = React.useState<TextFieldProps["size"]>("medium");
  const [isSuffixVisible, setSuffixVisible] = React.useState(false);
  const [isLeadingVisible, setLeadingVisible] = React.useState(false);
  const [isTrailingVisible, setTrailingVisible] = React.useState(false);
  const [rootProps, setRootProps] = React.useState<TextFieldProps>({
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
              fa: "با پسوند",
              en: "Suffix"
            },
            toggleCallback: () => setSuffixVisible(v => !v)
          },
          {
            id: "options.bool3",
            type: "boolean",
            label: {
              fa: "با آیکون ابتدایی",
              en: "Leading icon"
            },
            toggleCallback: () => setLeadingVisible(v => !v)
          },
          {
            id: "options.bool4",
            type: "boolean",
            label: {
              fa: "با آیکون انتهایی",
              en: "Trailing icon"
            },
            toggleCallback: () => setTrailingVisible(v => !v)
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
    if (isLeadingVisible) {
      setRootProps(p => ({
        ...p,
        leadingAdornment: (
          <InputAdornment variant="icon">
            <Heart />
          </InputAdornment>
        )
      }));
    } else {
      setRootProps(p => ({
        ...p,
        leadingAdornment: null
      }));
    }
  }, [isLeadingVisible]);

  React.useEffect(() => {
    if (isTrailingVisible || isSuffixVisible) {
      setRootProps(p => ({
        ...p,
        trailingAdornment: (
          <InputAdornment>
            {isSuffixVisible && (
              <InputAdornment variant="text">متن پسوند</InputAdornment>
            )}
            {isTrailingVisible && (
              <InputAdornment variant="icon">
                <Eye />
              </InputAdornment>
            )}
          </InputAdornment>
        )
      }));
    } else {
      setRootProps(p => ({
        ...p,
        trailingAdornment: null
      }));
    }
  }, [isTrailingVisible, isSuffixVisible]);

  return (
    <InteractiveDemo
      className={className}
      DemoComponent={<TextField {...rootProps} size={size} />}
      adjustments={adjustments}
    />
  );
});

TextFieldDemo.displayName = componentName;

export default TextFieldDemo;
