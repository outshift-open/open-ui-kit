/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useRef, useState } from "react";
import { isLeaf } from "../utils/treeSelect";
import { NestedMenuListbox } from "./nested-menu-listbox";
import { SelectNode } from "./select-node";
import { SelectNodeListItem } from "./select-node-list-item";
import { Box, Popover, type Theme, Typography, useTheme } from "@mui/material";
import { Button } from "@/components/button";
import { buildNodeLabelElement } from "../utils/utils";
import {
  getNestedMenuPopoverPaperStyles,
  getNestedMenuTriggerButtonStyles,
  getNestedMenuTriggerContentStyles,
  getNestedMenuTriggerIconStyles,
} from "../styles";
import type { NestedMenuProps } from "../types";

export { useNestedMenu } from "../hooks/useNestedMenu";

export const NestedMenu = ({
  buttonContent,
  buttonSize = "medium",
  flattenedTreeOptions = [],
  id = "simple-popover",
  isIconAllowed = true,
  isSearchFieldEnabled = true,
  onSelectAllChange,
  parentSelectOnly = false,
  searchText,
  selectAllNode,
  popOverPaperSx,
  buttonProps,
  setSearchText,
  toggleExpand,
  updateCheckbox,
}: NestedMenuProps) => {
  const theme = useTheme();
  const [openDropdown, setOpenDropdown] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const { sx: buttonSx, onClick, ...restButtonProps } = buttonProps ?? {};

  return (
    <Box>
      <Box ref={anchorRef} display="inline-block">
        <Button
          aria-describedby={id}
          variant="outlined"
          size={buttonSize}
          onClick={(event) => {
            onClick?.(event);
            if (!event.defaultPrevented) {
              setOpenDropdown(true);
            }
          }}
          sx={[
            (theme) => getNestedMenuTriggerButtonStyles(theme),
            ...(Array.isArray(buttonSx)
              ? buttonSx
              : buttonSx
                ? [buttonSx]
                : []),
          ]}
          {...restButtonProps}
        >
          <Box sx={getNestedMenuTriggerContentStyles()}>
            {typeof buttonContent === "string" ? (
              <Typography variant="body1">{buttonContent}</Typography>
            ) : (
              buttonContent
            )}
            <Box sx={getNestedMenuTriggerIconStyles()}>
              {openDropdown ? <ExpandLess /> : <ExpandMore />}
            </Box>
          </Box>
        </Button>
      </Box>
      <Popover
        id={id}
        open={openDropdown}
        anchorEl={anchorRef.current}
        onClose={() => setOpenDropdown(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: [
              (theme: Theme) => getNestedMenuPopoverPaperStyles(theme),
              ...(Array.isArray(popOverPaperSx)
                ? popOverPaperSx
                : popOverPaperSx
                  ? [popOverPaperSx]
                  : []),
            ],
          },
          root: {
            sx: {
              top: "4px",
            },
          },
        }}
      >
        <NestedMenuListbox
          selectAllNode={selectAllNode}
          onSelectAllChange={onSelectAllChange}
          isIconAllowed={isIconAllowed}
          isSearchFieldEnabled={isSearchFieldEnabled}
          searchText={searchText}
          setSearchText={setSearchText}
        >
          {flattenedTreeOptions.map((option) => {
            const selectableLeavesCount =
              option?.childNodes && option.childNodes.length > 0
                ? option.selectableLeavesCount
                : null;
            const isLeafNode = isLeaf(option);
            const nodeLabel = buildNodeLabelElement(option, searchText, theme);

            return option ? (
              <SelectNodeListItem
                isLeaf={isLeafNode}
                isSelectable={option.isSelectable}
                key={option.nodeKey ?? option.value}
                selectableLeavesCount={selectableLeavesCount}
                onClick={() => updateCheckbox(option, !option.isSelected)}
                onExpand={() => toggleExpand({ selectNode: option })}
                selectNodeElement={
                  <SelectNode
                    nodeLabel={nodeLabel}
                    isExpanded={option.isExpanded}
                    isIconAllowed={isIconAllowed}
                    isLeaf={isLeafNode}
                    isParentNode={Boolean(option.parentNode)}
                    isSelectable={option.isSelectable}
                    isSelected={option.isSelected}
                    selectableLeavesCount={option.selectableLeavesCount}
                    nestLevel={option.nestLevel}
                    nodeIcon={option.icon}
                    onCheckboxClick={(isSelected) =>
                      updateCheckbox(option, isSelected)
                    }
                    onExpand={() => toggleExpand({ selectNode: option })}
                    parentSelectOnly={parentSelectOnly}
                    selectedLeavesCount={option.selectedLeavesCount}
                  />
                }
              />
            ) : null;
          })}
        </NestedMenuListbox>
      </Popover>
    </Box>
  );
};
