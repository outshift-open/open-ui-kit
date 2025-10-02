/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { styled } from "@mui/material";

export const StyledTooltip = styled("div")(({ theme }) => ({
  width: "max-content",
  borderRadius: "4px",
  boxShadow: "0px 4px 30px rgba(9, 13, 50, 0.25)",
  color: theme.palette.vars.baseTextDefault,
  backgroundColor: theme.palette.background.paper,
  padding: "2px 8px",
}));

export const StyledRadarChart = styled("div")({
  width: "100%",
  height: "100%",
  ".recharts-active-dot": {
    "& > *": {
      strokeWidth: "0 !important",
    },
  },
});
