// @ts-check
import * as path from "path";
import * as url from "url";
import * as fs from "fs";
import * as semver from "semver";
// @ts-ignore
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { createRequire } from "module";
import { NextConfig } from "next";
import { findPages } from "./src/modules/utils/find";

const currentDirectory = url.fileURLToPath(new URL(".", import.meta.url));
const require = createRequire(import.meta.url);

const withDocsInfra = require("./nextConfigDocsInfra");

const workspaceRoot = path.join(currentDirectory, "../");
const docsRoot = currentDirectory;
const openUiKitRoot = path.resolve(workspaceRoot, "packages/open-ui-kit/src");

const pkgContent = fs.readFileSync(
  path.resolve(workspaceRoot, "package.json"),
  "utf8",
);
const pkg = JSON.parse(pkgContent);

export default withDocsInfra({
  webpack: (config: NextConfig, options): NextConfig => {
    const plugins = config.plugins.slice();

    if (process.env.DOCS_STATS_ENABLED && !options.isServer) {
      plugins.push(
        // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          generateStatsFile: true,
          analyzerPort: options.isServer ? 8888 : 8889,
          reportTitle: `${options.isServer ? "server" : "client"} docs bundle`,
          // Will be available at `.next/${statsFilename}`
          statsFilename: `stats-${options.isServer ? "server" : "client"}.json`,
        }),
      );
    }

    // If a module is an webpack "external" the webpack aliases configured are not used.
    // Next.js includes node_modules in webpack externals, some of those have dependencies
    // on the aliases we defined above.
    // So we need tell webpack to not consider those packages as externals.
    if (
      options.isServer &&
      // Next.js executes this twice on the server with React 18 (once per runtime).
      // We only care about Node runtime at this point.
      (options.nextRuntime === undefined || options.nextRuntime === "nodejs")
    ) {
      const externals = config.externals.slice(0, -1);
      const nextExternals = config.externals.at(-1);

      config.externals = [
        // @ts-ignore
        (ctx, callback) => {
          const { request } = ctx;
          const hasDependencyOnRepoPackages = ["material-ui-popup-state"].some(
            (dep) => request.startsWith(dep),
          );

          if (hasDependencyOnRepoPackages) {
            return callback(null);
          }
          return nextExternals(ctx, callback);
        },
        ...externals,
      ];
    }

    // @ts-ignore
    config.module.rules.forEach((rule) => {
      rule.resourceQuery = { not: [/raw/] };
    });

    return {
      ...config,
      plugins,
      resolve: {
        ...config.resolve,
        // resolve .tsx first
        alias: {
          ...config.resolve.alias,

          "@mui/internal-core-docs": path.resolve(
            docsRoot,
            "vendor/mui-internal-core-docs/src",
          ),
          "@mui/internal-markdown": path.resolve(
            docsRoot,
            "vendor/mui-internal-markdown",
          ),
          "@open-ui-kit/core$": path.resolve(
            docsRoot,
            "src/open-ui-kit-core-docs.ts",
          ),
          "@open-ui-kit/core/typography.css": path.resolve(
            openUiKitRoot,
            "typography.css",
          ),
          "@/": `${openUiKitRoot}/`,
        },
        extensions: [
          ".mjs",
          ".tsx",
          // @ts-ignore
          ...config.resolve.extensions.filter(
            (extension: string) => extension !== ".tsx" && extension !== ".mjs",
          ),
        ],
      },
      module: {
        ...config.module,
        rules: config.module.rules.concat([
          {
            test: /\.md$/,
            oneOf: [
              {
                resourceQuery: /muiMarkdown/,
                use: [
                  options.defaultLoaders.babel,
                  {
                    loader: path.resolve(
                      docsRoot,
                      "vendor/mui-internal-markdown/loader.mjs",
                    ),
                    options: {
                      workspaceRoot,
                      ignoreLanguagePages: () => false,
                      languagesInProgress: [],
                      packages: [],
                      env: {
                        SOURCE_CODE_REPO: options.config.env.SOURCE_CODE_REPO,
                        LIB_VERSION: options.config.env.LIB_VERSION,
                      },
                    },
                  },
                ],
              },
              {
                // used in some /getting-started/templates
                type: "asset/source",
              },
            ],
          },
          // required to transpile ../packages/
          {
            test: /\.(js|mjs|tsx|ts)$/,
            resourceQuery: { not: [/raw/] },
            include: [workspaceRoot],
            exclude: /(node_modules|mui-icons-material)/,
            use: options.defaultLoaders.babel,
          },
          {
            resourceQuery: /raw/,
            type: "asset/source",
          },
        ]),
      },
    };
  },
  env: {
    // docs-infra
    LIB_VERSION: pkg.version,
    SEARCH_INDEX: `open-ui-kit-v${semver.major(pkg.version)}`,
    SOURCE_CODE_REPO: "https://github.com/outshift-open/open-ui-kit",
    SOURCE_GITHUB_BRANCH: "main",
    GITHUB_TEMPLATE_DOCS_FEEDBACK: "4.docs-feedback.yml",
    // Open UI Kit related
    GITHUB_AUTH: process.env.GITHUB_AUTH,
    MUI_CHAT_API_BASE_URL: "",
    MUI_CHAT_SCOPES: "",
  },
  transpilePackages: [],
  distDir: "export",
  // Next.js provides a `defaultPathMap` argument, we could simplify the logic.
  // However, we don't in order to prevent any regression in the `findPages()` method.
  // @ts-ignore
  exportPathMap: () => {
    const pages = findPages();
    const map = {};

    // @ts-ignore
    function traverse(pages2) {
      // @ts-ignore
      pages2.forEach((page) => {
        // The experiments pages are only meant for experiments, they shouldn't leak to production.
        if (
          (page.pathname.startsWith("/experiments/") ||
            page.pathname === "/experiments") &&
          process.env.DEPLOY_ENV === "production"
        ) {
          return;
        }
        if (!page.children) {
          // map api-docs to api
          // i: /api-docs/* > /api/* (old structure)
          // ii: /*/api-docs/* > /*/api/* (for new structure)
          // @ts-ignore
          map[
            page.pathname.replace(/^(\/[^/]+)?\/api-docs\/(.*)/, "$1/api/$2")
          ] = {
            page: page.pathname,
          };
          return;
        }

        traverse(page.children);
      });
    }

    traverse(pages);

    return map;
  },
  // Used to signal we run pnpm build
  ...(process.env.NODE_ENV === "production"
    ? {
        output: "export",
      }
    : {
        // rewrites has no effect when run `next export` for production
        rewrites: async () => {
          return [
            // Make sure to include the trailing slash if `trailingSlash` option is set
            { source: "/api/:rest*/", destination: "/api-docs/:rest*/" },
            {
              source: `/static/x/:rest*`,
              destination: "http://0.0.0.0:3001/static/x/:rest*",
            },
          ];
        },
        redirects: async () => {
          return [
            {
              source: "/base-ui/",
              destination: "https://base-ui.com",
              permanent: true,
            },
            {
              source: "/material-ui/:path*",
              destination: "/open-ui-kit-core/:path*",
              permanent: false,
            },
            {
              source: "/docs/:path*",
              destination: "/open-ui-kit-core/:path*",
              permanent: false,
            },
          ];
        },
      }),
} satisfies NextConfig);
