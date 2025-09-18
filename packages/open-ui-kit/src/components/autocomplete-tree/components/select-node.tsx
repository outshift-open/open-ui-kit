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

import {
  ComponentProps,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from "react";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import {
  ellipsisStyle,
  EMPTY_FUNCTION,
  formatNodeValue,
  isLeaf,
} from "@/common";
import { PA_Colors } from "@/theme/dark/dark-color-palette";
import { AugmentedSelectNodeType } from "@/types";
import { useAutocompleteTreeContext } from "./autocomplete-tree-context";
import {
  iconStyle,
  overflowTooltipPopperStyle,
  searchMatchText,
  selectNodeListItemStyle,
  selectNodeStyle,
} from "../styles";
import {
  Button,
  Checkbox,
  ListItem,
  ListItemProps,
  Stack,
  Typography,
} from "@mui/material";
import { OverflowTooltip } from "@/components/overflow-tooltip";

const buildDisplayLabelElement = (
  selectNode: AugmentedSelectNodeType,
  searchText = "",
): JSX.Element => {
  const displayLabel = formatNodeValue(selectNode);

  let displayLabelElement: string | JSX.Element = displayLabel;
  const index = displayLabel.toLowerCase().indexOf(searchText.toLowerCase());
  if (index !== -1 && searchText !== "") {
    const [before, match, after] = [
      displayLabel.substring(0, index),
      displayLabel.substring(index, index + searchText.length),
      displayLabel.substring(index + searchText.length),
    ];

    displayLabelElement = (
      <>
        {before}
        <span style={searchMatchText}>{match}</span>
        {after}
      </>
    );
  }

  return (
    <Typography variant="body2" sx={ellipsisStyle} component="div">
      <OverflowTooltip
        value={displayLabel}
        someLongText={displayLabelElement}
        slotProps={{
          popper: {
            sx: {
              ...overflowTooltipPopperStyle,
              // This is a workaround to stop the tooltip from showing through virtualization overscan
              "&[data-popper-reference-hidden]": {
                visibility: "hidden",
                pointerEvents: "none",
              },
            },
          },
        }}
      />
    </Typography>
  );
};

export interface SelectNodeProps {
  selectNode: AugmentedSelectNodeType;
  onExpand?: () => void;
  onCheckboxClick: (isSelected: boolean) => void;
  isSelectable?: boolean;
  isSelectAllNode?: boolean;
  searchText?: string;
}

export const SelectNode = ({
  selectNode,
  onExpand = EMPTY_FUNCTION,
  onCheckboxClick,
  isSelectAllNode = false,
  searchText = "",
  isSelectable = true,
}: SelectNodeProps) => {
  const { parentSelectOnly } = useAutocompleteTreeContext();
  const NodeIcon = selectNode.icon;
  const [isSelected, setIsSelected] = useState(selectNode.isSelected ?? false);
  const isLeafNode = isLeaf(selectNode);
  const selectableLeavesCount = selectNode.selectableLeavesCount || 0;
  const selectedLeavesCount = selectNode.selectedLeavesCount || -1;
  const displayLabel = useMemo(
    () => buildDisplayLabelElement(selectNode, searchText),
    [searchText, selectNode],
  );

  useEffect(() => {
    setIsSelected(selectNode.isSelected ?? false);
  }, [selectNode.isSelected]);

  const isCheckboxSelected =
    isLeafNode && !isSelectAllNode
      ? isSelected
      : selectableLeavesCount === selectedLeavesCount;
  const isCheckboxIndeterminate =
    (!isLeafNode || isSelectAllNode) &&
    selectedLeavesCount > 0 &&
    selectedLeavesCount < selectableLeavesCount;

  const hasCheckbox = parentSelectOnly ? !selectNode.parentNode : isSelectable;

  return (
    <Stack
      sx={{
        ...selectNodeStyle(selectNode.nestLevel || 0),
        ...(!isSelectable && { cursor: "unset" }),
      }}
    >
      <Button
        onClick={(event) => {
          event.stopPropagation();
          onExpand();
        }}
        size="small"
        sx={{ visibility: isLeafNode ? "hidden" : "visible" }}
      >
        {selectNode.isExpanded ? (
          <KeyboardArrowDown sx={iconStyle} />
        ) : (
          <KeyboardArrowRight sx={iconStyle} />
        )}
      </Button>
      {hasCheckbox && (
        <Checkbox
          checked={isCheckboxSelected}
          indeterminate={isCheckboxIndeterminate}
          onChange={(event) => {
            event.stopPropagation();
            setIsSelected(event.target.checked);
            onCheckboxClick(event.target.checked);
          }}
          onClick={(event) => event.stopPropagation()}
        />
      )}
      {NodeIcon && <NodeIcon sx={{ margin: 0 }} />}
      {displayLabel}
    </Stack>
  );
};

interface SelectNodeListItemProps {
  selectNodeElement: ReactElement<ComponentProps<typeof SelectNode>>;
  selectableLeavesCount?: number | null;
  listItemProps?: ListItemProps;
  onClick?: () => void;
}

export const SelectNodeListItem = ({
  selectNodeElement,
  selectableLeavesCount = null,
  listItemProps = {},
  onClick = EMPTY_FUNCTION,
}: SelectNodeListItemProps) => {
  return (
    <ListItem
      {...listItemProps}
      sx={selectNodeListItemStyle}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      {selectNodeElement}
      {selectableLeavesCount && (
        <Typography
          variant="body2"
          color={PA_Colors.grey[200]}
          sx={{ cursor: "pointer" }}
        >
          {selectableLeavesCount}
        </Typography>
      )}
    </ListItem>
  );
};
