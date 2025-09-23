/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { type IconButtonProps, IconButton } from "@mui/material";
import { Reload } from "@/custom-icons";
import { Tooltip } from "@/components";

interface Props extends IconButtonProps {
  onReload: () => void;
  isLoading: boolean;
}

const ReloadTableButton = ({ onReload, isLoading, ...rest }: Props) => (
  <Tooltip title="Reload">
    <IconButton
      aria-label="reload-table"
      onClick={onReload}
      disabled={isLoading}
      {...rest}
    >
      <Reload />
    </IconButton>
  </Tooltip>
);

export default ReloadTableButton;
