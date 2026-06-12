/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { type Theme, Typography } from "@mui/material";
import { OverflowTooltip } from "@/components/overflow-tooltip";
import { AugmentedSelectNodeType } from "@/components/nested-menu";
import { ellipsisStyle } from "@/theme/style/common";
import { formatNodeValue } from "../utils/treeSelect";
import { overflowTooltipPopperStyle, searchMatchTextStyle } from "../styles";

export const buildNodeLabelElement = (
  selectNode: AugmentedSelectNodeType,
  searchText = "",
  theme: Theme,
): JSX.Element => {
  const nodeLabel = formatNodeValue(selectNode);

  let nodeLabelElement: string | JSX.Element = nodeLabel;
  const index = nodeLabel.toLowerCase().indexOf(searchText.toLowerCase());
  if (index !== -1 && searchText !== "") {
    const [before, match, after] = [
      nodeLabel.substring(0, index),
      nodeLabel.substring(index, index + searchText.length),
      nodeLabel.substring(index + searchText.length),
    ];

    nodeLabelElement = (
      <>
        {before}
        <span style={searchMatchTextStyle(theme)}>{match}</span>
        {after}
      </>
    );
  }

  return (
    <Typography variant="body1" sx={ellipsisStyle} component="div">
      <OverflowTooltip
        value={nodeLabel}
        slotProps={{
          popper: {
            sx: {
              ...overflowTooltipPopperStyle,
              // This is a workaround to stop the tooltip from showing through virtualization overscan
              "&[data-popper-reference-hidden]": {
                visibility: "hidden",
                pointerEvents: "none",
              },
            },
          },
        }}
      >
        {nodeLabelElement}
      </OverflowTooltip>
    </Typography>
  );
};
