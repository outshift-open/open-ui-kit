/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ComponentType } from "react";
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardActionArea as MuiCardActionArea,
  CardActionAreaProps as MuiCardActionAreaProps,
  CardHeader as MuiCardHeader,
  CardHeaderProps as MuiCardHeaderProps,
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
  CardActions as MuiCardActions,
  CardActionsProps as MuiCardActionsProps,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";
import {
  cardActiveStyles,
  cardDisabledStyles,
  cardInteractiveStyles,
  cardRootStyles,
} from "../styles";

export const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== "disabled",
})<{ disabled?: boolean }>(({ theme }) => ({
  ...cardRootStyles(theme),
  "&:hover": {
    backgroundColor: theme.palette.vars.baseBackgroundWeak,
  },
  '&[aria-disabled="true"]': cardDisabledStyles(theme),
})) as ComponentType<MuiCardProps & { disabled?: boolean }>;

export const StyledCardActionArea = styled(MuiCardActionArea)(({ theme }) => ({
  borderRadius: "8px",
  "&:hover .MuiCard-root, &:focus-visible .MuiCard-root":
    cardInteractiveStyles(theme),
  "&:active .MuiCard-root": cardActiveStyles(theme),
  "&.Mui-disabled .MuiCard-root": cardDisabledStyles(theme),
  // MUI paints a translucent overlay (`focusHighlight`) across the whole action
  // area on hover and focus. It is a sibling of the card, not a descendant, so
  // it cannot be reached from a `.MuiCard-root` rule, and MUI scopes its own
  // rules as `&:hover .focusHighlight` / `&.Mui-focusVisible .focusHighlight`.
  // A bare `& .focusHighlight` is one specificity step lower and loses to them,
  // so each selector has to be matched directly to keep the overlay hidden.
  "& .MuiCardActionArea-focusHighlight": {
    opacity: 0,
  },
  "&:hover .MuiCardActionArea-focusHighlight": {
    opacity: 0,
  },
  "&.Mui-focusVisible .MuiCardActionArea-focusHighlight": {
    opacity: 0,
  },
  "&:focus-visible": {
    outline: "none",
  },
})) as ComponentType<MuiCardActionAreaProps>;

export const StyledCardHeader = styled(MuiCardHeader)(({ theme }) => ({
  padding: "0",
  "& .MuiCardHeader-title": {
    ...theme.typography.body1Semibold,
    color: theme.palette.vars.baseTextDefault,
  },
  "& .MuiCardHeader-subheader": {
    ...theme.typography.captionMedium,
    color: theme.palette.vars.baseTextMedium,
  },
  '[aria-disabled="true"] & .MuiCardHeader-title, [aria-disabled="true"] & .MuiCardHeader-subheader':
    {
      color: theme.palette.vars.baseTextDisabled,
    },
})) as ComponentType<MuiCardHeaderProps>;

export const StyledCardContent = styled(MuiCardContent)(() => ({
  padding: "0",
  "&:last-child": {
    paddingBottom: "0",
  },
})) as ComponentType<MuiCardContentProps>;

export const StyledCardActions = styled(MuiCardActions)(() => ({
  padding: "0",
})) as ComponentType<MuiCardActionsProps>;

export const StyledCardDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.vars.baseTextDefault,
  '[aria-disabled="true"] &': {
    color: theme.palette.vars.baseTextDisabled,
  },
})) as ComponentType<TypographyProps>;

export const StyledCardSubheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.vars.baseTextMedium,
  '[aria-disabled="true"] &': {
    color: theme.palette.vars.baseTextDisabled,
  },
})) as ComponentType<TypographyProps>;
