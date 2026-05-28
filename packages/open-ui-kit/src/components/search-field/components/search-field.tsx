/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  IconButton,
  InputAdornment,
  InputProps,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { InputFieldProps } from "@/components/input-field";
import { InputField } from "@/components/input-field";
import { clearButtonStyle, clearIconStyle, searchIconStyle } from "../styles";

export interface SearchFieldProps extends Omit<InputFieldProps, "inputProps"> {
  inputProps?: InputProps;
  onChangeCallback?: (value: string) => void;
  onClear?: () => void;
  extendEndAdornment?: React.JSX.Element;
}

export const SearchField = ({
  inputProps,
  slotProps,
  onChangeCallback,
  extendEndAdornment,
  onClear,
  ...props
}: SearchFieldProps) => {
  const theme = useTheme();
  const [value, setValue] = useState(props.value?.toString() ?? "");

  useEffect(() => {
    setValue(props.value?.toString() ?? "");
  }, [props.value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChangeCallback?.(newValue);
  };

  const handleClear = useCallback(() => {
    setValue("");
    onClear && onClear();
  }, [onClear]);

  const computedSlotProps = useMemo(
    () => ({
      ...slotProps,
      input: {
        ...inputProps,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ ...searchIconStyle(theme) }} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClear}
              sx={clearButtonStyle(!!value.length)}
              data-testid="clear-button"
            >
              <HighlightOffIcon sx={clearIconStyle(theme)} />
            </IconButton>
            {extendEndAdornment && extendEndAdornment}
          </InputAdornment>
        ),
      },
    }),
    [extendEndAdornment, handleClear, inputProps, slotProps, theme, value],
  );

  return (
    <InputField
      id="search-field"
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
