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

import { Tooltip } from "@mui/material";
import { FilterData } from "../../types/types";
import { styles } from "./styles";
import { Tag } from "@/components";
import { GeneralSize } from "@/common";

interface FilterChipProps {
  filter: FilterData;
  optionValues: string[];
  handleDelete: (filter: FilterData) => void;
}

export const FilterChip = ({
  filter,
  optionValues,
  handleDelete,
}: FilterChipProps) => {
  if (optionValues.length === 0) {
    return <></>;
  }

  const plusString =
    optionValues.length > 1 ? `, +${optionValues.length - 1}` : ``;

  return (
    <Tooltip
      key={filter.name}
      title={`${filter.name}: ${optionValues.join(", ")}`}
      placement="top-end"
      slotProps={{
        popper: styles.chipTooltip,
      }}
    >
      <Tag
        size={GeneralSize.Small}
        sx={styles.chip}
        onDelete={() => handleDelete(filter)}
      >{`${filter.name}: ${optionValues[0]}${plusString}`}</Tag>
    </Tooltip>
  );
};
