import "docs/src/modules/components/bootstrap";
// --- Post bootstrap -----
import * as React from "react";
import { AdConfig } from "@mui/internal-core-docs/Ad";
import { SandboxConfig } from "@mui/internal-core-docs/DemoContext";
import {
  DocsApp,
  createGetInitialProps,
  printConsoleBanner,
  reportWebVitals,
} from "@mui/internal-core-docs/DocsApp";
import {
  DEFAULT_DOCS_CONFIG,
  type DocsConfig,
  VersionEntry,
} from "@mui/internal-core-docs/DocsProvider";
import type { NotificationMessage } from "@mui/internal-core-docs/AppLayout";
import findActivePage from "@mui/internal-core-docs/findActivePage";
import { getProductInfoFromUrl } from "@mui/internal-core-docs/utils";
import type { Translations } from "@mui/internal-core-docs/i18n";
import type { MuiPage } from "@mui/internal-core-docs/MuiPage";
import openUiKitCorePkgJson from "../../packages/open-ui-kit/package.json";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import materialPages from "docs/data/material/pages";
import staticNotifications from "../notifications.json";
import {
  OpenUiKitLogomarkIcon,
  openUiKitSvgLogoString,
  openUiKitSvgWordmarkString,
} from "docs/src/branding/OpenUiKitLogo";

import "./global.css";

export { fontClasses } from "@mui/internal-core-docs/nextFonts";

printConsoleBanner();

const packageName = "@open-ui-kit/core";
const fallbackPackageVersion = `v${openUiKitCorePkgJson.version}`;
let packageVersionRequest: Promise<string> | undefined;

function formatPackageVersion(version: string) {
  return version.startsWith("v") ? version : `v${version}`;
}

async function fetchPublishedPackageVersion() {
  packageVersionRequest ??= fetch(
    `https://registry.npmjs.org/${encodeURIComponent(packageName)}/latest`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${packageName}: ${response.status}`);
      }
      return response.json() as Promise<{ version?: string }>;
    })
    .then((metadata) =>
      metadata.version
        ? formatPackageVersion(metadata.version)
        : fallbackPackageVersion,
    )
    .catch(() => fallbackPackageVersion);

  return packageVersionRequest;
}

async function getOpenUiKitVersions(): Promise<VersionEntry[]> {
  const version = await fetchPublishedPackageVersion();
  return [{ version, url: "/open-ui-kit-core/" }];
}

async function getOpenUiKitNotifications(): Promise<NotificationMessage[]> {
  const version = await fetchPublishedPackageVersion();

  return [
    {
      id: 1000,
      title: `Open UI Kit Core ${version}`,
      text: `The docs are reading the latest published version from <code>npm:${packageName}</code>. The current npm version is <strong>${version}</strong>.`,
      date: "2026-05-27",
    },
    ...staticNotifications,
  ];
}

const docsConfig: DocsConfig = {
  ...DEFAULT_DOCS_CONFIG,
  /**
   * The shape of these JSON files needs to be backward compatible.
   * They are used in past versions of the docs, and we don't want to break them by changing the structure.
   * If any change is needed, it should be made in a way that doesn't break the existing structure, or we should
   * update older domains to be compatible with the new structure.
   */
  fetchNotifications: getOpenUiKitNotifications,
  fetchVersions: getOpenUiKitVersions,
  hostUrl: process.env.PULL_REQUEST_ID
    ? `https://deploy-preview-${process.env.PULL_REQUEST_ID}--${process.env.NETLIFY_SITE_NAME}.netlify.app`
    : "https://github.com/outshift-open/open-ui-kit",
};

/**
 * Generates root index template for Open UI Kit demos.
 */
function getMaterialRootIndex(codeVariant: string) {
  const type = codeVariant === "TS" ? "!" : "";
  return `import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo';

ReactDOM.createRoot(document.querySelector("#root")${type}).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  </React.StrictMode>
);`;
}

function useProductData(currentPackageVersion: string) {
  const router = useRouter();
  // TODO move productId & productCategoryId resolution to page layout.
  // We should use the productId field from the markdown and fallback to getProductInfoFromUrl()
  // if not present
  const normalizedPath = router.asPath.replace(
    /^\/open-ui-kit-core(?=\/|$)/,
    "/material-ui",
  );
  const { productId = "material-ui", productCategoryId = "core" } =
    getProductInfoFromUrl(normalizedPath);

  const productIdentifier = React.useMemo(() => {
    if (productId === "material-ui") {
      return {
        metadata: "",
        name: "Open UI Kit Core",
        logo: OpenUiKitLogomarkIcon,
        logoSvg: openUiKitSvgLogoString,
        wordmarkSvg: openUiKitSvgWordmarkString,
        versions: [{ text: currentPackageVersion, current: true }],
      };
    }

    if (productId == null || (productId as string) === "core") {
      return {
        metadata: "",
        name: "Open UI Kit Core",
        logo: OpenUiKitLogomarkIcon,
        logoSvg: openUiKitSvgLogoString,
        wordmarkSvg: openUiKitSvgWordmarkString,
        versions: [{ text: currentPackageVersion, current: true }],
      };
    }

    return null;
  }, [currentPackageVersion, productId]);

  return React.useMemo(() => {
    const pages: MuiPage[] = materialPages as MuiPage[];

    const { activePage, activePageParents } = findActivePage(
      pages,
      router.pathname,
    );

    return {
      activePage,
      activePageParents,
      pages,
      productIdentifier: productIdentifier!,
      productId,
      productCategoryId,
    };
  }, [productId, productCategoryId, productIdentifier, router.pathname]);
}

const CSB_CONFIG: SandboxConfig = {
  primaryPackage: "@mui/material",
  fallbackDependency: { name: "@mui/material", version: "latest" },
  getRootIndex: getMaterialRootIndex,
};

const GA_AD_CONFIG: AdConfig = { GADisplayRatio: 0.1 };

function useDemoDisplayName() {
  return "Open UI Kit";
}

export default function MyApp(
  props: AppProps<{
    userLanguage: string;
    translations: Translations;
    versions: VersionEntry[];
  }>,
) {
  const { Component, pageProps } = props;
  const currentPackageVersion =
    pageProps.versions?.[0]?.version ?? fallbackPackageVersion;
  const {
    activePage,
    activePageParents,
    pages: pageList,
    productIdentifier,
    productId,
    productCategoryId,
  } = useProductData(currentPackageVersion);
  const demoDisplayName = useDemoDisplayName();

  return (
    <DocsApp
      {...props}
      Component={Component}
      pageProps={pageProps}
      serviceWorkerPath="/sw.js"
      adConfig={GA_AD_CONFIG}
      activePage={activePage}
      activePageParents={activePageParents}
      pageList={pageList}
      productIdentifier={productIdentifier}
      productId={productId}
      productCategoryId={productCategoryId}
      demoDisplayName={demoDisplayName}
      csbConfig={CSB_CONFIG}
      docsConfig={docsConfig}
    />
  );
}

MyApp.getInitialProps = createGetInitialProps({
  translationsContext: require.context(
    "../translations",
    false,
    /\.\/translations.*\.json$/,
  ),
  versions: getOpenUiKitVersions,
});

export { reportWebVitals };
