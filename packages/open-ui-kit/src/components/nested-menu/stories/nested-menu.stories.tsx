import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useMemo } from "react";
import { Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import type { AugmentedSelectNodeType } from "@/components/nested-menu";
import { NestedMenu, useNestedMenu } from "..";

const meta: Meta<typeof NestedMenu> = {
  title: "Components/Menu/NestedMenu",
  component: NestedMenu,
  parameters: {
    actions: { argTypesRegex: null },
    controls: { disable: true },
    docs: {
      page: () => (
        <DocsHeader
          title="Nested Menu"
          blurb="Nested Menu displays selectable tree content with optional search, checkboxes, counters, and expandable child rows."
          guideLink=""
          importLine={`import { NestedMenu } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof NestedMenu>;

const createTreeData = (): AugmentedSelectNodeType[] => [
  {
    value: "Parent",
    isSelectable: true,
    isExpanded: false,
    childNodes: [],
  },
  {
    value: "Parent",
    isSelectable: true,
    isExpanded: true,
    childNodes: [
      { value: "Item child", isSelectable: true },
      { value: "Item child", isSelectable: true },
      { value: "Item child", isSelectable: true },
      { value: "Item child", isSelectable: true },
      {
        value: "Item child",
        isSelectable: true,
        isExpanded: true,
        childNodes: [
          {
            value: "Item grandchild",
            isSelectable: true,
            isExpanded: true,
            childNodes: [
              {
                value: "Item great grandchild",
                isSelectable: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

const NestedMenuExample = ({
  isSearchFieldEnabled = false,
}: {
  isSearchFieldEnabled?: boolean;
}) => {
  const demoTreeData = useMemo(() => createTreeData(), []);
  const {
    flattenedTreeOptions,
    onSelectAllChange,
    searchText,
    searchTextDebounced,
    selectAllNode,
    setSearchText,
    toggleExpand,
    updateCheckbox,
  } = useNestedMenu({
    selectAllIcon: null,
    treeData: demoTreeData,
  });

  useEffect(() => {
    toggleExpand({
      isExpanded: true,
      isRecursive: true,
      selectNode: demoTreeData,
    });
  }, [demoTreeData, toggleExpand]);

  return (
    <Stack gap="20px" alignItems="flex-start">
      <NestedMenu
        buttonContent="Select"
        flattenedTreeOptions={
          searchTextDebounced
            ? flattenedTreeOptions.flattenedSelectTreeWithSearch
            : flattenedTreeOptions.flattenedSelectTreeWithoutSearch
        }
        isIconAllowed={false}
        isSearchFieldEnabled={isSearchFieldEnabled}
        onSelectAllChange={onSelectAllChange}
        searchText={searchTextDebounced}
        selectAllNode={selectAllNode}
        setSearchText={setSearchText}
        toggleExpand={toggleExpand}
        updateCheckbox={updateCheckbox}
      />
      {isSearchFieldEnabled ? (
        <Typography variant="body2">Search text: {searchText}</Typography>
      ) : null}
    </Stack>
  );
};

export const Default: Story = {
  name: "Nested Menu",
  render: () => <NestedMenuExample />,
};

export const WithSearch: Story = {
  name: "Optional Search",
  render: () => <NestedMenuExample isSearchFieldEnabled />,
};
