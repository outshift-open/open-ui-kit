/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIconProps, BoxProps } from "@mui/material";
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
  containerProps?: BoxProps | undefined;
  disabled?: boolean | undefined;
  fullWidth?: boolean | undefined;
  onChange: ViewSwitcherOptionProperties["onChange"];
  options: readonly ViewSwitcherOption[];
  size?: ViewSwitcherSize | undefined;
  value: string | undefined;
}
