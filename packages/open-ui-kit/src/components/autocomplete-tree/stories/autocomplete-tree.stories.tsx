import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AWSIcon, All } from "@/custom-icons";
import { SelectNodeType } from "@/types";
import { baseSelectTree, selectTreeExample, singleSelectTree } from "@/common";
import {
  AutocompleteTree,
  AutocompleteTreeProps,
} from "../components/autocomplete-tree";
import { Checkbox, Stack, Typography } from "@mui/material";

const meta: Meta<typeof AutocompleteTree> = {
  title: "DEV/AutocompleteTree",
  component: AutocompleteTree,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AutocompleteTree>;

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

const generateTreeData = (
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
        childNodes: item.childNodes?.map((child) => {
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

const AutocompleteTreeStory = ({
  selectTree,
  label,
  disabled,
  isSelectAllEnabled,
  placeholder,
  searchPlaceholder,
  searchDebounceMS,
  parentSelectOnly,
  selectAllIcon,
}: AutocompleteTreeProps) => {
  const [, setSelectedValues] = useState<SelectNodeType[]>([]);

  return (
    <Stack sx={{ width: "320px", height: " 370px" }}>
      <AutocompleteTree
        selectTree={selectTree}
        label={label}
        placeholder={placeholder}
        autocompletePaperSx={{ width: "320px" }}
        searchPlaceholder={searchPlaceholder}
        isSelectAllEnabled={isSelectAllEnabled}
        onSelectionChange={setSelectedValues}
        parentSelectOnly={parentSelectOnly}
        searchDebounceMS={searchDebounceMS}
        selectAllIcon={selectAllIcon}
        disabled={disabled}
      />
    </Stack>
  );
};

interface AutocompleteTreeGeneratedStoryProps {
  parentNodesCount: number;
  childNodesStressLevels?: number;
  debounceTime?: number;
}

const AutocompleteTreeGeneratedStory = ({
  parentNodesCount,
  childNodesStressLevels,
  debounceTime = 0,
}: AutocompleteTreeGeneratedStoryProps) => {
  const [treeData] = useState(
    generateTreeData(parentNodesCount, childNodesStressLevels),
  );
  const [, setSelectedValues] = useState<SelectNodeType[]>([]);
  const [parentSelectOnly, setParentSelectOnly] = useState(false);

  return (
    <Stack direction="column" gap={2}>
      <Typography variant="body2">
        Total nodes:{" "}
        {calculateTotalNodes(parentNodesCount, childNodesStressLevels)}
      </Typography>
      <Stack direction="row" gap={2}>
        <Typography variant="body2">Parent Select Only: </Typography>
        <Checkbox
          onChange={(event) => setParentSelectOnly(event.target.checked)}
          checked={parentSelectOnly}
        />
      </Stack>
      <Stack sx={{ width: "320px", height: " 370px" }}>
        <AutocompleteTree
          selectTree={treeData}
          label="This is a label"
          placeholder="This is a placeholder"
          searchPlaceholder="This is a searchPlaceholder"
          isSelectAllEnabled
          searchDebounceMS={debounceTime}
          onSelectionChange={setSelectedValues}
          parentSelectOnly={parentSelectOnly}
        />
      </Stack>
    </Stack>
  );
};

export const NestedSelectExample: Story = {
  render: (args) => {
    return <AutocompleteTreeStory {...args} selectTree={selectTreeExample} />;
  },
  args: {
    label: "This is a label",
    disabled: false,
    isSelectAllEnabled: true,
    placeholder: "This is a placeholder",
    searchPlaceholder: "This is a searchPlaceholder",
    searchDebounceMS: 0,
    parentSelectOnly: false,
    selectAllIcon: All,
  },
};

export const NestedSelectSingle: Story = {
  render: (args) => {
    return <AutocompleteTreeStory {...args} selectTree={singleSelectTree} />;
  },
  args: {
    label: "This is a label",
    disabled: false,
    isSelectAllEnabled: true,
    placeholder: "This is a placeholder",
    searchPlaceholder: "This is a searchPlaceholder",
    searchDebounceMS: 0,
    parentSelectOnly: false,
  },
};

export const NestedSelectNormal: Story = {
  render: () => <AutocompleteTreeGeneratedStory parentNodesCount={3} />,
};

export const NestedSelectBig: Story = {
  render: () => (
    <AutocompleteTreeGeneratedStory
      parentNodesCount={1000}
      childNodesStressLevels={1}
    />
  ),
};

export const NestedSelectVeryBig: Story = {
  render: () => (
    <AutocompleteTreeGeneratedStory
      parentNodesCount={10000}
      childNodesStressLevels={3}
    />
  ),
};

export const NestedSelectHuge: Story = {
  render: () => (
    <AutocompleteTreeGeneratedStory
      parentNodesCount={10000}
      childNodesStressLevels={5}
      debounceTime={500}
    />
  ),
};
