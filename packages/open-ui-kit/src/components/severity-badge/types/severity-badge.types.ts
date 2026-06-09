/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { IndicatorBadgeProps } from "@/components/indicator-badge";
import { Severity } from "@/common";

export interface SeverityBadgeProps {
  /**
   * Severity enum value used to display one of the standard severity colors.
   * When provided, it takes precedence over `value`.
   */
  severity?: Severity;
  /**
   * Numeric score used to pick a color from the configured score system.
   * Ignored when `severity` is provided.
   */
  value?: number;
  /**
   * Ordered score thresholds and badge configuration for numeric values.
   * Omit this to use the default token-backed severity scale.
   */
  scoreSystem?: SeverityBadgeScoreSystemItem[];
}

export interface SeverityBadgeConfiguration extends IndicatorBadgeProps {
  /** Optional human-readable label for paired label components. */
  label?: string;
}

export interface SeverityBadgeScoreSystemItem {
  /** Badge color, value, and optional label used when the threshold matches. */
  configuration: SeverityBadgeConfiguration;
  /** Inclusive upper bound for the score bucket. */
  threshold: number;
}
