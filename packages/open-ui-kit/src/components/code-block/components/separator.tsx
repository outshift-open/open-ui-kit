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
  size?: "small" | "medium";
}

export const Separator = ({
  showLineNumbers,
  lineNumberWidth,
  size = "medium",
}: SeparatorProps) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"}>
      {showLineNumbers && (
        <Box sx={separatorFirstBox(theme, lineNumberWidth, size)} />
      )}

      <Box sx={separatorSecondBox(theme, showLineNumbers, size)} />
    </Stack>
  );
};
