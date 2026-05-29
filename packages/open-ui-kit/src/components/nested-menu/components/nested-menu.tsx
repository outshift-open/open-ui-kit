/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { ReactNode, useRef, useState } from "react";
import { AugmentedSelectNodeType } from "@/types";
import { isLeaf } from "@/common";
import { NestedMenuListbox } from "./nested-menu-listbox";
import { SelectNode } from "./select-node";
import { SelectNodeListItem } from "./select-node-list-item";
import {
  Box,
  ButtonProps,
  Popover,
  SvgIconProps,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { Button } from "@/components/button";
import { buildNodeLabelElement } from "../utils/utils";

export interface NestedMenuProps {
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
  const getPopoverPaperSx = (theme: Theme) => ({
    width: "480px",
    maxHeight: "375px",
    overflowY: "auto",
    padding: "8px 0px",
    backgroundColor: theme.palette.vars.controlBackgroundWeak,
    border: `2px solid ${theme.palette.vars.controlBorderActive}`,
    boxShadow: "0px 2px 5px rgba(200, 213, 245, 0.4)",
    borderRadius: "4px",
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
      padding: "8px 16px",
    },
    "& .MuiCheckbox-root": {
      marginLeft: "-3px",
    },
    "& .MuiButton-root": {
      minWidth: "0px",
      padding: "0px",
      margin: "0px",
    },
  });

  return (
    <Box>
      <Box ref={anchorRef} display="inline-block">
        <Button
          aria-describedby={id}
          variant="outlined"
          size={buttonSize}
          onClick={() => setOpenDropdown(true)}
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
              getPopoverPaperSx,
              ...(Array.isArray(popOverPaperSx)
                ? popOverPaperSx
                : popOverPaperSx
                  ? [popOverPaperSx]
                  : []),
            ] as SxProps<Theme>,
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
