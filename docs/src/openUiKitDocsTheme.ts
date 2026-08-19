import { GlobalStyles } from "@mui/material";
import { createTheme, type Theme } from "@mui/material/styles";
import * as React from "react";
import { darkTheme } from "../../packages/open-ui-kit/src/theme/dark/dark-theme";
import { iocTheme } from "../../packages/open-ui-kit/src/theme/ioc/ioc-theme";
import { lightTheme } from "../../packages/open-ui-kit/src/theme/light/light-theme";
import { midnightTheme } from "../../packages/open-ui-kit/src/theme/midnight/midnight-theme";

type OpenUiKitTokenVars = Record<string, string>;

const lightTokenVars = lightTheme.palette.vars as OpenUiKitTokenVars;
const darkTokenVars = darkTheme.palette.vars as OpenUiKitTokenVars;
const iocTokenVars = iocTheme.palette.vars as OpenUiKitTokenVars;
const midnightTokenVars = midnightTheme.palette.vars as OpenUiKitTokenVars;

function toCssVarName(token: string) {
  return `--oui-${token}`;
}

function toCssVarReferences(tokens: OpenUiKitTokenVars) {
  return Object.keys(tokens).reduce<OpenUiKitTokenVars>((result, token) => {
    result[token] = `var(${toCssVarName(token)})`;
    return result;
  }, {});
}

function toCssVarDeclarations(tokens: OpenUiKitTokenVars) {
  return Object.entries(tokens).reduce<Record<string, string>>(
    (result, [token, value]) => {
      result[toCssVarName(token)] = value;
      return result;
    },
    {},
  );
}

const tokenVarReferences = toCssVarReferences(lightTokenVars);

export const openUiKitTokenCssVarStyles = {
  ":root, [data-mui-color-scheme='light'], .mode-light":
    toCssVarDeclarations(lightTokenVars),
  "[data-mui-color-scheme='dark'], .mode-dark":
    toCssVarDeclarations(darkTokenVars),
  ".mode-ioc": toCssVarDeclarations(iocTokenVars),
  ".mode-midnight": toCssVarDeclarations(midnightTokenVars),
};

function createOpenUiKitDocsTheme(baseTheme: Theme) {
  const theme = createTheme(baseTheme);

  theme.palette.vars = tokenVarReferences;

  return theme;
}

export const openUiKitLightDocsTheme = createOpenUiKitDocsTheme(lightTheme);
export const openUiKitDarkDocsTheme = createOpenUiKitDocsTheme(darkTheme);
export const iocDocsTheme = createOpenUiKitDocsTheme(iocTheme);
export const midnightDocsTheme = createOpenUiKitDocsTheme(midnightTheme);

export function OpenUiKitTokenCssVars() {
  return React.createElement(GlobalStyles, {
    styles: openUiKitTokenCssVarStyles,
  });
}
