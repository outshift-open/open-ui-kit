import * as React from "react";
import { deepmerge } from "@mui/utils";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { ThemeOptionsContext, highDensity } from "../ThemeContext";
import { BrandingCssVarsProvider } from "../branding";
import {
  iocDocsTheme,
  OpenUiKitTokenCssVars,
  openUiKitDarkDocsTheme,
  openUiKitLightDocsTheme,
} from "docs/src/openUiKitDocsTheme";
import { ThemeMode } from "@/theme-provider/theme-provider";
import {
  getStoredOpenUiKitDocsMode,
  openUiKitDocsModeChangeEvent,
} from "docs/src/openUiKitDocsMode";

const defaultTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: "data-mui-color-scheme",
  },
});

export function DemoPageThemeProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const themeOptions = React.useContext(ThemeOptionsContext);
  return (
    <BrandingCssVarsProvider {...themeOptions}>
      {/* The ThemeProvider below generates default CSS variables and attaches them to html for all demos on the page. */}
      {/* This is more performant than generating variables in each demo. */}
      <ThemeProvider theme={defaultTheme} />
      {children}
    </BrandingCssVarsProvider>
  );
}

export function DemoInstanceThemeProvider({
  children,
  runtimeTheme,
}: React.PropsWithChildren<{ runtimeTheme: any }>) {
  const { dense, direction, paletteMode } =
    React.useContext(ThemeOptionsContext);
  const upperTheme = useTheme();
  const [openUiKitMode, setOpenUiKitMode] = React.useState(
    getStoredOpenUiKitDocsMode,
  );
  const upperMode = paletteMode ?? upperTheme?.palette?.mode;
  const muiMode = openUiKitMode === ThemeMode.IoC ? ThemeMode.Dark : upperMode;
  const demoMode =
    openUiKitMode === ThemeMode.IoC
      ? ThemeMode.IoC
      : muiMode === ThemeMode.Dark
        ? ThemeMode.Dark
        : ThemeMode.Light;

  React.useEffect(() => {
    const updateOpenUiKitMode = () => {
      setOpenUiKitMode(getStoredOpenUiKitDocsMode());
    };

    window.addEventListener("storage", updateOpenUiKitMode);
    window.addEventListener(openUiKitDocsModeChangeEvent, updateOpenUiKitMode);
    updateOpenUiKitMode();

    return () => {
      window.removeEventListener("storage", updateOpenUiKitMode);
      window.removeEventListener(
        openUiKitDocsModeChangeEvent,
        updateOpenUiKitMode,
      );
    };
  }, []);

  const theme = React.useMemo(() => {
    const resultTheme = createTheme(
      {
        cssVariables: {
          colorSchemeSelector: "data-mui-color-scheme",
        },
        colorSchemes: {
          light: true,
          dark: true,
        },
        direction: direction as "ltr" | "rtl",
      },
      dense ? highDensity : {},
    );

    if (muiMode && resultTheme.colorSchemes?.[muiMode]) {
      Object.assign(resultTheme, resultTheme.colorSchemes[muiMode]);
    }

    const openUiKitTheme =
      demoMode === ThemeMode.IoC
        ? iocDocsTheme
        : demoMode === ThemeMode.Dark
          ? openUiKitDarkDocsTheme
          : openUiKitLightDocsTheme;
    resultTheme.palette.vars = openUiKitTheme.palette.vars;
    resultTheme.palette.mode = openUiKitTheme.palette.mode;

    if (
      runtimeTheme &&
      Object.prototype.toString.call(runtimeTheme) === "[object Object]"
    ) {
      try {
        return deepmerge(resultTheme, runtimeTheme);
      } catch {
        return resultTheme;
      }
    }
    return resultTheme;
  }, [runtimeTheme, dense, direction, muiMode, demoMode]);

  return (
    /* - use a function to ensure that the upper theme (branding theme) is not spread to the demo theme */
    /* - a function will skip the CSS vars generation logic */
    <ThemeProvider theme={() => theme}>
      <div className={`mode-${demoMode}`} style={{ display: "contents" }}>
        <OpenUiKitTokenCssVars />
        {children}
      </div>
    </ThemeProvider>
  );
}
