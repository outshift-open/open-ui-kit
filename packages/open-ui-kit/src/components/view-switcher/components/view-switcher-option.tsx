/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ReactElement } from "react";
import { ViewSwitcherOptionProperties } from "../types";
import { StyledButton } from "./elements";

export const ViewSwitcherOption = ({
  disabled,
  icon: Icon,
  label,
  onChange,
  selected,
  size,
  value,
}: ViewSwitcherOptionProperties): ReactElement => {
  return (
    <StyledButton
      aria-label={Icon ? value : undefined}
      aria-pressed={selected}
      onClick={() => onChange(value)}
      size={size}
      disabled={disabled}
      selected={selected}
      isIconOnly={!!Icon}
      className={
        selected
          ? "osd-view-switcher-option osd-view-switcher-option-selected"
          : "osd-view-switcher-option"
      }
    >
      {Icon ? <Icon className="view-switcher-option-icon" /> : label}
    </StyledButton>
  );
};
