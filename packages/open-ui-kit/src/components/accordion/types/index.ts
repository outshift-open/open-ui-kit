/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import type {
  AccordionProps as MuiAccordionProps,
  AccordionSummaryProps,
  BoxProps,
} from "@mui/material";

export interface AccordionProps extends MuiAccordionProps {
  /** Uses the filled container treatment shown in the contained accordion variants. */
  contained?: boolean;
  /** Controls typography, spacing, and divider behavior for large and medium layouts. */
  size?: "medium" | "large";
  /** Places the expand arrow on the left or right side of the summary. */
  arrowPosition?: "left" | "right";
  /** Primary summary text. */
  title: string;
  /** Secondary summary text rendered after the divider or title value. */
  subTitle?: string;
  /** Optional icon rendered before the title. */
  titleStartIcon?: ReactNode;
  /** Optional icon rendered after the title. */
  titleEndIcon?: ReactNode;
  /** Optional inline content rendered after the title, such as an instance slot. */
  titleSlot?: ReactNode;
  /** Optional icon rendered before the subtitle. */
  subTitleStartIcon?: ReactNode;
  /** Optional icon rendered after the subtitle. */
  subTitleEndIcon?: ReactNode;
  /** Optional inline content rendered after the subtitle, such as an instance slot. */
  subTitleSlot?: ReactNode;
  /** Optional right-side action content, such as a link label. */
  action?: ReactNode;
  /** Optional final summary content rendered after the action. */
  endSlot?: ReactNode;
  /** Overrides the default summary divider visibility. Medium uncontained accordions show it by default. */
  showDivider?: boolean;
  /** Overrides the default top border visibility. Medium uncontained accordions show it by default. */
  showBorder?: boolean;
  /** Props forwarded to the internal MUI AccordionSummary. */
  accordionSummaryProps?: AccordionSummaryProps;
  /** Props forwarded to the details content wrapper. */
  detailsContentBoxProps?: BoxProps;
}
