/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  DrawerProps as MuiDrawerProps,
  SxProps,
  Theme,
} from "@mui/material";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import type { Severity } from "@/common";

export interface SideDrawerFooterProps {
  /** Footer page name used in the "Go to" action label. */
  pageName?: string;
  /** Hides the footer navigation action. */
  hideGotoPage?: boolean;
  /** Called when the footer navigation action is selected. */
  onGotoPage?: () => void;
}

export interface SideDrawerHeaderProps {
  /** Main title text rendered in the drawer header. */
  titleText?: string;
  /** Custom title node for complex header titles. */
  titleNode?: ReactNode;
  /** Optional custom action rendered next to the title. */
  titleAction?: ReactNode;
  /** Optional severity level rendered as a compact status bar before the title. */
  severity?: Severity;
  /** URL copied by the header copy action. */
  copyURL: string;
  /** Optional style overrides for the header divider. */
  customDividerStyle?: CSSProperties;
  /** Whether the favorite action is currently selected. */
  isFavorite?: boolean;
  /** Action buttons rendered in the secondary header row. */
  actionButtons?: ReactNode[];
  /** Disables the previous navigation button. */
  disablePrev?: boolean;
  /** Disables the next navigation button. */
  disableNext?: boolean;
  /** Hides the previous navigation button. */
  hidePrev?: boolean;
  /** Hides the next navigation button. */
  hideNext?: boolean;
  /** Hides the title action. */
  hideTitleAction?: boolean;
  /** Hides the favorite action button. */
  hideFavorite?: boolean;
  /** Hides the copy action button. */
  hideCopyBtn?: boolean;
  /** Hides the secondary header action row. */
  hideActionButtons?: boolean;
  /** Called when the previous navigation button is selected. */
  onPrev?: () => void;
  /** Called when the next navigation button is selected. */
  onNext?: () => void;
  /** Called when the drawer close action is selected. */
  onClose?: (event?: MouseEvent<HTMLElement>) => void;
  /** Called when the favorite action is selected. */
  onFavorite?: () => void;
  /** Called when the title action is selected. */
  onTitleAction?: () => void;
  /** Called after the copy action succeeds. */
  onCopyLink?: (link: string) => void;
}

export interface SideDrawerProps
  extends
    Omit<MuiDrawerProps, "onClose">,
    SideDrawerHeaderProps,
    SideDrawerFooterProps {
  /** Deprecated alias retained for compatibility; use `titleText`. */
  title?: string;
  /** Centers a loading spinner inside the drawer. */
  isLoading?: boolean;
  /** Shows the loading error state inside the drawer. */
  isError?: boolean;
  /** Hides the footer region entirely. */
  hideFooter?: boolean;
  /** Additional sx applied to the Drawer paper after internal styles. */
  paperProps?: SxProps<Theme>;
}
