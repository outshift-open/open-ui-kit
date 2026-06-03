/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ButtonProps } from "../types";
import { StyledButton } from "./elements";

/** Open UI Kit button wrapper with tokenized variants, sizes, icon spacing, and states. */
export const Button = ({ disableRipple = true, ...props }: ButtonProps) => (
  <StyledButton disableRipple={disableRipple} {...props} />
);
