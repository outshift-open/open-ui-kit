/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
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
