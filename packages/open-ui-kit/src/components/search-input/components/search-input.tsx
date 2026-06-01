/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { IconButton, InputAdornment, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { InputField } from "@/components/input-field";
import { clearButtonStyle, clearIconStyle, searchIconStyle } from "../styles";
import type { SearchInputProps } from "../types";

export type { SearchInputProps };

export const SearchInput = ({
  inputProps,
  slotProps,
  onChangeCallback,
  onChange,
  extendEndAdornment,
  onClear,
  ...props
}: SearchInputProps) => {
  const theme = useTheme();
  const [value, setValue] = useState(props.value?.toString() ?? "");

  useEffect(() => {
    setValue(props.value?.toString() ?? "");
  }, [props.value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChangeCallback?.(newValue);
    onChange?.(event);
  };

  const handleClear = useCallback(() => {
    setValue("");
    onClear?.();
  }, [onClear]);

  const computedSlotProps = useMemo(
    () => ({
      ...slotProps,
      input: {
        ...inputProps,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={searchIconStyle(theme)} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Clear search"
              onClick={handleClear}
              sx={clearButtonStyle(!!value.length)}
              data-testid="clear-button"
            >
              <HighlightOffIcon sx={clearIconStyle(theme)} />
            </IconButton>
            {extendEndAdornment}
          </InputAdornment>
        ),
      },
    }),
    [extendEndAdornment, handleClear, inputProps, slotProps, theme, value],
  );

  return (
    <InputField
      variant="standard"
      autoComplete="off"
      placeholder="Search"
      {...props}
      sx={[
        {
          padding: 0,
          "& .MuiInput-root": {
            marginTop: 0,
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : []),
      ]}
      slotProps={computedSlotProps}
      value={value}
      onChange={handleChange}
    />
  );
};
