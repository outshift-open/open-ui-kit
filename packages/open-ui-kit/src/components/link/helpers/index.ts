/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";
import { LinkColorEnum } from "../types";
import { getLinkColors as getLinkColorSet } from "../styles";

export const getLinkColors = (theme: Theme) => ({
  primary: getLinkColorSet(theme, LinkColorEnum.Primary),
  secondary: getLinkColorSet(theme, LinkColorEnum.Secondary),
});
