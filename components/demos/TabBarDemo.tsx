import * as React from "react";
import TabBar, { Tab, TabBarProps, TabProps } from "@sonnat/ui/TabBar";
import Heart from "@sonnat/icons/Heart";
import InteractiveDemo from "components/InteractiveDemo";
import { useAdjustments } from "./utils";

const componentName = "TabBarDemo";

const initialTabsLabel = "عنوان تب";

interface Props {
  className?: string;
}

const TabBarDemo: React.FC<Props> = React.memo(function TabBarDemo({
  className
}) {
  const breakingChange = React.useRef(0);

  const [variant, setVariant] = React.useState<TabBarProps["variant"]>("fluid");
  const [size, setSize] = React.useState<TabBarProps["size"]>("medium");
  const [isScrollable, setScrollable] = React.useState(false);
  const [isIconTab, setIconTab] = React.useState(false);
  const [blackList, setBlackList] = React.useState<string[]>([]);

  const [rootProps] = React.useState<Partial<TabBarProps>>({
    defaultActiveTab: 0
  });

  const [childProps, setChildProps] = React.useState<Partial<TabProps>>({
    label: initialTabsLabel
  });

  const variants = [
    {
      label: "با عرض کامل",
      onActiveCallback: () => {
        breakingChange.current++;
        setVariant("fluid");
        setScrollable(false);
      }
    },
    {
      label: "اسکرول‌شدنی",
      onActiveCallback: () => {
        breakingChange.current++;
        setVariant("scrollable");
        setScrollable(true);
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
              breakingChange.current++;
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
              breakingChange.current++;
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
              breakingChange.current++;
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
              fa: "با آیکون ابتدایی",
              en: "Leading icon"
            },
            toggleCallback: (currentValue: any) => {
              currentValue
                ? breakingChange.current++
                : breakingChange.current--;
              setChildProps(p => ({
                ...p,
                icon: currentValue ? <Heart /> : undefined
              }));
            }
          },
          {
            id: "options.bool2",
            type: "boolean",
            label: {
              fa: "فقط آیکون",
              en: "Icon-only"
            },
            toggleCallback: (currentValue: any) => {
              currentValue
                ? breakingChange.current++
                : breakingChange.current--;
              setIconTab(currentValue);
              setChildProps(p => ({
                ...p,
                label: currentValue ? undefined : initialTabsLabel,
                icon: currentValue ? <Heart /> : undefined
              }));
            }
          }
        ]
      }
    },
    []
  );

  React.useEffect(() => {
    if (isIconTab) {
      setBlackList(s => [...s, "options.bool1"]);
    } else {
      setBlackList(s => s.filter(i => !["options.bool1"].includes(i)));
    }
  }, [isIconTab]);

  return (
    <InteractiveDemo
      className={className}
      disabledAdjustments={blackList}
      DemoComponent={
        isScrollable ? (
          <TabBar
            {...rootProps}
            key={`tabbar/${breakingChange.current}`}
            size={size}
            variant={variant}
          >
            <Tab {...childProps} />
            <Tab {...childProps} />
            <Tab {...childProps} />
            <Tab {...childProps} />
            <Tab {...childProps} />
            <Tab {...childProps} />
          </TabBar>
        ) : (
          <TabBar
            {...rootProps}
            key={`tabbar/${breakingChange.current}`}
            size={size}
            variant={variant}
          >
            <Tab {...childProps} />
            <Tab {...childProps} />
          </TabBar>
        )
      }
      variants={variants}
      adjustments={adjustments}
    />
  );
});

TabBarDemo.displayName = componentName;

export default TabBarDemo;
