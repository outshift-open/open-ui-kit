/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewSwitcherProps } from "../types";
import { StyledBox } from "./elements";
import { ViewSwitcherOption } from "./view-switcher-option";

export const ViewSwitcher = ({
  disabled,
  fullWidth,
  onChange,
  options,
  size = "md",
  value,
  containerProps,
}: ViewSwitcherProps) => {
  return (
    <StyledBox fullWidth={fullWidth} {...containerProps}>
      {options.map((option) =>
        typeof option === "string" ? (
          <ViewSwitcherOption
            disabled={disabled}
            key={option}
            label={option}
            onChange={onChange}
            selected={value === option}
            value={option}
            size={size}
          />
        ) : (
          <ViewSwitcherOption
            disabled={disabled || option.disabled}
            icon={option.icon}
            key={option.value}
            label={option.label}
            onChange={onChange}
            selected={value === option.value}
            value={option.value}
            size={size}
          />
        ),
      )}
    </StyledBox>
  );
};
