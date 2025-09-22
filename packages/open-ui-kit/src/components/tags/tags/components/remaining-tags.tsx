/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AugmentedSelectNodeType } from "@/types";
import { formatNodeValue } from "@/common";
import { Typography } from "@mui/material";
import { Tooltip } from "@/components";

export const RemainingTags = ({
  tags,
}: {
  tags: AugmentedSelectNodeType[];
}) => (
  <Tooltip
    title={
      <Typography
        variant="caption"
        sx={{ overflowY: "auto", maxHeight: "100px" }}
      >
        {tags.map((node) => formatNodeValue(node)).join(", ")}
      </Typography>
    }
  >
    <Typography variant="body2">+{tags.length}</Typography>
  </Tooltip>
);
