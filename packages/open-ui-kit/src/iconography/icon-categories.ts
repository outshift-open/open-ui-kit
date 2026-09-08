/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Storybook/docs-only metadata describing how the Figma "Icons" section groups
 * icons that have been migrated into `packages/open-ui-kit/src/icons`.
 *
 * This mirrors the exact structure of the Figma file (top-level "General
 * system icons" / "Feature related icons" headers, each containing named
 * category frames such as "Arrows" or "Agentic Services"). It is derived by
 * matching each icon's Figma node-id to the category frame it is nested in
 * (see docs/guides/icon-migration-tracker.md for the per-icon node-ids).
 *
 * Update this file whenever a new icon is migrated into `icons/`, so the
 * grouped Iconography Storybook page stays in sync with Figma's taxonomy.
 * Categories with no migrated icons yet are simply omitted — they'll appear
 * automatically once an icon from that category is added here.
 */

export interface IconCategory {
  /** Category name, matching the Figma category frame name exactly. */
  name: string;
  /** Exported names from `packages/open-ui-kit/src/icons`, in Figma order. */
  iconNames: string[];
}

export interface IconCategoryGroup {
  /** Top-level Figma section header, e.g. "General system icons". */
  group: string;
  categories: IconCategory[];
}

export const ICON_CATEGORY_GROUPS: IconCategoryGroup[] = [
  {
    group: "General system icons",
    categories: [
      {
        name: "Arrows",
        iconNames: [
          "ArrowDown",
          "CloseFullscreen",
          "Collapse",
          "Expand",
          "KeyboardArrowDown",
        ],
      },
      {
        name: "Profile",
        iconNames: ["DarkMode", "LightMode", "PersonOutline", "Payments"],
      },
      {
        name: "Visibility",
        iconNames: ["Visibility", "Lock", "LockOff"],
      },
      {
        name: "Edit & install",
        iconNames: ["Delete"],
      },
      {
        name: "Close",
        iconNames: ["Close"],
      },
      {
        name: "Check",
        iconNames: ["CheckCircle", "Verified"],
      },
      {
        name: "Question",
        iconNames: ["Help"],
      },
      {
        name: "Content",
        iconNames: ["Documentation", "Send", "Github"],
      },
    ],
  },
  {
    group: "Feature related icons",
    categories: [
      {
        name: "Agentic Services",
        iconNames: ["Agent"],
      },
    ],
  },
];
