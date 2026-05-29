/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CardSubheaderProps } from "../types";
import { StyledCardSubheader } from "./elements";

const CardSubheader = ({ children, ...props }: CardSubheaderProps) => (
  <StyledCardSubheader variant="captionMedium" component="div" {...props}>
    {children}
  </StyledCardSubheader>
);

export default CardSubheader;
