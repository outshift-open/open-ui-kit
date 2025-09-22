/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { styles } from "./styles";
import { FilterOptionData } from "../../types/types";
import { OverflowTooltip } from "@/components";

export interface FilterOptionProps {
  option: FilterOptionData;
  onOptionToggled: (option: FilterOptionData) => void;
  valueFormatter?: (value: string | number) => string;
  searchText: string;
  level: number;
  isSelectAllEnabled?: boolean;
}

export const FilterOptionItem = ({
  option,
  onOptionToggled,
  valueFormatter,
  searchText,
  isSelectAllEnabled = false,
  level,
}: FilterOptionProps) => {
  const handleToggle = () => {
    onOptionToggled({ ...option, isSelected: !option.isSelected });
  };

  const buildValueLabel = () => {
    const formattedValue = valueFormatter
      ? valueFormatter(option.value)
      : option.value.toString();

    const index = formattedValue
      .toLowerCase()
      .indexOf(searchText.toLowerCase());

    const [before, match, after] = [
      formattedValue.substring(0, index),
      formattedValue.substring(index, index + searchText.length),
      formattedValue.substring(index + searchText.length),
    ];

    const text = (
      <>
        {before}
        <span style={styles.searchMatchText}>{match}</span>
        {after}
      </>
    );

    return (
      <Typography variant="body2">
        <OverflowTooltip
          value={text}
          someLongText={text}
          componentsProps={{
            tooltip: {
              sx: {
                maxWidth: "240px",
                display: "flow",
                padding: "8px",
              },
            },
          }}
        />
      </Typography>
    );
  };

  return (
    <ListItem disablePadding sx={styles.listItem(level, !!isSelectAllEnabled)}>
      <ListItemButton sx={styles.listItemButton} onClick={handleToggle}>
        <Checkbox disableRipple edge="start" checked={option.isSelected} />
        <ListItemText>{buildValueLabel()}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
