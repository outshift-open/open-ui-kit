import "../../packages/open-ui-kit/src/typography.css";

import * as React from "react";
import { type ThemeProviderProps } from "../../packages/open-ui-kit/src/theme-provider/theme-provider";
import { ThemeOptionsContext } from "@mui/internal-core-docs/ThemeContext";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import {
  OpenUiKitTokenCssVars,
  openUiKitDarkDocsTheme,
  openUiKitLightDocsTheme,
} from "./openUiKitDocsTheme";

export { Accordion } from "../../packages/open-ui-kit/src/components/accordion";
export type { AccordionProps } from "../../packages/open-ui-kit/src/components/accordion";
export {
  ActivityTimeline,
  ActivityTimelineStepStatus,
} from "../../packages/open-ui-kit/src/components/activity-timeline";
export type {
  ActivityTimelineProps,
  ActivityTimelineStep,
} from "../../packages/open-ui-kit/src/components/activity-timeline";
export { AnchorLinkMenu } from "../../packages/open-ui-kit/src/components/anchor-link-menu";
export type {
  AnchorLinkMenuItem,
  AnchorLinkMenuProps,
} from "../../packages/open-ui-kit/src/components/anchor-link-menu";
export {
  Avatar,
  AvatarGroup,
} from "../../packages/open-ui-kit/src/components/avatar";
export type {
  AvatarGroupProps,
  AvatarProps,
} from "../../packages/open-ui-kit/src/components/avatar";
export { Backdrop } from "../../packages/open-ui-kit/src/components/backdrop";
export type { BackdropProps } from "../../packages/open-ui-kit/src/components/backdrop";
export { Badge } from "../../packages/open-ui-kit/src/components/badge";
export type {
  BadgeProps,
  BadgeType,
} from "../../packages/open-ui-kit/src/components/badge";
export { Banner } from "../../packages/open-ui-kit/src/components/banner";
export type {
  BannerProps,
  StatusBanner,
} from "../../packages/open-ui-kit/src/components/banner";
export { Breadcrumbs } from "../../packages/open-ui-kit/src/components/breadcrumbs";
export type { BreadcrumbsProps } from "../../packages/open-ui-kit/src/components/breadcrumbs";
export { Button } from "../../packages/open-ui-kit/src/components/button";
export type { ButtonProps } from "../../packages/open-ui-kit/src/components/button";
export { Checkbox } from "../../packages/open-ui-kit/src/components/checkbox";
export type { CheckboxProps } from "../../packages/open-ui-kit/src/components/checkbox";
export { CodeBlock } from "../../packages/open-ui-kit/src/components/code-block";
export type {
  CodeBlockHeaderButton,
  CodeBlockProps,
} from "../../packages/open-ui-kit/src/components/code-block";
export { CopyButton } from "../../packages/open-ui-kit/src/components/copy-button";
export type {
  CopyButtonPosition,
  CopyButtonProps,
  CopyButtonSize,
} from "../../packages/open-ui-kit/src/components/copy-button";
export { EmptyState } from "../../packages/open-ui-kit/src/components/empty-state";
export type { EmptyStateProps } from "../../packages/open-ui-kit/src/components/empty-state";
export {
  FiltersBar,
  FiltersDrawer,
} from "../../packages/open-ui-kit/src/components/filters";
export type {
  AssetsData,
  FilterData,
  FilterOptionData,
  FiltersBarProps,
  FiltersDrawerProps,
} from "../../packages/open-ui-kit/src/components/filters";
export { FloatingButton } from "../../packages/open-ui-kit/src/components/floating-button";
export type {
  FloatingButtonProps,
  FloatingButtonSize,
  FloatingButtonVariant,
} from "../../packages/open-ui-kit/src/components/floating-button";
export {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogSubtitle,
  DialogTitle,
} from "../../packages/open-ui-kit/src/components/dialog";
export type { DialogProps } from "../../packages/open-ui-kit/src/components/dialog";
export { Spinner } from "../../packages/open-ui-kit/src/components/spinner";
export type { SpinnerProps } from "../../packages/open-ui-kit/src/components/spinner";
export {
  GeneralSize,
  IconPosition,
} from "../../packages/open-ui-kit/src/common";
export {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
} from "../../packages/open-ui-kit/src/components/card";
export type {
  CardActionAreaProps,
  CardActionsProps,
  CardContentProps,
  CardHeaderProps,
  CardProps,
} from "../../packages/open-ui-kit/src/components/card";
export { default as CardDescription } from "../../packages/open-ui-kit/src/components/card/components/card-description";
export type { CardDescriptionProps } from "../../packages/open-ui-kit/src/components/card/components/card-description";
export { default as CardSubheader } from "../../packages/open-ui-kit/src/components/card/components/card-subheader";
export type { CardSubheaderProps } from "../../packages/open-ui-kit/src/components/card/components/card-subheader";
export {
  useTheme,
  useThemeMode,
} from "../../packages/open-ui-kit/src/theme-provider/theme-provider";
export { Divider, Stack, Typography } from "@mui/material";

