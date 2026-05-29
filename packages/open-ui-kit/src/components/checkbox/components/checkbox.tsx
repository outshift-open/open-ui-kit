/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CheckboxProps } from "../types";
import { StyledCheckbox } from "./elements";

export const Checkbox = (props: CheckboxProps) => (
  <StyledCheckbox disableRipple {...props} />
);
