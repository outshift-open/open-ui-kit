/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { OverflowTooltip } from "@/components/overflow-tooltip";
import type { ReactNode } from "react";
import type { SelectNodeType } from "@/components/nested-menu";

interface TagLabelProps {
  node: SelectNodeType;
  nodeLabel: string;
  customizeTooltip?: (node: SelectNodeType) => ReactNode;
}

const TagLabel = ({ customizeTooltip, node, nodeLabel }: TagLabelProps) => {
  return (
    <OverflowTooltip
      value={customizeTooltip ? customizeTooltip(node) : nodeLabel}
      slotProps={{
        popper: {
          sx: {
            wordBreak: "break-word",
          },
        },
      }}
    >
      {nodeLabel}
    </OverflowTooltip>
  );
};

export default TagLabel;
