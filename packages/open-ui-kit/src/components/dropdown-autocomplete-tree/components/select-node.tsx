/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Checkbox, IconButton, Stack, SvgIconProps } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { iconStyle, selectNodeStyle } from "../styles/styles";
import { EMPTY_FUNCTION } from "@/common";

export interface SelectNodeProps {
  isExpanded?: boolean;
  isIconAllowed?: boolean;
  isLeaf: boolean;
  isParentNode: boolean;
  isSelectAllNode?: boolean;
  isSelectable?: boolean;
  isSelected?: boolean;
  nestLevel?: number;
  nodeIcon?: React.ElementType<SvgIconProps> | null;
  nodeLabel: JSX.Element;
  onCheckboxClick: (isSelected: boolean) => void;
  onExpand?: () => void;
  parentSelectOnly?: boolean;
  selectableLeavesCount?: number;
  selectedLeavesCount?: number;
}

export const SelectNode = ({
  isExpanded = false,
  isIconAllowed = true,
  isLeaf,
  isParentNode,
  isSelectAllNode = false,
  isSelectable = true,
  isSelected = false,
  nestLevel,
  nodeIcon,
  nodeLabel,
  onCheckboxClick,
  onExpand = EMPTY_FUNCTION,
  parentSelectOnly,
  selectableLeavesCount = 0,
  selectedLeavesCount = -1,
}: SelectNodeProps) => {
  const NodeIcon = nodeIcon;

  const hasCheckbox = parentSelectOnly ? !isParentNode : isSelectable;
  const isCheckboxIndeterminate =
    (!isLeaf || isSelectAllNode) &&
    selectedLeavesCount > 0 &&
    selectedLeavesCount < selectableLeavesCount;

  const checkCheckboxStatus = () => {
    if (isSelectAllNode) {
      return selectedLeavesCount === selectableLeavesCount;
    }

    return isSelected;
  };

  return (
    <Stack
      sx={{
        ...selectNodeStyle(nestLevel || 0),
        ...(!isSelectable && { cursor: "unset" }),
        ...(isSelectAllNode && {
          marginLeft: "-3px",
        }),
      }}
    >
      {!isSelectAllNode && (
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            onExpand();
          }}
          size="small"
          sx={{ visibility: isLeaf ? "hidden" : "visible" }}
        >
          {isExpanded ? (
            <KeyboardArrowDown sx={iconStyle} />
          ) : (
            <KeyboardArrowRight sx={iconStyle} />
          )}
        </IconButton>
      )}

      {hasCheckbox && (
        <Checkbox
          checked={checkCheckboxStatus()}
          indeterminate={isCheckboxIndeterminate}
          onChange={(event) => {
            event.stopPropagation();
            onCheckboxClick(event.target.checked);
          }}
          onClick={(event) => event.stopPropagation()}
        />
      )}
      {isIconAllowed && NodeIcon && <NodeIcon sx={{ margin: 0 }} />}
      {nodeLabel}
    </Stack>
  );
};
