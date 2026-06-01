/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { InputProps } from "@mui/material";
import type { InputFieldProps } from "@/components/input-field";

export interface SearchInputProps extends Omit<InputFieldProps, "inputProps"> {
  /** MUI Input-level props merged into `slotProps.input` (e.g. `disableUnderline`, `componentsProps`). Note: consumer-supplied `startAdornment`/`endAdornment` here will be overridden by the built-in search and clear adornments. */
  inputProps?: InputProps;
  /** Called with the current string value on every keystroke. */
  onChangeCallback?: (value: string) => void;
  /** Called when the user clicks the clear (×) button. */
  onClear?: () => void;
  /** Optional element appended after the clear button in the end adornment. */
  extendEndAdornment?: React.JSX.Element;
}
