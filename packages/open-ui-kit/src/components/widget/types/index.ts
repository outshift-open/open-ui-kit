/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { TooltipProps } from "@/components/tooltip";
import type { ReactElement, ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";
import type { StackProps } from "@mui/material/Stack";

export interface IWidgetProps {
  /** Main content rendered inside the widget body. */
  bodyElement: ReactElement;
  /** Style overrides for the outer widget card. Consumer values are applied last. */
  sx?: SxProps<Theme>;
  /** Headline label rendered in the widget header. Omit it for a body-only widget. */
  label?: string | ReactElement;
  /** Optional content rendered to the right of the headline area. */
  headerChildren?: ReactElement;
  /** Optional content rendered before the headline label. */
  headerLeftChildren?: ReactElement;
  /** Tooltip content displayed next to the headline label. */
  labelTooltip?: ReactNode;
  /** Tooltip content attached to the headline label itself. */
  titleTooltip?: ReactNode;
  /** Shows the loading skeleton instead of the body content. */
  isLoading?: boolean;
  /** Uses the horizontal widget body layout for chart and legend compositions. */
  isHorizontal?: boolean;
  /** Optional chart-specific content rendered by chart wrappers. */
  chartCustomComponent?: ReactNode;
  /** Props forwarded to the body stack when composing chart wrappers. */
  stackStyle?: StackProps;
  /** Optional legend content rendered next to or below the body content. */
  legendCustomComponent?: ReactNode;
  /** Props forwarded to widget tooltips. */
  tooltipProps?: Partial<TooltipProps>;
  /** Shows the empty state instead of the body content. */
  isEmpty?: boolean;
  /** Called when the headline label is interactive. */
  onLabelClick?: () => void;
  /** Optional Rosey analytics identifier applied to the outer card. */
  dataRoseyUrn?: string;
}
