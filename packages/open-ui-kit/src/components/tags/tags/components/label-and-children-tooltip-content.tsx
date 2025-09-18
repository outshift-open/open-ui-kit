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
