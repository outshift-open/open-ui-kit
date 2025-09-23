/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Stack, useTheme } from "@mui/material";
import { separatorFirstBox, separatorSecondBox } from "../styles";

interface SeparatorProps {
  showLineNumbers?: boolean;
  lineNumberWidth: number;
}

export const Separator = ({
  showLineNumbers,
  lineNumberWidth,
}: SeparatorProps) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"}>
      {showLineNumbers && (
        <Box sx={separatorFirstBox(theme, lineNumberWidth)} />
      )}

      <Box sx={separatorSecondBox(theme, showLineNumbers)} />
    </Stack>
  );
};
