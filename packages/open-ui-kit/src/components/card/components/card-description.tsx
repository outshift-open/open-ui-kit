/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CardDescriptionProps } from "../types";
import { StyledCardDescription } from "./elements";

const CardDescription = ({ children, ...props }: CardDescriptionProps) => (
  <StyledCardDescription variant="body2" component="div" {...props}>
    {children}
  </StyledCardDescription>
);

export default CardDescription;
