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

import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  formatNodeValue,
  augmentTreeData,
  flattenSelectTree,
  getAllSelectedLeaves,
  getLeafCounts,
  isLeaf,
  getAllSelectedParents,
  deepCopyTree,
  useDebouncedValue,
  EMPTY_FUNCTION,
} from "@/common";

import { AugmentedSelectNodeType, SelectNodeType } from "@/types";

import { AutocompleteTreeProvider } from "./autocomplete-tree-context";
import { AutocompleteTreeTags } from "./autocomplete-tree-tags";
import { SelectNode, SelectNodeListItem } from "./select-node";
import { VirtualTreeListbox } from "./virtual-tree-listbox";
import {
  Autocomplete,
  AutocompleteProps,
  ClickAwayListener,
  PopperProps,
  SvgIconProps,
  SxProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { autocompleteStyles, defaultPopperContentStyles } from "../styles";

export interface AutocompleteTreeProps {
  selectTree: SelectNodeType[];
  onSelectionChange?: (selectedOptions: SelectNodeType[]) => void;
  isSearchFieldEnabled?: boolean;
  isSelectAllEnabled?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  selectAllIcon?: React.ElementType<SvgIconProps>;
  searchDebounceMS?: number;
  label?: string;
  disabled?: boolean;
  parentSelectOnly?: boolean;
  isClearDisabled?: boolean;
  virtualizationOverscanPx?: number;
  maxTooltipTags?: number;
  autocompleteTextFieldProps?: Partial<TextFieldProps>;
  autocompletePopperProps?: Partial<PopperProps>;
  autocompletePaperSx?: SxProps;
  autocompleteProps?: Partial<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    AutocompleteProps<any, boolean, boolean, boolean>
  >;
}

export const AutocompleteTree = ({
  autocompletePaperSx,
  autocompletePopperProps,
  autocompleteProps,
  autocompleteTextFieldProps,
  disabled = false,
  isClearDisabled = false,
  isSearchFieldEnabled = true,
  isSelectAllEnabled = false,
  label,
  maxTooltipTags = 100,
  onSelectionChange = EMPTY_FUNCTION,
  parentSelectOnly = false,
  placeholder,
  searchDebounceMS = 0,
  searchPlaceholder,
  selectAllIcon: SelectAllIcon,
  selectTree: initialSelectTree,
  virtualizationOverscanPx = 800,
}: AutocompleteTreeProps) => {
  // Deep copy the tree to prevent modifying the user's tree
  const selectTree = useMemo(
    () => deepCopyTree(initialSelectTree),
    [initialSelectTree],
  );
  const labels = useMemo(() => {
    const map = new Map<SelectNodeType, string>();
    selectTree.forEach((node) => map.set(node, formatNodeValue(node)));

    return map;
  }, [selectTree]);

  const [refreshHelper, setRefreshHelper] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchTextDebounced = useDebouncedValue(searchText, searchDebounceMS);

  const selectionFilter = parentSelectOnly
    ? getAllSelectedParents
    : getAllSelectedLeaves;

  const [selectedValues, setSelectedValues] = useState<
    AugmentedSelectNodeType[]
  >(selectionFilter(selectTree));
  const { sx: autocompleteSx, ...restAutocompleteProps } =
    autocompleteProps ?? {};
  const { sx: textFieldSx, ...restTextFieldProps } =
    autocompleteTextFieldProps ?? {};

  const flattenedTreeData = useMemo(() => {
    augmentTreeData(selectTree);
    const flattenedSelectTree = flattenSelectTree({
      rootNode: selectTree,
      searchText: searchTextDebounced,
    });

    return flattenedSelectTree;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectTree, searchTextDebounced, refreshHelper]);

  const selectAllNode = useMemo(() => {
    const leafCounts = getLeafCounts(selectTree);

    const node: AugmentedSelectNodeType = {
      value: "Select all",
      leavesCount: leafCounts.totalLeavesCount,
      selectableLeavesCount: leafCounts.totalSelectableLeavesCount,
      selectedLeavesCount: leafCounts.totalSelectedLeavesCount,
      icon: SelectAllIcon,
      nestLevel: -1,
      isSelectable: true,
    };

    node.isSelected =
      leafCounts.totalSelectedLeavesCount ===
      leafCounts.totalSelectableLeavesCount;

    return node;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SelectAllIcon, selectTree, refreshHelper]);

  const toggleExpand = useCallback(
    ({
      selectNode,
      isExpanded = null,
      isRecursive = false,
    }: {
      selectNode: AugmentedSelectNodeType | AugmentedSelectNodeType[];
      isExpanded?: boolean | null;
      isRecursive?: boolean;
    }) => {
      const setExpandsInTree = (
        selectNode: AugmentedSelectNodeType,
        isExpanded: boolean,
        isRecursive = false, // isRecursive flag
      ) => {
        selectNode.isExpanded = isExpanded;
        const childNodes = selectNode.childNodes || [];

        // Closing is always recursive
        if (!isExpanded || isRecursive) {
          // Also do this for recursive
          childNodes.forEach((childNode) =>
            setExpandsInTree(childNode, isExpanded, isRecursive),
          );
        }
      };

      if (Array.isArray(selectNode)) {
        selectNode.forEach(
          (root) => setExpandsInTree(root, isExpanded ?? false, isRecursive), // Use the recursive flag
        );
      } else {
        setExpandsInTree(
          selectNode,
          isExpanded ?? !selectNode.isExpanded,
          isRecursive,
        ); // Use the recursive flag
      }
      setRefreshHelper((prev) => prev + 1);
    },
    [],
  );

  useEffect(() => {
    if (searchTextDebounced) {
      toggleExpand({
        selectNode: selectTree,
        isExpanded: true,
        isRecursive: true,
      });
      return;
    }
    toggleExpand({
      selectNode: selectTree,
      isExpanded: false,
    });
  }, [searchTextDebounced, toggleExpand, selectTree]);

  const updateCheckbox = useCallback(
    (
      selectNode: AugmentedSelectNodeType | AugmentedSelectNodeType[],
      isSelected: boolean,
    ) => {
      const isParentNode = Array.isArray(selectNode) || !selectNode.parentNode;

      const selectCheckboxesInTree = (
        selectNode: AugmentedSelectNodeType,
        isSelected: boolean,
      ) => {
        const childNodes = selectNode.childNodes || [];
        if (selectNode.isSelectable || !isSelected) {
          // Only update if the node is selectable OR it should be unselected
          selectNode.isSelected = isSelected;
        }

        childNodes.forEach((childNode) =>
          selectCheckboxesInTree(childNode, isSelected),
        );
      };

      if (parentSelectOnly && !isParentNode) {
        // Don't update child nodes if parentSelectOnly mode
        return;
      }

      if (Array.isArray(selectNode)) {
        selectNode.forEach((root) => selectCheckboxesInTree(root, isSelected));
      } else {
        selectCheckboxesInTree(selectNode, isSelected);
      }

      const updatedSelectedValues = selectionFilter(selectTree);
      setSelectedValues(updatedSelectedValues);
      onSelectionChange(updatedSelectedValues);
      setRefreshHelper((prev) => prev + 1);
    },
    [onSelectionChange, parentSelectOnly, selectTree, selectionFilter],
  );

  const onSelectAll = useCallback(
    (isSelected: boolean) => {
      updateCheckbox(selectTree, isSelected);
    },
    [selectTree, updateCheckbox],
  );

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    toggleExpand({ selectNode: selectTree, isExpanded: false });
  }, [selectTree, toggleExpand]);

  useEffect(() => {
    const updatedSelectedValues = selectionFilter(selectTree);
    // Update selected values when the tree changes
    setSelectedValues(updatedSelectedValues);
    if (parentSelectOnly) {
      // Update child nodes selection
      updatedSelectedValues.forEach((selectedNode) => {
        updateCheckbox(selectedNode, true);
      });
    }
  }, [parentSelectOnly, selectTree, selectionFilter, updateCheckbox]);

  return (
    <AutocompleteTreeProvider
      isSearchFieldEnabled={isSearchFieldEnabled}
      isSelectAllEnabled={isSelectAllEnabled}
      onSelectAllChange={onSelectAll}
      parentSelectOnly={parentSelectOnly}
      searchPlaceholder={searchPlaceholder}
      searchText={searchTextDebounced}
      selectAllNode={selectAllNode}
      setSearchText={setSearchText}
      virtualizationOverscanPx={virtualizationOverscanPx}
    >
      <ClickAwayListener onClickAway={() => closeDropdown()}>
        <Autocomplete
          open={isOpen}
          onOpen={() => !disabled && setIsOpen(true)}
          onClose={(e, reason) => {
            if (reason === "blur") {
              return;
            }
            closeDropdown();
          }}
          sx={{
            ...autocompleteStyles(true, !!label),
            ...autocompleteSx,
          }}
          options={
            flattenedTreeData.flattenedSelectTreeWithSearch.length > 0
              ? flattenedTreeData.flattenedSelectTreeWithSearch
              : [null]
          } // Don't show "No options" when search returns no results
          getOptionLabel={(selectNode) =>
            selectNode ? labels.get(selectNode) || "" : ""
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              placeholder={selectedValues.length === 0 ? placeholder : ""}
              variant="standard"
              sx={{ caretColor: "transparent", ...textFieldSx }}
              {...restTextFieldProps}
            />
          )}
          onInputChange={(event, newInputValue, reason) => {
            if (reason === "clear") {
              event.stopPropagation();
              updateCheckbox(selectTree, false);
              closeDropdown();
            }
          }}
          renderOption={(props, option) => {
            const selectableLeavesCount =
              option?.childNodes && option.childNodes.length > 0
                ? option.selectableLeavesCount
                : null;

            return option ? (
              <SelectNodeListItem
                key={option.nodeKey ?? option.value}
                selectNodeElement={
                  <SelectNode
                    selectNode={option}
                    onExpand={() => toggleExpand({ selectNode: option })}
                    onCheckboxClick={(isSelected) =>
                      updateCheckbox(option, isSelected)
                    }
                    searchText={searchTextDebounced}
                    isSelectable={option.isSelectable}
                  />
                }
                selectableLeavesCount={selectableLeavesCount}
                onClick={() => {
                  if (isLeaf(option)) {
                    updateCheckbox(option, !option.isSelected);
                  } else {
                    toggleExpand({ selectNode: option });
                  }
                }}
              />
            ) : null;
          }}
          slotProps={{
            listbox: {
              component: VirtualTreeListbox,
            },
            paper: {
              sx: {
                ...defaultPopperContentStyles,
                ...autocompletePaperSx,
              },
            },
            popper: autocompletePopperProps,
          }}
          renderTags={() => {
            return selectedValues.length > 0 ? (
              <AutocompleteTreeTags
                selectedValues={selectedValues}
                updateCheckbox={updateCheckbox}
                maxTooltipTags={maxTooltipTags}
                disabled={disabled}
              />
            ) : null;
          }}
          isOptionEqualToValue={() => true} // Autocomplete implements this very weirdly, we don't use it anyway so it at least prevents warnings in console
          multiple
          inputValue=""
          disabled={disabled}
          disableCloseOnSelect
          disableClearable={isClearDisabled || selectedValues.length === 0}
          defaultValue={[{ value: "" }]} // needed to trigger renderTags()
          value={[{ value: "" }]} // needed to trigger renderTags()
          {...restAutocompleteProps}
        />
      </ClickAwayListener>
    </AutocompleteTreeProvider>
  );
};
