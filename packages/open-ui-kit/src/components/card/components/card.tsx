/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  CardProps as MuiCardProps,
  CardActionAreaProps as MuiCardActionAreaProps,
  CardHeaderProps as MuiCardHeaderProps,
  CardContentProps as MuiCardContentProps,
  CardActionsProps as MuiCardActionsProps,
} from "@mui/material";
import {
  StyledCard,
  StyledCardActionArea,
  StyledCardHeader,
  StyledCardContent,
  StyledCardActions,
} from "./elements";

export type CardProps = MuiCardProps;
export type CardActionAreaProps = MuiCardActionAreaProps;
export type CardHeaderProps = MuiCardHeaderProps;
export type CardContentProps = MuiCardContentProps;
export type CardActionsProps = MuiCardActionsProps;

export const Card = (props: CardProps) => <StyledCard {...props} />;
export const CardActionArea = (props: CardActionAreaProps) => (
  <StyledCardActionArea {...props} />
);
export const CardHeader = (props: CardHeaderProps) => (
  <StyledCardHeader {...props} />
);
export const CardContent = (props: CardContentProps) => (
  <StyledCardContent {...props} />
);
export const CardActions = (props: CardActionsProps) => (
  <StyledCardActions {...props} />
);
