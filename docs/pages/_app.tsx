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
  type VersionEntry,
} from "@mui/internal-core-docs/DocsProvider";
import type { NotificationMessage } from "@mui/internal-core-docs/AppLayout";
import findActivePage from "@mui/internal-core-docs/findActivePage";
import { getProductInfoFromUrl } from "@mui/internal-core-docs/utils";
import type { MuiPage } from "@mui/internal-core-docs/MuiPage";
import openUiKitCorePkgJson from "../../packages/open-ui-kit/package.json";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import openUiKitPages from "docs/data/material/pages";
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
const packageDocsUrl = "/open-ui-kit-core/";
const maxVersionOptions = 10;
const fallbackPackageVersion = `v${openUiKitCorePkgJson.version}`;
const fallbackVersionEntries: VersionEntry[] = [
  { version: fallbackPackageVersion, url: packageDocsUrl },
];
let packageMetadataRequest: Promise<NpmPackageMetadata | null> | undefined;

type NpmPackageMetadata = {
  "dist-tags"?: Record<string, string | undefined>;
  versions?: Record<string, unknown>;
};

function formatPackageVersion(version: string) {
  return version.startsWith("v") ? version : `v${version}`;
}

function normalizePackageVersion(version: string) {
  return version.replace(/^v/, "");
}

function isPrereleaseVersion(version: string) {
  return normalizePackageVersion(version).includes("-");
}

function parsePackageVersion(version: string) {
  const [versionCore, prerelease = ""] = normalizePackageVersion(version).split(
    "-",
    2,
  );
  const [major = 0, minor = 0, patch = 0] = versionCore
    .split(".")
    .map((part) => Number.parseInt(part, 10) || 0);

  return { major, minor, patch, prerelease };
}

function comparePackageVersionsDesc(versionA: string, versionB: string) {
  const parsedA = parsePackageVersion(versionA);
  const parsedB = parsePackageVersion(versionB);

  if (parsedA.major !== parsedB.major) {
    return parsedB.major - parsedA.major;
  }
  if (parsedA.minor !== parsedB.minor) {
    return parsedB.minor - parsedA.minor;
  }
  if (parsedA.patch !== parsedB.patch) {
    return parsedB.patch - parsedA.patch;
  }
  if (parsedA.prerelease === parsedB.prerelease) {
    return 0;
  }
  if (!parsedA.prerelease) {
    return -1;
  }
  if (!parsedB.prerelease) {
    return 1;
  }

  return parsedB.prerelease.localeCompare(parsedA.prerelease, undefined, {
    numeric: true,
  });
}

function uniquePackageVersions(versions: Array<string | undefined>) {
  const seen = new Set<string>();

  return versions.filter((version): version is string => {
    if (!version) {
      return false;
    }

    const normalizedVersion = normalizePackageVersion(version);
    if (seen.has(normalizedVersion)) {
      return false;
    }

    seen.add(normalizedVersion);
    return true;
  });
}

async function fetchPackageMetadata() {
  packageMetadataRequest ??= fetch(
    `https://registry.npmjs.org/${encodeURIComponent(packageName)}`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${packageName}: ${response.status}`);
      }
      return response.json() as Promise<NpmPackageMetadata>;
    })
    .catch(() => null);

  return packageMetadataRequest;
}

async function fetchPublishedPackageVersion() {
  const metadata = await fetchPackageMetadata();
  const latestVersion = metadata?.["dist-tags"]?.latest;

  return latestVersion
    ? formatPackageVersion(latestVersion)
    : fallbackPackageVersion;
}

async function getOpenUiKitVersions(): Promise<VersionEntry[]> {
  const metadata = await fetchPackageMetadata();
  const publishedVersions = Object.keys(metadata?.versions ?? {});

  if (publishedVersions.length === 0) {
    return fallbackVersionEntries;
  }

  const distTags = metadata?.["dist-tags"] ?? {};
  const stableVersions = publishedVersions
    .filter((version) => !isPrereleaseVersion(version))
    .sort(comparePackageVersionsDesc)
    .slice(0, 7);
  const prereleaseVersions = publishedVersions
    .filter(isPrereleaseVersion)
    .sort(comparePackageVersionsDesc)
    .slice(0, 3);
  const selectedVersions = uniquePackageVersions([
    distTags.latest,
    distTags.beta,
    ...stableVersions,
    ...prereleaseVersions,
  ]).slice(0, maxVersionOptions);

  return (selectedVersions.length > 0 ? selectedVersions : publishedVersions)
    .sort(comparePackageVersionsDesc)
    .slice(0, maxVersionOptions)
    .map((version) => ({
      version: formatPackageVersion(version),
      url: packageDocsUrl,
    }));
}

async function getOpenUiKitNotifications(): Promise<NotificationMessage[]> {
  const version = await fetchPublishedPackageVersion();

  return [
    {
      id: 1000,
      title: `Open UI Kit Core ${version} is live`,
      text: `The docs now read <code>npm:${packageName}</code> package metadata, so the version selector includes the latest release and recent published versions.`,
      date: "2026-06-15",
    },
    ...staticNotifications,
  ];
}

function toProductVersions(versions: VersionEntry[]) {
  const entries = versions.length > 0 ? versions : fallbackVersionEntries;

  return entries.map((entry, index) => ({
    text: entry.version,
    href: entry.url,
    current: index === 0,
  }));
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
function getOpenUiKitRootIndex(codeVariant: string) {
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

function useProductData(packageVersions: VersionEntry[]) {
  const router = useRouter();
  const productVersions = React.useMemo(
    () => toProductVersions(packageVersions),
    [packageVersions],
  );
  // TODO move productId & productCategoryId resolution to page layout.
  // We should use the productId field from the markdown and fallback to getProductInfoFromUrl()
  // if not present
  const { productId = "open-ui-kit-core", productCategoryId = "core" } =
    getProductInfoFromUrl(router.asPath);

  const productIdentifier = React.useMemo(() => {
    if (productId === "open-ui-kit-core") {
      return {
        metadata: "",
        name: "Open UI Kit Core",
        logo: OpenUiKitLogomarkIcon,
        logoSvg: openUiKitSvgLogoString,
        wordmarkSvg: openUiKitSvgWordmarkString,
        versions: productVersions,
      };
    }

    if (productId == null || (productId as string) === "core") {
      return {
        metadata: "",
        name: "Open UI Kit Core",
        logo: OpenUiKitLogomarkIcon,
        logoSvg: openUiKitSvgLogoString,
        wordmarkSvg: openUiKitSvgWordmarkString,
        versions: productVersions,
      };
    }

    return null;
  }, [productId, productVersions]);

  return React.useMemo(() => {
    const pages: MuiPage[] = openUiKitPages as MuiPage[];

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
  getRootIndex: getOpenUiKitRootIndex,
};

const GA_AD_CONFIG: AdConfig = { GADisplayRatio: 0.1 };

function useDemoDisplayName() {
  return "Open UI Kit";
}

export default function MyApp(
  props: AppProps<{
    userLanguage: string;
    versions: VersionEntry[];
  }>,
) {
  const { Component, pageProps } = props;
  const packageVersions =
    pageProps.versions && pageProps.versions.length > 0
      ? pageProps.versions
      : fallbackVersionEntries;
  const {
    activePage,
    activePageParents,
    pages: pageList,
    productIdentifier,
    productId,
    productCategoryId,
  } = useProductData(packageVersions);
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
  versions: getOpenUiKitVersions,
});

export { reportWebVitals };
