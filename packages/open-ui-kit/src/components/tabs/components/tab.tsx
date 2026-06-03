/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Spinner } from "@/components/spinner";
import { Tab as MuiTab, useTheme } from "@mui/material";
import { getTabStyles } from "../styles";
import type { TabProps } from "../types";

export const Tab = ({
  loading,
  sx,
  type = "main",
  label,
  ...props
}: TabProps) => {
  const theme = useTheme();
  const internalSx = getTabStyles(theme, type);

  if (loading) {
    return (
      <MuiTab
        iconPosition="start"
        icon={<Spinner size={20} color="secondary" />}
        label={label}
        sx={[
          internalSx,
          {
            alignItems: "center",
            display: "flex",
            gap: "8px",
            justifyContent: "center",
          },
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
        {...props}
      />
    );
  }

  return (
    <MuiTab
      label={label}
      sx={[internalSx, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
      {...props}
    />
  );
};
