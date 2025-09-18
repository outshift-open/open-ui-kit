/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Theme, Typography } from "@mui/material";
import { OverflowTooltip } from "@/components";
import { AugmentedSelectNodeType } from "@/types";
import { ellipsisStyle, formatNodeValue } from "@/common";
import {
  overflowTooltipPopperStyle,
  searchMatchTextStyle,
} from "../styles/styles";

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
    <Typography variant="body2" sx={ellipsisStyle} component="div">
      <OverflowTooltip
        value={nodeLabel}
        someLongText={nodeLabelElement}
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
      />
    </Typography>
  );
};
