/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TypographyProps } from "@mui/material";
import { StyledCardSubheader } from "./elements";

export interface CardSubheaderProps extends TypographyProps {
  children: React.ReactNode;
}

const CardSubheader = ({ children, ...props }: CardSubheaderProps) => (
  <StyledCardSubheader variant="captionMedium" component="div" {...props}>
    {children}
  </StyledCardSubheader>
);

export default CardSubheader;
