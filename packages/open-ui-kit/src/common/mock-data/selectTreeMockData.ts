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

import {
  AWSIcon,
  AZUREIcon,
  GCPIcon,
  KUBEIcon,
  OCIIcon,
  Docker2,
  DockerCompose,
} from "@/custom-icons";
import { AugmentedSelectNodeType } from "@/types";

export const selectTreeExample: Array<AugmentedSelectNodeType> = [
  {
    value: "Engines",
    isSelectable: true,
    icon: AWSIcon,
    childNodes: [
      {
        value: "Security Graph",
        isSelectable: true,
        icon: AWSIcon,
      },
      {
        value: "Cloud Configuration",
        isSelectable: true,
        icon: AZUREIcon,
      },
      {
        value: "Network",
        isSelectable: true,
        icon: AWSIcon,
      },
      {
        value: "Workload Security",
        isSelectable: true,
        icon: AWSIcon,
      },
      {
        value: "CI/CD",
        isSelectable: true,
        icon: AWSIcon,
      },
    ],
  },
  {
    value: "Severity",
    isSelectable: true,
    icon: AZUREIcon,
    childNodes: [
      {
        value: "Critical",
        isSelectable: true,
        icon: AZUREIcon,
      },
      {
        value: "High",
        isSelectable: true,
        icon: AZUREIcon,
      },
      {
        value: "Medium",
        isSelectable: true,
        icon: AZUREIcon,
      },
      {
        value: "Low",
        isSelectable: true,
        icon: AZUREIcon,
      },
      {
        value: "Information",
        isSelectable: true,
        icon: AZUREIcon,
      },
    ],
  },
  {
    value: "Status",
    isSelectable: true,
    childNodes: [
      {
        value: "Enabled",
        isSelectable: true,
      },
      {
        value: "Disabled",
        isSelectable: true,
      },
    ],
  },
  {
    value: "FrameworkNotSelectable",
    isSelectable: false,
    childNodes: [
      {
        value:
          "CategoryNotSelectable 1111111111111111111111111111111111111111111111111111111111111",
        isSelectable: false,
        childNodes: [
          {
            value:
              "SubCategory 111111111111111111111111111111111111111111111111111111111111111111111",
            isSelectable: true,
          },
          {
            value: "SubCategory NotSelectable 1112",
            isSelectable: false,
          },
        ],
      },
      {
        value: "Category 12",
        isSelectable: true,
        childNodes: [
          {
            value: "SubCategory 1121",
            isSelectable: true,
          },
          {
            value: "SubCategory 1122",
            isSelectable: true,
          },
        ],
      },
    ],
  },
  {
    value: "Framework 2",
    isSelectable: true,
    icon: AWSIcon,
    childNodes: [
      {
        value: "Category 22",
        icon: AWSIcon,
        isSelectable: true,
      },
      {
        value: "Category 23",
        icon: AWSIcon,
        isSelectable: true,
      },
      {
        value: "Category 21",
        isSelectable: true,
        icon: AWSIcon,
        childNodes: [
          {
            value: "SubCategory 2211",
            isSelectable: true,
            icon: AZUREIcon,
          },
          {
            value: "SubCategory 2212",
            isSelectable: true,
            icon: AZUREIcon,
          },
        ],
      },
      {
        value: "Category 24 Not selectable",
        isSelectable: false,
        childNodes: [
          {
            value: "SubCategory 2241",
            isSelectable: true,
            icon: AZUREIcon,
          },
          {
            value: "SubCategory 2242",
            isSelectable: true,
            icon: AZUREIcon,
          },
        ],
      },
    ],
  },
];

export const baseSelectTree: Array<AugmentedSelectNodeType> = [
  {
    value: "Long category name: Engines",
    isSelectable: true,
    icon: AWSIcon,
    childNodes: [
      {
        value: "Security Graph",
        isSelectable: true,
        icon: AWSIcon,
        isSelected: false,
      },
      {
        value: "Long name: Cloud Configuration",
        isSelectable: true,
        icon: AZUREIcon,
        isSelected: false,
      },
      {
        value: "Network",
        isSelectable: true,
        icon: AWSIcon,
        isSelected: false,
      },
      {
        value: "My Workload Security Not Selectable",
        isSelectable: false,
        icon: AWSIcon,
        isSelected: false,
      },
      {
        value: "CI/CD",
        isSelectable: true,
        icon: AWSIcon,
        isSelected: false,
      },
    ],
  },
];

export const singleSelectTree: AugmentedSelectNodeType[] = [
  {
    value: "Parent 1",
    isSelectable: true,
    icon: AWSIcon,
  },
  {
    value: "Parent 2 Not Selectable",
    icon: AZUREIcon,
    isSelectable: false,
  },
  {
    value: "Parent 3",
    isSelectable: true,
    icon: KUBEIcon,
  },
  {
    value: "Parent 4",
    isSelectable: true,
    icon: GCPIcon,
  },
  {
    value: "Parent 5",
    isSelectable: true,
    icon: OCIIcon,
  },
  {
    value: "Parent 6",
    isSelectable: true,
    icon: Docker2,
  },
  {
    value: "Parent 7",
    isSelectable: true,
    icon: DockerCompose,
  },
  {
    value: "Parent 8",
    isSelectable: true,
  },
  {
    value: "Parent 9",
    isSelectable: true,
  },
  {
    value: "Parent 10",
    isSelectable: true,
  },
];
