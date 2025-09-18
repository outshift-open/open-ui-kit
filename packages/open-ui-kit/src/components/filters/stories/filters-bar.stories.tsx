import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@mui/material";
import {
  FiltersBar,
  FiltersBarProps,
} from "../components/filters-bar/filters-bar";
import {
  filterSelectAllFilterOptions,
  filtersMockData,
  filtersNoMultiSelectMockData,
  nestedFilters,
} from "./mock-data";

const meta: Meta<typeof FiltersBar> = {
  title: "DEV/FiltersBar",
  component: FiltersBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FiltersBar>;

const SideButton = () => {
  return (
    <Button variant={"outlined"} size={"large"}>
      Side Button
    </Button>
  );
};

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

export const FiltersBarExample: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: filtersMockData,
    assetsData: {
      count: 2200,
      selectedCount: 2000,
      name: "shaq's assets",
    },
    isLoading: false,
    searchPlaceHolder: "Search by...",
    initialFavoriteValue: false,
    onSearch: () => undefined,
  },
};

export const FiltersBarExampleSelectAllFilterOptions: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: filterSelectAllFilterOptions,
    assetsData: { count: 12, selectedCount: 10, name: "Filters" },
    isLoading: false,
    searchPlaceHolder: "Search by...",
    initialFavoriteValue: false,
    onSearch: () => undefined,
  },
};

export const FiltersBarExampleNestedFilters: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: nestedFilters,
    assetsData: { count: 20, selectedCount: 10, name: "Filters" },
    isLoading: false,
    searchPlaceHolder: "Search by...",
    initialFavoriteValue: false,
    onSearch: () => undefined,
  },
};

export const FiltersBarExampleWithoutMultiSelect: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: filtersNoMultiSelectMockData,
    assetsData: {
      count: 2200,
      selectedCount: 2000,
      name: "shaq's assets",
    },
    isLoading: false,
    searchPlaceHolder: "Search by...",
    initialFavoriteValue: false,
    onSearch: () => undefined,
  },
};

export const FiltersBarExampleWithoutOnSearch: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: filtersMockData,
    assetsData: {
      count: 2200,
      selectedCount: 2000,
      name: "shaq's assets",
    },
    isLoading: false,
    searchPlaceHolder: "Search by...",
    initialFavoriteValue: false,
    onSearch: undefined,
  },
};

export const FiltersBarExampleWithASideButton: Story = {
  render: FiltersBarStory,
  args: {
    filtersData: filtersMockData,
    assetsData: {
      count: 2200,
      selectedCount: 2000,
      name: "shaq's assets",
    },
    isLoading: false,
    searchPlaceHolder: "Search by...",
    initialFavoriteValue: false,
    onSearch: () => undefined,
    rightSideComponent: <SideButton />,
  },
};
