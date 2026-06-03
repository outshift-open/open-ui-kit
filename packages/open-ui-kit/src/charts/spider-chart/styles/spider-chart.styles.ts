/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { styled } from "@mui/material";
import type { ComponentType, HTMLAttributes } from "react";

export const StyledTooltip = styled("div")(({ theme }) => ({
  width: "max-content",
  borderRadius: "4px",
  boxShadow: theme.shadows[4],
  color: theme.palette.vars.baseTextDefault,
  backgroundColor: theme.palette.background.paper,
  padding: "2px 8px",
})) as ComponentType<HTMLAttributes<HTMLDivElement>>;

export const StyledRadarChart = styled("div")({
  width: "100%",
  height: "100%",
  ".recharts-active-dot": {
    "& > *": {
      strokeWidth: "0 !important",
    },
  },
}) as ComponentType<HTMLAttributes<HTMLDivElement>>;
