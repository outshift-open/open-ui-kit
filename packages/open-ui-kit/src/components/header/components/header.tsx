/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  styled,
} from "@mui/material";
import { HeaderAction, HeaderProps } from "../types";
import { Tooltip } from "@/components";
import { CustomSearchField } from "./custom-search-field";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: 0,
  minHeight: "0px !important",
});

export const Header = ({
  logo,
  title,
  searchProps,
  actions = [],
  userSection,
  position = "fixed",
  elevation = 0,
  useDivider = true,
  customSearchNode,
  sx,
}: HeaderProps) => {
  return (
    <AppBar
      position={position}
      elevation={elevation}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: (theme) =>
          `1px solid ${theme.palette.vars.baseBorderDefault}`,
        ...sx,
      }}
    >
      <StyledToolbar>
        {/* Left Section */}
        <Stack direction="row" alignItems="center" gap={1.25}>
          {logo}
          {title}
        </Stack>

        {/* Right Section */}
        <Stack direction="row" gap={2} alignItems="center">
          {customSearchNode
            ? customSearchNode
            : searchProps && <CustomSearchField {...searchProps} />}

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

          {/* Divider and User Section */}
          {userSection && (
            <Box display="flex" alignItems="center" gap={1.5}>
              {useDivider && <Divider orientation="vertical" flexItem />}
              {userSection}
            </Box>
          )}
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
