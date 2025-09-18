import { Checkbox, Stack, Typography } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AWSIcon } from "@/custom-icons";
import { AugmentedSelectNodeType, SelectNodeType } from "@/types";
import { LabelAndChildrenTooltipContent, Tags } from "@/components";
import {
  baseSelectTree,
  formatNodeValue,
  setSelectedMainSkillCategories,
} from "@/common";
import {
  DropdownAutocompleteTree,
  useDropdownAutocompleteTree,
} from "../components/dropdown-autocomplete-tree";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const meta: Meta<typeof DropdownAutocompleteTree> = {
  title: "Components/DropdownAutocompleteTree",
  component: DropdownAutocompleteTree,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="A dropdown component that allows users to select from a tree structure with autocomplete functionality."
          guideLink=""
          importLine="import { DropdownAutocompleteTree } from '@@open-ui-kit/core/components';"
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownAutocompleteTree>;

const createNestedChildren = (
  level: number,
  maxLevels: number,
  childrenPerLevel: number,
  prefix: string,
): Array<SelectNodeType> => {
  if (level > maxLevels) {
    return [];
  }

  const children: Array<SelectNodeType> = [];

  for (let i = 0; i < childrenPerLevel; i++) {
    children.push({
      value: `${prefix} Level ${level} - Child ${i + 1}`,
      icon: AWSIcon, // Use the appropriate icon
      childNodes: createNestedChildren(
        level + 1,
        maxLevels,
        childrenPerLevel,
        `${prefix} Level ${level} - Child ${i + 1}`,
      ),
      isSelectable: true, // Ensure that the child nodes are selectable
    });
  }

  return children;
};

const generateTreeMockData = (
  nodeCount: number,
  childrenRecursiveLevel = 0,
  childrenPerLevel = 10,
): Array<SelectNodeType> => {
  const multipliedArray: Array<SelectNodeType> = [];

  for (let i = 0; i < nodeCount; i++) {
    // Deep copy each item from selectTree to avoid references
    baseSelectTree.forEach((item) => {
      multipliedArray.push({
        ...item,
        value: `${item.value} ${i + 1}`, // Optionally differentiate items
        childNodes: item?.childNodes?.map((child) => {
          if (i === 0 && childrenRecursiveLevel) {
            // Add 5 levels of children to the first child node
            return {
              ...child,
              value: `${child.value} ${i + 1}`,
              childNodes: createNestedChildren(
                1,
                childrenRecursiveLevel,
                childrenPerLevel,
                `${child.value} ${i + 1}`,
              ),
            };
          } else {
            return {
              ...child,
              value: `${child.value} ${i + 1}`, // Optionally differentiate other child nodes
            };
          }
        }),
      });
    });
  }

  return multipliedArray;
};

const calculateTotalNodes = (
  nodeCount: number,
  childrenStress = 0,
  childrenPerLevel = 10, // Default value for number of children per node
): number => {
  const baseCount = nodeCount - 1 + (nodeCount - 1) * 5;
  const firstChildCount = childrenStress
    ? 1 + 5 + 5 * ((childrenPerLevel ** (childrenStress + 1) - 1) / 9)
    : 1 + 5;

  return baseCount + firstChildCount;
};

interface DropdownAutocompleteTreeStoryProps {
  parentNodesCount: number;
  childNodesStressLevels: number;
}

const DropdownAutocompleteTreeStory = ({
  parentNodesCount,
  childNodesStressLevels,
}: DropdownAutocompleteTreeStoryProps) => {
  const [parentSelectOnly, setParentSelectOnly] = useState(false);
  const [showOnlyFirst, setShowOnlyFirst] = useState(false);
  const [isTruncated, setIsTruncated] = useState(true);
  const [isSearchFieldEnabled, setIsSearchFieldEnabled] = useState(true);
  const [isSelectAllNodeEnabled, setIsSelectAllNodeEnabled] = useState(true);
  const [treeData] = useState(
    generateTreeMockData(parentNodesCount, childNodesStressLevels),
  );

  const {
    flattenedTreeOptions,
    onSelectAllChange,
    searchText,
    searchTextDebounced,
    selectAllNode,
    selectedValues,
    setSearchText,
    toggleExpand,
    updateCheckbox,
  } = useDropdownAutocompleteTree({
    parentSelectOnly,
    selectAllIcon: null,
    treeData,
  });

  const selectedMainSkillCategories = setSelectedMainSkillCategories(
    flattenedTreeOptions.flattenedSelectTreeWithoutSearch,
  );

  return (
    <Stack direction="row" gap={5}>
      <Stack direction="column" gap={2} sx={{ minWidth: "250px" }}>
        <Typography variant="body2">
          Total nodes:{" "}
          {calculateTotalNodes(parentNodesCount, childNodesStressLevels)}
        </Typography>
        <Typography variant="body2">Search text: {searchText}</Typography>

        <Stack direction="row" gap={2}>
          <Typography variant="body2">Parent Select Only: </Typography>
          <Checkbox
            onChange={(event) => setParentSelectOnly(event.target.checked)}
            checked={parentSelectOnly}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="body2">Show only first: </Typography>
          <Checkbox
            onChange={(event) => setShowOnlyFirst(event.target.checked)}
            checked={showOnlyFirst}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="body2">Truncate: </Typography>
          <Checkbox
            onChange={(event) => setIsTruncated(event.target.checked)}
            checked={isTruncated}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="body2">Search field is enabled: </Typography>
          <Checkbox
            onChange={(event) => setIsSearchFieldEnabled(event.target.checked)}
            checked={isSearchFieldEnabled}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="body2">
            Selection of all options is enabled:{" "}
          </Typography>
          <Checkbox
            onChange={(event) =>
              setIsSelectAllNodeEnabled(event.target.checked)
            }
            checked={isSelectAllNodeEnabled}
          />
        </Stack>
      </Stack>
      <Stack gap={3} sx={{ minWidth: "1px", width: "100%" }}>
        <DropdownAutocompleteTree
          buttonContent="Toggle Dropdown"
          flattenedTreeOptions={
            flattenedTreeOptions.flattenedSelectTreeWithSearch
          }
          isIconAllowed={false}
          isSearchFieldEnabled={isSearchFieldEnabled}
          onSelectAllChange={
            isSelectAllNodeEnabled ? onSelectAllChange : undefined
          }
          parentSelectOnly={parentSelectOnly}
          searchText={searchTextDebounced}
          selectAllNode={selectAllNode}
          setSearchText={setSearchText}
          toggleExpand={toggleExpand}
          updateCheckbox={updateCheckbox}
        />
        <Typography variant="body2">Selected skills: </Typography>
        <Tags
          items={selectedValues}
          handleDelete={(e, node) => {
            updateCheckbox(node, false);
          }}
          shouldTruncate={isTruncated}
          showOnlyFirst={showOnlyFirst}
        />
        <Typography variant="body2">Selected top level categories: </Typography>
        <Tags
          customizeTooltip={(node) => (
            <LabelAndChildrenTooltipContent node={node} />
          )}
          items={selectedMainSkillCategories}
          handleDelete={(e, node) => {
            updateCheckbox(node, false);
          }}
          customizeLabel={(node: AugmentedSelectNodeType) =>
            `${formatNodeValue(node)} (${node.selectedLeavesCount})`
          }
          shouldTruncate={isTruncated}
          showOnlyFirst={showOnlyFirst}
        />
      </Stack>
    </Stack>
  );
};

export const Default: Story = {
  render: () => (
    <DropdownAutocompleteTreeStory
      parentNodesCount={100}
      childNodesStressLevels={3}
    />
  ),
};
