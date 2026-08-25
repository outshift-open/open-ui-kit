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

export const Card = ({
  alert,
  disabled = false,
  image,
  sx,
  ...props
}: CardProps) => (
  <StyledCard
    {...props}
    alert={alert}
    aria-disabled={disabled || props["aria-disabled"] ? true : undefined}
    // Lets descendants react to the treatment the same way they react to
    // `aria-disabled` — the photo one for text colour, the alert one so
    // `CardAlertHeader` can tell it is inside an alert card.
    data-card-alert={alert}
    data-card-image={image ? "true" : undefined}
    disabled={disabled}
    image={image}
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
