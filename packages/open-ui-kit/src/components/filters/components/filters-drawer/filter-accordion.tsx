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

import React, { useEffect, useState, SyntheticEvent, useCallback } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  List,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

import { styles } from "./styles";
import { FilterOptionData, FilterData } from "../../types/types";
import {
  getFilteredSubFilters,
  setAllOptions,
  setAllSubFilters,
} from "../../utils";
import { FilterOptionItem } from "./filter-option-item";

export interface FilterProps {
  filter: FilterData;
  isLoading: boolean;
  searchText: string;
  onFilterChange: (filter: FilterData) => void;
  activeFiltersCount?: number;
  level?: number;
  isSelectAllEnabledOnParent?: boolean;
}

export const FilterAccordion = ({
  filter,
  isLoading,
  searchText,
  onFilterChange,
  activeFiltersCount = 0,
  level = 0,
  isSelectAllEnabledOnParent = false,
}: FilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(searchText !== "");
  }, [searchText]);

  const getFilteredOptions = useCallback(
    (
      options: FilterOptionData[],
      valueFormatter: ((value: string | number) => string) | undefined,
      searchText: string,
    ) =>
      options.filter(({ value }) => {
        const formattedValue = valueFormatter
          ? valueFormatter(value)
          : value.toString();

        return formattedValue.toLowerCase().includes(searchText.toLowerCase());
      }),
    [],
  );

  const filteredOptions = getFilteredOptions(
    filter.options,
    filter.valueFormatter,
    searchText,
  );

  const filteredSubFilters = getFilteredSubFilters(
    filter.filters || [],
    searchText,
  );

  const handleAccordionExpansion = (
    event: SyntheticEvent,
    expanded: boolean,
  ) => {
    setIsExpanded(expanded);
  };

  const selectAllFilterOptions = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onFilterChange({
      ...filter,
      options: setAllOptions(filter.options, event.target.checked),
      filters: setAllSubFilters(filter.filters || [], event.target.checked),
    });
  };

  // this is needed in order to prevent accordion expansion when clicking the accordion header checkbox
  const selectAllFilterOptionsClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  const handleOnFilterChange = (updatedFilter: FilterData) => {
    const updatedFilters = filter.filters?.map((f) =>
      (f.filterKey || f.name) ===
      (updatedFilter.filterKey || updatedFilter.name)
        ? updatedFilter
        : f,
    );

    onFilterChange({
      ...filter,
      filters: updatedFilters,
    });
  };

  const handleOnSelectedChange = (updatedOption: FilterOptionData) => {
    onFilterChange({
      ...filter,
      options: filter.options.map((option) =>
        option.value === updatedOption.value
          ? updatedOption
          : filter.multiSelect === false
            ? { ...option, isSelected: false }
            : option,
      ),
    });
  };
  const getAccordionCheckedState = (filter: FilterData): boolean => {
    let allOptionsSelected = filter.options.every(
      (option) => option.isSelected,
    );

    if (filter.filters) {
      allOptionsSelected =
        allOptionsSelected && filter.filters.every(getAccordionCheckedState);
    }

    return allOptionsSelected;
  };

  const getAccordionIndeterminateState = (filter: FilterData): boolean => {
    let someOptionsSelected = filter.options.some(
      (option) => option.isSelected,
    );

    if (filter.filters) {
      someOptionsSelected =
        someOptionsSelected ||
        filter.filters.some(getAccordionIndeterminateState);
    }

    return someOptionsSelected;
  };

  return (
    <Accordion
      sx={
        level === 0
          ? styles.parentAccordion
          : styles.childAccordion(
              level,
              filter.isSelectAllEnabled,
              isSelectAllEnabledOnParent,
            )
      }
      expanded={isExpanded}
      onChange={handleAccordionExpansion}
    >
      <AccordionSummary
        sx={styles.accordionSummery(activeFiltersCount > 0)}
        id={filter.filterKey || filter.name}
      >
        {filter.isSelectAllEnabled && (
          <Checkbox
            checked={getAccordionCheckedState(filter)}
            indeterminate={
              !getAccordionCheckedState(filter) &&
              getAccordionIndeterminateState(filter)
            }
            onChange={selectAllFilterOptions}
            onClick={(event) => selectAllFilterOptionsClick(event)}
            sx={styles.accordionCheckbox}
          />
        )}
        <Typography
          sx={styles.accordionTitleTypography(!!filter.isSelectAllEnabled)}
          variant={level === 0 ? "subtitle1" : "body2"}
        >
          {filter.name}{" "}
          {activeFiltersCount !== 0 ? `(${activeFiltersCount})` : ``}
        </Typography>
      </AccordionSummary>
      {isLoading ? (
        <Stack sx={styles.loadingStack} spacing={1}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Stack>
      ) : (
        <AccordionDetails sx={styles.accordionDetails}>
          <List>
            {filteredOptions.map((option) => (
              <FilterOptionItem
                key={option.value}
                option={option}
                valueFormatter={filter.valueFormatter}
                onOptionToggled={handleOnSelectedChange}
                searchText={searchText}
                isSelectAllEnabled={filter.isSelectAllEnabled}
                level={level}
              />
            ))}
          </List>

          {filteredSubFilters.map((childFilter) => (
            <FilterAccordion
              key={childFilter.filterKey || childFilter.name}
              filter={childFilter}
              isLoading={false}
              searchText={searchText}
              onFilterChange={handleOnFilterChange}
              level={level + 1}
              isSelectAllEnabledOnParent={filter.isSelectAllEnabled}
            />
          ))}
        </AccordionDetails>
      )}
    </Accordion>
  );
};
