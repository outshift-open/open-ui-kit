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

import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { ReactNode, useRef, useState } from "react";
import { AugmentedSelectNodeType } from "@/types";
import { isLeaf } from "@/common";
import {
  DropdownAutocompleteTreeListbox,
  SelectNode,
  SelectNodeListItem,
} from "..";
import {
  Box,
  Button,
  ButtonProps,
  Popover,
  SvgIconProps,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import { buildNodeLabelElement } from "../utils/utils";

export interface DropdownAutocompleteTreeProps {
  buttonContent: ReactNode;
  buttonSize?: "medium" | "large";
  flattenedTreeOptions: AugmentedSelectNodeType[];
  id?: string;
  isIconAllowed?: boolean;
  isSearchFieldEnabled?: boolean;
  onSelectAllChange?: (isSelected: boolean) => void;
  parentSelectOnly?: boolean;
  searchText: string;
  selectAllIcon?: React.ElementType<SvgIconProps>;
  selectAllNode: AugmentedSelectNodeType;
  setSearchText: (text: string) => void;
  toggleExpand: (args: { selectNode: AugmentedSelectNodeType }) => void;
  updateCheckbox: (
    selectNode: AugmentedSelectNodeType,
    isSelected: boolean,
  ) => void;
  popOverPaperSx?: SxProps;
  buttonProps?: ButtonProps;
}

export { useDropdownAutocompleteTree } from "../hooks/useDropdownAutocompleteTree";

export const DropdownAutocompleteTree = ({
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
}: DropdownAutocompleteTreeProps) => {
  const theme = useTheme();
  const [openDropdown, setOpenDropdown] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <Box>
      <Button
        aria-describedby={id}
        variant="outlined"
        size={buttonSize}
        onClick={() => setOpenDropdown(true)}
        ref={buttonRef}
        sx={{
          backgroundColor: `${theme.palette.vars?.controlBackgroundDefault} !important`,
          border: `2px solid ${theme.palette.vars?.controlBorderDefault} !important`,
          color: theme.palette.vars?.baseTextWeak,
          "&:hover": {
            border: `2px solid ${theme.palette.vars?.controlBorderHover} !important`,
          },
          "&:focus": {
            border: `2px solid ${theme.palette.vars?.controlBorderHover} !important`,
          },
          "&:active": {
            border: `2px solid ${theme.palette.vars?.controlBorderActive} !important`,
          },
          "&.Mui-disabled": {
            border: `2px solid ${theme.palette.vars?.controlBorderDisabled} !important`,
            backgroundColor: `${theme.palette.vars?.controlBackgroundDisabled} !important`,
          },
          "&.MuiButton-outlinedSizeMedium": {
            padding: "6px 8px 6px 16px !important",
          },
          "& .MuiSvgIcon-root": {
            color: `${theme.palette.vars?.controlIconDefault} !important`,
          },
        }}
        {...buttonProps}
      >
        <Box
          display="flex"
          alignContent={"center"}
          width="100%"
          justifyContent={"space-between"}
        >
          {typeof buttonContent === "string" ? (
            <Typography variant="body1">{buttonContent}</Typography>
          ) : (
            buttonContent
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "8px",
            }}
          >
            {openDropdown ? <ExpandLess /> : <ExpandMore />}
          </Box>
        </Box>
      </Button>
      <Popover
        id={id}
        open={openDropdown}
        anchorEl={buttonRef.current}
        onClose={() => setOpenDropdown(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: {
              width: "484px",
              height: "404px",
              overflowY: "auto",
              padding: "12px 0px",
              "& .MuiStack-root": {
                padding: "0px",
              },
              "& .MuiInput-root": {
                marginTop: "0px",
              },
              "& .MuiTextField-root": {
                padding: "0px 16px 8px 16px",
              },
              "& .MuiListItem-root": {
                background: "transparent",
                padding: "8px 16px 8px 16px",
              },
              "& .MuiCheckbox-root": {
                marginLeft: "-3px",
              },
              "& .MuiButton-root": {
                minWidth: "0px",
                padding: "0px",
                margin: "0px",
              },
              ...popOverPaperSx,
            },
          },
          root: {
            sx: {
              top: "4px",
            },
          },
        }}
      >
        <DropdownAutocompleteTreeListbox
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
        </DropdownAutocompleteTreeListbox>
      </Popover>
    </Box>
  );
};
