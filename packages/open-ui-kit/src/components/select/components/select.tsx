/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import React, { useCallback, useState } from "react";
import { IconButton, Select as MuiSelect, useTheme } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { CloseCircleOutline, KeyboardArrowDown } from "@/custom-icons";
import {
  getSelectClearButtonStyles,
  getSelectMenuPaperStyles,
  getSelectStyles,
} from "../styles";
import type { SelectProps } from "../types";

export type { SelectProps };

const getEmptyValue = (multiple?: boolean) => (multiple ? [] : "");

const hasSelectValue = (value: unknown): boolean => {
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return value !== undefined && value !== null && value !== "";
};

export const Select = <T = unknown,>({
  clearable = true,
  defaultValue,
  disabled,
  endAdornment,
  IconComponent = KeyboardArrowDown,
  MenuProps,
  multiple,
  onChange,
  onClear,
  variant = "outlined",
  sx,
  value: valueProp,
  ...props
}: SelectProps<T>) => {
  const theme = useTheme();
  const [internalValue, setInternalValue] = useState<unknown>(
    defaultValue ?? getEmptyValue(multiple),
  );
  const paperSlotProps = MenuProps?.slotProps?.paper;
  const paperSx =
    typeof paperSlotProps === "function" ? undefined : paperSlotProps?.sx;
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : internalValue;
  const inputHasValue = hasSelectValue(value);
  const showClearButton =
    clearable && inputHasValue && !multiple && !disabled && !props.readOnly;

  const handleChange = useCallback(
    (event: SelectChangeEvent<T>, child: ReactNode) => {
      if (!isControlled) {
        setInternalValue(event.target.value);
      }

      onChange?.(event, child);
    },
    [isControlled, onChange],
  );

  const handleClear = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();

      if (!isControlled) {
        setInternalValue(getEmptyValue(multiple));
      }

      onClear?.();
    },
    [isControlled, multiple, onClear],
  );

  return (
    <MuiSelect<T>
      endAdornment={
        <>
          {showClearButton ? (
            <IconButton
              aria-label="Clear selection"
              onClick={handleClear}
              sx={getSelectClearButtonStyles(theme)}
              tabIndex={-1}
            >
              <CloseCircleOutline />
            </IconButton>
          ) : null}
          {endAdornment}
        </>
      }
      IconComponent={IconComponent}
      MenuProps={{
        ...MenuProps,
        slotProps: {
          ...MenuProps?.slotProps,
          paper:
            typeof paperSlotProps === "function"
              ? paperSlotProps
              : {
                  ...paperSlotProps,
                  sx: [
                    getSelectMenuPaperStyles(theme),
                    ...(Array.isArray(paperSx)
                      ? paperSx
                      : paperSx
                        ? [paperSx]
                        : []),
                  ],
                },
        },
      }}
      disabled={disabled}
      defaultValue={undefined}
      multiple={multiple}
      onChange={handleChange}
      variant={variant}
      value={value as T}
      {...props}
      sx={[
        getSelectStyles(theme, inputHasValue, showClearButton),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    />
  );
};
