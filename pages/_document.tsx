import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext
} from "next/document";
import ServerStyleSheets from "@sonnat/ui/styles/ServerStyleSheets";
import * as React from "react";
import PostCss from "postcss";
import AutoPrefixer from "autoprefixer";
import CleanCss from "clean-css";

const prefixer = PostCss([AutoPrefixer]);
const cleaner = new CleanCss();

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets();

    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    const css = sheets.toString();
    const sheetId = sheets.getStyleElementId();

    const minifiedCSS = await (async rawCSS => {
      // It might be undefined, e.g. after an error.
      if (rawCSS) {
        return cleaner.minify(
          (await prefixer.process(rawCSS, { from: undefined })).css
        ).styles;
      } else return rawCSS;
    })(css);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        <style key={sheetId} id={sheetId}>
          {minifiedCSS}
        </style>
      ]
    };
  }

  render() {
    return (
      <Html lang="fa-IR">
        <Head>
          <link
            rel="preload"
            href="/_next/static/media/IRANSansWeb.cdb118d6a351d596a2d78c7fe986de6b.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/_next/static/media/IRANSansWeb_Medium.9f338149d9f52fe4faab7a0e9120f639.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta property="robots" content="Index, Follow" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#EA475B" />
          <meta name="google" content="notranslate" />
          <meta
            name="google-site-verification"
            content="99QvbXC-CYGcStyrKln2P-fqS7M15kgNNUZOv0OQz3U"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="og:image" content="/meta-image-compressed.jpg" />
          <meta name="twitter:image:alt" content="Sonnat Design System" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ea475b" />
          <meta name="msapplication-TileColor" content="#2e294e" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body dir="rtl">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
