/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, styled, type BoxProps } from "@mui/material";
import type { ComponentType } from "react";
import type { KeyValuePairsLayout } from "../types";
import {
  getKeyValueKeyStyles,
  getKeyValuePairStyles,
  getKeyValuePairsStyles,
  getKeyValueValueStyles,
} from "../styles";

export const StyledKeyValuePairs = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "columns" &&
    prop !== "rowCount" &&
    prop !== "columnGap" &&
    prop !== "rowGap",
})<{
  columns: number;
  rowCount: number;
  columnGap: string | number;
  rowGap: string | number;
}>(({ columns, rowCount, columnGap, rowGap }) =>
  getKeyValuePairsStyles(columns, rowCount, columnGap, rowGap),
) as ComponentType<
  BoxProps & {
    columns: number;
    rowCount: number;
    columnGap: string | number;
    rowGap: string | number;
  }
>;

export const StyledKeyValuePair = styled(Box, {
  shouldForwardProp: (prop) => prop !== "layout" && prop !== "pairGap",
})<{ layout: KeyValuePairsLayout; pairGap: string | number }>(
  ({ layout, pairGap }) => getKeyValuePairStyles(layout, pairGap),
) as ComponentType<
  BoxProps & { layout: KeyValuePairsLayout; pairGap: string | number }
>;

export const StyledKeyValueKey = styled(Box, {
  shouldForwardProp: (prop) => prop !== "layout" && prop !== "keyWidth",
})<{ layout: KeyValuePairsLayout; keyWidth: string | number }>(
  ({ theme, layout, keyWidth }) =>
    getKeyValueKeyStyles(theme, layout, keyWidth),
) as ComponentType<
  BoxProps & { layout: KeyValuePairsLayout; keyWidth: string | number }
>;

export const StyledKeyValueValue = styled(Box, {
  shouldForwardProp: (prop) => prop !== "layout",
})<{ layout: KeyValuePairsLayout }>(({ theme, layout }) =>
  getKeyValueValueStyles(theme, layout),
) as ComponentType<BoxProps & { layout: KeyValuePairsLayout }>;
