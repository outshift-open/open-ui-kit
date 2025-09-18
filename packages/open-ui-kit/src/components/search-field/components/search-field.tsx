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
  IconButton,
  InputAdornment,
  TextField,
  InputProps,
  useTheme,
} from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React, { useEffect, useState } from "react";
import { clearButtonStyle, clearIconStyle, searchIconStyle } from "../styles";

export interface SearchFieldProps extends Omit<TextFieldProps, "inputProps"> {
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
    onChangeCallback && onChangeCallback(value);
  }, [onChangeCallback, value]);

  useEffect(() => {
    setValue(props.value?.toString() ?? "");
  }, [props.value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue("");
    onClear && onClear();
  };

  return (
    <TextField
      id="search-field"
      variant="standard"
      autoComplete="off"
      placeholder="Search"
      {...props}
      sx={{
        padding: 0,
        "& .MuiInput-root": {
          marginTop: 0,
        },
        ...props.sx,
      }}
      slotProps={{
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
      }}
      value={value}
      onChange={handleChange}
    />
  );
};
