/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Divider, IconButton, Stack } from "@mui/material";
import { HeaderAction, HeaderProps } from "../types";
import { Tooltip } from "@/components/tooltip";
import { CustomSearchField } from "./custom-search-field";
import { GlobalSearchField } from "./global-search-field";

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
        (theme) => ({
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 32px",
          height: "56px",
          width: "100%",
          boxSizing: "border-box",
          position,
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.appBar,
          backgroundColor: theme.palette.vars.baseBackgroundStrong,
          borderBottom: `1px solid ${theme.palette.vars.baseBorderDefault}`,
        }),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {/* Left Section */}
      <Stack direction="row" alignItems="center" gap={1}>
        {logo}
        {title}
      </Stack>

      {/* Right Section */}
      <Stack direction="row" gap={2} alignItems="center">
        {customSearchNode ? (
          customSearchNode
        ) : globalSearchProps ? (
          <GlobalSearchField {...globalSearchProps} />
        ) : (
          searchProps && <CustomSearchField {...searchProps} />
        )}

        {actions.map((action: HeaderAction) => (
          <Tooltip
            title={action.tooltip}
            placement="bottom"
            arrow
            key={action.id}
          >
            <IconButton
              sx={(theme) => ({
                color: theme.palette.vars.brandIconPrimaryDefault,
                width: "24px",
                height: "24px",
                padding: 0,
              })}
              href={action.href ?? ""}
              target={action.target}
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
