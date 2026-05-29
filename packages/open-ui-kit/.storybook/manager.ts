import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";
import "./css/manager.css";

const openUiKitLogo =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'%3E%3Cpath d='M20 2 35.588 11v18L20 38 4.412 29V11L20 2Z' fill='%23187ADC'/%3E%3Cpath d='M20 8.5 29.959 14.25v11.5L20 31.5l-9.959-5.75v-11.5L20 8.5Z' fill='%2300142B'/%3E%3Cpath d='M20 12.5 26.495 16.25v7.5L20 27.5l-6.495-3.75v-7.5L20 12.5Z' fill='%23FBAF45'/%3E%3C/svg%3E";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: " ",
    brandUrl: "/",
    brandImage: openUiKitLogo,
    colorPrimary: "#0051af",
    colorSecondary: "#187adc",
    appBg: "#eff3fc",
    appContentBg: "#fbfcfe",
    appPreviewBg: "#eff3fc",
    appHoverBg: "rgba(0, 81, 175, 0.08)",
    appBorderColor: "#dae3f8",
    appBorderRadius: 8,
    barBg: "#fbfcfe",
    barTextColor: "#3c4551",
    barHoverColor: "#0051af",
    barSelectedColor: "#0051af",
    buttonBg: "#fbfcfe",
    buttonBorder: "#9bcaff",
    textColor: "#1a1f27",
    textMutedColor: "#59616b",
    textInverseColor: "#ffffff",
    inputBg: "#ffffff",
    inputBorder: "#dae3f8",
    inputTextColor: "#1a1f27",
    inputBorderRadius: 8,
    fontBase:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontCode: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
  }),
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    title: { hidden: false },
  },
});

console.log(
  process.env.CI_COMMIT_SHORT_SHA &&
    process.env.CI_COMMIT_SHORT_SHA !== "undefined"
    ? `The currently deployed commit is: ${process.env.CI_COMMIT_SHORT_SHA}`
    : "You are running locally 🚀",
);
