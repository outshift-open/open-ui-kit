/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ListItem, ListItemProps, Typography } from "@mui/material";
import { ComponentProps, ReactElement } from "react";
import { SelectNode } from "./select-node";
import { selectNodeListItemStyle } from "../styles/styles";

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
  return (
    <ListItem
      {...listItemProps}
      sx={{
        ...selectNodeListItemStyle,
        ...(!isSelectable && { cursor: "unset" }),
      }}
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
        <Typography variant="body2" sx={{ cursor: "pointer" }}>
          {selectableLeavesCount}
        </Typography>
      )}
    </ListItem>
  );
};
