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

import { AugmentedSelectNodeType, FlattenSelectTreeArgs } from "@/types";

export const flattenSelectTreeWithoutSearch = (
  rootNode: AugmentedSelectNodeType[],
  nestLevel = 0,
): Array<AugmentedSelectNodeType> => {
  const flattenedList: AugmentedSelectNodeType[] = [];

  const traverseTree = (
    parentNode: AugmentedSelectNodeType | null,
    node: AugmentedSelectNodeType,
    nestLevel = 0,
  ) => {
    node.nestLevel = nestLevel;
    node.parentNode = parentNode;

    flattenedList.push(node);

    if (node.childNodes && node.isExpanded) {
      node.childNodes.forEach((childNode) => {
        traverseTree(node, childNode, nestLevel + 1);
      });
    }
  };

  rootNode.forEach((root) => traverseTree(null, root, nestLevel));

  return flattenedList;
};

/**
 * Builds a string representation of the node's value using its formatter function, if available.
 *
 * @param selectNode - The node to build the value for.
 * @returns A string representation of the node's value.
 */
export const formatNodeValue = (selectNode: AugmentedSelectNodeType) =>
  selectNode.valueFormatter
    ? selectNode.valueFormatter(selectNode.value)
    : selectNode.value.toString();

/**
 * Collects nodes from a given node up to the first node already included in the flattened list
 * and pushes them in reverse order.
 *
 * @param pushNode - The starting node to begin pushing.
 * @param flattenedTree - The list to push nodes into.
 * @param flattenedSet - A set of already included nodes.
 */
export const upwardsPush = (
  pushNode: AugmentedSelectNodeType | null,
  flattenedTree: AugmentedSelectNodeType[],
  flattenedSet: Set<AugmentedSelectNodeType>,
) => {
  let iterNode: AugmentedSelectNodeType | null = pushNode;
  const nodesToPush: AugmentedSelectNodeType[] = [];

  // Collect nodes up to the first already included node
  while (iterNode && !flattenedSet.has(iterNode)) {
    nodesToPush.push(iterNode);
    iterNode = iterNode.parentNode ?? null;
  }

  // Push collected nodes into the flattenedTree in reverse order
  while (nodesToPush.length > 0) {
    const node = nodesToPush.pop();
    if (node && !flattenedSet.has(node)) {
      if (!node.parentNode || node.parentNode?.isExpanded) {
        flattenedTree.push(node);
      }
      flattenedSet.add(node);
    }
  }
};

/**
 * Flattens a tree structure into a list of nodes while filtering nodes based on the search text.
 * Ensures that parent nodes of matching nodes are also included if they are expanded.
 *
 * @param rootNode - The root node(s) of the tree to flatten.
 * @param nestLevel - The starting nesting level for the nodes (default is 0).
 * @param searchText - Text to filter nodes by.
 * @returns A flattened list of nodes that match the search text.
 */
export const flattenSelectTreeWithSearch = ({
  rootNode,
  nestLevel = 0,
  searchText = "",
}: FlattenSelectTreeArgs): Array<AugmentedSelectNodeType> => {
  const flattenedList: AugmentedSelectNodeType[] = [];
  const flattenedSet = new Set<AugmentedSelectNodeType>();

  const traverseTree = (
    parentNode: AugmentedSelectNodeType | null,
    node: AugmentedSelectNodeType,
    nestLevel = 0,
  ) => {
    node.nestLevel = nestLevel;
    node.parentNode = parentNode;
    const nodeValue = formatNodeValue(node);

    const nodeMatches = nodeValue
      .toLowerCase()
      .includes(searchText.toLowerCase());

    if (nodeMatches) {
      if (node.parentNode && flattenedSet.has(node.parentNode)) {
        if (node.parentNode?.isExpanded) {
          flattenedList.push(node);
        }
        flattenedSet.add(node);
      } else {
        upwardsPush(node, flattenedList, flattenedSet);
      }
    }

    if (node.childNodes) {
      node.childNodes.forEach((childNode) => {
        traverseTree(node, childNode, nestLevel + 1);
      });
    }
  };

  rootNode.forEach((root) => traverseTree(null, root, nestLevel));

  return flattenedList;
};

