/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TypographyProps } from "@mui/material";
import { StyledCardDescription } from "./elements";

export interface CardDescriptionProps extends TypographyProps {
  children: React.ReactNode;
}

const CardDescription = ({ children, ...props }: CardDescriptionProps) => (
  <StyledCardDescription variant="body2" component="div" {...props}>
    {children}
  </StyledCardDescription>
);

export default CardDescription;
