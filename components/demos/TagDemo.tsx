import Tag, { TagProps } from "@sonnat/ui/Tag";
import Heart from "@sonnat/icons/Heart";
import InteractiveDemo from "components/InteractiveDemo";
import * as React from "react";
import { useAdjustments } from "./utils";

const componentName = "TagDemo";

interface Props {
  className?: string;
}

const TagDemo: React.FC<Props> = React.memo(({ className }) => {
  const [variant, setVariant] = React.useState<TagProps["variant"]>("filled");
  const [rootProps, setRootProps] = React.useState<TagProps>({
    label: "عنوان برچسب"
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
              fa: "به همراه آیکون ابتدایی",
              en: "Leading icon"
            },
            toggleCallback: (currentValue: any) => {
              setRootProps(p => ({
                ...p,
                icon: currentValue ? <Heart /> : undefined
              }));
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
      DemoComponent={<Tag variant={variant} {...rootProps} />}
      variants={variants}
      adjustments={adjustments}
    />
  );
});

TagDemo.displayName = componentName;

export default TagDemo;
