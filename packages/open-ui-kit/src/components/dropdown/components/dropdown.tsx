/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  Button,
  ButtonProps,
  Menu,
  MenuItem,
  MenuProps,
  Stack,
} from "@mui/material";
import { Tooltip, TooltipProps } from "@/components";

type ValueType = string | number;

export interface DropdownOption<T extends ValueType> {
  label: string;
  value: T;
  icon?: JSX.Element;
  customElement?: JSX.Element;
  menuItemTooltipProps?: Partial<TooltipProps>;
}

export interface DropdownProps<T extends ValueType> {
  onChange: (selected: DropdownOption<T>) => void;
  options: DropdownOption<T>[];
  selected: DropdownOption<T>;
  buttonProps?: ButtonProps;
  isActive?: boolean;
  label?: string;
  menuProps?: Partial<MenuProps>;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  showSelectedOption?: boolean;
  fixedWidth?: boolean;
  buttonTooltipProps?: Partial<TooltipProps>;
}

export const Dropdown = <T extends ValueType>({
  onChange,
  options,
  selected,
  buttonProps,
  isActive,
  label,
  menuProps,
  startIcon,
  endIcon,
  showSelectedOption = true,
  fixedWidth,
  buttonTooltipProps,
}: DropdownProps<T>): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // menuWidth is a state to prevent menu width glitch onChange
  const [menuWidth, setMenuWidth] = useState<number | undefined>();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuWidth(event.currentTarget.offsetWidth);
    setAnchorEl(event.currentTarget);
    event.stopPropagation();
  };

  const handleClose = (e: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl(null);
    e.stopPropagation();
  };

  return (
    <>
      <Tooltip title={buttonTooltipProps?.title} {...buttonTooltipProps}>
        <Button
          startIcon={startIcon}
          endIcon={endIcon}
          onClick={handleClick}
          variant={isActive ? "primary" : "secondary"}
          {...buttonProps}
        >
          {label ? label : ""}
          {showSelectedOption ? selected.label : ""}
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        sx={{ marginTop: 1 }}
        {...menuProps}
      >
        {options.map((option, i) => (
          <Tooltip
            key={option.label + i}
            title={option.menuItemTooltipProps?.title}
            {...option.menuItemTooltipProps}
          >
            <MenuItem
              key={option.label + i}
              onClick={(e) => {
                onChange(option);
                handleClose(e);
              }}
              sx={fixedWidth ? {} : { width: menuWidth ?? "unset" }}
              selected={option.value === selected.value}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                {option.icon
                  ? option.value === selected.value
                    ? selected.icon
                    : option.icon
                  : null}
                <span>{option.label}</span>
                {option.customElement && option.customElement}
              </Stack>
            </MenuItem>
          </Tooltip>
        ))}
      </Menu>
    </>
  );
};
