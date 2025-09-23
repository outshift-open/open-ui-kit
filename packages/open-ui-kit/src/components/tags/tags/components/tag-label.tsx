/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { OverflowTooltip } from "@/components";
import { SelectNodeType } from "@/types";

interface TagLabelProps {
  node: SelectNodeType;
  nodeLabel: string;
  customizeTooltip?: (node: SelectNodeType) => React.ReactNode;
  shouldTruncate: boolean;
}

const TagLabel = ({ customizeTooltip, node, nodeLabel }: TagLabelProps) => {
  return (
    <OverflowTooltip
      value={customizeTooltip ? customizeTooltip(node) : nodeLabel}
      someLongText={nodeLabel}
      slotProps={{
        popper: {
          sx: {
            wordBreak: "break-word",
          },
        },
      }}
    />
  );
};

export default TagLabel;