/**
 * Flattens a tree structure into a list of nodes.
 * If `searchText` is provided, filters nodes based on the search text.
 *
 * @param rootNode - The root node(s) of the tree to flatten.
 * @param nestLevel - The starting nesting level for the nodes (default is 0).
 * @param searchText - Text to filter nodes by (default is an empty string).
 * @returns A flattened list of nodes.
 */

export interface FlattenedSelectTreeData {
  flattenedSelectTreeWithSearch: Array<AugmentedSelectNodeType>;
  flattenedSelectTreeWithoutSearch: Array<AugmentedSelectNodeType>;
}

export const flattenSelectTree = ({
  rootNode,
  nestLevel = 0,
  searchText = "",
}: FlattenSelectTreeArgs): FlattenedSelectTreeData => {
  const flattenedSelectTreeWithoutSearch = flattenSelectTreeWithoutSearch(
    rootNode,
    nestLevel,
  );

  return {
    flattenedSelectTreeWithSearch: searchText
      ? flattenSelectTreeWithSearch({ rootNode, nestLevel, searchText })
      : flattenedSelectTreeWithoutSearch,
    flattenedSelectTreeWithoutSearch: flattenedSelectTreeWithoutSearch,
  };
};

export const augmentTreeData = (
  rootNode: AugmentedSelectNodeType | AugmentedSelectNodeType[],
) => {
  const traverseTree = (
    node: AugmentedSelectNodeType,
    parentNode: AugmentedSelectNodeType | null = null,
  ) => {
    let selectableLeavesCount = 0;
    let selectedLeavesCount = 0;
    let totalLeafCount = 0;

    node.parentNode = parentNode;

    // Check if the node is a leaf (no children)
    if (!node.childNodes || node.childNodes.length === 0) {
      node.leavesCount = 1; // Leaf nodes have 1 leaf (themselves)
      node.selectedLeavesCount = node.isSelected ? 1 : 0;
      node.selectableLeavesCount = node.isSelectable ? 1 : 0;
      return node.isSelected ? 1 : 0;
    }

    // Iterate through the children
    node.childNodes.forEach((childNode) => {
      selectedLeavesCount += traverseTree(childNode, node);
      selectableLeavesCount += childNode.selectableLeavesCount || 0; // Accumulate selectable leaves from children
      totalLeafCount += childNode.leavesCount || 0; // Accumulate total leaves from children
    });

    // Update the node's selectedLeavesCount, selectableLeavesCount and leafCount
    node.selectedLeavesCount = selectedLeavesCount;
    node.selectableLeavesCount = selectableLeavesCount;
    node.leavesCount = totalLeafCount;
    node.isSelected = node.selectedLeavesCount === node.selectableLeavesCount;

    return selectedLeavesCount;
  };

  if (Array.isArray(rootNode)) {
    rootNode.forEach((root) => traverseTree(root));
  } else {
    traverseTree(rootNode);
  }
};

/**
 * Determines if a given node is a leaf node.
 * A leaf node has no child nodes.
 *
 * @param selectNode - The node to check.
 * @returns `true` if the node is a leaf, `false` otherwise.
 */
export const isLeaf = (selectNode: AugmentedSelectNodeType) =>
  selectNode.childNodes ? selectNode.childNodes.length === 0 : true;

/**
 * Calculates the total number of leaves and selected leaves across the tree.
 *
 * @param selectTree - The list of nodes to calculate.
 * @returns An object containing `totalSelectedLeavesCount` and `totalLeavesCount`, with -1, and 0 respectively if invalid.
 */
