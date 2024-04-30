import ChevronLeft from "@sonnat/icons/ChevronLeft";
import Column from "@sonnat/ui/Column";
import Row from "@sonnat/ui/Row";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import clx from "classnames";
import Image from "components/Image";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import { defaultKeywordsMetaContent, siteFullAddress } from "sharedVars";
import {
  setCanonicalMeta,
  setDescriptionMeta,
  setKeywordsMeta,
  setTitleMeta
} from "utils";

const pageName = "LandingPage";

const useCoreTopicStyles = makeStyles(
  theme => {
    const {
      breakpoints,
      colors,
      direction,
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      },
      title: { marginBottom: pxToRem(16) },
      description: {},
      link: {
        marginTop: pxToRem(16),
        color: colors.primary.origin,
        display: "inline-flex",
        alignItems: "center",
        "&:hover": {
          // @ts-ignore
          color: colors.primaryActive
        }
      },
      linkText: {},
      linkIcon: {
        ...(direction === "rtl"
          ? { marginRight: pxToRem(4) }
          : { marginLeft: pxToRem(4) })
      },
      [breakpoints.down("sm")]: {
        link: {
          ...(direction === "rtl"
            ? { marginRight: "auto" }
            : { marginLeft: "auto" })
        }
      }
    };
  },
  { name: "CoreTopic" }
);

const usePageStyles = makeStyles(
  theme => {
    const {
      breakpoints,
      typography: { pxToRem, variants }
    } = theme;

    return {
      root: {},
      title: {},
      subtitle: {
        marginTop: pxToRem(8),
        marginBottom: pxToRem(32)
      },
      heroImagery: {
        marginBottom: pxToRem(32)
      },
      coreTopic: {},
      divider: {
        marginTop: pxToRem(64),
        marginBottom: pxToRem(48)
      },
      changeLogRow: {},
      changeLogRowTitle: { marginBottom: pxToRem(16) },
      changeLogRowDescription: {},
      changeLogs: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: pxToRem(16)
      },
      changeLogsButton: { marginTop: pxToRem(32) },
      [breakpoints.down("sm")]: {
        title: { textAlign: "center", fontSize: variants.h4.fontSize },
        subtitle: { textAlign: "center" },
        heroImagery: { marginBottom: pxToRem(-16) },
        coreTopic: { marginTop: pxToRem(32) }
      }
    };
  },
  { name: pageName, index: 1 }
);

interface CoreTopicProps {
  title: string;
  className: string;
  description: string;
  linkHref: string;
  linkText: string;
}

const CoreTopic: React.FC<CoreTopicProps> = React.memo(props => {
  const { title, description, className, linkHref, linkText } = props;

  const classes = useCoreTopicStyles();

  return (
    <article className={clx(classes.root, className)}>
      <Text
        variant="subtitle"
        rootNode="h2"
        color="textPrimary"
        className={classes.title}
      >
        {title}
      </Text>
      <Text
        variant="body"
        rootNode="p"
        color="textSecondary"
        className={classes.description}
      >
        {description}
      </Text>
      <Link href={linkHref} passHref>
        <Text
          variant="body"
          rootNode="a"
          title={title}
          className={classes.link}
        >
          <span className={classes.linkText}>{linkText}</span>
          <ChevronLeft size={20} className={classes.linkIcon} />
        </Text>
      </Link>
    </article>
  );
});

CoreTopic.displayName = "CoreTopic";

const LandingPage = () => {
  const classes = usePageStyles();

  return (
    <React.Fragment>
      <Head>
        {setTitleMeta("دیزاین سیستم سنّت")}
        {setCanonicalMeta(siteFullAddress)}
        {setDescriptionMeta(
          "دیزاین سیستم سنّت - مجموعه‌ای از ابزارها و کامپوننت‌ها برای ساختن تجربهٔ دیجیتالی سازگار، پایدار و دسترس‌پذیر"
        )}
        {setKeywordsMeta(defaultKeywordsMetaContent)}
      </Head>
      <Text
        variant="h3"
        rootNode="h1"
        color="textPrimary"
        className={classes.title}
      >
        دیزاین سیستم سنّت
      </Text>
      <Text
        variant="body"
        rootNode="h2"
        color="textSecondary"
        className={classes.subtitle}
      >
        مجموعه‌ای از ابزارها و کامپوننت‌ها برای ساختن تجربهٔ دیجیتالی سازگار،
        پایدار و دسترس‌پذیر
      </Text>
      <Image
        illustration
        className={classes.heroImagery}
        imageProps={{
          src: "/static/media/hero-illustration.svg",
          alt: "Sonnat Illustration",
          unoptimized: true,
          width: 300,
          height: 117
        }}
      />
      <Row className={classes.coreTopics}>
        <Column all="12" xs="5">
          <CoreTopic
            linkHref="/introduction"
            linkText="بیشتر بخوانید"
            title="آشنایی با سنّت"
            description="توضیح فرایند شکل‌گیری و رشد سنّت از ایده‌پردازی تا پیاده‌سازی، تبیین ارزش‌ها و دستاوردهای آن در فرایند طراحی محصول و خلق تجربهٔ کاربر."
            className={classes.coreTopic}
          />
        </Column>
        <Column all="12" xs={{ size: "5", offset: "1" }}>
          <CoreTopic
            linkHref="/components"
            linkText="همهٔ کامپوننت‌ها"
            title="کامپوننت‌ها"
            description="معرفی کامپوننت‌های سنّت، بلوک‌های تعاملی برای ساخت رابط کاربر، کاربرد، آناتومی و رفتار آن‌ها."
            className={classes.coreTopic}
          />
        </Column>
      </Row>
    </React.Fragment>
  );
};

LandingPage.displayName = pageName;

export default LandingPage;
