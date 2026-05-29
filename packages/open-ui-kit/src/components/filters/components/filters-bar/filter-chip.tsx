/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Tooltip, useTheme } from "@mui/material";
import { FilterData } from "../../types/types";
import { getStyles } from "./styles";
import { Tag } from "@/components/tags/tag";
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
      <Tag
        size={GeneralSize.Small}
        sx={styles.chip}
        onDelete={() => handleDelete(filter)}
      >{`${filter.name}: ${optionValues[0]}${plusString}`}</Tag>
    </Tooltip>
  );
};
