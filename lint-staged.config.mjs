const quote = (file) => `'${file.replace(/'/g, "'\\''")}'`;
const yarn = "node .yarn/releases/yarn-4.15.0.cjs";

const withFiles = (command, files) =>
  `${command} ${files.map(quote).join(" ")}`;

const eslintOpenUiKit = (files) =>
  withFiles(
    `${yarn} workspace @open-ui-kit/core exec eslint --ignore-pattern '!.storybook' --ignore-pattern '!.storybook/**/*' --max-warnings=0 --fix`,
    files,
  );

const checkLicenseHeaders = () =>
  `${yarn} workspace @open-ui-kit/scripts license:check`;

const prettier = (files) =>
  withFiles("prettier --write --ignore-unknown", files);

export default {
  "{packages/**/*,playground/**/*,scripts/**/*}.{js,jsx,ts,tsx,css,html}":
    checkLicenseHeaders,
  "packages/open-ui-kit/{src,.storybook}/**/*.{ts,tsx}": eslintOpenUiKit,
  "packages/open-ui-kit/*.{ts,tsx}": eslintOpenUiKit,
  "**/*.{js,jsx,ts,tsx,mjs,cjs,md,mdx,json,yml,yaml,css,html}": prettier,
};
