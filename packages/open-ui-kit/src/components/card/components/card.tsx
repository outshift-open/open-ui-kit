/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  CardActionAreaProps,
  CardActionsProps,
  CardContentProps,
  CardHeaderProps,
  CardProps,
} from "../types";
import type { SxProps, Theme } from "@mui/material/styles";
import {
  StyledCard,
  StyledCardActionArea,
  StyledCardHeader,
  StyledCardContent,
  StyledCardActions,
} from "./elements";

const mergeSx = (sx: SxProps<Theme> | undefined): SxProps<Theme> => [
  ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
];

export const Card = ({ disabled = false, sx, ...props }: CardProps) => (
  <StyledCard
    {...props}
    aria-disabled={disabled || props["aria-disabled"] ? true : undefined}
    disabled={disabled}
    sx={mergeSx(sx)}
  />
);
export const CardActionArea = ({ sx, ...props }: CardActionAreaProps) => (
  <StyledCardActionArea sx={mergeSx(sx)} {...props} />
);
export const CardHeader = ({ sx, ...props }: CardHeaderProps) => (
  <StyledCardHeader sx={mergeSx(sx)} {...props} />
);
export const CardContent = ({ sx, ...props }: CardContentProps) => (
  <StyledCardContent sx={mergeSx(sx)} {...props} />
);
export const CardActions = ({ sx, ...props }: CardActionsProps) => (
  <StyledCardActions sx={mergeSx(sx)} {...props} />
);
