import { Checkbox, Stack, Typography } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AWSIcon } from "@/custom-icons";
import { SelectNodeType } from "@/types";
import { baseSelectTree } from "@/common";
import { Tags } from "..";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const meta: Meta<typeof Tags> = {
  title: "Components/Tags/Tags",
  component: Tags,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Tags component is used to display a list of items with the ability to delete them. It supports truncation and showing only the first item."
          guideLink="#"
          importLine='import { Tags } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tags>;

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

interface DropdownAutocompleteTreeStoryProps {
  parentNodesCount: number;
  childNodesStressLevels: number;
}

const TagsStory = ({
  parentNodesCount,
  childNodesStressLevels,
}: DropdownAutocompleteTreeStoryProps) => {
  const [showOnlyFirst, setShowOnlyFirst] = useState(false);
  const [isTruncated, setIsTruncated] = useState(true);
  const [treeData] = useState(
    generateTreeMockData(parentNodesCount, childNodesStressLevels),
  );

  return (
    <Stack direction="column" gap={2}>
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
      <Tags
        items={treeData}
        handleDelete={() => alert("Delete")}
        shouldTruncate={isTruncated}
        showOnlyFirst={showOnlyFirst}
      />
    </Stack>
  );
};

export const Default: Story = {
  render: () => <TagsStory parentNodesCount={100} childNodesStressLevels={3} />,
};
