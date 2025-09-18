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

import { FilterData } from "../types/types";

export const filtersMockData: Array<FilterData> = [
  {
    name: "Domain With Formatter",
    options: [
      { value: "lightspin.cloud", isSelected: false },
      { value: "lightspin.io", isSelected: false },
      { value: "amazonaws.com", isSelected: false },
      { value: "example.io.cloud", isSelected: false },
    ],
    valueFormatter: (value: string | number) =>
      value.toString().replace(".", "_"),
  },
  {
    name: "Provider",
    filterKey: "provider",
    options: [
      { value: "AWS", isSelected: true },
      { value: "Azure", isSelected: true },
      { value: "GCP", isSelected: false },
    ],
  },
  {
    name: "Region",
    filterKey: "region",
    options: [
      { value: "US East 1", isSelected: false },
      { value: "US East 2", isSelected: false },
      { value: "EU West 1", isSelected: false },
      { value: "EU West 2", isSelected: false },
      { value: "AU West 1", isSelected: false },
      { value: "AU West 2", isSelected: false },
    ],
  },
  {
    name: "Service",
    filterKey: "service",
    options: [
      { value: "API Gateway", isSelected: false },
      { value: "App Service", isSelected: false },
      { value: "Shaqued Was Here", isSelected: false },
      { value: "SNS is fun", isSelected: false },
      {
        value:
          "VeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongName",
        isSelected: false,
      },
    ],
  },
];

export const filtersNoMultiSelectMockData: Array<FilterData> = [
  {
    name: "Some bool type",
    filterKey: "boolean_type",
    options: [
      { value: "foo 1", isSelected: false },
      { value: "foo 2", isSelected: true },
      { value: "foo 3", isSelected: false },
      { value: "foo 4", isSelected: false },
    ],
    multiSelect: false,
  },
];

export const filterSelectAllFilterOptions: Array<FilterData> = [
  {
    name: "Engines",
    isSelectAllEnabled: true,
    options: [
      {
        value: "Security Graph",
        isSelected: false,
      },
      {
        value: "Cloud Configuration",
        isSelected: false,
      },
      {
        value: "Network",
        isSelected: false,
      },
      {
        value: "Workload Security",
        isSelected: false,
      },
      {
        value: "CI/CD",
        isSelected: false,
      },
    ],
  },
  {
    name: "Severity",
    options: [
      {
        value: "Critical",
        isSelected: false,
      },
      {
        value: "High",
        isSelected: false,
      },
      {
        value: "Medium",
        isSelected: false,
      },
      {
        value: "Low",
        isSelected: false,
      },
      {
        value: "Information",
        isSelected: false,
      },
    ],
  },
  {
    name: "Status",
    options: [
      {
        value: "Enabled",
        isSelected: false,
      },
      {
        value: "Disabled",
        isSelected: false,
      },
    ],
  },
];

export const nestedFilters: Array<FilterData> = [
  {
    name: "Engines",
    options: [
      {
        value: "Security Graph",
        isSelected: false,
      },
      {
        value: "Cloud Configuration",
        isSelected: false,
      },
      {
        value: "Network",
        isSelected: false,
      },
      {
        value: "Workload Security",
        isSelected: false,
      },
      {
        value: "CI/CD",
        isSelected: false,
      },
    ],
  },
  {
    name: "Severity",
    options: [
      {
        value: "Critical",
        isSelected: false,
      },
      {
        value: "High",
        isSelected: false,
      },
      {
        value: "Medium",
        isSelected: false,
      },
      {
        value: "Low",
        isSelected: false,
      },
      {
        value: "Information",
        isSelected: false,
      },
    ],
  },
  {
    name: "Status",
    options: [
      {
        value: "Enabled",
        isSelected: false,
      },
      {
        value: "Disabled",
        isSelected: false,
      },
    ],
  },
  {
    name: "Custom Frameworks & Categories",
    options: [],
    filters: [
      {
        name: "Framework 1",
        options: [],
        isSelectAllEnabled: true,
        filters: [
          {
            name: "Category 11",
            isSelectAllEnabled: true,
            options: [
              {
                value: "SubCategory 1111",
                isSelected: false,
              },
              {
                value: "SubCategory 1112",
                isSelected: false,
              },
            ],
          },
          {
            name: "Category 12",
            isSelectAllEnabled: true,
            options: [
              {
                value: "SubCategory 1121",
                isSelected: false,
              },
              {
                value: "SubCategory 1122",
                isSelected: false,
              },
            ],
          },
        ],
      },
      {
        name: "Framework 2",
        options: [
          { value: "Category 22", isSelected: false },
          { value: "Category 23", isSelected: false },
        ],
        isSelectAllEnabled: true,
        filters: [
          {
            name: "Category 21",
            isSelectAllEnabled: true,
            options: [
              {
                value: "SubCategory 2211",
                isSelected: false,
              },
              {
                value: "SubCategory 2212",
                isSelected: false,
              },
            ],
          },
          {
            name: "Category 24",
            isSelectAllEnabled: true,
            options: [
              {
                value: "SubCategory 2241",
                isSelected: false,
              },
              {
                value: "SubCategory 2242",
                isSelected: false,
              },
            ],
          },
        ],
      },
    ],
  },
];
