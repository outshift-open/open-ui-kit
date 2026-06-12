/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Typography, useTheme } from "@mui/material";
import { ComponentProps, ReactElement } from "react";
import { ListItem, type ListItemProps } from "@/components/list";
import { SelectNode } from "./select-node";
import { selectNodeListItemStyle } from "../styles";

interface SelectNodeListItemProps {
  isLeaf: boolean;
  isSelectable?: boolean;
  listItemProps?: ListItemProps;
  onClick: () => void;
  onExpand?: () => void;
  selectNodeElement: ReactElement<ComponentProps<typeof SelectNode>>;
  selectableLeavesCount?: number | null;
}

export const SelectNodeListItem = ({
  isLeaf,
  isSelectable = true,
  listItemProps = {},
  onClick,
  onExpand,
  selectNodeElement,
  selectableLeavesCount = null,
}: SelectNodeListItemProps) => {
  const theme = useTheme();
  return (
    <ListItem
      {...listItemProps}
      sx={[
        {
          ...selectNodeListItemStyle,
          ...(!isSelectable && { cursor: "unset" }),
        },
        ...(Array.isArray(listItemProps.sx)
          ? listItemProps.sx
          : listItemProps.sx
            ? [listItemProps.sx]
            : []),
      ]}
      onClick={(event) => {
        event.stopPropagation();
        if (isLeaf && isSelectable) {
          onClick();
        } else {
          onExpand?.();
        }
      }}
    >
      {selectNodeElement}
      {selectableLeavesCount && (
        <Typography
          variant="body2"
          sx={{ cursor: "pointer", color: theme.palette.vars.baseTextWeak }}
        >
          {selectableLeavesCount}
        </Typography>
      )}
    </ListItem>
  );
};