const useClientLayoutEffect =
  typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;

function getStoredDocsMode() {
  if (typeof window === "undefined" || !window.localStorage) {
    return null;
  }

  try {
    return window.localStorage.getItem("mui-mode");
  } catch {
    return null;
  }
}

function getSystemDarkMode() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function isDarkColor(color: string) {
  const match = color.match(/\d+(\.\d+)?/g);

  if (!match || match.length < 3) {
    return false;
  }

  const [red, green, blue] = match.map(Number);
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

  return luminance < 0.35;
}

function getNearestDarkSurface(node: HTMLElement | null) {
  if (typeof window === "undefined" || !node) {
    return false;
  }

  let current: HTMLElement | null = node;

  while (current && current !== document.body) {
    const backgroundColor = window.getComputedStyle(current).backgroundColor;

    if (
      backgroundColor &&
      backgroundColor !== "transparent" &&
      backgroundColor !== "rgba(0, 0, 0, 0)" &&
      isDarkColor(backgroundColor)
    ) {
      return true;
    }

    current = current.parentElement;
  }

  return false;
}

function getDocsDarkMode() {
  if (typeof document === "undefined") {
    return false;
  }

  const storedMode = getStoredDocsMode();

  if (storedMode === "dark") {
    return true;
  }

  if (storedMode === "light") {
    return false;
  }

  if (storedMode === "system") {
    return getSystemDarkMode();
  }

  const root = document.documentElement;

  return (
    root.getAttribute("data-mui-color-scheme") === "dark" ||
    root.classList.contains("mode-dark") ||
    document.body?.classList.contains("mode-dark") ||
    getSystemDarkMode()
  );
}

function useDocsDarkMode(rootRef: React.RefObject<HTMLDivElement>) {
  const [isDarkMode, setIsDarkMode] = React.useState(getDocsDarkMode);
  const themeOptions = React.useContext(ThemeOptionsContext);
  const muiTheme = useMuiTheme();

  useClientLayoutEffect(() => {
    const updateDarkMode = () => {
      setIsDarkMode(
        getDocsDarkMode() || getNearestDarkSurface(rootRef.current),
      );
    };
    const observer = new MutationObserver(updateDarkMode);
    const systemQuery = window.matchMedia?.("(prefers-color-scheme: dark)");

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-mui-color-scheme", "class"],
    });

    if (document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    systemQuery?.addEventListener?.("change", updateDarkMode);
    window.addEventListener("storage", updateDarkMode);
    updateDarkMode();

    return () => {
      observer.disconnect();
      systemQuery?.removeEventListener?.("change", updateDarkMode);
      window.removeEventListener("storage", updateDarkMode);
    };
  }, [rootRef]);

  return (
    muiTheme.palette.mode === "dark" ||
    themeOptions.paletteMode === "dark" ||
    isDarkMode
  );
}

export function ThemeProvider({
  defaultDarkMode: defaultDarkModeProp,
  ...props
}: ThemeProviderProps) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const docsDarkMode = useDocsDarkMode(rootRef);
  const defaultDarkMode = defaultDarkModeProp ?? docsDarkMode;
  const theme = defaultDarkMode
    ? openUiKitDarkDocsTheme
    : openUiKitLightDocsTheme;

  return React.createElement(
    "div",
    { ref: rootRef },
    React.createElement(
      MuiThemeProvider,
      { theme },
      React.createElement(OpenUiKitTokenCssVars),
      React.createElement(CssBaseline),
      props.children,
    ),
  );
}
