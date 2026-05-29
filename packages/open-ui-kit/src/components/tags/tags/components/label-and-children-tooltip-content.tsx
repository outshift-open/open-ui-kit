/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SelectNodeType } from "@/types";
import {
  formatNodeValue,
  getChildrenOfTopLevelNode,
  mergeNodeChildrenValueToText,
} from "@/common";
import { Stack, Typography } from "@mui/material";

const LabelAndChildrenTooltipContent = ({ node }: { node: SelectNodeType }) => {
  const nodeLabel = formatNodeValue(node);
  const childrenText = mergeNodeChildrenValueToText(
    getChildrenOfTopLevelNode(node),
  );
  return (
    <Stack>
      <Typography variant="caption">
        <b>{nodeLabel}</b>
      </Typography>
      {childrenText && (
        <>
          <br />
          <Typography variant="caption">
            <b>Selected children:</b>
          </Typography>
          <Typography variant="caption">{childrenText}</Typography>
        </>
      )}
    </Stack>
  );
};

export default LabelAndChildrenTooltipContent;
