/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Spinner } from "@/components";
import { TabProps as MuiTabProps, Tab as MuiTab } from "@mui/material";

export const Tab = ({ loading, ...props }: MuiTabProps) => {
  if (loading) {
    return (
      <MuiTab
        iconPosition="start"
        icon={<Spinner size={20} color="secondary" />}
        label="Loading"
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          ...props.sx,
        }}
        {...props}
      />
    );
  }
  return <MuiTab {...props} />;
};
