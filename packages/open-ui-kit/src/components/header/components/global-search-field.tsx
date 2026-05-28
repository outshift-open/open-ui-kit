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
import { SearchField } from "@/components/search-field";
import type {
  GlobalSearchGroup,
  GlobalSearchItem,
  GlobalSearchProps,
} from "../types";

export const GlobalSearchField = ({
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

  // keep open in sync when groups update externally
  const shouldOpen = open && (value?.length ?? 0) > 0 && hasResults;

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box ref={anchorRef} sx={{ position: "relative", width }}>
        <SearchField
          fullWidth
          placeholder={placeholder}
          value={value}
          onChangeCallback={handleChange}
          onClear={handleClear}
          sx={{
            "& .MuiInput-root": {
              width: "100%",
              height: "36px",
              borderRadius: "4px",
              marginTop: 0,
              border: "none",
              backgroundColor: theme.palette.vars.baseBackgroundWeak,
            },
          }}
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
          <Paper
            elevation={0}
            sx={{
              mt: "4px",
              width: "100%",
              maxHeight: "400px",
              overflowY: "auto",
              border: `1px solid ${theme.palette.vars.baseBorderDefault}`,
              borderRadius: "8px",
              backgroundColor: theme.palette.vars.controlBackgroundWeak,
              boxShadow: theme.shadows[2],
            }}
          >
            {groups.map((group: GlobalSearchGroup) => {
              if (group.items.length === 0) return null;
              return (
                <List key={group.key} disablePadding>
                  <ListSubheader
                    disableSticky
                    sx={{
                      backgroundColor: theme.palette.vars.controlBackgroundWeak,
                      color: theme.palette.vars.baseTextWeak,
                      ...theme.typography.captionMedium,
                      lineHeight: "32px",
                      padding: "0 16px",
                      letterSpacing: "0.4px",
                      textTransform: "uppercase",
                    }}
                  >
                    {group.label}
                  </ListSubheader>

                  {group.items.map((item: GlobalSearchItem) => (
                    <ListItemButton
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      sx={{
                        padding: "8px 16px",
                        gap: "12px",
                        minHeight: "40px",
                        "&:hover": {
                          backgroundColor:
                            theme.palette.vars.baseBackgroundHover,
                        },
                      }}
                    >
                      {item.icon && (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: theme.palette.vars.baseTextWeak,
                            flexShrink: 0,
                          }}
                        >
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
