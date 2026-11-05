/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject } from "@mui/material";

/**
 * The checkbox adds its own `margin-left` to whatever follows it. Inside a
 * FormControlLabel the spacing already comes from the shared label `gap`, so the
 * extra margin is reset to keep the label aligned with RadioButton and Toggle.
 */
export const checkboxLabelStyles: CSSObject = {
  "& .MuiFormControlLabel-label": {
    marginLeft: 0,
  },
};