export const getLeafCounts = (selectTree: AugmentedSelectNodeType[]) => {
  let totalSelectedLeavesCount = 0;
  let totalSelectableLeavesCount = 0;
  let totalLeavesCount = 0;

  for (const rootNode of selectTree) {
    if (
      rootNode.leavesCount === undefined ||
      rootNode.selectedLeavesCount === undefined ||
      rootNode.selectableLeavesCount === undefined
    ) {
      // If either value is undefined, set to invalid and stop counting
      totalSelectedLeavesCount = -1;
      totalSelectableLeavesCount = 0;
      totalLeavesCount = 0;
      break;
    } else {
      totalSelectedLeavesCount += rootNode.selectedLeavesCount;
      totalSelectableLeavesCount += rootNode.selectableLeavesCount;
      totalLeavesCount += rootNode.leavesCount;
    }
  }

  return {
    totalSelectedLeavesCount,
    totalSelectableLeavesCount,
    totalLeavesCount,
  };
};

/**
 * Finds and returns all selected leaf nodes from a given tree.
 *
 * @param rootNode - The root node(s) of the tree to search.
 * @returns A list of selected leaf nodes.
 */
export const getAllSelectedLeaves = (
  rootNode: AugmentedSelectNodeType | AugmentedSelectNodeType[],
): Array<AugmentedSelectNodeType> => {
  const flattenedList: AugmentedSelectNodeType[] = [];

  const traverseTree = (node: AugmentedSelectNodeType) => {
    if (isLeaf(node) && node.isSelected) {
      flattenedList.push(node);
    }

    if (node.childNodes) {
      node.childNodes.forEach((childNode) => {
        traverseTree(childNode);
      });
    }
  };

  if (Array.isArray(rootNode)) {
    rootNode.forEach((root) => traverseTree(root));
  }

  return flattenedList;
};

/**
 * Finds and returns all selected parent nodes from a given tree.
 *
 * @param selectTree - The list of nodes to filter.
 * @returns A list of selected parent nodes.
 */
export const getAllSelectedParents = (
  selectTree: AugmentedSelectNodeType[],
): Array<AugmentedSelectNodeType> =>
  selectTree.filter((parentNode) => parentNode.isSelected);

export const setSelectedMainSkillCategories = (
  fullflattenedTreeOptions: AugmentedSelectNodeType[],
): AugmentedSelectNodeType[] => {
  const selectedMainCategories: AugmentedSelectNodeType[] = [];

  fullflattenedTreeOptions.forEach((node) => {
    if (!node.parentNode && node.selectedLeavesCount) {
      selectedMainCategories.push(node);
    }
  });

  return selectedMainCategories;
};

export const deepCopyTree = (
  rootNode?: AugmentedSelectNodeType[],
): AugmentedSelectNodeType[] => {
  const deepCopy = (
    nodes?: AugmentedSelectNodeType[],
  ): AugmentedSelectNodeType[] | undefined => {
    if (!nodes) {
      return undefined;
    }

    return nodes.map((node) => ({
      ...node,
      childNodes: deepCopy(node.childNodes),
    }));
  };

  return deepCopy(rootNode) ?? [];
};

export const getChildrenOfTopLevelNode = (
  topLevelNode: AugmentedSelectNodeType,
): AugmentedSelectNodeType[] => {
  const flattenedChildren: AugmentedSelectNodeType[] = [];
  const gatherChildren = (node: AugmentedSelectNodeType) => {
    if (node.childNodes) {
      node.childNodes.forEach((childNode) => {
        if (
          childNode.isSelected &&
          (!childNode.childNodes || !childNode.childNodes.length)
        ) {
          flattenedChildren.push(childNode);
        } else {
          gatherChildren(childNode);
        }
      });
    }
  };

  gatherChildren(topLevelNode);

  return flattenedChildren;
};

export const mergeNodeChildrenValueToText = (
  children: AugmentedSelectNodeType[],
): string => children.map((child) => formatNodeValue(child)).join(", ");
