import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname, resolve } from "path";
import TSConfigPaths from "vite-tsconfig-paths";
import VitePluginImp from "vite-plugin-imp";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "./stories",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("storybook-dark-mode"),
    "storycap",
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
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
