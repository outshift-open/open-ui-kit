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
