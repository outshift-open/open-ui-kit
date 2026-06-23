const js = require("@eslint/js");
const globals = require("globals");
const importPlugin = require("eslint-plugin-import");
const prettier = require("eslint-config-prettier");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");

const tsRecommended = typescriptEslint.configs["flat/recommended"].map(
  (config) => ({
    ...config,
    files: ["**/*.{ts,tsx}"],
  }),
);

module.exports = [
  {
    linterOptions: {
      reportUnusedDisableDirectives: false,
    },
  },
  {
    ignores: [
      "tsup.config.ts",
      ".eslintrc.cjs",
      "eslint.config.cjs",
      "jest.config.js",
      "scripts/**",
      "dist/**",
      "rollup.config.js",
      "rollup.config.mjs",
    ],
  },
  js.configs.recommended,
  ...tsRecommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      import: importPlugin,
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      ...importPlugin.configs.typescript.settings,
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,
      ...importPlugin.configs.typescript.rules,
      ...prettier.rules,
      "@typescript-eslint/no-duplicate-enum-values": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",
    },
  },
];
