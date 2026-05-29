// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import type { StorybookConfig } from "@storybook/react-vite";
import type { PropItem } from "react-docgen-typescript";
import type { UserConfig } from "vite";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import TSConfigPaths from "vite-tsconfig-paths";
import VitePluginImp from "vite-plugin-imp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

/**
 * Storybook + Vite: `paths` only map `@/*` and `storybook/components/*` (see root tsconfig.json).
 * Other `storybook/...` imports resolve via the `storybook` package (`moduleResolution: "bundler"` + `exports`).
 */
const storybookTsconfigPath = fileURLToPath(
  new URL("../tsconfig.storybook.json", import.meta.url),
);

/**
 * Storybook addon paths must be the package root. Resolving `pkg/package.json` breaks when the
 * package uses "exports" and does not expose `./package.json`.
 */
function getAbsolutePath(packageName: string): string {
  const entry = require.resolve(packageName);
  let dir = dirname(entry);
  // Walk up until package.json "name" matches or filesystem root (no constant condition: breaks below).
  for (;;) {
    const pkgJsonPath = join(dir, "package.json");
    if (existsSync(pkgJsonPath)) {
      try {
        const { name } = JSON.parse(readFileSync(pkgJsonPath, "utf8")) as {
          name?: string;
        };
        if (name === packageName) {
          return dir;
        }
      } catch {
        // ignore unreadable package.json
      }
    }
    const parent = dirname(dir);
    if (parent === dir) {
      break;
    }
    dir = parent;
  }
  throw new Error(
    `Could not resolve install directory for package "${packageName}" (from ${entry})`,
  );
}

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "./stories",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-vitest"),
    // Bare package name: Storybook resolves `join(spec, "manager"|"preview")`. An absolute
    // directory from getAbsolutePath() becomes `.../storycap/manager`, which bypasses "exports"
    // and does not exist on disk. The specifier `@prantlf/storycap/manager` resolves correctly.
    "@prantlf/storycap",
  ],

  framework: getAbsolutePath("@storybook/react-vite"),
  features: {
    sidebarOnboardingChecklist: false,
  },
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      // Must include `.storybook` so react-docgen-typescript does not skip files there (tsconfigPath
      // cannot be combined with inline compilerOptions — those live in tsconfig.storybook.json).
      tsconfigPath: storybookTsconfigPath,
      // Makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // Makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: (prop: PropItem) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
  },

  viteFinal: async (config: UserConfig) => {
    config.base = "./";
    config.plugins = [
      ...(config.plugins || []),
      TSConfigPaths({
        projects: [storybookTsconfigPath],
      }),
      VitePluginImp({
        libList: [
          {
            libName: "antd",
            style: (name: string) => `antd/es/${name}/style`,
          },
        ],
      }),
    ];
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": resolve(__dirname, "../src"),
      },
    };
    return config;
  },

  staticDirs: [
    { from: "./fonts", to: "/fonts" },
    { from: "./assets", to: "/assets" },
    { from: "./assets", to: "/" },
  ],
};
export default config;
