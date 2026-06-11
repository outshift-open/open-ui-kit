/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@mui/material";
import type { FilterData } from "../../types";
import { getStyles } from "./styles";
import { Tag } from "@/components/tags";
import { Tooltip } from "@/components/tooltip";
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
  const theme = useTheme();
  const styles = getStyles(theme);
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
      <span>
        <Tag
          size={GeneralSize.Large}
          sx={styles.chip}
          onDelete={() => handleDelete(filter)}
        >{`${filter.name}: ${optionValues[0]}${plusString}`}</Tag>
      </span>
    </Tooltip>
  );
};
