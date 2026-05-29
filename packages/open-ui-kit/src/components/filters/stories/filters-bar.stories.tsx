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
  <Button variant="secondary" size="large">
    button-link
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
    />
  );
};

export const Default: Story = {
  name: "Filters",
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
  name: "Agent skills",
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
  name: "Agent skills use the nested dropdown menu",
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
  name: "Locator type - Extension",
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
  name: "Search disabled",
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

export const WithSideButton: Story = {
  name: "Activated",
  render: FiltersBarStory,
  args: {
    filtersData: filtersMockData,
    assetsData: { count: 2200, selectedCount: 2000, name: "assets" },
    isLoading: false,
    searchPlaceHolder: "Search by record type, organization, or author",
    initialFavoriteValue: false,
    onSearch: () => undefined,
    rightSideComponent: <SideButton />,
  },
};
