/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { FiltersBar } from "../components/filters-bar/filters-bar";
import type { FilterData } from "../types";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

const mockFilters: FilterData[] = [
  {
    name: "Provider",
    filterKey: "provider",
    options: [
      { value: "AWS", isSelected: false },
      { value: "Azure", isSelected: true },
    ],
  },
  {
    name: "Region",
    filterKey: "region",
    options: [
      { value: "US East 1", isSelected: false },
      { value: "EU West 1", isSelected: false },
    ],
  },
];

const mockAssetsData = { count: 100, selectedCount: 50, name: "assets" };
const noop = jest.fn();

describe("FiltersBar", () => {
  it("renders without throwing", () => {
    expect(() =>
      wrap(
        <FiltersBar
          isLoading={false}
          filtersData={mockFilters}
          assetsData={mockAssetsData}
          onSelectedChange={noop}
        />,
      ),
    ).not.toThrow();
  });

  it("renders in dark mode without throwing", () => {
    expect(() =>
      wrap(
        <FiltersBar
          isLoading={false}
          filtersData={mockFilters}
          assetsData={mockAssetsData}
          onSelectedChange={noop}
        />,
        true,
      ),
    ).not.toThrow();
  });

  it("renders search placeholder", () => {
    wrap(
      <FiltersBar
        isLoading={false}
        filtersData={mockFilters}
        assetsData={mockAssetsData}
        onSelectedChange={noop}
        searchPlaceHolder="Search by type"
        onSearch={noop}
      />,
    );
    expect(screen.getByPlaceholderText("Search by type")).toBeInTheDocument();
  });

  it("disables search input when no search handler is provided", () => {
    wrap(
      <FiltersBar
        isLoading={false}
        filtersData={mockFilters}
        assetsData={mockAssetsData}
        onSelectedChange={noop}
        searchPlaceHolder="Search by type"
      />,
    );

    expect(screen.getByPlaceholderText("Search by type")).toBeDisabled();
    expect(
      screen.queryByRole("button", { name: "Search" }),
    ).not.toBeInTheDocument();
  });

  it("calls onSearch as the search value changes", () => {
    const onSearch = jest.fn();
    wrap(
      <FiltersBar
        isLoading={false}
        filtersData={mockFilters}
        assetsData={mockAssetsData}
        onSelectedChange={noop}
        searchPlaceHolder="Search by type"
        onSearch={onSearch}
      />,
    );

    fireEvent.change(screen.getByPlaceholderText("Search by type"), {
      target: { value: "azure" },
    });

    expect(onSearch).toHaveBeenCalledWith("azure");
  });

  it("adds an accessible label to the favorite toggle", () => {
    wrap(
      <FiltersBar
        isLoading={false}
        filtersData={mockFilters}
        assetsData={mockAssetsData}
        onSelectedChange={noop}
        onFavorite={noop}
        favoriteValue={false}
      />,
    );

    expect(
      screen.getByRole("button", { name: "Add to favorites" }),
    ).toBeInTheDocument();
  });

  it("renders filter chip for selected filter", () => {
    wrap(
      <FiltersBar
        isLoading={false}
        filtersData={mockFilters}
        assetsData={mockAssetsData}
        onSelectedChange={noop}
      />,
    );
    expect(screen.getByText(/Provider: Azure/)).toBeInTheDocument();
  });

  it("renders Clear Filters button when filters are selected", () => {
    wrap(
      <FiltersBar
        isLoading={false}
        filtersData={mockFilters}
        assetsData={mockAssetsData}
        onSelectedChange={noop}
      />,
    );
    expect(screen.getByText("Clear Filters")).toBeInTheDocument();
  });

  it("does not render Clear Filters when no filters selected", () => {
    const noSelections: FilterData[] = mockFilters.map((f) => ({
      ...f,
      options: f.options.map((o) => ({ ...o, isSelected: false })),
    }));
    wrap(
      <FiltersBar
        isLoading={false}
        filtersData={noSelections}
        assetsData={mockAssetsData}
        onSelectedChange={noop}
      />,
    );
    expect(screen.queryByText("Clear Filters")).not.toBeInTheDocument();
  });

  it("renders without filters button when isFiltersButtonVisible=false", () => {
    wrap(
      <FiltersBar
        isLoading={false}
        filtersData={mockFilters}
        assetsData={mockAssetsData}
        onSelectedChange={noop}
        isFiltersButtonVisible={false}
      />,
    );
    expect(screen.queryByText("Filters")).not.toBeInTheDocument();
  });
});
