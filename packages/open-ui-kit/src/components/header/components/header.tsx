/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, IconButton, Stack } from "@mui/material";
import type { HeaderAction, HeaderProps } from "../types";
import { getActionButtonStyles, getHeaderStyles } from "../styles";
import { Tooltip } from "@/components/tooltip";
import { Divider } from "@/components/divider";
import { CustomSearchInput } from "./custom-search-field";
import { GlobalSearchInput } from "./global-search-field";

export const Header = ({
  logo,
  title,
  globalSearchProps,
  searchProps,
  actions = [],
  userSection,
  position = "fixed",
  useDivider = true,
  customSearchNode,
  sx,
}: HeaderProps) => {
  return (
    <Box
      component="header"
      sx={[
        (theme) => getHeaderStyles(theme, position),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        {logo}
        {title}
      </Stack>

      <Stack direction="row" gap={2} alignItems="center">
        {customSearchNode ? (
          customSearchNode
        ) : globalSearchProps ? (
          <GlobalSearchInput {...globalSearchProps} />
        ) : (
          searchProps && <CustomSearchInput {...searchProps} />
        )}

        {actions.map((action: HeaderAction) => (
          <Tooltip
            title={action.tooltip}
            placement="bottom"
            arrow
            key={action.id}
          >
            <IconButton
              sx={(theme) => getActionButtonStyles(theme)}
              {...(action.href
                ? { href: action.href, target: action.target }
                : {})}
              onClick={action.onClick}
              aria-label={action["aria-label"]}
            >
              {action.icon}
            </IconButton>
          </Tooltip>
        ))}

        {userSection && (
          <Box display="flex" alignItems="center" gap={1.5}>
            {useDivider && <Divider orientation="vertical" flexItem />}
            {userSection}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
