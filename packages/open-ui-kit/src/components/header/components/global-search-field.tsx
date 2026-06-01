/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Box,
  ClickAwayListener,
  List,
  ListItemButton,
  ListSubheader,
  Paper,
  Popper,
  Typography,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";
import { SearchInput } from "@/components/search-input";
import type {
  GlobalSearchGroup,
  GlobalSearchItem,
  GlobalSearchProps,
} from "../types";
import {
  getGlobalSearchInputStyles,
  getGlobalSearchItemIconStyles,
  getGlobalSearchItemStyles,
  getGlobalSearchPaperStyles,
  getGlobalSearchSubheaderStyles,
} from "../styles";

export const GlobalSearchInput = ({
  placeholder = "Search",
  value,
  groups = [],
  onSearch,
  onSelect,
  onClear,
  width = "360px",
}: GlobalSearchProps) => {
  const theme = useTheme();
  const anchorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const hasResults = groups.some((g) => g.items.length > 0);

  const handleChange = (val: string) => {
    onSearch?.(val);
    setOpen(val.length > 0 && hasResults);
  };

  const handleSelect = (item: GlobalSearchItem) => {
    setOpen(false);
    onSelect?.(item);
  };

  const handleClear = () => {
    setOpen(false);
    onClear?.();
  };

  const shouldOpen = open && (value?.length ?? 0) > 0 && hasResults;

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box ref={anchorRef} sx={{ position: "relative", width }}>
        <SearchInput
          fullWidth
          placeholder={placeholder}
          value={value}
          onChangeCallback={handleChange}
          onClear={handleClear}
          sx={getGlobalSearchInputStyles(theme)}
        />

        <Popper
          open={shouldOpen}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          style={{
            zIndex: theme.zIndex.appBar + 1,
            width: anchorRef.current?.offsetWidth ?? "auto",
          }}
        >
          <Paper elevation={0} sx={getGlobalSearchPaperStyles(theme)}>
            {groups.map((group: GlobalSearchGroup) => {
              if (group.items.length === 0) return null;
              return (
                <List key={group.key} disablePadding>
                  <ListSubheader
                    disableSticky
                    sx={getGlobalSearchSubheaderStyles(theme)}
                  >
                    {group.label}
                  </ListSubheader>

                  {group.items.map((item: GlobalSearchItem) => (
                    <ListItemButton
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      sx={getGlobalSearchItemStyles(theme)}
                    >
                      {item.icon && (
                        <Box sx={getGlobalSearchItemIconStyles(theme)}>
                          {item.icon}
                        </Box>
                      )}
                      <Box sx={{ minWidth: 0, flex: 1 }}>
                        <Typography
                          variant="body2"
                          noWrap
                          sx={{ color: theme.palette.vars.baseTextDefault }}
                        >
                          {item.label}
                        </Typography>
                        {item.subtitle && (
                          <Typography
                            variant="caption"
                            noWrap
                            sx={{ color: theme.palette.vars.baseTextWeak }}
                          >
                            {item.subtitle}
                          </Typography>
                        )}
                      </Box>
                    </ListItemButton>
                  ))}
                </List>
              );
            })}
          </Paper>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};
