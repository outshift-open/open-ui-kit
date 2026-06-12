/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  StyledKeyValueKey,
  StyledKeyValuePair,
  StyledKeyValuePairs,
  StyledKeyValueValue,
} from "./elements";
import type { KeyValuePairsProps } from "../types";

const toSxArray = (sx: KeyValuePairsProps["sx"]) =>
  Array.isArray(sx) ? sx : sx ? [sx] : [];

export const KeyValuePairs = ({
  items,
  layout = "inline",
  columns = 1,
  keyWidth = "72px",
  pairGap = "16px",
  columnGap = "72px",
  rowGap = "12px",
  sx,
  ...props
}: KeyValuePairsProps) => {
  const safeColumns = Math.max(1, columns);
  const rowCount = Math.max(1, Math.ceil(items.length / safeColumns));

  return (
    <StyledKeyValuePairs
      component="dl"
      columns={safeColumns}
      rowCount={rowCount}
      columnGap={columnGap}
      rowGap={rowGap}
      sx={toSxArray(sx)}
      {...props}
    >
      {items.map((item, index) => (
        <StyledKeyValuePair
          component="div"
          key={index}
          layout={layout}
          pairGap={pairGap}
        >
          <StyledKeyValueKey component="dt" layout={layout} keyWidth={keyWidth}>
            {item.key}
          </StyledKeyValueKey>
          <StyledKeyValueValue component="dd" layout={layout}>
            {item.value}
          </StyledKeyValueValue>
        </StyledKeyValuePair>
      ))}
    </StyledKeyValuePairs>
  );
};
