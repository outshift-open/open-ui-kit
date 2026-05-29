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
import {
  StyledCard,
  StyledCardActionArea,
  StyledCardHeader,
  StyledCardContent,
  StyledCardActions,
} from "./elements";

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
