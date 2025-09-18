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

const toggleTabHeight = 32;
const groupedSubTabHeight = 40;
const groupedTabHeight = 42;

export const groupTabs = {
  alignItems: "end",
  minHeight: `${groupedTabHeight}px`,
  height: `${groupedTabHeight}px`,
};

export const groupSubTabs = {
  minHeight: `${groupedSubTabHeight}px`,
  height: `${groupedSubTabHeight}px`,
  alignItems: "center",
  borderBottom: "none",
  borderRight: "none",
  "& .MuiTabs-indicator": {
    display: "none",
  },
};

export const toggleTabs = {
  width: "fit-content",
  minHeight: `${toggleTabHeight}px`,
  height: `${toggleTabHeight}px`,
  borderBottom: "none",
  borderRight: "none",
  "& .MuiTabs-indicator": {
    display: "none",
  },
};

export const toggleTabsBox = {
  borderRadius: "20px",
  width: "fit-content",
};

export const boxTabs = {
  display: "inline-block",
};
