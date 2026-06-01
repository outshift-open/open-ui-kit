/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIconProps, BoxProps, SxProps, Theme } from "@mui/material";
import { ComponentType, ReactNode } from "react";

export type ViewSwitcherOptionObject = {
  size?: ViewSwitcherSize | undefined;
  disabled?: boolean | undefined;
  value: string;
} & (
  | {
      icon?: never | undefined;
      label: ReactNode;
    }
  | {
      icon: ComponentType<SvgIconProps>;
      label?: never | undefined;
    }
);

export type ViewSwitcherSize = "sm" | "md";

export type ViewSwitcherOption = ViewSwitcherOptionObject | string;

export type ViewSwitcherOptionProperties = Omit<
  ViewSwitcherOptionObject,
  "value"
> & {
  onChange: (value: string) => void;
  selected: boolean;
  value: NonNullable<ViewSwitcherOptionObject["value"]>;
};

export interface ViewSwitcherProps {
  /** Props forwarded to the container Box element. */
  containerProps?: BoxProps | undefined;
  /** Disables all options. */
  disabled?: boolean | undefined;
  /** Stretches the switcher to fill its parent width. */
  fullWidth?: boolean | undefined;
  /** Called with the selected option value when the user clicks an option. */
  onChange: ViewSwitcherOptionProperties["onChange"];
  /** Array of option strings or option objects with value, label or icon. */
  options: readonly ViewSwitcherOption[];
  /** Size variant: "md" (default) or "sm". */
  size?: ViewSwitcherSize | undefined;
  /** Additional MUI sx overrides applied to the container. */
  sx?: SxProps<Theme>;
  /** The currently selected option value. */
  value: string | undefined;
}
