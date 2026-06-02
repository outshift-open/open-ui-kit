/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, IconButton, styled } from "@mui/material";
import type { BoxProps, IconButtonProps } from "@mui/material";
import type { NavigationItemState } from "../types";
import {
  getNavigationCollapseButtonStyles,
  getNavigationCloseButtonStyles,
  getNavigationContentStyles,
  getNavigationDrawerContentStyles,
  getNavigationDrawerHeaderStyles,
  getNavigationDrawerItemStyles,
  getNavigationDrawerStyles,
  getNavigationDrawerTitleStyles,
  getNavigationFrameStyles,
  getNavigationItemLabelStyles,
  getNavigationItemsStyles,
  getNavigationItemStyles,
  getNavigationRootStyles,
  getNavigationSectionHeadStyles,
  getNavigationSectionsStyles,
  getNavigationSectionStyles,
  getNavigationSubtextStyles,
  getNavigationSwitcherLabelStyles,
  getNavigationSwitcherStyles,
} from "../styles";

export const StyledNavigationFrame: React.ComponentType<BoxProps> = styled(Box)(
  () => getNavigationFrameStyles(),
);

export const StyledNavigationRoot: React.ComponentType<
  BoxProps & { compact: boolean }
> = styled(Box, {
  shouldForwardProp: (prop) => prop !== "compact",
})<{ compact: boolean }>(({ theme, compact }) =>
  getNavigationRootStyles(theme, compact),
);

export const StyledNavigationContent: React.ComponentType<
  BoxProps & { compact: boolean }
> = styled(Box, {
  shouldForwardProp: (prop) => prop !== "compact",
})<{ compact: boolean }>(({ compact }) => getNavigationContentStyles(compact));

export const StyledNavigationSwitcher: React.ComponentType<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    compact: boolean;
    selected?: boolean;
  }
> = styled("button", {
  shouldForwardProp: (prop) => prop !== "compact" && prop !== "selected",
})<{ compact: boolean; selected?: boolean }>(({ theme, compact, selected }) =>
  getNavigationSwitcherStyles(theme, compact, selected),
);

export const StyledNavigationSwitcherLabel: React.ComponentType<
  React.HTMLAttributes<HTMLSpanElement>
> = styled("span")(({ theme }) => getNavigationSwitcherLabelStyles(theme));

export const StyledNavigationSections: React.ComponentType<BoxProps> = styled(
  Box,
)(() => getNavigationSectionsStyles());

export const StyledNavigationSection: React.ComponentType<BoxProps> = styled(
  Box,
)(() => getNavigationSectionStyles());

export const StyledNavigationSectionHead: React.ComponentType<
  React.HTMLAttributes<HTMLSpanElement> & { compact?: boolean }
> = styled("span", {
  shouldForwardProp: (prop) => prop !== "compact",
})<{ compact?: boolean }>(({ theme, compact }) =>
  getNavigationSectionHeadStyles(theme, compact),
);

export const StyledNavigationItems: React.ComponentType<BoxProps> = styled(Box)(
  () => getNavigationItemsStyles(),
);

export const StyledNavigationItem: React.ComponentType<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    itemState: NavigationItemState;
    compact?: boolean;
  }
> = styled("button", {
  shouldForwardProp: (prop) => prop !== "itemState" && prop !== "compact",
})<{ itemState: NavigationItemState; compact?: boolean }>(
  ({ theme, itemState, compact }) =>
    getNavigationItemStyles(theme, itemState, compact),
);

export const StyledNavigationItemLabel: React.ComponentType<
  React.HTMLAttributes<HTMLSpanElement>
> = styled("span")(({ theme }) => getNavigationItemLabelStyles(theme));

export const StyledNavigationCollapseButton: React.ComponentType<IconButtonProps> =
  styled(IconButton)(({ theme }) => getNavigationCollapseButtonStyles(theme));

export const StyledNavigationCloseButton: React.ComponentType<IconButtonProps> =
  styled(IconButton)(({ theme }) => getNavigationCloseButtonStyles(theme));

export const StyledNavigationDrawer: React.ComponentType<BoxProps> = styled(
  Box,
)(({ theme }) => getNavigationDrawerStyles(theme));

export const StyledNavigationDrawerHeader: React.ComponentType<BoxProps> =
  styled(Box)(({ theme }) => getNavigationDrawerHeaderStyles(theme));

export const StyledNavigationDrawerTitle: React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement>
> = styled("h3")(({ theme }) => ({
  ...getNavigationDrawerTitleStyles(theme),
  margin: 0,
}));

export const StyledNavigationDrawerContent: React.ComponentType<BoxProps> =
  styled(Box)(() => getNavigationDrawerContentStyles());

export const StyledNavigationDrawerItem: React.ComponentType<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean }
> = styled("button", {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) =>
  getNavigationDrawerItemStyles(theme, selected),
);

export const StyledNavigationSubtext: React.ComponentType<
  React.HTMLAttributes<HTMLSpanElement>
> = styled("span")(({ theme }) => getNavigationSubtextStyles(theme));
