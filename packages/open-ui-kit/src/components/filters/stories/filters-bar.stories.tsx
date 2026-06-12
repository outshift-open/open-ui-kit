/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/components/button";
import { FiltersBar, type FiltersBarProps } from "..";
import {
  filterSelectAllFilterOptions,
  filtersMockData,
  filtersNoMultiSelectMockData,
  nestedFilters,
} from "./mock-data";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof FiltersBar> = {
  title: "Components/Filters",
  component: FiltersBar,
  argTypes: {
    filtersData: {
      control: false,
      description: "Filter groups rendered in the drawer and applied chips.",
    },
    assetsData: {
      control: false,
      description: "Result counts summarized in the drawer header.",
    },
    isLoading: {
      control: "boolean",
      description: "Shows loading placeholders inside the filter drawer.",
    },
    isFiltersButtonVisible: {
      control: "boolean",
      description: "Hides the Filters button, chips, and drawer when false.",
    },
    onSelectedChange: { action: "selected changed" },
    onSearch: { action: "search changed" },
    onFavorite: { action: "favorite changed" },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Filters"
          blurb="Filters combine search, applied chips, and a drawer for refining large result sets. They support select-all groups, nested groups, single-select groups, favorite toggles, and optional trailing actions."
          importLine={`import { FiltersBar } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof FiltersBar>;

const SideButton = () => (
  <Button variant="outlined" size="large">
    Button
  </Button>
);

const FiltersBarStory = ({
  assetsData,
  filtersData,
  isLoading,
  searchPlaceHolder,
  initialFavoriteValue,
  onSearch,
  initialSearchValue,
  rightSideComponent,
  isFiltersButtonVisible,
}: FiltersBarProps) => {
  const [filters, setFilters] = useState(filtersData);
  const [, setSearch] = useState(initialSearchValue);
  const [, setFavorite] = useState(initialFavoriteValue);

  return (
    <FiltersBar
      isLoading={isLoading}
      filtersData={filters}
      assetsData={assetsData}
      onSelectedChange={setFilters}
      onFavorite={setFavorite}
      onSearch={
        onSearch
          ? (search) => {
              setSearch(search);
            }
          : undefined
      }
      searchPlaceHolder={searchPlaceHolder}
      initialFavoriteValue={initialFavoriteValue}
      initialSearchValue={initialSearchValue}
      rightSideComponent={rightSideComponent}
      isFiltersButtonVisible={isFiltersButtonVisible}
    />
  );
};

export const Default: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: filtersMockData,
    assetsData: { count: 2200, selectedCount: 2000, name: "assets" },
    isLoading: false,
    searchPlaceHolder: "Search by record type, organization, or author",
    initialFavoriteValue: false,
    onSearch: () => undefined,
  },
};

export const WithSelectAll: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: filterSelectAllFilterOptions,
    assetsData: { count: 12, selectedCount: 10, name: "Filters" },
    isLoading: false,
    searchPlaceHolder: "Search by record type, organization, or author",
    initialFavoriteValue: false,
    onSearch: () => undefined,
  },
};

export const NestedFilters: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: nestedFilters,
    assetsData: { count: 20, selectedCount: 10, name: "Filters" },
    isLoading: false,
    searchPlaceHolder: "Search by record type, organization, or author",
    initialFavoriteValue: false,
    onSearch: () => undefined,
  },
};

export const SingleSelect: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: filtersNoMultiSelectMockData,
    assetsData: { count: 2200, selectedCount: 2000, name: "assets" },
    isLoading: false,
    searchPlaceHolder: "Search by record type, organization, or author",
    initialFavoriteValue: false,
    onSearch: () => undefined,
  },
};

export const WithoutSearch: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: filtersMockData,
    assetsData: { count: 2200, selectedCount: 2000, name: "assets" },
    isLoading: false,
    searchPlaceHolder: "Search by record type, organization, or author",
    initialFavoriteValue: false,
    onSearch: undefined,
  },
};

export const Activated: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: filtersMockData,
    assetsData: { count: 2200, selectedCount: 2000, name: "assets" },
    isLoading: false,
    searchPlaceHolder: "Search by record type, organization, or author",
    initialFavoriteValue: false,
    initialSearchValue: "AWS",
    onSearch: () => undefined,
    rightSideComponent: <SideButton />,
  },
};

export const Loading: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: filtersMockData,
    assetsData: { count: 2200, selectedCount: 2000, name: "assets" },
    isLoading: true,
    searchPlaceHolder: "Search by record type, organization, or author",
    initialFavoriteValue: false,
    onSearch: () => undefined,
  },
};

export const WithoutFiltersButton: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: filtersMockData,
    assetsData: { count: 2200, selectedCount: 2000, name: "assets" },
    isLoading: false,
    searchPlaceHolder: "Search by record type, organization, or author",
    initialFavoriteValue: false,
    isFiltersButtonVisible: false,
    onSearch: () => undefined,
  },
};
