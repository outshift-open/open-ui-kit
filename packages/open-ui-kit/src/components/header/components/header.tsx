/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
