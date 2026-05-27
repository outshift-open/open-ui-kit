/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

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

export const StyledCard = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  gap: "12px",
  borderRadius: "8px",
  backgroundImage: "none",
  backgroundColor: theme.palette.vars.baseBackgroundWeak,
  boxSizing: "border-box",
  "&:hover": {
    backgroundColor: theme.palette.vars.baseBackgroundWeak,
  },
})) as React.ComponentType<MuiCardProps>;

export const StyledCardActionArea = styled(MuiCardActionArea)(({ theme }) => ({
  borderRadius: "8px",
  "&:hover": {
    outline: `1px solid ${theme.palette.vars.controlBorderHover}`,
    "& .MuiCardActionArea-focusHighlight": {
      opacity: 0,
    },
  },
  "&:focus-visible": {
    outline: `1px solid ${theme.palette.vars.controlBorderActive}`,
    "& .MuiCardActionArea-focusHighlight": {
      opacity: 0,
    },
  },
})) as React.ComponentType<MuiCardActionAreaProps>;

export const StyledCardHeader = styled(MuiCardHeader)(({ theme }) => ({
  padding: "0",
  ...theme.typography.body1Semibold,
  color: theme.palette.vars.baseTextDefault,
  "& .MuiCardHeader-title": {
    ...theme.typography.body1Semibold,
    color: theme.palette.vars.baseTextDefault,
  },
})) as React.ComponentType<MuiCardHeaderProps>;

export const StyledCardContent = styled(MuiCardContent)(() => ({
  padding: "0",
  "&:last-child": {
    paddingBottom: "0",
  },
})) as React.ComponentType<MuiCardContentProps>;

export const StyledCardActions = styled(MuiCardActions)(() => ({
  padding: "0",
})) as React.ComponentType<MuiCardActionsProps>;

export const StyledCardDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.vars.baseTextDefault,
})) as React.ComponentType<TypographyProps>;

export const StyledCardSubheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.vars.baseTextMedium,
})) as React.ComponentType<TypographyProps>;
