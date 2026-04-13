import type { StorybookConfig } from "@storybook/react-vite";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import TSConfigPaths from "vite-tsconfig-paths";
import VitePluginImp from "vite-plugin-imp";

/**
 * Storybook addon paths must be the package root. Resolving `pkg/package.json` breaks when the
 * package uses "exports" and does not expose `./package.json` (e.g. storycap).
 */
function getAbsolutePath(packageName: string): string {
  const entry = require.resolve(packageName);
  let dir = dirname(entry);
  while (true) {
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
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("storycap"),
    getAbsolutePath("@storybook/addon-docs"),
  ],

  framework: "@storybook/react-vite",

  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      // Speeds up Storybook build time
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // Makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
  },

  viteFinal: async (config) => {
    config.base = "./";
    config.plugins = [
      ...(config.plugins || []),
      TSConfigPaths({
        projects: [resolve(dirname(__dirname), "tsconfig.json")],
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
  ],
};
export default config;
