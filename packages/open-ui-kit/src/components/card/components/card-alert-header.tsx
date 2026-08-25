/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Typography } from "@mui/material";
import type { CardAlertHeaderProps } from "../types";
import { cardAlertAccentVar } from "../styles";
import { StyledCardAlertHeader } from "./elements";

/**
 * Meta row for an alert card: severity label on the left, timestamp on the
 * right. Figma: `Alerts Card` (274421:47415).
 *
 * The label colour comes from the `--card-alert-accent` custom property that
 * `cardAlertStyles` sets on the parent card, so the severity is declared once
 * on `<Card alert>` rather than threaded through here as a second prop.
 */
const CardAlertHeader = ({
  children,
  timestamp,
  ...props
}: CardAlertHeaderProps) => (
  <StyledCardAlertHeader {...props}>
    <Typography
      component="div"
      variant="captionSemibold"
      sx={{ color: `var(${cardAlertAccentVar})` }}
    >
      {children}
    </Typography>
    {timestamp ? (
      <Typography
        component="div"
        variant="captionSemibold"
        sx={(theme) => ({ color: theme.palette.vars.baseTextWeak })}
      >
        {timestamp}
      </Typography>
    ) : null}
  </StyledCardAlertHeader>
);

export default CardAlertHeader;
