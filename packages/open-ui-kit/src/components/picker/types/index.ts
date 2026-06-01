/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ButtonBaseProps } from "@mui/material";
import type { ReactNode } from "react";

export type PickerSize = "small" | "medium" | "large";
export type PickerDisplay = "vertical" | "horizontal";

export interface PickerItemProps extends Omit<ButtonBaseProps, "children"> {
  /** Icon element rendered inside the picker item. */
  icon: ReactNode;
  /** Label text rendered below (vertical) or beside (horizontal) the icon. */
  label: string;
  /** Visual size of the item. Defaults to "medium". */
  size?: PickerSize;
  /** Layout direction — icon above label (vertical) or icon beside label (horizontal). Defaults to "vertical". */
  display?: PickerDisplay;
  /** Whether this item is currently selected. Shows an orange border. */
  selected?: boolean;
  /** Whether this item is disabled. Mutes colors and prevents interaction. */
  disabled?: boolean;
}
