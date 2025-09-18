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

import { useMemo } from "react";
import { CloseOutlined } from "@mui/icons-material";
import { formatNodeValue } from "@/common";
import { AugmentedSelectNodeType } from "@/types";
import { chip, overflowTooltipPopperStyle } from "../styles";
import { Chip, Stack, Typography } from "@mui/material";
import { OverflowTooltip, Tooltip } from "@/components";

interface AutocompleteTreeTagsProps {
  selectedValues: AugmentedSelectNodeType[];
  updateCheckbox: (
    selectNode: AugmentedSelectNodeType | AugmentedSelectNodeType[],
    isSelected: boolean,
  ) => void;
  maxTooltipTags?: number;
  disabled?: boolean;
}

export const AutocompleteTreeTags = ({
  selectedValues,
  updateCheckbox,
  maxTooltipTags = 100,
  disabled = false,
}: AutocompleteTreeTagsProps) => {
  const labels = useMemo(
    () => selectedValues.map((node) => formatNodeValue(node)),
    [selectedValues],
  );

  const Icon = selectedValues[0].icon;
  const firstChip = (
    <Chip
      key={selectedValues[0].nodeKey ?? selectedValues[0].value}
      label={
        <OverflowTooltip
          value={labels[0]}
          someLongText={labels[0]}
          PopperProps={{ sx: overflowTooltipPopperStyle }}
        />
      }
      size="small"
      icon={Icon ? <Icon fill="#fff" /> : undefined}
      sx={chip}
      onDelete={() => updateCheckbox(selectedValues[0], false)}
      deleteIcon={<CloseOutlined />}
      disabled={disabled}
    />
  );

  return (
    <Stack direction="row" gap="8px" alignItems="center">
      {firstChip}
      {selectedValues.length > 1 && (
        <Tooltip
          title={
            <Typography
              variant="caption"
              sx={{ overflowY: "auto", maxHeight: "100px" }}
            >
              {selectedValues
                .slice(1, maxTooltipTags)
                .map((node, index) => labels[index + 1])
                .join(", ")}
              {selectedValues.length - 1 > maxTooltipTags && ", and more..."}
            </Typography>
          }
        >
          <Typography variant="body2">+{selectedValues.length - 1}</Typography>
        </Tooltip>
      )}
    </Stack>
  );
};
