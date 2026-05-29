import * as React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import GlobalStyles from "@mui/material/GlobalStyles";
import MuiInitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { getMetaThemeColor } from "../branding";
import { fontClasses } from "../nextFonts";

export type DocumentProps = {
  canonicalAsServer: string;
  userLanguage: string;
  children?: React.ReactNode;
};

export function Document({
  canonicalAsServer,
  userLanguage,
  children,
}: DocumentProps) {
  return (
    <Html lang={userLanguage} data-mui-color-scheme="light">
      <Head>
        {/*
            manifest.json provides metadata used when your web app is added to the
            homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
          */}
        <link rel="manifest" href="/static/manifest.json" />
        {/* PWA primary color */}
        <meta
          name="theme-color"
          content={getMetaThemeColor("light")}
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content={getMetaThemeColor("dark")}
          media="(prefers-color-scheme: dark)"
        />
        {/* Based on https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs */}
        <link rel="icon" href="/static/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon.png"
        />
        {/* SEO */}
        <link
          rel="canonical"
          href={`https://github.com/outshift-open/open-ui-kit${
            userLanguage === "en" ? "" : `/${userLanguage}`
          }${canonicalAsServer}`}
        />
        <link
          rel="alternate"
          href={`https://github.com/outshift-open/open-ui-kit${canonicalAsServer}`}
          hrefLang="x-default"
        />
        <GlobalStyles
          styles={{
            // First SSR paint
            ".only-light-mode": {
              display: "block",
            },
            ".only-dark-mode": {
              display: "none",
            },
            // Post SSR Hydration
            ".mode-dark .only-light-mode": {
              display: "none",
            },
            ".mode-dark .only-dark-mode": {
              display: "block",
            },
            // TODO migrate to .only-dark-mode to .only-dark-mode-v2
            '[data-mui-color-scheme="light"] .only-dark-mode-v2': {
              display: "none",
            },
            '[data-mui-color-scheme="dark"] .only-light-mode-v2': {
              display: "none",
            },
            ".plan-pro, .plan-premium": {
              display: "inline-block",
              height: "0.9em",
              width: "1em",
              verticalAlign: "middle",
              marginLeft: "0.3em",
              marginBottom: "0.08em",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              flexShrink: 0,
            },
            ".plan-pro": {
              backgroundImage: "url(/static/x/pro.svg)",
            },
            ".plan-premium": {
              backgroundImage: "url(/static/x/premium.svg)",
            },
          }}
        />
      </Head>
      <body className={fontClasses}>
        <MuiInitColorSchemeScript defaultMode="system" />
        {children}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
