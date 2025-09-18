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
