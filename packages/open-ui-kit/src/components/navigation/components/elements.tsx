/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, IconButton, styled } from "@mui/material";
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

export const StyledNavigationFrame = styled(Box)(() =>
  getNavigationFrameStyles(),
);

export const StyledNavigationRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "compact",
})<{ compact: boolean }>(({ theme, compact }) =>
  getNavigationRootStyles(theme, compact),
);

export const StyledNavigationContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "compact",
})<{ compact: boolean }>(({ compact }) => getNavigationContentStyles(compact));

export const StyledNavigationSwitcher = styled("button", {
  shouldForwardProp: (prop) => prop !== "compact" && prop !== "selected",
})<{ compact: boolean; selected?: boolean }>(({ theme, compact, selected }) =>
  getNavigationSwitcherStyles(theme, compact, selected),
);

export const StyledNavigationSwitcherLabel = styled("span")(({ theme }) =>
  getNavigationSwitcherLabelStyles(theme),
);

export const StyledNavigationSections = styled(Box)(() =>
  getNavigationSectionsStyles(),
);

export const StyledNavigationSection = styled(Box)(() =>
  getNavigationSectionStyles(),
);

export const StyledNavigationSectionHead = styled("span", {
  shouldForwardProp: (prop) => prop !== "compact",
})<{ compact?: boolean }>(({ theme, compact }) =>
  getNavigationSectionHeadStyles(theme, compact),
);

export const StyledNavigationItems = styled(Box)(() =>
  getNavigationItemsStyles(),
);

export const StyledNavigationItem = styled("button", {
  shouldForwardProp: (prop) => prop !== "itemState" && prop !== "compact",
})<{ itemState: NavigationItemState; compact?: boolean }>(
  ({ theme, itemState, compact }) =>
    getNavigationItemStyles(theme, itemState, compact),
);

export const StyledNavigationItemLabel = styled("span")(({ theme }) =>
  getNavigationItemLabelStyles(theme),
);

export const StyledNavigationCollapseButton = styled(IconButton)(({ theme }) =>
  getNavigationCollapseButtonStyles(theme),
);

export const StyledNavigationCloseButton = styled(IconButton)(({ theme }) =>
  getNavigationCloseButtonStyles(theme),
);

export const StyledNavigationDrawer = styled(Box)(({ theme }) =>
  getNavigationDrawerStyles(theme),
);

export const StyledNavigationDrawerHeader = styled(Box)(({ theme }) =>
  getNavigationDrawerHeaderStyles(theme),
);

export const StyledNavigationDrawerTitle = styled("h3")(({ theme }) => ({
  ...getNavigationDrawerTitleStyles(theme),
  margin: 0,
}));

export const StyledNavigationDrawerContent = styled(Box)(() =>
  getNavigationDrawerContentStyles(),
);

export const StyledNavigationDrawerItem = styled("button", {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) =>
  getNavigationDrawerItemStyles(theme, selected),
);

export const StyledNavigationSubtext = styled("span")(({ theme }) =>
  getNavigationSubtextStyles(theme),
);
