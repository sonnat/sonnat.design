import InputSlider, { InputSliderProps } from "@sonnat/ui/InputSlider";
import InteractiveDemo from "components/InteractiveDemo";
import * as React from "react";
import { useAdjustments } from "./utils";

const componentName = "InputSliderDemo";

interface Props {
  className?: string;
}

const InputSliderDemo: React.FC<Props> = React.memo(({ className }) => {
  const [variant, setVariant] =
    React.useState<InputSliderProps["variant"]>("continuous");
  const [rootProps, setRootProps] = React.useState<object>({});

  const breakingChanges = React.useRef(0);

  const variants = [
    {
      label: "پیوسته",
      onActiveCallback: () => {
        breakingChanges.current++;
        setVariant("continuous");
        setRootProps(p => ({ ...p, step: undefined }));
      }
    },
    {
      label: "گسسته",
      onActiveCallback: () => {
        breakingChanges.current++;
        setVariant("discrete");
        setRootProps(p => ({ ...p, step: 10 }));
      }
    }
  ];

  const adjustments = useAdjustments(
    {
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
              fa: "دوجهته",
              en: "Bidirectional"
            },
            toggleCallback: (currentValue: any) => {
              currentValue
                ? breakingChanges.current++
                : breakingChanges.current--;
              setRootProps(p => ({
                ...p,
                defaultValue: currentValue ? [0, 100] : undefined
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

  return (
    <InteractiveDemo
      className={className}
      DemoComponent={
        <InputSlider
          key={breakingChanges.current}
          min={0}
          max={100}
          defaultValue={100}
          variant={variant}
          {...rootProps}
        />
      }
      variants={variants}
      adjustments={adjustments}
    />
  );
});

InputSliderDemo.displayName = componentName;

export default InputSliderDemo;
