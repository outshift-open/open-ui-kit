/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  FlattenedSelectTreeData,
  augmentTreeData,
  flattenSelectTree,
  getAllSelectedLeaves,
  getAllSelectedParents,
  getLeafCounts,
  useDebouncedValue,
} from "@/common";
import { AugmentedSelectNodeType, SelectNodeType } from "@/types";
import { SvgIconProps } from "@mui/material";
import { All } from "@/custom-icons";

interface UseDropdownAutocompleteTreeProps {
  parentSelectOnly?: boolean;
  selectAllIcon?: React.ElementType<SvgIconProps> | null;
  treeData: SelectNodeType[];
}

export const useDropdownAutocompleteTree = ({
  parentSelectOnly = false,
  selectAllIcon: SelectAllIcon = All,
  treeData,
}: UseDropdownAutocompleteTreeProps) => {
  const [selectedValues, setSelectedValues] = useState<SelectNodeType[]>([]);
  const [refreshHelper, setRefreshHelper] = useState(0);
  const [searchText, setSearchText] = useState("");

  const searchTextDebounced = useDebouncedValue(searchText, 400);

  const selectionFilter = useCallback(
    (nodes: SelectNodeType<unknown>[]) =>
      parentSelectOnly
        ? getAllSelectedParents(nodes)
        : getAllSelectedLeaves(nodes),
    [parentSelectOnly],
  );

  const flattenedTreeOptions: FlattenedSelectTreeData = useMemo(() => {
    augmentTreeData(treeData);
    const flattenedSelectTree = flattenSelectTree({
      rootNode: treeData,
      searchText: searchTextDebounced,
    });

    return flattenedSelectTree;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treeData, searchTextDebounced, refreshHelper]);

  const selectAllNode = useMemo(() => {
    const leafCounts = getLeafCounts(treeData);

    const node: AugmentedSelectNodeType = {
      icon: SelectAllIcon,
      isSelectable: true,
      leavesCount: leafCounts.totalLeavesCount,
      nestLevel: -1,
      selectableLeavesCount: leafCounts.totalSelectableLeavesCount,
      selectedLeavesCount: leafCounts.totalSelectedLeavesCount,
      value: "Select all",
    };

    node.isSelected =
      leafCounts.totalSelectedLeavesCount ===
      leafCounts.totalSelectableLeavesCount;

    return node;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SelectAllIcon, treeData, refreshHelper]);

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

      const updatedSelectedValues = selectionFilter(treeData);
      setSelectedValues(updatedSelectedValues);
      setRefreshHelper((prev) => prev + 1);
    },
    [parentSelectOnly, treeData, selectionFilter],
  );

  const onSelectAllChange = useCallback(
    (isSelected: boolean) => {
      updateCheckbox(treeData, isSelected);
    },
    [treeData, updateCheckbox],
  );

  useEffect(() => {
    if (searchTextDebounced) {
      toggleExpand({
        selectNode: treeData,
        isExpanded: true,
        isRecursive: true,
      });
      return;
    }
    toggleExpand({
      selectNode: treeData,
      isExpanded: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTextDebounced]);

  useEffect(() => {
    const updatedSelectedValues = selectionFilter(treeData);
    // Update selected values when the tree changes
    setSelectedValues(updatedSelectedValues);
    if (parentSelectOnly) {
      // Update child nodes selection
      updatedSelectedValues.forEach((selectedNode) => {
        updateCheckbox(selectedNode, true);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parentSelectOnly]);

  return {
    flattenedTreeOptions,
    onSelectAllChange,
    searchText,
    searchTextDebounced,
    selectAllNode,
    selectedValues,
    setSearchText,
    setSelectedValues,
    toggleExpand,
    updateCheckbox,
  };
};
